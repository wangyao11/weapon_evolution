var _ = require('lodash');

function OrdinaryPlayer(name, hp, attackForce) {
  this.name = name;
  this.hp = hp || 100;
  this.attackForce = attackForce;
  this.state = '';
  this.times = 0;
  this.vertigoTimes = 0;
  this.frostTimes = 0;
}

OrdinaryPlayer.prototype.getAttackInformation = function (player) {
  var defensive = 0;
  if (player.armor !== '') {
    defensive = player.armor.defensive;
  }
  if (defensive > this.attackForce) {
    defensive = this.attackForce;
  }
  player.hp -= (this.attackForce - defensive);

  return '普通人' + this.name + '攻击了战士' +
    player.name+ ',' + player.name + '受到了' +
    (this.attackForce - player.armor.defensive) +'点伤害,' +
    player.name + '剩余生命：' + player.hp + '\n\n';
};

OrdinaryPlayer.prototype.getDelayEffectInformation = function (player) {

  var result = '';
  var delayEffects = player.getWeapon().delayEffects;
  var delayEffect = _.find(delayEffects, {name:this.state});

  if (delayEffect && this.times > 0 && (delayEffect.name === '火' || delayEffect.name === '毒')) {
    this.hp -= delayEffect.lethal;
    result = this.name + '受到' + delayEffect.lethal + '点' +
             delayEffect.name + '伤害,' + this.name + '剩余生命：' +
             this.hp + '\n\n';
  } else if (delayEffect && this.getTrueOrFalse(this.times, delayEffect.times) && delayEffect.name === '冰冻') {
    result = this.name + '冻得直哆嗦，没有击中' + player.name + '\n\n';
    this.frostTimes --;

  } else if (delayEffect && this.vertigoTimes > 0 && delayEffect.name === '眩晕') {
    this.vertigoTimes --;
    result = this.name + delayEffect.name + '了，无法攻击,' +
      delayEffect.name + '还剩：' + this.vertigoTimes + '轮\n\n';
  }

  this.times --;

  return result;
};

OrdinaryPlayer.prototype.getTrueOrFalse = function (dividend, divisor) {
  var result = false;
  var value = dividend/divisor;
  if (value * divisor === dividend) {
    result = true;
  }
  return result;
};

module.exports = OrdinaryPlayer;

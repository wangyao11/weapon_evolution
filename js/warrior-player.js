var _ = require('lodash');
var Effect = require('./effect');
var OrdinaryPlayer = require('./ordinary-player');

function WarriorPlayer(name, hp, attackForce, armor, weapon) {
  OrdinaryPlayer.call(this, name, hp, attackForce);

  this.armor = armor || '';
  this.weapon = weapon || '';
}

WarriorPlayer.prototype = Object.create(OrdinaryPlayer.prototype);
WarriorPlayer.prototype.constructor = WarriorPlayer;


WarriorPlayer.prototype.getAttackInformation = function (player) {
  var result = '';
  var weaponAttackForce = 0;

  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }

  var realTimeEffect = this.weapon.getRealTimeEffect();
  var delayEffect = this.weapon.getDelayEffect();

  var effect = (realTimeEffect ? realTimeEffect : new Effect());

  if (delayEffect) {
    player.state = delayEffect.name;
    effect = delayEffect;
    if (delayEffect.name === '火' || delayEffect.name === '毒' ) {
      player.times = delayEffect.times;
    } else if (delayEffect.name === '冰冻') {
      player.times = delayEffect.times;
      player.frostTimes ++;
    } else if (delayEffect.name === '眩晕') {
      player.vertigoTimes += delayEffect.times;
    }
  }
  player.hp -= effect.calculationAp(this.attackForce, weaponAttackForce);

  result = '战士' + this.name + '用' + this.weapon.name + '攻击了普通人' +
    player.name + ',' + effect.getRealTimeString(this.name) + player.name + '受到了' +
    effect.calculationAp(this.attackForce, weaponAttackForce) +
    '点伤害,' + effect.getDelayString(player.name) + player.name + '剩余生命：' + player.hp + '\n\n';

  return result;
};

WarriorPlayer.prototype.getWeapon = function () {
  return this.weapon;
};

module.exports = WarriorPlayer;

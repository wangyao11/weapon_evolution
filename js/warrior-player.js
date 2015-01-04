var _ = require('lodash');
var Effect = require('./effect');


function WarriorPlayer(name, hp, attackForce, armor, weapon) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
  this.armor = armor || '';
  this.weapon = weapon || '';
}

WarriorPlayer.prototype.getAttackInformation = function (player) {
  var weaponAttackForce = 0;
  var result = '';
  var venom = _.find(this.weapon.delayEffects, { name:'venom' });

  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }

  if (venom && Math.random() < venom.probability) {

    player.hp -= (this.attackForce + weaponAttackForce);

    result = '战士' + this.name + '用'+ this.weapon.name +'攻击了普通人' +
      player.name+ ',' + player.name + '受到了' +
      (this.weapon.attackForce + this.attackForce) +
      '点伤害,'+ player.name + '中毒了,' +
      player.name +'剩余生命：' + player.hp + '\n' +
      player.name + '受到'+ venom.lethal +'点毒性伤害,' +
      player.name + '剩余生命：' + (player.hp - venom.lethal) + '\n\n';
    player.hp -= venom.lethal;

  }
  else {
    var realTimeEffect = this.weapon.getRealTimeEffect();
    var delayEffect = this.weapon.getDelayEffect();
    if (realTimeEffect) {
      Effect = realTimeEffect;
    }
    if (delayEffect) {
      Effect = delayEffect;
    }


    player.hp -= Effect.calculationAp(this.attackForce, weaponAttackForce);

    result = '战士' + this.name + '用' + this.weapon.name + '攻击了普通人' +
      player.name + ',' + Effect.getRealTimeString(this.name) + player.name + '受到了' +
      Effect.calculationAp(this.attackForce, weaponAttackForce) +
      '点伤害,' + Effect.getDelayString(player.name) + player.name + '剩余生命：' + player.hp + '\n\n';

  }

  return result;
};

module.exports = WarriorPlayer;

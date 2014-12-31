var _ = require('lodash');

function WarriorPlayer(name, hp, attackForce, armor, weapon) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
  this.armor = armor || '';
  this.weapon = weapon || '';
}

WarriorPlayer.prototype.attack = function (player) {
  var crit = this.weapon.realTimeEffect;
  var weaponAttackForce = 0;
  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }
  if (crit &&  Math.random() < crit.probability) {
    player.hp -= (this.attackForce + weaponAttackForce) * 3;
  } else {
    player.hp -= (this.attackForce + weaponAttackForce);
  }
};

WarriorPlayer.prototype.getAttackInformation = function (player) {
  var weaponAttackForce = 0;
  var result = '';
  var crit = this.weapon.realTimeEffect;
  var fire = _.find(this.weapon.delayEffects, { name:'fire' });
  var venom = _.find(this.weapon.delayEffects, { name:'venom' });

  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }

  if (crit && crit.name === 'crit' && Math.random() < crit.probability) {

    player.hp -= (this.attackForce + weaponAttackForce) * crit.cap;

    result = this.getCriticalStrikeInformation(player);

  } else if (venom && Math.random() < venom.probability) {

    player.hp -= (this.attackForce + weaponAttackForce);

    result = '战士' + this.name + '用'+ this.weapon.name +'攻击了普通人' +
      player.name+ ',' + player.name + '受到了' +
      (this.weapon.attackForce + this.attackForce) +
      '点伤害,'+ player.name + '中毒了,' +
      player.name +'剩余生命：' + player.hp + '\n' +
      player.name + '受到'+ venom.lethal +'点毒性伤害,' +
      player.name + '剩余生命：' + (player.hp - venom.lethal) + '\n\n';
    player.hp -= venom.lethal;

  } else if (fire && Math.random() < fire.probability) {
    player.hp -= (this.attackForce + weaponAttackForce);

    result = '战士' + this.name + '用'+ this.weapon.name +'攻击了普通人' +
      player.name+ ',' + player.name + '受到了' +
      (this.weapon.attackForce + this.attackForce) +
      '点伤害,'+ player.name + '着火了,' +
      player.name +'剩余生命：' + player.hp + '\n' +
      player.name + '受到'+ fire.lethal +'点火焰伤害,' +
      player.name + '剩余生命：' + (player.hp - fire.lethal) + '\n\n';
    player.hp -= fire.lethal;

  }else{

    player.hp -= (this.attackForce + weaponAttackForce);

    result = '战士' + this.name + '用'+ this.weapon.name +'攻击了普通人' +
      player.name+ ',' + player.name + '受到了' +
      (this.weapon.attackForce + this.attackForce) +
      '点伤害,' + player.name + '剩余生命：' + player.hp + '\n\n';

  }

  return result;
};

WarriorPlayer.prototype.getCriticalStrikeInformation = function (player) {
  var weaponAttackForce = 0;
  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }

  var crit = this.weapon.realTimeEffect;

  var result = '战士' + this.name + '用'+ this.weapon.name +'攻击了普通人' +
    player.name+ ',' + this.name + '发动了致命一击,' + player.name + '受到了' +
    (weaponAttackForce + this.attackForce) * crit.cap + '点伤害,' +
    player.name + '剩余生命：' + player.hp + '\n\n';

  return result;
};
module.exports = WarriorPlayer;

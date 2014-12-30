function WarriorPlayer(name, hp, attackForce, armor, weapon) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
  this.armor = armor || '';
  this.weapon = weapon || '';
}

WarriorPlayer.prototype.attack = function (player) {
  var weaponAttackForce = 0;
  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }
  return player.hp - (this.attackForce + weaponAttackForce);
};

WarriorPlayer.prototype.getAttackInformation = function (player) {
  var weaponAttackForce = 0;
  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }

  var result = '战士' + this.name + '用'+ this.weapon.name +'攻击了普通人' +
    player.name+ ',' + player.name + '受到了' +
    (this.weapon.attackForce + this.attackForce) +
    '点伤害,' + player.name + '剩余生命：' + (player.hp - this.attackForce - weaponAttackForce)  + '\n';

  return result;
};

WarriorPlayer.prototype.getCriticalStrikeInformation = function (player) {
  var weaponAttackForce = 0;
  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }

  var result = '战士' + this.name + '用'+ this.weapon.name +'攻击了普通人' +
    player.name+ ',' + this.name + '发动了致命一击,' + player.name + '受到了' +
    (weaponAttackForce + this.attackForce) * 3 + '点伤害,' +
    player.name + '剩余生命：' + (player.hp - (this.attackForce + weaponAttackForce) * 3) + '\n';

    return result;
};
module.exports = WarriorPlayer;

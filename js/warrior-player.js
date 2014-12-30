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


module.exports = WarriorPlayer;

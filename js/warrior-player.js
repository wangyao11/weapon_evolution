function WarriorPlayer(name, hp, attackForce, armor, weapon) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
  this.armor = armor;
  this.weapon = weapon;
}

WarriorPlayer.prototype.attack = function (player) {
  return player.hp - (this.attackForce + this.weapon.attackForce);
};


module.exports = WarriorPlayer;

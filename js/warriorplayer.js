function WarriorPlayer(name, hp, attackForce, armor, weapon) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
  this.armor = armor || 0;
  this.weapon = weapon;
}

PlayerTwo.prototype.attack = function (player) {
  return player.hp - (this.attackForce + this.weapon.attackForce - player.armor);
};


module.exports = WarriorPlayer;

function OrdinaryPlayer(name, hp, attackForce) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
}

OrdinaryPlayer.prototype.attack = function (player) {
  var arrmor = 0;
  if (player.armor.defensive) {
    defensive = player.armor.defensive;
  }
  if (defensive > this.attackForce) {
    defensive = this.attackForce;
  }
  return player.hp - (this.attackForce - defensive);
};

module.exports = OrdinaryPlayer;

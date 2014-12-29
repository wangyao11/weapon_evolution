function OrdinaryPlayer(name, hp, attackForce) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
}

OrdinaryPlayer.prototype.attack = function (player) {
  var arrmor = 0;
  if (player.armor) {
    arrmor = player.armor;
  }
  return player.hp - (this.attackForce - arrmor);
};

module.exports = OrdinaryPlayer;

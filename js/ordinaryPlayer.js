function OrdinaryPlayer(name, hp, attackForce) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
}

OrdinaryPlayer.prototype.attack = function (hp) {
  return hp - this.attackForce;
};

module.exports = OrdinaryPlayer;

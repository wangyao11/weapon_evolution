function PlayerTwo(hp, attackForce) {
  this.hp = hp;
  this.attackForce = attackForce;
}

PlayerTwo.prototype.attack = function (hp) {
  return hp - this.attackForce;
};

module.exports = PlayerTwo;

function PlayerOne(hp, attackForce) {
  this.hp = hp;
  this.attackForce = attackForce;
}

PlayerOne.prototype.attack = function (hp) {
    return hp - this.attackForce;
};

module.exports = PlayerOne;

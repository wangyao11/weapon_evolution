function Frost(name, times, round, probability) {
  this.name = name;
  this.times = times;
  this.round = round;
  this.probability = probability;
}

Frost.prototype.getEffectString = function (name) {
  return name + '冰冻了,';
};

Frost.prototype.calculationAp = function (playerAttackForce, weaponAttackForce) {
  return (playerAttackForce + weaponAttackForce);
};

Frost.prototype.getCritString = function (name) {
  return '';
};
module.exports = Frost;

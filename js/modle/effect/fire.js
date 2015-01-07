function Fire(name, times, lethal, probability) {
  this.name = name;
  this.times = times;
  this.lethal = lethal;
  this.probability = probability;
}



Fire.prototype.getEffectString = function (name) {
  return name + '着火了,';
};

Fire.prototype.calculationAp = function (playerAttackForce, weaponAttackForce) {
  return (playerAttackForce + weaponAttackForce);
};

Fire.prototype.getCritString = function () {
  return '';
};
module.exports = Fire;

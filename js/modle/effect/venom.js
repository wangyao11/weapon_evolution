function Venom(name, times, lethal, probability) {
  this.name = name;
  this.times = times;
  this.lethal = lethal;
  this.probability = probability;
}

Venom.prototype.getEffectString = function (name) {
  return name + '中毒了,';
};

Venom.prototype.calculationAp = function (playerAttackForce, weaponAttackForce) {
  return (playerAttackForce + weaponAttackForce);
};

Venom.prototype.getCritString = function (name) {
  return '';
};

module.exports = Venom;

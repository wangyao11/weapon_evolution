function Vertigo(name, times, probability) {
  this.name = name;
  this.times = times;
  this.probability = probability;
}

Vertigo.prototype.getEffectString = function (name) {
  return name + '眩晕了, ';
};

Vertigo.prototype.calculationAp = function (playerAttackForce, weaponAttackForce) {
  return (playerAttackForce + weaponAttackForce);
};

Vertigo.prototype.getCritString = function (name) {
  return '';
};
module.exports = Vertigo;

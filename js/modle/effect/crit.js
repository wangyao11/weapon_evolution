var Effect = require('../../effect');

function Crit(name, multiple, probability) {
  this.name = name;
  this.multiple = multiple;
  this.probability = probability;
}

Crit.prototype = Object.create(Effect.prototype);
Crit.prototype.constructor = Crit;

Crit.prototype.getCritString = function (name) {
  return name + '发动了致命一击,';
};

Crit.prototype.calculationAp = function (playerAttackForce, weaponAttackForce) {
  return (playerAttackForce + weaponAttackForce) * 3;
};

module.exports = Crit;

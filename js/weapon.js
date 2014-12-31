var _ = require('lodash');
function Weapon(name, attackForce, realTimeEffect, delayEffects) {
  this.name = name;
  this.attackForce = attackForce;
  this.realTimeEffect = realTimeEffect || '';
  this.delayEffects = delayEffects || '';

}

Weapon.prototype.getAp = function () {
  return this.attackForce;
};

Weapon.prototype.getRealTimeEffect = function (name) {
  var result;

  var crit = this.realTimeEffect;
  if (crit && crit.name === 'crit' && Math.random() < crit.probability) {
    result = crit;
  }
  return result;
};

module.exports = Weapon;

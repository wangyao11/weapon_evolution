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

Weapon.prototype.getDelayEffect = function (first_argument) {
  var result;
  _this = this;
  _.forEach(this.delayEffects, function(delayEffect) {
    var delayEffect = _.find(_this.delayEffects,{name:delayEffect.name});
    if (delayEffect && Math.random() < delayEffect.probability) {
      result = delayEffect;
    }
  });

  return result;
};
module.exports = Weapon;

var _ = require('lodash');
function Weapon(name, attackForce, effects) {
  this.name = name;
  this.attackForce = attackForce;
  this.effects = effects || '';

}

Weapon.prototype.getAp = function () {
  return this.attackForce;
};

Weapon.prototype.getEffect = function () {
  var result;
  _this = this;

  _.forEach(this.effects, function(effect) {
    var Effect = _.find(_this.effects,{name:effect.name});
    if (effect && Math.random() < effect.probability) {
      result = effect;
    }
  });
  return result;
};

Weapon.prototype.getCrit = function() {
  var result;
  var crit = _.find(this.effects, {name:'crit'});
  if (crit && Math.random() < crit.probability) {
    result = crit;
  }
  return result;
};

module.exports = Weapon;

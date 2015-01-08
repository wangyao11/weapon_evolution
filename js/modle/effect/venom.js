var Effect = require('../../effect');

function Venom(name, times, lethal, probability) {
  this.name = name;
  this.times = times;
  this.lethal = lethal;
  this.probability = probability;
}

Venom.prototype = Object.create(Effect.prototype);
Venom.prototype.constructor = Venom;

Venom.prototype.getEffectString = function (name) {
  return name + '中毒了,';
};



module.exports = Venom;

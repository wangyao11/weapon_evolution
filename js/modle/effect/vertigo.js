var Effect = require('../../effect');

function Vertigo(name, times, probability) {
  this.name = name;
  this.times = times;
  this.probability = probability;
}

Vertigo.prototype = Object.create(Effect.prototype);
Vertigo.prototype.constructor = Vertigo;

Vertigo.prototype.getEffectString = function (name) {
  return name + '眩晕了, ';
};

module.exports = Vertigo;

var Effect = require('../../effect');

function Fire(name, times, lethal, probability) {
  this.name = name;
  this.times = times;
  this.lethal = lethal;
  this.probability = probability;
}

Fire.prototype = Object.create(Effect.prototype);
Fire.prototype.constructor = Fire;


Fire.prototype.getEffectString = function (name) {
  return name + '着火了,';
};

module.exports = Fire;

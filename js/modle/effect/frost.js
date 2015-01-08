var Effect = require('../../effect');

function Frost(name, times, round, probability) {
  this.name = name;
  this.times = times;
  this.round = round;
  this.probability = probability;
}

Frost.prototype = Object.create(Effect.prototype);
Frost.prototype.constructor = Frost;


Frost.prototype.getEffectString = function (name) {
  return name + '冰冻了,';
};

module.exports = Frost;

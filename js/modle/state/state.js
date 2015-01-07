var VertigoState = require('./vertigo-state');
var VenomState = require('./venom-state');
var FireState = require('./fire-state');

function State() {
  // this.name = name;
  // this.times = times;
  // this.vertigoTimes = 0;
  // this.frostTimes = 0;
}

State.prototype.getState = function (effect) {
  var result;
  if (effect.name === '眩晕') {
    result = this.getVertigoState(effect);
  } else if (effect.name === '火') {
      result = this.getFireState(effect);
  } else if (effect.name === '毒') {
      result = this.getVenomState(effect);
  }
  return result;
};

State.prototype.getVertigoState = function (effect) {
  return new VertigoState(effect.name, effect.times);
};

State.prototype.getFireState = function (effect) {
    return new FireState(effect.name, effect.times, effect.lethal);
};

State.prototype.getVenomState = function (effect) {
    return new VenomState(effect.name, effect.times, effect.lethal);
};

module.exports = State;

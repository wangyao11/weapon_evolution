var VertigoState = require('./vertigo-state');
var VenomState = require('./venom-state');
var FireState = require('./fire-state');

function State() {

}

State.prototype.getState = function (effect, state) {
  var result;
  if (effect.name === '眩晕') {
    result = this.getVertigoState(effect, state);
  } else if (effect.name === '火') {
      result = this.getFireState(effect, state);
  } else if (effect.name === '毒') {
      result = this.getVenomState(effect, state);
  }
  return result;
};

State.prototype.getVertigoState = function (effect, state) {
    var result;

    if (state !== '' && state.name === '眩晕') {
        state.times += effect.times;
        result = state;
    } else {
        result = new VertigoState(effect.name, effect.times);
    }
  return result;
};

State.prototype.getFireState = function (effect, state) {
    var result;
    if (state !== '' && state.name === '火') {
        state.tier ++;
        state.times = effect.times;
        result = state;
    } else {
        result = new FireState(effect.name, effect.times, effect.lethal);
    }
    return result;
};

State.prototype.getVenomState = function (effect, state) {
    var result;
    if (state !== '' && state.name === '毒') {
        state.tier ++;
        state.times = effect.times;
        result = state;
    } else {
        result = new VenomState(effect.name, effect.times, effect.lethal);
    }
    return result;
};

module.exports = State;

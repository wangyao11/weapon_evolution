function DelayEffect(name, lethal, times, probability, descriptions) {
  this.name = name;
  this.times =times;
  this.lethal = lethal;
  this.probability = probability;
  this.descriptions = descriptions;
}

DelayEffect.prototype.getDelayString = function (name) {

  return name + this.descriptions + ',';

};

DelayEffect.prototype.getRealTimeString = function() {

  return '';

};

DelayEffect.prototype.calculationAp = function(playerAttackForce, weaponAttackForce) {

  return (playerAttackForce + weaponAttackForce);

};

module.exports = DelayEffect;

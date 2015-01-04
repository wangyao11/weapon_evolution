function RealTimeEffect(name, cap, probability) {
  this.name = name;
  this.cap = cap;
  this.probability = probability;
}

RealTimeEffect.prototype.getRealTimeString = function (name) {

  return name + '发动了致命一击,';

};

RealTimeEffect.prototype.calculationAp = function (playerAttackForce, weaponAttackForce) {

  return (playerAttackForce + weaponAttackForce) * this.cap;

};

RealTimeEffect.prototype.getDelayString = function() {

  return '';

};

module.exports = RealTimeEffect;

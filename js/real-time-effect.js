function RealTimeEffect(name, cap, probability) {
  this.name = name;
  this.cap = cap;
  this.probability = probability;
}

RealTimeEffect.prototype.getString = function (name) {
  return name + '发动了致命一击,';
};

RealTimeEffect.prototype.calculationAp = function (playerAttackForce, weaponAttackForce) {

  return (playerAttackForce + weaponAttackForce) * this.cap;

};

module.exports = RealTimeEffect;

function Crit(name, multiple, probability) {
  this.name = name;
  this.multiple = multiple;
  this.probability = probability;
}

Crit.prototype.getCritString = function (name) {
  return name + '发动致命一击,';
};

Crit.prototype.calculationAp = function (playerAttackForce, weaponAttackForce) {
  return (playerAttackForce + weaponAttackForce) * this.multiple;
};

Crit.prototype.getEffectString = function(){
  return '';
}
module.exports = Crit;

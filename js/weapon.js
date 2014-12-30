function Weapon(name, attackForce, realTimeEffect, delayEffects) {
  this.name = name;
  this.attackForce = attackForce;
  this.realTimeEffect = realTimeEffect || '';
  this.delayEffects = delayEffects || '';
}

module.exports = Weapon;

function Weapon(name, attackForce, realTimeEffect) {
  this.name = name;
  this.attackForce = attackForce;
  this.realTimeEffect = realTimeEffect || '';
}

module.exports = Weapon;

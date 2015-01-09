var _ = require('lodash');
var Effect = require('./effect');
var OrdinaryPlayer = require('./ordinary-player');
var State = require('./modle/state/state');
var NoAmrmor = require('./no-armor');
var NoWeapon = require('./no-weapon');

function WarriorPlayer(name, hp, attackForce, armor, weapon) {
  OrdinaryPlayer.call(this, name, hp, attackForce);

  this.armor = armor || new NoAmrmor();
  this.weapon = weapon || new NoWeapon();
}

WarriorPlayer.prototype = Object.create(OrdinaryPlayer.prototype);
WarriorPlayer.prototype.constructor = WarriorPlayer;


WarriorPlayer.prototype.getAttackInformation = function (player) {
  var result = '';
  var weaponAttackForce =  this.weapon.attackForce;

  var effect = this.weapon.getEffect();
  if (effect) {
    this.additionalState(effect, player);
  }

  var effect = (effect ? effect : new Effect());

  player.hp -= effect.calculationAp(this.attackForce, weaponAttackForce);

  result = this.role() + this.name +
           '用' + this.weapon.name +
           '攻击了'+ player.role() +player.name + ',' +
            effect.getCritString(this.name) +
            player.name + '受到了' + effect.calculationAp(this.attackForce, weaponAttackForce) +
           '点伤害,' + effect.getEffectString(player.name) + player.name +
           '剩余生命：' + player.hp + '\n\n';

  return result;
};

WarriorPlayer.prototype.role = function() {
    return  '战士';
}

WarriorPlayer.prototype.getAp = function () {
    return this.ap + this.weapon.attackForce;
}

WarriorPlayer.prototype.beAttacked = function(damage) {
    this.hp -= damage;
    return damage;
};

WarriorPlayer.prototype.additionalState = function (effect, player) {
  var state = new State();
  player.state = state.getState(effect, player.state);
};

module.exports = WarriorPlayer;

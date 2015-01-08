var _ = require('lodash');
var Effect = require('./effect');
var OrdinaryPlayer = require('./ordinary-player');
var State = require('./modle/state/state');
var NoAmrmor = require('./no-armor');

function WarriorPlayer(name, hp, attackForce, armor, weapon) {
  OrdinaryPlayer.call(this, name, hp, attackForce);

  this.armor = armor || new NoAmrmor();
  this.weapon = weapon || '';
}

WarriorPlayer.prototype = Object.create(OrdinaryPlayer.prototype);
WarriorPlayer.prototype.constructor = WarriorPlayer;


WarriorPlayer.prototype.getAttackInformation = function (player) {
  var result = '';
  var weaponAttackForce = 0;
  if (this.weapon !== '') {
    weaponAttackForce = this.weapon.attackForce;
  }

  var effect = this.weapon.getEffect();
  if (effect) {
    this.additionalState(effect, player);
  }

  var effect = (effect ? effect : new Effect());
  var crit = this.weapon.getCrit();

  if(crit){
    effect.calculationAp = crit.calculationAp;
    effect.getCritString = crit.getCritString;
  }
  player.hp -= effect.calculationAp(this.attackForce, weaponAttackForce);

  result = '战士' + this.name +
           '用' + this.weapon.name +
           '攻击了普通人' +player.name + ',' +
            effect.getCritString(this.name) +
            player.name + '受到了' + effect.calculationAp(this.attackForce, weaponAttackForce) +
           '点伤害,' + effect.getEffectString(player.name) + player.name +
           '剩余生命：' + player.hp + '\n\n';

  return result;
};

WarriorPlayer.prototype.additionalState = function (effect, player) {
  var state = new State();
  player.state = state.getState(effect, player.state);
};

module.exports = WarriorPlayer;

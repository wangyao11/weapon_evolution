var _ = require('lodash');

function OrdinaryPlayer(name, hp, attackForce) {
  this.name = name;
  this.hp = hp || 100;
  this.attackForce = attackForce;
  this.state = '';
}

OrdinaryPlayer.prototype.getAttackInformation = function (player) {

    if (this.state !== '') {
      var stateYAndN = this.state.judge();
    }

    if (this.state !== '' && stateYAndN === 'yes') {

      result = this.state.getStateString(this);
      this.state.judgeState(this);

    } else if (this.state !== '' && stateYAndN === 'no') {

      result = this.state.getStateString(this);

      var damage = this.doAttack(player);
      result += this.getString(player, damage);
      this.state.judgeState(this);

    } else {
      var damage = this.doAttack(player);
      var result =this.getString(player,damage);
    }
  return result;
};

OrdinaryPlayer.prototype.attack = function (player) {
  var defensive = player.armor.defensive;
  var result = '';

  if (defensive > this.attackForce) {
    defensive = this.attackForce;
  }

  player.hp -= (this.attackForce - defensive);
};

OrdinaryPlayer.prototype.role = function() {
    return '普通人';
}

OrdinaryPlayer.prototype.beAttacked = function(damage) {
    this.hp -= damage;
    return damage;
};

OrdinaryPlayer.prototype.getAp = function(player) {
    return this.attackForce;
};

OrdinaryPlayer.prototype.doAttack =  function(player) {
    var damage = player.beAttacked(this.getAp());

    return damage;
};

OrdinaryPlayer.prototype.getString= function (player, damage) {
  return this.role() + this.name + '攻击了' + player.role() +
    player.name + ',' + player.name + '受到了' +
    damage + '点伤害,' +
    player.name + '剩余生命：' + player.hp + '\n\n';
};
module.exports = OrdinaryPlayer;

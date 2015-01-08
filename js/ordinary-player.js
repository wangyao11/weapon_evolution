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

      this.attack(player);
      result += this.getString(player);
      this.state.judgeState(this);

    } else {
      this.attack(player);
      var result =this.getString(player);
    }
  return result;
};

OrdinaryPlayer.prototype.attack = function (player) {
  var defensive = 0;
  var result = '';
  if (player.armor !== '') {
    defensive = player.armor.defensive;
  }
  if (defensive > this.attackForce) {
    defensive = this.attackForce;
  }

  player.hp -= (this.attackForce - defensive);
};

OrdinaryPlayer.prototype.getString= function (player) {
  return '普通人' + this.name + '攻击了战士' +
    player.name + ',' + player.name + '受到了' +
    (this.attackForce - player.armor.defensive) + '点伤害,' +
    player.name + '剩余生命：' + player.hp + '\n\n';
};
module.exports = OrdinaryPlayer;

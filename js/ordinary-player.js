function OrdinaryPlayer(name, hp, attackForce) {
  this.name = name;
  this.hp = hp;
  this.attackForce = attackForce;
  this.state = '';
  this.times = 0;
}

OrdinaryPlayer.prototype.attack = function (player) {
  var defensive = 0;
  if (player.armor !== '') {
    defensive = player.armor.defensive;
  }
  if (defensive > this.attackForce) {
    defensive = this.attackForce;
  }
  player.hp -= (this.attackForce - defensive);
};

OrdinaryPlayer.prototype.getAttackInformation = function (player) {
  return '普通人' + this.name + '攻击了战士' +
    player.name+ ',' + player.name + '受到了' +
    (this.attackForce - player.armor.defensive) +'点伤害,' +
    player.name + '剩余生命：' + player.hp + '\n\n';
};
module.exports = OrdinaryPlayer;

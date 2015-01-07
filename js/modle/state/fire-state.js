function FireState(name, times, lethal){
  this.name = name;
  this.times = times;
  this.lethal = lethal;
}

FireState.prototype.getStateString = function (player) {
  //李四受到2点火焰伤害, 李四剩余生命：10
  var result;
  this.times --;
  player.hp -= this.lethal;

  return player.name + '受到' + this.lethal + '点火焰伤害,' + player.name +
    '剩余生命:' + player.hp + '\n\n';

};

FireState.prototype.judge = function (state) {

  return this.times > 0 ? 'no' : state = '';

};

module.exports = FireState;

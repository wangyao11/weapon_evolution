function VertigoState(name, times){
  this.name = name;
  this.times = times;
}

VertigoState.prototype.getStateString = function (player) {
  //李四晕倒了，无法攻击, 眩晕还剩：0
  this.times --;
  return player.name + '晕倒了,无法攻击,眩晕还剩:' + this.times + '轮\n\n';
};

VertigoState.prototype.judge = function (state) {

  return this.times > 0 ? 'yes' : state = '';

};
module.exports = VertigoState;

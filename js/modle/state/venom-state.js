function VenomState(name, times, lethal){
    this.name = name;
    this.times = times;
    this.lethal = lethal;
    this.tier = 1;
}

VenomState.prototype.getStateString = function (player) {
    //李四受到2点伤害, 李四剩余生命：10
    var result;
    this.times --;

    player.hp -= this.lethal * this.tier;
    result = player.name + '受到' + (this.lethal * this.tier) +
    '点毒性伤害,' + player.name +
    '剩余生命:' + player.hp + '\n\n';

    if (this.tier > 1) {
        this.tier --;
    }
    return result;

};

VenomState.prototype.judge = function () {

    return this.times > 0 ? 'no' : '';

};

VenomState.prototype.judgeState = function (player) {
    if (!this.times > 0) {
        player.state = '';
    }
};

module.exports = VenomState;

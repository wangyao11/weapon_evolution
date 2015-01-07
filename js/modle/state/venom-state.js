function VenomState(name, times, lethal){
    this.name = name;
    this.times = times;
    this.lethal = lethal;
}

VenomState.prototype.getStateString = function (player) {
    //李四受到2点伤害, 李四剩余生命：10
    var result;
    this.times --;
    player.hp -= this.lethal;

    return player.name + '受到' + this.lethal + '点毒性伤害,' + player.name +
        '剩余生命:' + player.hp + '\n\n';

};

VenomState.prototype.judge = function (state) {

    return this.times > 0 ? 'no' : state = '';

};

module.exports = VenomState;

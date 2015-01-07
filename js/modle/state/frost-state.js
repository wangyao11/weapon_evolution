function FrostState(name, times, round){
    this.name = name;
    this.times = times;
    this.round = round;
}

FrostState.prototype.getStateString = function (player) {
    //李四冻得直哆嗦，没有击中张三
    this.times --;
    return player.name + '冻得直哆嗦，没有击中\n\n';
};

FrostState.prototype.judge = function () {

    this.round --;
    return (this.round % 3) === 0 ? 'yes' : '';

};

FrostState.prototype.judgeState = function (player) {
    if (!this.times > 0) {
        player.state = '';
    }
};

module.exports = FrostState;

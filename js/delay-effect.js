function DelayEffect(name, lethal, times, probability) {
  this.name = name;
  this.times =times;
  this.lethal = lethal;
  this.probability = probability;
}

module.exports = DelayEffect;

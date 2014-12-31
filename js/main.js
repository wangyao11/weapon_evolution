var OrdinaryPlayer = require('../js/ordinary-player');
var WarriorPlayer = require('../js/warrior-player');
var PlayStart = require('../js/play-start.js');
var Armor = require('../js/armor');
var Weapon = require('../js/weapon');
var DelayEffect = require('../js/delay-effect');
var RealTimeEffect = require('../js/real-time-effect');

main();

function main() {

  var zhangsan = new OrdinaryPlayer('张三', 1000, 10);

  var realTimeEffect = new RealTimeEffect('crit', 3, 0.4);
  var delayEffects  = [new DelayEffect('venom', 2, 2, 0.2),
                       new DelayEffect('fire', 2, 2, 0.2)];
  var weapon = new Weapon('屠龙刀', 7, realTimeEffect, delayEffects);
  var armor = new Armor('麒麟甲', 5);
  var li = new WarriorPlayer('李斯',100, 10, armor, weapon);

  var porpt = PlayStart.start(zhangsan, li);
  console.log(porpt);
}

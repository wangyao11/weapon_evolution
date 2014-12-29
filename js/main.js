var OrdinaryPlayer = require('../js/ordinary-player');
var WarriorPlayer = require('../js/warrior-player');
var PlayStart = require('../js/play-start.js');
var Armor = require('../js/armor');
var Weapon = require('../js/weapon');

main();


function main() {
  var zhangsan = new OrdinaryPlayer('张三', 50, 10);
  var armor = new Armor('麒麟甲', 5);
  var weapon = new Weapon('屠龙刀', 7);
  var li = new WarriorPlayer('李斯',50, 10, armor, weapon);

  var porpt = PlayStart.start(zhangsan, li);
  console.log(porpt);

}

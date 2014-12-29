
function playStart(argument) {
  // body...
}

playStart.start = function(zhangsan, li) {
  var result = '';
  while (true) {
    li.hp = zhangsan.attack(li);
    if (zhangsan.hp <= 0) {
      result += '张三输了';
      break;
    }
    result += zhangsan.name + '攻击' + li.name + ',' +
    li.name + '受到' + zhangsan.attackForce + '点伤害,' +
    li.name + '还剩' + li.hp + '血量\n';

    zhangsan.hp = li.attack(zhangsan);
    if (li.hp <= 0) {
      result += '李斯输了';
      break;
    }
    result += li.name + '攻击' + zhangsan.name + ',' +
    zhangsan.name + '受到' + li.attackForce + '点伤害,' +
    zhangsan.name + '还剩' + zhangsan.hp + '血量\n';
  }
  return result;
}

module.exports = playStart;

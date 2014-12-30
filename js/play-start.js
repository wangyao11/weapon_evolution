
function playStart(argument) {
  // body...
}

playStart.start = function(zhangsan, li) {
  var result = '';
  while (true) {
    zhangsan.attack(li);
    result += zhangsan.getAttackInformation(li);

    if (li.hp <= 0) {
      result += '李斯输了';
      break;
    }

    li.attack(zhangsan);
    result += li.getAttackInformation(zhangsan);
    if (zhangsan.hp <= 0) {
      result += '张三输了';
      break;
    }
  }
  return result;
}

module.exports = playStart;

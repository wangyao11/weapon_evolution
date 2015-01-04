
function playStart(argument) {
  // body...
}

playStart.start = function(zhangsan, li) {
  var result = '';
  while (true) {
    result += zhangsan.getAttackInformation(li);

    if (li.hp <= 0) {
      result += '李斯输了';
      break;
    }

    result += li.getAttackInformation(zhangsan);
    if (zhangsan.hp <= 0) {
      result += '张三输了';
      break;
    }
  }
  return result;
};

module.exports = playStart;

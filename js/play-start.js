
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
    result += '普通人' + zhangsan.name + '攻击了战士' +
      li.name+ ',' + li.name + '受到了' +
      (zhangsan.attackForce - li.armor.defensive) +'点伤害,' +
      li.name + '剩余生命：' + li.hp + '\n\n';


    zhangsan.hp = li.attack(zhangsan);
    if (li.hp <= 0) {
      result += '李斯输了';
      break;
    }

    result += '战士' + li.name + '用'+ li.weapon.name +'攻击了普通人' +
      zhangsan.name+ ',' + zhangsan.name + '受到了' +
      (li.weapon.attackForce + li.attackForce) +
      '点伤害,' + zhangsan.name + '剩余生命：' + zhangsan.hp + '\n\n';
  }
  return result;
}

module.exports = playStart;

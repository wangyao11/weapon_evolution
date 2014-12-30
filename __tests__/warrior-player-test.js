jest.dontMock('../js/warrior-player');
jest.dontMock('../js/ordinary-player');
jest.dontMock('../js/armor');
jest.dontMock('../js/weapon');
describe('WarriorPlayer', function() {

  var WarriorPlayer = require('../js/warrior-player');
  var OrdinaryPlayer = require('../js/ordinary-player');
  var Armor = require('../js/armor');
  var Weapon = require('../js/weapon');

  describe('#getAttackInformation()', function() {

    it('shuold return corrcet string', function() {

      var zhangsan = new OrdinaryPlayer('张三', 50, 10);
      var armor = new Armor('麒麟甲', 5);
      var weapon = new Weapon('屠龙刀', 7);
      var li = new WarriorPlayer('李斯',50, 10, armor, weapon);

      var result = li.getAttackInformation(zhangsan);

      expect(result).toBe('战士李斯用屠龙刀攻击了普通人张三,张三受到了17点伤害,张三剩余生命：33\n');
    });
  });

  describe('#getCriticalStrikeInformation()', function() {

    it('shuold return corrcet string', function() {

      var lisi = new OrdinaryPlayer('李四', 20, 10);
      var armor = new Armor('麒麟甲', 5);
      var weapon = new Weapon('屠龙刀', 3);
      var zhangsan = new WarriorPlayer('张三',50, 5, armor, weapon);

      var result = zhangsan.getCriticalStrikeInformation(lisi);

      expect(result).toBe('战士张三用屠龙刀攻击了普通人李四,张三发动了致命一击,李四受到了24点伤害,李四剩余生命：-4\n');
    });
  });
});

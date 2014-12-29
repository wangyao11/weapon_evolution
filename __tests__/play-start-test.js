jest.autoMockOff();

describe('PlayStart', function() {

  describe('#start()', function() {

    it('should return corrcet string', function(){
      console.log = jest.genMockFn();
      var OrdinaryPlayer = require('../js/ordinary-player');
      var WarriorPlayer = require('../js/warrior-player');
      var PlayStart = require('../js/play-start');
      var Armor = require('../js/armor');
      var Weapon = require('../js/weapon');

      var zhangsan = new OrdinaryPlayer('张三', 50, 10);
      var armor = new Armor('麒麟甲', 5);
      var weapon = new Weapon('屠龙刀', 7);
      var li = new WarriorPlayer('李斯',50, 10, armor, weapon);

      var result = PlayStart.start(zhangsan, li);

      var expertString = '普通人张三攻击了战士李斯,李斯受到了10点伤害,李斯剩余生命：45\n' +
        '战士李斯用屠龙刀攻击了普通人张三,张三受到了17点伤害,张三剩余生命：33\n' +
        '普通人张三攻击了战士李斯,李斯受到了10点伤害,李斯剩余生命：40\n' +
        '战士李斯用屠龙刀攻击了普通人张三,张三受到了17点伤害,张三剩余生命：16\n' +
        '普通人张三攻击了战士李斯,李斯受到了10点伤害,李斯剩余生命：35\n' +
        '战士李斯用屠龙刀攻击了普通人张三,张三受到了17点伤害,张三剩余生命：-1\n' +
        '张三输了';

      expect(result).toBe(expertString);
    });

  });
});

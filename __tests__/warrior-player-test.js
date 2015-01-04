jest.dontMock('../js/warrior-player');
jest.dontMock('../js/ordinary-player');
jest.dontMock('../js/armor');
jest.dontMock('../js/weapon');
jest.dontMock('../js/real-time-effect');
jest.dontMock('../js/delay-effect');
jest.dontMock('../js/effect');
jest.dontMock('lodash');

describe('WarriorPlayer', function() {

  var WarriorPlayer = require('../js/warrior-player');
  var OrdinaryPlayer = require('../js/ordinary-player');
  var Armor = require('../js/armor');
  var Weapon = require('../js/weapon');
  var DelayEffect = require('../js/delay-effect');
  var RealTimeEffect = require('../js/real-time-effect');

  describe('#getAttackInformation()', function() {

    it('shuold return corrcet string', function() {

      var zhangsan = new OrdinaryPlayer('张三', 50, 10);
      var armor = new Armor('麒麟甲', 5);
      var weapon = new Weapon('屠龙刀', 7);
      var li = new WarriorPlayer('李斯',50, 10, armor, weapon);
      var result = li.getAttackInformation(zhangsan);

      expect(result).toBe('战士李斯用屠龙刀攻击了普通人张三,张三受到了17点伤害,张三剩余生命：33\n\n');
    });

    it('shuold return crit string', function() {

      var lisi = new OrdinaryPlayer('李四', 20, 10);
      var armor = new Armor('麒麟甲', 5);
      var crit = new RealTimeEffect('crit', 3, 0);
      var weapon = new Weapon('屠龙刀', 3, crit);

      var zhangsan = new WarriorPlayer('张三',50, 5, armor, weapon);

      var result = zhangsan.getAttackInformation(lisi);

      expect(result).toBe('战士张三用屠龙刀攻击了普通人李四,李四受到了8点伤害,李四剩余生命：12\n\n');
    });

    it('shuold return crit string', function() {

      var lisi = new OrdinaryPlayer('李四', 20, 10);
      var armor = new Armor('麒麟甲', 5);
      var crit = new RealTimeEffect('crit', 3, 1);
      var weapon = new Weapon('屠龙刀', 3, crit);

      var zhangsan = new WarriorPlayer('张三',50, 5, armor, weapon);

      var result = zhangsan.getAttackInformation(lisi);

      expect(result).toBe('战士张三用屠龙刀攻击了普通人李四,张三发动了致命一击,李四受到了24点伤害,李四剩余生命：-4\n\n');
    });

    it('shuold return fire string', function() {

      var lisi = new OrdinaryPlayer('李四', 20, 10);
      var armor = new Armor('麒麟甲', 5);
      var delayEffects  = [new DelayEffect('fire', 2, 2, 1, '着火了')];
      var weapon = new Weapon('屠龙刀', 3, null, delayEffects);
      var zhangsan = new WarriorPlayer('张三',50, 5, armor, weapon);

      var result = zhangsan.getAttackInformation(lisi);

      expect(result).toBe('战士张三用屠龙刀攻击了普通人李四,李四受到了8点伤害,李四着火了,李四剩余生命：12\n\n');
    });

    it('shuold return venom string', function() {

      var lisi = new OrdinaryPlayer('李四', 20, 10);
      var armor = new Armor('麒麟甲', 5);
      var delayEffects  = [new DelayEffect('venom', 2, 2, 1, '中毒了')];
      var weapon = new Weapon('屠龙刀', 3, null, delayEffects);
      var zhangsan = new WarriorPlayer('张三',50, 5, armor, weapon);

      var result = zhangsan.getAttackInformation(lisi);

      expect(result).toBe('战士张三用屠龙刀攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12\n\n');
    });

    it('shuold return vertigo string', function() {

      var lisi = new OrdinaryPlayer('李四', 20, 10);
      var armor = new Armor('麒麟甲', 5);
      var delayEffects  = [new DelayEffect('vertigo', 2, 2, 1, '眩晕了')];
      var weapon = new Weapon('屠龙刀', 3, null, delayEffects);
      var zhangsan = new WarriorPlayer('张三',50, 5, armor, weapon);

      var result = zhangsan.getAttackInformation(lisi);

      expect(result).toBe('战士张三用屠龙刀攻击了普通人李四,李四受到了8点伤害,李四眩晕了,李四剩余生命：12\n\n');
    });

    it('shuold return frost string', function() {

      var lisi = new OrdinaryPlayer('李四', 20, 10);
      var armor = new Armor('麒麟甲', 5);
      var delayEffects  = [new DelayEffect('frost', 2, 2, 1, '冰封了')];
      var weapon = new Weapon('屠龙刀', 3, null, delayEffects);
      var zhangsan = new WarriorPlayer('张三',50, 5, armor, weapon);

      var result = zhangsan.getAttackInformation(lisi);

      expect(result).toBe('战士张三用屠龙刀攻击了普通人李四,李四受到了8点伤害,李四冰封了,李四剩余生命：12\n\n');
    });

  });
});

jest.dontMock('../js/ordinary-player');
jest.dontMock('../js/play-start');

describe('PlayStart', function() {

  describe('#start()', function() {

    it('should return corrcet string', function(){
      console.log = jest.genMockFn();
      var OrdinaryPlayer = require('../js/ordinary-player');
      var PlayStart = require('../js/play-start');

      var zhangsan = new OrdinaryPlayer('张三',20,3);
      var li = new OrdinaryPlayer('李斯',20,4);

      var result = PlayStart.start(zhangsan, li);

      var expertString = '张三攻击李斯,李斯受到3点伤害,李斯还剩17血量\n' +
        '李斯攻击张三,张三受到4点伤害,张三还剩16血量\n' +
        '张三攻击李斯,李斯受到3点伤害,李斯还剩14血量\n' +
        '李斯攻击张三,张三受到4点伤害,张三还剩12血量\n' +
        '张三攻击李斯,李斯受到3点伤害,李斯还剩11血量\n' +
        '李斯攻击张三,张三受到4点伤害,张三还剩8血量\n' +
        '张三攻击李斯,李斯受到3点伤害,李斯还剩8血量\n' +
        '李斯攻击张三,张三受到4点伤害,张三还剩4血量\n' +
        '张三攻击李斯,李斯受到3点伤害,李斯还剩5血量\n' +
        '李斯攻击张三,张三受到4点伤害,张三还剩0血量\n' +
        '张三输了';

      expect(result).toBe(expertString);
    });

  });
});

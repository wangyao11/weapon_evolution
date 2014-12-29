jest.dontMock('../js/playerTwo');

describe('playerTwo', function() {

  describe('#attack()', function() {
    it('should return hp subtract attackForce', function() {
      var PlayerTwo = require('../js/playerTwo');
      var zhangsan = new PlayerTwo(20,3);
      var expectResult = zhangsan.attack(10);
      expect(7).toEqual(expectResult);
    });
  });
});

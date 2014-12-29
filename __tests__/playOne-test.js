jest.dontMock('../js/playerOne');

describe('PlayOne', function() {

  describe('#attack()', function() {
    it('should return hp subtract attackForce', function() {
      var PlayOne = require('../js/playerOne');
      var zhangsan = new PlayOne(20,3);
      var expectResult = zhangsan.attack(10);
      expect(7).toEqual(expectResult);
    });
  });
});

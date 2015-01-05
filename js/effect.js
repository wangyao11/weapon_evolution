/**
 * Created by wangyao on 14-12-31.
 */
function Effect(){

}

Effect.prototype.calculationAp = function(playerAttackForce, weaponAttackForce) {
  return (playerAttackForce + weaponAttackForce);
};

Effect.prototype.getRealTimeString = function() {
  return '';
};

Effect.prototype.getDelayString = function() {
  return '';
};

module.exports = Effect;

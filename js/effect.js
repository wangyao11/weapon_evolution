/**
 * Created by wangyao on 14-12-31.
 */
function Effect(){

}

Effect.calculationAp = function(playerAttackForce, weaponAttackForce) {

    return (playerAttackForce + weaponAttackForce);

};

Effect.getRealTimeString = function() {
    return '';
};

Effect.getDelayString = function() {
  return '';
};

module.exports = Effect;

/*! weapon_evolution 2016-03-29 */
function Frost(a,b,c,d){this.name=a,this.times=b,this.round=c,this.probability=d}var Effect=require("../../effect");Frost.prototype=Object.create(Effect.prototype),Frost.prototype.constructor=Frost,Frost.prototype.getEffectString=function(a){return a+"冰冻了,"},module.exports=Frost;
/*! weapon_evolution 2016-03-29 */
function Weapon(a,b,c){this.name=a,this.attackForce=b,this.effects=c||""}var _=require("lodash");Weapon.prototype.getAp=function(){return this.attackForce},Weapon.prototype.getEffect=function(){var a;return _this=this,_.forEach(this.effects,function(b){_.find(_this.effects,{name:b.name});b&&Math.random()<b.probability&&(a=b)}),a},Weapon.prototype.getCrit=function(){var a,b=_.find(this.effects,{name:"crit"});return b&&Math.random()<b.probability&&(a=b),a},module.exports=Weapon;
/*! weapon_evolution 2016-03-29 */
function OrdinaryPlayer(a,b,c){this.name=a,this.hp=b||100,this.attackForce=c,this.state=""}var _=require("lodash");OrdinaryPlayer.prototype.getAttackInformation=function(a){if(""!==this.state)var b=this.state.judge();if(""!==this.state&&"yes"===b)d=this.state.getStateString(this),this.state.judgeState(this);else if(""!==this.state&&"no"===b){d=this.state.getStateString(this);var c=this.doAttack(a);d+=this.getString(a,c),this.state.judgeState(this)}else var c=this.doAttack(a),d=this.getString(a,c);return d},OrdinaryPlayer.prototype.attack=function(a){var b=a.armor.defensive;b>this.attackForce&&(b=this.attackForce),a.hp-=this.attackForce-b},OrdinaryPlayer.prototype.role=function(){return"普通人"},OrdinaryPlayer.prototype.beAttacked=function(a){return this.hp-=a,a},OrdinaryPlayer.prototype.getAp=function(a){return this.attackForce},OrdinaryPlayer.prototype.doAttack=function(a){var b=a.beAttacked(this.getAp());return b},OrdinaryPlayer.prototype.getString=function(a,b){return this.role()+this.name+"攻击了"+a.role()+a.name+","+a.name+"受到了"+b+"点伤害,"+a.name+"剩余生命："+a.hp+"\n\n"},module.exports=OrdinaryPlayer;
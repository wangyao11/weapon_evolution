/*! weapon_evolution 2016-03-29 */
function VenomState(a,b,c){this.name=a,this.times=b,this.lethal=c,this.tier=1}VenomState.prototype.getStateString=function(a){var b;return this.times--,a.hp-=this.lethal*this.tier,b=a.name+"受到"+this.lethal*this.tier+"点毒性伤害,"+a.name+"剩余生命:"+a.hp+"\n\n",this.tier>1&&this.tier--,b},VenomState.prototype.judge=function(){return this.times>0?"no":""},VenomState.prototype.judgeState=function(a){!this.times>0&&(a.state="")},module.exports=VenomState;
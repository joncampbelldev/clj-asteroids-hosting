// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.util.easing');
goog.require('cljs.core');
cs_game.util.easing.out_expo = (function cs_game$util$easing$out_expo(time,duration,start,target){
if((time >= duration)){
return (start + target);
} else {
return (start + (target * ((1) + (- Math.pow((2),((-10) * (time / duration)))))));
}
});
cs_game.util.easing.out_quad = (function cs_game$util$easing$out_quad(time,duration,start,target){
var tdivd = (time / duration);
return (start + (((- target) * tdivd) * (tdivd - (2))));
});

//# sourceMappingURL=easing.js.map?rel=1492251106979
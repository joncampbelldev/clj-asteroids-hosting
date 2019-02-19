// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.util.shapes');
goog.require('cljs.core');
goog.require('cs_game.util.maths');
cs_game.util.shapes.rectangle = cljs.core.memoize.call(null,(function (width,height){
var half_width = (width / (2));
var half_height = (height / (2));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- half_width),(- half_height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_width,(- half_height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_width,half_height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- half_width),half_height], null)], null);
}));
cs_game.util.shapes.isoceles_triangle = cljs.core.memoize.call(null,(function (circle_size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(circle_size * 0.5),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (circle_size * 0.3)),(circle_size * 0.2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (circle_size * 0.3)),(- (circle_size * 0.2))], null)], null);
}));
cs_game.util.shapes.random_sided_convex_polygon = (function cs_game$util$shapes$random_sided_convex_polygon(radius){
var full_circle = (cs_game.util.maths.pi * (2));
var path = cljs.core.PersistentVector.EMPTY;
var angle = (0);
while(true){
var angle__$1 = (angle + cs_game.util.maths.rand_between.call(null,0.05,1.5));
var position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * cs_game.util.maths.cos.call(null,angle__$1)),(radius * cs_game.util.maths.sin.call(null,angle__$1))], null);
if((angle__$1 < full_circle)){
var G__42278 = cljs.core.conj.call(null,path,position);
var G__42279 = angle__$1;
path = G__42278;
angle = G__42279;
continue;
} else {
return path;
}
break;
}
});

//# sourceMappingURL=shapes.js.map?rel=1493524431899
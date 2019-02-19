// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.util.sat');
goog.require('cljs.core');







cs_game.util.sat.Vector = SAT.Vector;
cs_game.util.sat.Polygon = SAT.Polygon;
cs_game.util.sat.Response = SAT.Response;
cs_game.util.sat.to_vector = (function cs_game$util$sat$to_vector(p__28883){
var vec__28887 = p__28883;
var x = cljs.core.nth.call(null,vec__28887,(0),null);
var y = cljs.core.nth.call(null,vec__28887,(1),null);
return (new cs_game.util.sat.Vector(x,y));
});
cs_game.util.sat.from_vector = (function cs_game$util$sat$from_vector(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v.x,v.y], null);
});
cs_game.util.sat.to_polygon = (function cs_game$util$sat$to_polygon(position,points,rotation){
var polygon = (new cs_game.util.sat.Polygon(cs_game.util.sat.to_vector.call(null,position),cljs.core.into_array.call(null,cljs.core.mapv.call(null,cs_game.util.sat.to_vector,points))));
polygon.setAngle(rotation);

return polygon;
});
cs_game.util.sat.reusable_response = (new cs_game.util.sat.Response());
cs_game.util.sat.test_polygon_polygon = (function cs_game$util$sat$test_polygon_polygon(polygon1,polygon2){
var colliding_QMARK_ = SAT.testPolygonPolygon(polygon1,polygon2,cs_game.util.sat.reusable_response);
if(cljs.core.truth_(colliding_QMARK_)){
var response = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overlap","overlap",-1673335644),cs_game.util.sat.from_vector.call(null,cs_game.util.sat.reusable_response.overlapV)], null);
cs_game.util.sat.reusable_response.clear();

return response;
} else {
return null;
}
});

//# sourceMappingURL=sat.js.map?rel=1526715072621
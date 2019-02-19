// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.spatial_hashing');
goog.require('cljs.core');
goog.require('clojure.set');
cs_game.spatial_hashing.generate_config = (function cs_game$spatial_hashing$generate_config(world_width,world_height,leeway_outside_world,cell_size){
var columns = ((leeway_outside_world * (2)) + ((world_width / cell_size) | (0)));
var rows = ((leeway_outside_world * (2)) + ((world_height / cell_size) | (0)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"empty","empty",767870958),cljs.core.vec.call(null,cljs.core.repeat.call(null,(columns * rows),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"offset","offset",296498311),leeway_outside_world], null);
});
cs_game.spatial_hashing.index_for_point = (function cs_game$spatial_hashing$index_for_point(x,y,cells_per_row,offset){
var offset_x = (offset + x);
var offset_y = (offset + y);
return (offset_x + (offset_y * cells_per_row));
});
cs_game.spatial_hashing.get_points_for_aabb = (function cs_game$spatial_hashing$get_points_for_aabb(x,y,width,height,cell_size){
var half_width = (width / (2));
var half_height = (height / (2));
var min_x = (((x - half_width) / cell_size) | (0));
var max_x = (((x + half_width) / cell_size) | (0));
var min_y = (((y - half_height) / cell_size) | (0));
var max_y = (((y + half_height) / cell_size) | (0));
var iter__21212__auto__ = ((function (half_width,half_height,min_x,max_x,min_y,max_y){
return (function cs_game$spatial_hashing$get_points_for_aabb_$_iter__21567(s__21568){
return (new cljs.core.LazySeq(null,((function (half_width,half_height,min_x,max_x,min_y,max_y){
return (function (){
var s__21568__$1 = s__21568;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21568__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var px = cljs.core.first.call(null,xs__5205__auto__);
var iterys__21208__auto__ = ((function (s__21568__$1,px,xs__5205__auto__,temp__4657__auto__,half_width,half_height,min_x,max_x,min_y,max_y){
return (function cs_game$spatial_hashing$get_points_for_aabb_$_iter__21567_$_iter__21569(s__21570){
return (new cljs.core.LazySeq(null,((function (s__21568__$1,px,xs__5205__auto__,temp__4657__auto__,half_width,half_height,min_x,max_x,min_y,max_y){
return (function (){
var s__21570__$1 = s__21570;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__21570__$1);
if(temp__4657__auto____$1){
var s__21570__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21570__$2)){
var c__21210__auto__ = cljs.core.chunk_first.call(null,s__21570__$2);
var size__21211__auto__ = cljs.core.count.call(null,c__21210__auto__);
var b__21572 = cljs.core.chunk_buffer.call(null,size__21211__auto__);
if((function (){var i__21571 = (0);
while(true){
if((i__21571 < size__21211__auto__)){
var py = cljs.core._nth.call(null,c__21210__auto__,i__21571);
cljs.core.chunk_append.call(null,b__21572,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null));

var G__21573 = (i__21571 + (1));
i__21571 = G__21573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21572),cs_game$spatial_hashing$get_points_for_aabb_$_iter__21567_$_iter__21569.call(null,cljs.core.chunk_rest.call(null,s__21570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21572),null);
}
} else {
var py = cljs.core.first.call(null,s__21570__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null),cs_game$spatial_hashing$get_points_for_aabb_$_iter__21567_$_iter__21569.call(null,cljs.core.rest.call(null,s__21570__$2)));
}
} else {
return null;
}
break;
}
});})(s__21568__$1,px,xs__5205__auto__,temp__4657__auto__,half_width,half_height,min_x,max_x,min_y,max_y))
,null,null));
});})(s__21568__$1,px,xs__5205__auto__,temp__4657__auto__,half_width,half_height,min_x,max_x,min_y,max_y))
;
var fs__21209__auto__ = cljs.core.seq.call(null,iterys__21208__auto__.call(null,cljs.core.range.call(null,min_y,(max_y + (1)))));
if(fs__21209__auto__){
return cljs.core.concat.call(null,fs__21209__auto__,cs_game$spatial_hashing$get_points_for_aabb_$_iter__21567.call(null,cljs.core.rest.call(null,s__21568__$1)));
} else {
var G__21574 = cljs.core.rest.call(null,s__21568__$1);
s__21568__$1 = G__21574;
continue;
}
} else {
return null;
}
break;
}
});})(half_width,half_height,min_x,max_x,min_y,max_y))
,null,null));
});})(half_width,half_height,min_x,max_x,min_y,max_y))
;
return iter__21212__auto__.call(null,cljs.core.range.call(null,min_x,(max_x + (1))));
});
cs_game.spatial_hashing.add_entity_to_spatial_hash = (function cs_game$spatial_hashing$add_entity_to_spatial_hash(initial_transient_spatial_hash,p__21575,cell_size,columns,offset){
var map__21588 = p__21575;
var map__21588__$1 = ((((!((map__21588 == null)))?((((map__21588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21588):map__21588);
var id = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword("entity","id","entity/id",400070257));
var position = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var dimensions = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var size = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__21590 = position;
var x = cljs.core.nth.call(null,vec__21590,(0),null);
var y = cljs.core.nth.call(null,vec__21590,(1),null);
var vec__21593 = (function (){var or__20432__auto__ = dimensions;
if(cljs.core.truth_(or__20432__auto__)){
return or__20432__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,size], null);
}
})();
var width = cljs.core.nth.call(null,vec__21593,(0),null);
var height = cljs.core.nth.call(null,vec__21593,(1),null);
var points = cs_game.spatial_hashing.get_points_for_aabb.call(null,x,y,width,height,cell_size);
return cljs.core.reduce.call(null,((function (vec__21590,x,y,vec__21593,width,height,points,map__21588,map__21588__$1,id,position,dimensions,size){
return (function (transient_spatial_hash,p__21596){
var vec__21597 = p__21596;
var x__$1 = cljs.core.nth.call(null,vec__21597,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__21597,(1),null);
var index = cs_game.spatial_hashing.index_for_point.call(null,x__$1,y__$1,columns,offset);
return cljs.core.assoc_BANG_.call(null,transient_spatial_hash,index,cljs.core.conj.call(null,cljs.core.get.call(null,transient_spatial_hash,index),id));
});})(vec__21590,x,y,vec__21593,width,height,points,map__21588,map__21588__$1,id,position,dimensions,size))
,initial_transient_spatial_hash,points);
});
cs_game.spatial_hashing.build = (function cs_game$spatial_hashing$build(entities,p__21602){
var map__21605 = p__21602;
var map__21605__$1 = ((((!((map__21605 == null)))?((((map__21605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21605):map__21605);
var offset = cljs.core.get.call(null,map__21605__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var cell_size = cljs.core.get.call(null,map__21605__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var columns = cljs.core.get.call(null,map__21605__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var rows = cljs.core.get.call(null,map__21605__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var empty = cljs.core.get.call(null,map__21605__$1,new cljs.core.Keyword(null,"empty","empty",767870958));
var transient_spatial_hash = cljs.core.reduce.call(null,((function (map__21605,map__21605__$1,offset,cell_size,columns,rows,empty){
return (function (p1__21600_SHARP_,p2__21601_SHARP_){
return cs_game.spatial_hashing.add_entity_to_spatial_hash.call(null,p1__21600_SHARP_,p2__21601_SHARP_,cell_size,columns,offset);
});})(map__21605,map__21605__$1,offset,cell_size,columns,rows,empty))
,cljs.core.transient$.call(null,empty),entities);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.persistent_BANG_.call(null,transient_spatial_hash),new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"rows","rows",850049680),rows], null);
});
cs_game.spatial_hashing.nearby_entity_indexes = (function cs_game$spatial_hashing$nearby_entity_indexes(spatial_hash,entity){
var map__21619 = spatial_hash;
var map__21619__$1 = ((((!((map__21619 == null)))?((((map__21619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21619):map__21619);
var data = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var cell_size = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var columns = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var offset = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var vec__21620 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity);
var x = cljs.core.nth.call(null,vec__21620,(0),null);
var y = cljs.core.nth.call(null,vec__21620,(1),null);
var vec__21623 = (function (){var or__20432__auto__ = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__20432__auto__)){
return or__20432__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity)], null);
}
})();
var width = cljs.core.nth.call(null,vec__21623,(0),null);
var height = cljs.core.nth.call(null,vec__21623,(1),null);
var _ = cs_game.spatial_hashing.get_points_for_aabb.call(null,x,y,width,height,cell_size);
var ___$1 = cljs.core.mapv.call(null,((function (_,map__21619,map__21619__$1,data,cell_size,columns,offset,vec__21620,x,y,vec__21623,width,height){
return (function (p__21627){
var vec__21628 = p__21627;
var x__$1 = cljs.core.nth.call(null,vec__21628,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__21628,(1),null);
return cljs.core.nth.call(null,data,cs_game.spatial_hashing.index_for_point.call(null,x__$1,y__$1,columns,offset));
});})(_,map__21619,map__21619__$1,data,cell_size,columns,offset,vec__21620,x,y,vec__21623,width,height))
,_);
return cljs.core.apply.call(null,clojure.set.union,___$1);
});

//# sourceMappingURL=spatial_hashing.js.map?rel=1550610524198
// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.collisions');
goog.require('cljs.core');
goog.require('cs_game.util.expanded_lang');
goog.require('cs_game.spatial_hashing');
goog.require('cs_game.util.sat');
goog.require('cs_game.util.maths');
if(typeof cs_game.collisions.collision_between !== 'undefined'){
} else {
cs_game.collisions.collision_between = (function (){var method_table__21357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21361__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cs-game.collisions","collision-between"),((function (method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__){
return (function (left_entity,right_entity,_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity","collision","entity/collision",-2066134017).cljs$core$IFn$_invoke$arity$1(left_entity),new cljs.core.Keyword("entity","collision","entity/collision",-2066134017).cljs$core$IFn$_invoke$arity$1(right_entity)], null);
});})(method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21361__auto__,method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__));
})();
}
cs_game.collisions.narrow_phase_detect = (function cs_game$collisions$narrow_phase_detect(entity1,entity2){
var polygon1 = cs_game.util.sat.to_polygon.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity1),new cljs.core.Keyword("entity","collision-polygon-points","entity/collision-polygon-points",-1924128388).cljs$core$IFn$_invoke$arity$1(entity1),cs_game.util.maths.degrees_to_radians.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(entity1)));
var polygon2 = cs_game.util.sat.to_polygon.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity2),new cljs.core.Keyword("entity","collision-polygon-points","entity/collision-polygon-points",-1924128388).cljs$core$IFn$_invoke$arity$1(entity2),cs_game.util.maths.degrees_to_radians.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(entity2)));
return cs_game.util.sat.test_polygon_polygon.call(null,polygon1,polygon2);
});
cs_game.collisions.mid_phase_colliding_QMARK_ = (function cs_game$collisions$mid_phase_colliding_QMARK_(entity1,entity2){
var vec__21667 = cs_game.util.maths.v_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity2));
var dx = cljs.core.nth.call(null,vec__21667,(0),null);
var dy = cljs.core.nth.call(null,vec__21667,(1),null);
var dist_sq = ((dx * dx) + (dy * dy));
var min_dist = ((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity1) / (2)) + (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity2) / (2)));
var min_dist_sq = (min_dist * min_dist);
return (dist_sq < min_dist_sq);
});
cs_game.collisions.detect_between_indexes = (function cs_game$collisions$detect_between_indexes(world,left_entity,right_entity){
var collision_response = (function (){var and__20420__auto__ = cs_game.collisions.mid_phase_colliding_QMARK_.call(null,left_entity,right_entity);
if(cljs.core.truth_(and__20420__auto__)){
return cs_game.collisions.narrow_phase_detect.call(null,left_entity,right_entity);
} else {
return and__20420__auto__;
}
})();
var vec__21673 = (cljs.core.truth_(collision_response)?cs_game.collisions.collision_between.call(null,left_entity,right_entity,collision_response,world):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_entity,right_entity,world], null));
var updated_left_entity = cljs.core.nth.call(null,vec__21673,(0),null);
var updated_right_entity = cljs.core.nth.call(null,vec__21673,(1),null);
var updated_world = cljs.core.nth.call(null,vec__21673,(2),null);
return cljs.core.update.call(null,updated_world,new cljs.core.Keyword("ces","entities","ces/entities",1939820666),cljs.core.assoc,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(left_entity),updated_left_entity,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(right_entity),updated_right_entity);
});
cs_game.collisions.check_for_entity = (function cs_game$collisions$check_for_entity(entity_index,initial_world,initial_collided_index_pairs){
var entities = new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(initial_world);
var entity = cljs.core.nth.call(null,entities,entity_index);
var nearby_entity_indexes = cs_game.spatial_hashing.nearby_entity_indexes.call(null,new cljs.core.Keyword(null,"entity-spatial-hash","entity-spatial-hash",112773425).cljs$core$IFn$_invoke$arity$1(initial_world),entity);
return cljs.core.reduce.call(null,((function (entities,entity,nearby_entity_indexes){
return (function (p__21683,other_entity_index){
var vec__21684 = p__21683;
var world = cljs.core.nth.call(null,vec__21684,(0),null);
var collided_index_pairs = cljs.core.nth.call(null,vec__21684,(1),null);
var left_entity = cljs.core.nth.call(null,entities,entity_index);
var right_entity = cljs.core.nth.call(null,entities,other_entity_index);
var collision_pairs = new cljs.core.Keyword(null,"collision-pairs","collision-pairs",774660318).cljs$core$IFn$_invoke$arity$1(world);
var type_pair1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity","collision","entity/collision",-2066134017).cljs$core$IFn$_invoke$arity$1(left_entity),new cljs.core.Keyword("entity","collision","entity/collision",-2066134017).cljs$core$IFn$_invoke$arity$1(right_entity)], null);
var type_pair2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity","collision","entity/collision",-2066134017).cljs$core$IFn$_invoke$arity$1(right_entity),new cljs.core.Keyword("entity","collision","entity/collision",-2066134017).cljs$core$IFn$_invoke$arity$1(left_entity)], null);
var is_pair1_QMARK_ = cljs.core.contains_QMARK_.call(null,collision_pairs,type_pair1);
var is_pair2_QMARK_ = cljs.core.contains_QMARK_.call(null,collision_pairs,type_pair2);
var correct_types_QMARK_ = (is_pair1_QMARK_) || (is_pair2_QMARK_);
var vec__21687 = ((is_pair2_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_entity,left_entity], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_entity,right_entity], null));
var left_entity__$1 = cljs.core.nth.call(null,vec__21687,(0),null);
var right_entity__$1 = cljs.core.nth.call(null,vec__21687,(1),null);
var same_entity_QMARK_ = cljs.core._EQ_.call(null,entity_index,other_entity_index);
var already_collided_QMARK_ = cljs.core.contains_QMARK_.call(null,collided_index_pairs,cljs.core.PersistentHashSet.fromArray([entity_index,other_entity_index], true));
var updated_world = (((!(same_entity_QMARK_)) && (!(already_collided_QMARK_)) && (correct_types_QMARK_))?cs_game.collisions.detect_between_indexes.call(null,world,left_entity__$1,right_entity__$1):world);
var updated_collided_index_pairs = cljs.core.conj.call(null,collided_index_pairs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_index,other_entity_index], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_world,updated_collided_index_pairs], null);
});})(entities,entity,nearby_entity_indexes))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_world,initial_collided_index_pairs], null),nearby_entity_indexes);
});
cs_game.collisions.system = (function cs_game$collisions$system(collidable_entity_indexes,world){
var vec__21697 = cljs.core.reduce.call(null,(function (p__21700,entity_index){
var vec__21701 = p__21700;
var world__$1 = cljs.core.nth.call(null,vec__21701,(0),null);
var collided_index_pairs = cljs.core.nth.call(null,vec__21701,(1),null);
return cs_game.collisions.check_for_entity.call(null,entity_index,world__$1,collided_index_pairs);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [world,cljs.core.PersistentHashSet.EMPTY], null),collidable_entity_indexes);
var updated_world = cljs.core.nth.call(null,vec__21697,(0),null);
var _ = cljs.core.nth.call(null,vec__21697,(1),null);
return updated_world;
});

//# sourceMappingURL=collisions.js.map?rel=1550610524363
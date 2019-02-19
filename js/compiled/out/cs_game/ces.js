// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.ces');
goog.require('cljs.core');
goog.require('cs_game.util.expanded_lang');
cs_game.ces.safe_conj_to_set = (function cs_game$ces$safe_conj_to_set(set,value){
if((set == null)){
return cljs.core.PersistentHashSet.fromArray([value], true);
} else {
return cljs.core.conj.call(null,set,value);
}
});
cs_game.ces.system_keys_for_entity = (function cs_game$ces$system_keys_for_entity(entity,systems){
return cljs.core.reduce.call(null,(function (system_keys,p__21305){
var map__21306 = p__21305;
var map__21306__$1 = ((((!((map__21306 == null)))?((((map__21306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21306):map__21306);
var filter_fn = cljs.core.get.call(null,map__21306__$1,new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252));
var key = cljs.core.get.call(null,map__21306__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_(filter_fn.call(null,entity))){
return cljs.core.conj.call(null,system_keys,key);
} else {
return system_keys;
}
}),cljs.core.PersistentHashSet.EMPTY,systems);
});
cs_game.ces.register_entity = (function cs_game$ces$register_entity(entity,world,systems){
return cljs.core.reduce.call(null,(function (world__$1,system_key){
return cljs.core.update_in.call(null,world__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ces","system->entity-indexes","ces/system->entity-indexes",-128003505),system_key], null),(function (p1__21308_SHARP_){
return cs_game.ces.safe_conj_to_set.call(null,p1__21308_SHARP_,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(entity));
}));
}),world,cs_game.ces.system_keys_for_entity.call(null,entity,systems));
});
cs_game.ces.unregister_entity_index = (function cs_game$ces$unregister_entity_index(entity_index,world){
return cljs.core.update.call(null,world,new cljs.core.Keyword("ces","system->entity-indexes","ces/system->entity-indexes",-128003505),(function (system__GT_entity_indexes){
return cs_game.util.expanded_lang.map_values.call(null,(function (p1__21309_SHARP_){
return cljs.core.disj.call(null,p1__21309_SHARP_,entity_index);
}),system__GT_entity_indexes);
}));
});
cs_game.ces.add_entity_to_world = (function cs_game$ces$add_entity_to_world(entity,initial_world,systems){
var reusuable_indexes = new cljs.core.Keyword("ces","reusable-indexes","ces/reusable-indexes",1813359377).cljs$core$IFn$_invoke$arity$1(initial_world);
var vec__21313 = (cljs.core.truth_(cs_game.util.expanded_lang.strict_empty_QMARK_.call(null,reusuable_indexes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(initial_world)),reusuable_indexes], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,reusuable_indexes),cljs.core.pop.call(null,reusuable_indexes)], null));
var entity_index = cljs.core.nth.call(null,vec__21313,(0),null);
var leftover_reusable_indexes = cljs.core.nth.call(null,vec__21313,(1),null);
var entity__$1 = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("entity","id","entity/id",400070257),entity_index);
var w = initial_world;
var w__$1 = cljs.core.assoc.call(null,w,new cljs.core.Keyword("ces","reusable-indexes","ces/reusable-indexes",1813359377),leftover_reusable_indexes);
var w__$2 = cljs.core.update.call(null,w__$1,new cljs.core.Keyword("ces","entities","ces/entities",1939820666),cljs.core.assoc,entity_index,entity__$1);
return cs_game.ces.register_entity.call(null,entity__$1,w__$2,systems);
});
cs_game.ces.add_entities_to_world = (function cs_game$ces$add_entities_to_world(entities,world,systems){
return cljs.core.reduce.call(null,(function (world__$1,entity){
return cs_game.ces.add_entity_to_world.call(null,entity,world__$1,systems);
}),world,entities);
});
cs_game.ces.remove_entity_from_world = (function cs_game$ces$remove_entity_from_world(entity_index,world){
var w = world;
var w__$1 = cljs.core.update.call(null,w,new cljs.core.Keyword("ces","entities","ces/entities",1939820666),cljs.core.assoc,entity_index,null);
var w__$2 = cs_game.ces.unregister_entity_index.call(null,entity_index,w__$1);
var w__$3 = cljs.core.update.call(null,w__$2,new cljs.core.Keyword("ces","system->entity-indexes","ces/system->entity-indexes",-128003505),((function (w,w__$1,w__$2){
return (function (system__GT_entity_indexes){
return cs_game.util.expanded_lang.map_values.call(null,((function (w,w__$1,w__$2){
return (function (p1__21316_SHARP_){
return cljs.core.disj.call(null,p1__21316_SHARP_,entity_index);
});})(w,w__$1,w__$2))
,system__GT_entity_indexes);
});})(w,w__$1,w__$2))
);
return cljs.core.update.call(null,w__$3,new cljs.core.Keyword("ces","reusable-indexes","ces/reusable-indexes",1813359377),cljs.core.conj,entity_index);
});
cs_game.ces.remove_entities_from_world = (function cs_game$ces$remove_entities_from_world(entity_indexes,initial_world){
return cljs.core.reduce.call(null,(function (world,entity_index){
return cs_game.ces.remove_entity_from_world.call(null,entity_index,world);
}),initial_world,entity_indexes);
});
cs_game.ces.normalise_system_fn_call = (function cs_game$ces$normalise_system_fn_call(system_fn,entity,world){
var result = system_fn.call(null,entity,world);
if(cljs.core.vector_QMARK_.call(null,result)){
return result;
} else {
if(cljs.core.map_QMARK_.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,world], null);
} else {
return null;
}
}
});
cs_game.ces.run_single_entity_system = (function cs_game$ces$run_single_entity_system(system_fn,entity_indexes,initial_world){
return cljs.core.reduce.call(null,(function (world,entity_index){
var entities = new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(world);
var entity = cljs.core.nth.call(null,entities,entity_index);
var vec__21320 = cs_game.ces.normalise_system_fn_call.call(null,system_fn,entity,world);
var updated_entity = cljs.core.nth.call(null,vec__21320,(0),null);
var updated_world = cljs.core.nth.call(null,vec__21320,(1),null);
return cljs.core.update.call(null,updated_world,new cljs.core.Keyword("ces","entities","ces/entities",1939820666),cljs.core.assoc,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(updated_entity),updated_entity);
}),initial_world,entity_indexes);
});
cs_game.ces.run_system = (function cs_game$ces$run_system(world,p__21323){
var map__21326 = p__21323;
var map__21326__$1 = ((((!((map__21326 == null)))?((((map__21326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21326):map__21326);
var key = cljs.core.get.call(null,map__21326__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var system_fn = cljs.core.get.call(null,map__21326__$1,new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736));
var multiple_entity_system_QMARK_ = cljs.core.get.call(null,map__21326__$1,new cljs.core.Keyword("ces","multiple-entity-system?","ces/multiple-entity-system?",1992435950));
var entity_indexes_for_system = key.call(null,new cljs.core.Keyword("ces","system->entity-indexes","ces/system->entity-indexes",-128003505).cljs$core$IFn$_invoke$arity$1(world));
if(cljs.core.truth_(cs_game.util.expanded_lang.strict_empty_QMARK_.call(null,entity_indexes_for_system))){
return world;
} else {
if(cljs.core.truth_(multiple_entity_system_QMARK_)){
return system_fn.call(null,entity_indexes_for_system,world);
} else {
return cs_game.ces.run_single_entity_system.call(null,system_fn,entity_indexes_for_system,world);
}
}
});
cs_game.ces.run_systems = (function cs_game$ces$run_systems(world,systems){
var w = world;
var w__$1 = cs_game.ces.remove_entities_from_world.call(null,new cljs.core.Keyword("ces","entity-indexes-to-remove","ces/entity-indexes-to-remove",601489288).cljs$core$IFn$_invoke$arity$1(w),w);
var w__$2 = cljs.core.assoc.call(null,w__$1,new cljs.core.Keyword("ces","entity-indexes-to-remove","ces/entity-indexes-to-remove",601489288),cljs.core.PersistentHashSet.EMPTY);
var w__$3 = cljs.core.reduce.call(null,cs_game.ces.run_system,w__$2,systems);
var w__$4 = cs_game.ces.add_entities_to_world.call(null,new cljs.core.Keyword("ces","entity-indexes-to-add","ces/entity-indexes-to-add",-346430583).cljs$core$IFn$_invoke$arity$1(w__$3),w__$3,systems);
return cljs.core.assoc.call(null,w__$4,new cljs.core.Keyword("ces","entity-indexes-to-add","ces/entity-indexes-to-add",-346430583),cljs.core.PersistentVector.EMPTY);
});
cs_game.ces.add_entity = (function cs_game$ces$add_entity(entity,world){
return cljs.core.update.call(null,world,new cljs.core.Keyword("ces","entity-indexes-to-add","ces/entity-indexes-to-add",-346430583),cljs.core.conj,entity);
});
cs_game.ces.add_entities = (function cs_game$ces$add_entities(entities,world){
return cljs.core.update.call(null,world,new cljs.core.Keyword("ces","entity-indexes-to-add","ces/entity-indexes-to-add",-346430583),(function (p1__21328_SHARP_){
return cljs.core.apply.call(null,cljs.core.conj,p1__21328_SHARP_,entities);
}));
});
cs_game.ces.remove_entity = (function cs_game$ces$remove_entity(entity_index,world){
return cljs.core.update.call(null,world,new cljs.core.Keyword("ces","entity-indexes-to-remove","ces/entity-indexes-to-remove",601489288),cljs.core.conj,entity_index);
});
cs_game.ces.remove_entities = (function cs_game$ces$remove_entities(entity_indexes,world){
return cljs.core.update.call(null,world,new cljs.core.Keyword("ces","entity-indexes-to-remove","ces/entity-indexes-to-remove",601489288),cljs.core.conj,cljs.core.apply.call(null,cljs.core.conj,cs_game.ces._PERCENT_,entity_indexes));
});
cs_game.ces.re_register_entity = (function cs_game$ces$re_register_entity(entity,world,systems){
var w = world;
var w__$1 = cs_game.ces.unregister_entity_index.call(null,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(entity),w);
return cs_game.ces.register_entity.call(null,entity,w__$1,systems);
});
cs_game.ces.re_register_entity_index = (function cs_game$ces$re_register_entity_index(index,world,systems){
var entity = cljs.core.nth.call(null,new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(world),index);
return cs_game.ces.re_register_entity.call(null,entity,world,systems);
});
cs_game.ces.key_for_system = (function cs_game$ces$key_for_system(p__21329){
var map__21332 = p__21329;
var map__21332__$1 = ((((!((map__21332 == null)))?((((map__21332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21332):map__21332);
var filter_fn = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252));
var key = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if((filter_fn instanceof cljs.core.Keyword)){
var or__20164__auto__ = key;
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
return filter_fn;
}
} else {
var or__20164__auto__ = key;
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
throw Error("system must have a keyword as filter-fn or define a custom label");
}
}
});
cs_game.ces.blank_world = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("ces","entities","ces/entities",1939820666),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ces","reusable-indexes","ces/reusable-indexes",1813359377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ces","system->entity-indexes","ces/system->entity-indexes",-128003505),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ces","entity-indexes-to-remove","ces/entity-indexes-to-remove",601489288),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("ces","entity-indexes-to-add","ces/entity-indexes-to-add",-346430583),cljs.core.PersistentVector.EMPTY], null);

//# sourceMappingURL=ces.js.map?rel=1496658278392
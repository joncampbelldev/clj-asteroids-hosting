// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.core');
goog.require('cljs.core');
goog.require('cs_game.util.shapes');
goog.require('cs_game.collisions');
goog.require('cs_game.util.maths');
goog.require('cs_game.view');
goog.require('cs_game.util.expanded_lang');
goog.require('cs_game.util.keyboard');
goog.require('cljs.pprint');
goog.require('cs_game.spatial_hashing');
goog.require('cs_game.util.easing');
goog.require('cs_game.util.canvas');
goog.require('cs_game.ces');
cljs.core.enable_console_print_BANG_.call(null);
cs_game.core.entity_type__GT_z_index = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"weapon","weapon",-504830232),(100),new cljs.core.Keyword(null,"spaceship","spaceship",371842471),(200),new cljs.core.Keyword(null,"asteroid","asteroid",1186392555),(300),new cljs.core.Keyword(null,"explosion","explosion",-1564989537),(400)], null);
cs_game.core.accelerate_forwards = (function cs_game$core$accelerate_forwards(rotation_in_degrees,velocity,max_speed,acceleration_magnitude){
var rotation = cs_game.util.maths.degrees_to_radians.call(null,rotation_in_degrees);
var acceleration = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(acceleration_magnitude * cs_game.util.maths.cos.call(null,rotation)),(acceleration_magnitude * cs_game.util.maths.sin.call(null,rotation))], null);
var new_velocity = cs_game.util.maths.v_PLUS_.call(null,velocity,acceleration);
var new_velocity_magnitude = cs_game.util.maths.vmag.call(null,new_velocity);
var max_velocity_magnitude = max_speed;
var scaled_velocity = (((new_velocity_magnitude > max_velocity_magnitude))?(function (){var scale = (max_velocity_magnitude / new_velocity_magnitude);
return cs_game.util.maths.v_STAR_.call(null,new_velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null));
})():new_velocity);
return scaled_velocity;
});
cs_game.core.keyboard_move = (function cs_game$core$keyboard_move(entity,world){
var map__22372 = new cljs.core.Keyword("entity","control-bindings","entity/control-bindings",-1474985954).cljs$core$IFn$_invoke$arity$1(entity);
var map__22372__$1 = ((((!((map__22372 == null)))?((((map__22372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22372):map__22372);
var up = cljs.core.get.call(null,map__22372__$1,new cljs.core.Keyword(null,"up","up",-269712113));
var left = cljs.core.get.call(null,map__22372__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__22372__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var e = entity;
var e__$1 = (cljs.core.truth_(cs_game.util.keyboard.held_QMARK_.call(null,up))?cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"velocity","velocity",-581524355),cs_game.core.accelerate_forwards.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"max-speed","max-speed",-997417461).cljs$core$IFn$_invoke$arity$1(e),(new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world) * new cljs.core.Keyword(null,"max-accel","max-accel",-2074782050).cljs$core$IFn$_invoke$arity$1(entity)))):e);
var e__$2 = (cljs.core.truth_(cs_game.util.keyboard.held_QMARK_.call(null,left))?cljs.core.update.call(null,e__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core._,(new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world) * new cljs.core.Keyword(null,"max-rotate-speed","max-rotate-speed",1401745496).cljs$core$IFn$_invoke$arity$1(entity))):e__$1);
if(cljs.core.truth_(cs_game.util.keyboard.held_QMARK_.call(null,right))){
return cljs.core.update.call(null,e__$2,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core._PLUS_,(new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world) * new cljs.core.Keyword(null,"max-rotate-speed","max-rotate-speed",1401745496).cljs$core$IFn$_invoke$arity$1(entity)));
} else {
return e__$2;
}
});
cs_game.core.create_laser_at_entity = (function cs_game$core$create_laser_at_entity(entity,offset_angle_in_degrees,color){
var rotation = cs_game.util.maths.degrees_to_radians.call(null,(offset_angle_in_degrees + new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(entity)));
var speed = (750);
var cos_rotation = cs_game.util.maths.cos.call(null,rotation);
var sin_rotation = cs_game.util.maths.sin.call(null,rotation);
var velocity = cs_game.util.maths.v_PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(speed * cos_rotation),(speed * sin_rotation)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(entity));
var size = (30);
var polygon_points = cs_game.util.shapes.rectangle.call(null,size,(6));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("view","type","view/type",1170670657),new cljs.core.Keyword("view","color","view/color",1017359682),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword("view","polygon-points","view/polygon-points",1518607115),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword("entity","remove-off-screen","entity/remove-off-screen",1543692850),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("entity","collision-polygon-points","entity/collision-polygon-points",-1924128388),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("view","z-index","view/z-index",1894086237),new cljs.core.Keyword("view","show-in-minimap","view/show-in-minimap",-367841985),new cljs.core.Keyword("entity","collision","entity/collision",-2066134017)],[new cljs.core.Keyword("view-type","polygon","view-type/polygon",-1856432167),color,(offset_angle_in_degrees + new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(entity)),polygon_points,size,true,cs_game.util.maths.v_PLUS_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity) * cos_rotation),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity) * sin_rotation)], null)),polygon_points,velocity,new cljs.core.Keyword(null,"weapon","weapon",-504830232).cljs$core$IFn$_invoke$arity$1(cs_game.core.entity_type__GT_z_index),true,new cljs.core.Keyword("entity-collision","projectile","entity-collision/projectile",1590944764)]);
});
cs_game.core.create_missile_at_entity = (function cs_game$core$create_missile_at_entity(entity){
var rotation = cs_game.util.maths.degrees_to_radians.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(entity));
var initial_speed = (200);
var cos_rotation = cs_game.util.maths.cos.call(null,rotation);
var sin_rotation = cs_game.util.maths.sin.call(null,rotation);
var velocity = cs_game.util.maths.v_PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(initial_speed * cos_rotation),(initial_speed * sin_rotation)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(entity));
var size = (30);
var polygon_points = cs_game.util.shapes.rectangle.call(null,size,(10));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("view","type","view/type",1170670657),new cljs.core.Keyword("view","color","view/color",1017359682),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword("entity","state-type","entity/state-type",1916692232),new cljs.core.Keyword(null,"max-speed","max-speed",-997417461),new cljs.core.Keyword("view","polygon-points","view/polygon-points",1518607115),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"fired-by-index","fired-by-index",1702185520),new cljs.core.Keyword("entity","remove-off-screen","entity/remove-off-screen",1543692850),new cljs.core.Keyword(null,"fuel-time","fuel-time",-2015756941),new cljs.core.Keyword(null,"radar-range","radar-range",1133884406),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"max-rotate-speed","max-rotate-speed",1401745496),new cljs.core.Keyword("entity","collision-polygon-points","entity/collision-polygon-points",-1924128388),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("view","z-index","view/z-index",1894086237),new cljs.core.Keyword(null,"max-accel","max-accel",-2074782050),new cljs.core.Keyword("view","show-in-minimap","view/show-in-minimap",-367841985),new cljs.core.Keyword("entity","collision","entity/collision",-2066134017)],[new cljs.core.Keyword("view-type","polygon","view-type/polygon",-1856432167),"grey",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("entity-state-type","missile","entity-state-type/missile",1793084995),(170),polygon_points,size,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(entity),true,(8),(600),cs_game.util.maths.v_PLUS_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity) * cos_rotation),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity) * sin_rotation)], null)),(360),polygon_points,velocity,new cljs.core.Keyword(null,"weapon","weapon",-504830232).cljs$core$IFn$_invoke$arity$1(cs_game.core.entity_type__GT_z_index),(900),true,new cljs.core.Keyword("entity-collision","projectile","entity-collision/projectile",1590944764)]);
});
if(typeof cs_game.core.fire_weapon_from_entity !== 'undefined'){
} else {
cs_game.core.fire_weapon_from_entity = (function (){var method_table__21357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21361__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cs-game.core","fire-weapon-from-entity"),((function (method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__){
return (function (weapon,_,___$1){
return new cljs.core.Keyword("weapon","type","weapon/type",-1907642440).cljs$core$IFn$_invoke$arity$1(weapon);
});})(method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21361__auto__,method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__));
})();
}
cljs.core._add_method.call(null,cs_game.core.fire_weapon_from_entity,new cljs.core.Keyword("weapon-type","missile","weapon-type/missile",1714208154),(function (weapon,entity,world){
var missile = cs_game.core.create_missile_at_entity.call(null,entity);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [weapon,entity,cs_game.ces.add_entity.call(null,missile,world)], null);
}));
cljs.core._add_method.call(null,cs_game.core.fire_weapon_from_entity,new cljs.core.Keyword("weapon-type","single-laser","weapon-type/single-laser",-1572545388),(function (weapon,entity,world){
var laser = cs_game.core.create_laser_at_entity.call(null,entity,(0),"lightgreen");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [weapon,entity,cs_game.ces.add_entity.call(null,laser,world)], null);
}));
cljs.core._add_method.call(null,cs_game.core.fire_weapon_from_entity,new cljs.core.Keyword("weapon-type","shotgun-laser","weapon-type/shotgun-laser",-547711473),(function (weapon,entity,world){
var lasers = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs_game.core.create_laser_at_entity.call(null,entity,(0),"red"),cs_game.core.create_laser_at_entity.call(null,entity,(-4),"red"),cs_game.core.create_laser_at_entity.call(null,entity,(4),"red"),cs_game.core.create_laser_at_entity.call(null,entity,(-8),"red"),cs_game.core.create_laser_at_entity.call(null,entity,(8),"red")], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [weapon,entity,cs_game.ces.add_entities.call(null,lasers,world)], null);
}));
cljs.core._add_method.call(null,cs_game.core.fire_weapon_from_entity,new cljs.core.Keyword("weapon-type","scatter-shot","weapon-type/scatter-shot",-1852810382),(function (weapon,entity,world){
var colours = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","pink","blue","lightblue","green","white","black"], null);
var shots = cljs.core.repeatedly.call(null,cs_game.util.maths.rand_between.call(null,(8),(16)),((function (colours){
return (function (){
return cs_game.core.create_laser_at_entity.call(null,entity,cs_game.util.maths.rand_between.call(null,(0),(360)),cljs.core.rand_nth.call(null,colours));
});})(colours))
);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [weapon,entity,cs_game.ces.add_entities.call(null,shots,world)], null);
}));
cs_game.core.shoot = (function cs_game$core$shoot(entity,world){
var weapons = new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(entity);
var weapon_index = new cljs.core.Keyword(null,"current-weapon-index","current-weapon-index",-428004435).cljs$core$IFn$_invoke$arity$1(entity);
var weapon = cljs.core.nth.call(null,weapons,weapon_index);
var vec__22377 = cs_game.core.fire_weapon_from_entity.call(null,weapon,entity,world);
var updated_weapon = cljs.core.nth.call(null,vec__22377,(0),null);
var updated_entity = cljs.core.nth.call(null,vec__22377,(1),null);
var updated_world = cljs.core.nth.call(null,vec__22377,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,updated_entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weapons","weapons",-1983639898),weapon_index], null),updated_weapon),updated_world], null);
});
cs_game.core.change_weapon = (function cs_game$core$change_weapon(entity,_){
return cljs.core.update.call(null,entity,new cljs.core.Keyword(null,"current-weapon-index","current-weapon-index",-428004435),(function (p1__22380_SHARP_){
return cljs.core.mod.call(null,(p1__22380_SHARP_ + (1)),cljs.core.count.call(null,new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(entity)));
}));
});
cs_game.core.keyboard_weapon_control = (function cs_game$core$keyboard_weapon_control(entity,world){
var key_bindings = new cljs.core.Keyword("entity","control-bindings","entity/control-bindings",-1474985954).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"shoot","shoot",-696325137).cljs$core$IFn$_invoke$arity$1(key_bindings)))){
return cs_game.core.shoot.call(null,entity,world);
} else {
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"change-weapon","change-weapon",-1862959536).cljs$core$IFn$_invoke$arity$1(key_bindings)))){
return cs_game.core.change_weapon.call(null,entity,world);
} else {
return entity;

}
}
});
cs_game.core.moving = (function cs_game$core$moving(entity,world){
var delta = new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world);
return cljs.core.update.call(null,entity,new cljs.core.Keyword(null,"position","position",-2011731912),cs_game.util.maths.v_PLUS_,cs_game.util.maths.v_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta,delta], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(entity)));
});
cs_game.core.rotating = (function cs_game$core$rotating(entity,world){
return cljs.core.update.call(null,entity,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core._PLUS_,(new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world) * new cljs.core.Keyword(null,"rotate-speed","rotate-speed",-564390296).cljs$core$IFn$_invoke$arity$1(entity)));
});
cs_game.core.remove_off_screen = (function cs_game$core$remove_off_screen(entity,world){
var vec__22387 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity);
var x = cljs.core.nth.call(null,vec__22387,(0),null);
var y = cljs.core.nth.call(null,vec__22387,(1),null);
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity);
var vec__22390 = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(world);
var world_width = cljs.core.nth.call(null,vec__22390,(0),null);
var world_height = cljs.core.nth.call(null,vec__22390,(1),null);
var left = ((0) - size);
var right = (world_width + size);
var top = ((0) - size);
var bottom = (world_height + size);
var off_screen_QMARK_ = ((x < left)) || ((x > right)) || ((y < top)) || ((y > bottom));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,((off_screen_QMARK_)?cs_game.ces.remove_entity.call(null,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(entity),world):world)], null);
});
cs_game.core.bounce_off_edge = (function cs_game$core$bounce_off_edge(entity,world){
var vec__22399 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity);
var x = cljs.core.nth.call(null,vec__22399,(0),null);
var y = cljs.core.nth.call(null,vec__22399,(1),null);
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(entity);
var half_size = (size / (2));
var vec__22402 = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(world);
var world_width = cljs.core.nth.call(null,vec__22402,(0),null);
var world_height = cljs.core.nth.call(null,vec__22402,(1),null);
var left = ((0) + half_size);
var right = (world_width - half_size);
var top = ((0) + half_size);
var bottom = (world_height - half_size);
var coef_restitution = (- new cljs.core.Keyword("entity","bounce-off-edge","entity/bounce-off-edge",-1725318284).cljs$core$IFn$_invoke$arity$1(entity));
var e = entity;
var e__$1 = (((x < left))?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),(0)], null),cljs.core._STAR_,coef_restitution),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),left):e);
var e__$2 = (((x > right))?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),(0)], null),cljs.core._STAR_,coef_restitution),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),right):e__$1);
var e__$3 = (((y < top))?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,e__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),(1)], null),cljs.core._STAR_,coef_restitution),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null),top):e__$2);
if((y > bottom)){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,e__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),(1)], null),cljs.core._STAR_,coef_restitution),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null),bottom);
} else {
return e__$3;
}
});
cs_game.core.damage_for_speed_diff = (function cs_game$core$damage_for_speed_diff(velocity1,velocity2){
var diff = cs_game.util.maths.abs.call(null,cs_game.util.maths.vmag.call(null,cs_game.util.maths.v_.call(null,velocity1,velocity2)));
if((diff > (80))){
return (diff / (10));
} else {
return (0);
}
});
cljs.core._add_method.call(null,cs_game.collisions.collision_between,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175),new cljs.core.Keyword("entity-collision","asteroid","entity-collision/asteroid",884980787)], null),(function (spaceship,asteroid,response,world){
var updated_spaceship = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spaceship,new cljs.core.Keyword(null,"position","position",-2011731912),cs_game.util.maths.v_,new cljs.core.Keyword(null,"overlap","overlap",-1673335644).cljs$core$IFn$_invoke$arity$1(response)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),cs_game.util.maths.v_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.5], null)),new cljs.core.Keyword("entity","health","entity/health",-1396663748),cljs.core._,cs_game.core.damage_for_speed_diff.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(spaceship),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(asteroid)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_spaceship,asteroid,world], null);
}));
cs_game.core.base_explosion = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("entity","state-type","entity/state-type",1916692232),new cljs.core.Keyword("entity-state-type","explosion","entity-state-type/explosion",-944358785),new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword("view","alpha","view/alpha",-1578568844),(1),new cljs.core.Keyword("view","type","view/type",1170670657),new cljs.core.Keyword("view-type","explosion","view-type/explosion",88568893),new cljs.core.Keyword("view","z-index","view/z-index",1894086237),new cljs.core.Keyword(null,"explosion","explosion",-1564989537).cljs$core$IFn$_invoke$arity$1(cs_game.core.entity_type__GT_z_index)], null);
cs_game.core.spaceship_explosions = (function cs_game$core$spaceship_explosions(position){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cs_game.core.base_explosion,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-size","max-size",-874966132),(100),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword("view","color","view/color",1017359682),"red",new cljs.core.Keyword(null,"duration","duration",1444101068),2.5,new cljs.core.Keyword("view","no-outline","view/no-outline",-2088140596),true], null)),cljs.core.merge.call(null,cs_game.core.base_explosion,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-size","max-size",-874966132),(150),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword("view","color","view/color",1017359682),"orange",new cljs.core.Keyword(null,"duration","duration",1444101068),1.5,new cljs.core.Keyword("view","no-outline","view/no-outline",-2088140596),true], null)),cljs.core.merge.call(null,cs_game.core.base_explosion,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-size","max-size",-874966132),(250),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword("view","color","view/color",1017359682),"yellow",new cljs.core.Keyword(null,"duration","duration",1444101068),(1)], null))], null);
});
cs_game.core.laser_explosions = (function cs_game$core$laser_explosions(p__22405){
var map__22408 = p__22405;
var map__22408__$1 = ((((!((map__22408 == null)))?((((map__22408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22408):map__22408);
var position = cljs.core.get.call(null,map__22408__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var color = cljs.core.get.call(null,map__22408__$1,new cljs.core.Keyword("view","color","view/color",1017359682));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cs_game.core.base_explosion,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(50),new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword("view","color","view/color",1017359682),"white",new cljs.core.Keyword("view","no-outline","view/no-outline",-2088140596),true], null)),cljs.core.merge.call(null,cs_game.core.base_explosion,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(100),new cljs.core.Keyword(null,"duration","duration",1444101068),0.75,new cljs.core.Keyword("view","color","view/color",1017359682),color], null))], null);
});
cljs.core._add_method.call(null,cs_game.collisions.collision_between,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175),new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175)], null),(function (spaceship1,spaceship2,response,world){
var damage = cs_game.core.damage_for_speed_diff.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(spaceship1),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(spaceship2));
var updated_spaceship1 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spaceship1,new cljs.core.Keyword(null,"position","position",-2011731912),cs_game.util.maths.v_,new cljs.core.Keyword(null,"overlap","overlap",-1673335644).cljs$core$IFn$_invoke$arity$1(response)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),cs_game.util.maths.v_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.5], null)),new cljs.core.Keyword("entity","health","entity/health",-1396663748),cljs.core._,damage);
var updated_spaceship2 = cljs.core.update.call(null,cljs.core.update.call(null,spaceship2,new cljs.core.Keyword(null,"velocity","velocity",-581524355),cs_game.util.maths.v_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.5], null)),new cljs.core.Keyword("entity","health","entity/health",-1396663748),cljs.core._,damage);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_spaceship1,updated_spaceship2,world], null);
}));
cs_game.core.explode_laser = (function cs_game$core$explode_laser(laser,world){
return cs_game.ces.add_entities.call(null,cs_game.core.laser_explosions.call(null,laser),cs_game.ces.remove_entity.call(null,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(laser),world));
});
cljs.core._add_method.call(null,cs_game.collisions.collision_between,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity-collision","projectile","entity-collision/projectile",1590944764),new cljs.core.Keyword("entity-collision","asteroid","entity-collision/asteroid",884980787)], null),(function (laser,asteroid,_,world){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [laser,asteroid,cs_game.core.explode_laser.call(null,laser,world)], null);
}));
cljs.core._add_method.call(null,cs_game.collisions.collision_between,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity-collision","projectile","entity-collision/projectile",1590944764),new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175)], null),(function (laser,spaceship,_,world){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [laser,cljs.core.update.call(null,spaceship,new cljs.core.Keyword("entity","health","entity/health",-1396663748),cljs.core._,(20)),cs_game.core.explode_laser.call(null,laser,world)], null);
}));
cs_game.core.track_with_camera = (function cs_game$core$track_with_camera(entity,world){
var camera_index = new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528).cljs$core$IFn$_invoke$arity$1(entity);
var updated_world = cljs.core.assoc_in.call(null,world,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cameras","cameras",-1446544612),camera_index,new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,updated_world], null);
});
if(typeof cs_game.core.on_entity_death !== 'undefined'){
} else {
cs_game.core.on_entity_death = (function (){var method_table__21357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21361__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cs-game.core","on-entity-death"),((function (method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__){
return (function (entity,_){
return new cljs.core.Keyword(null,"death-type","death-type",-784670422).cljs$core$IFn$_invoke$arity$1(entity);
});})(method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21361__auto__,method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__));
})();
}
cljs.core._add_method.call(null,cs_game.core.on_entity_death,new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175),(function (spaceship,world){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceship,cs_game.ces.add_entities.call(null,cs_game.core.spaceship_explosions.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(spaceship)),cs_game.ces.remove_entity.call(null,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(spaceship),world))], null);
}));
cs_game.core.check_if_dead = (function cs_game$core$check_if_dead(entity,world){
if((new cljs.core.Keyword("entity","health","entity/health",-1396663748).cljs$core$IFn$_invoke$arity$1(entity) <= (0))){
return cs_game.core.on_entity_death.call(null,entity,world);
} else {
return entity;
}
});
if(typeof cs_game.core.state_tick !== 'undefined'){
} else {
cs_game.core.state_tick = (function (){var method_table__21357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21361__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cs-game.core","state-tick"),((function (method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__){
return (function (entity,_){
return new cljs.core.Keyword("entity","state-type","entity/state-type",1916692232).cljs$core$IFn$_invoke$arity$1(entity);
});})(method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21361__auto__,method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__));
})();
}
cs_game.core.do_state_update = (function cs_game$core$do_state_update(entity,world){
var result = cs_game.core.state_tick.call(null,entity,world);
var vec__22413 = ((cljs.core.vector_QMARK_.call(null,result))?result:((cljs.core.map_QMARK_.call(null,result))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,world], null):null));
var updated_entity = cljs.core.nth.call(null,vec__22413,(0),null);
var updated_world = cljs.core.nth.call(null,vec__22413,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,updated_entity,new cljs.core.Keyword("entity","time","entity/time",-1443064659),cljs.core._PLUS_,new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world)),updated_world], null);
});
cljs.core._add_method.call(null,cs_game.core.state_tick,new cljs.core.Keyword("entity-state-type","explosion","entity-state-type/explosion",-944358785),(function (explosion,world){
var map__22416 = explosion;
var map__22416__$1 = ((((!((map__22416 == null)))?((((map__22416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22416):map__22416);
var time = cljs.core.get.call(null,map__22416__$1,new cljs.core.Keyword("entity","time","entity/time",-1443064659));
var duration = cljs.core.get.call(null,map__22416__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var ease_value = cs_game.util.easing.out_expo.call(null,time,duration,(0),(1));
if((time <= duration)){
return cljs.core.assoc.call(null,explosion,new cljs.core.Keyword(null,"size","size",1098693007),(new cljs.core.Keyword(null,"max-size","max-size",-874966132).cljs$core$IFn$_invoke$arity$1(explosion) * ease_value),new cljs.core.Keyword("view","alpha","view/alpha",-1578568844),((1) - ease_value));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [explosion,cs_game.ces.remove_entity.call(null,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(explosion),world)], null);
}
}));
cs_game.core.find_nearest_spaceship = (function cs_game$core$find_nearest_spaceship(missile,world){
var range = new cljs.core.Keyword(null,"radar-range","radar-range",1133884406).cljs$core$IFn$_invoke$arity$1(missile);
var entity_spatial_hash = new cljs.core.Keyword(null,"entity-spatial-hash","entity-spatial-hash",112773425).cljs$core$IFn$_invoke$arity$1(world);
var entities = new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(world);
var nearby_entity_indexes = cs_game.spatial_hashing.nearby_entity_indexes.call(null,entity_spatial_hash,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(missile),new cljs.core.Keyword(null,"size","size",1098693007),(range * (2))], null));
var nearby_entities = cljs.core.mapv.call(null,((function (range,entity_spatial_hash,entities,nearby_entity_indexes){
return (function (p1__22418_SHARP_){
return cljs.core.nth.call(null,entities,p1__22418_SHARP_);
});})(range,entity_spatial_hash,entities,nearby_entity_indexes))
,nearby_entity_indexes);
var nearby_spaceships = cljs.core.filterv.call(null,((function (range,entity_spatial_hash,entities,nearby_entity_indexes,nearby_entities){
return (function (p1__22419_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword("entity","collision","entity/collision",-2066134017).cljs$core$IFn$_invoke$arity$1(p1__22419_SHARP_),new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(p1__22419_SHARP_),new cljs.core.Keyword(null,"fired-by-index","fired-by-index",1702185520).cljs$core$IFn$_invoke$arity$1(missile))) && ((cs_game.util.maths.vmag.call(null,cs_game.util.maths.v_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__22419_SHARP_),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(missile))) < range));
});})(range,entity_spatial_hash,entities,nearby_entity_indexes,nearby_entities))
,nearby_entities);
if(cljs.core.empty_QMARK_.call(null,nearby_spaceships)){
return null;
} else {
return cljs.core.rand_nth.call(null,nearby_spaceships);
}
});
cs_game.core.aim_missile_towards_target = (function cs_game$core$aim_missile_towards_target(missile,target,delta){
return cljs.core.update.call(null,missile,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(function (current_angle){
var current_angle__$1 = cljs.core.mod.call(null,current_angle,(360));
var predicted_position = cs_game.util.maths.v_PLUS_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(target),cs_game.util.maths.v_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta,delta], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(target)));
var vec__22426 = cs_game.util.maths.v_.call(null,predicted_position,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(missile));
var dx = cljs.core.nth.call(null,vec__22426,(0),null);
var dy = cljs.core.nth.call(null,vec__22426,(1),null);
var angle_to_target = cs_game.util.maths.radians_to_degrees.call(null,cs_game.util.maths.atan2.call(null,dy,dx));
var delta_angle = cs_game.util.maths.abs.call(null,(current_angle__$1 - angle_to_target));
var go_other_way_QMARK_ = (delta_angle > (180));
var vec__22429 = (((go_other_way_QMARK_) && ((angle_to_target > current_angle__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_angle__$1,(angle_to_target - (360))], null):(((go_other_way_QMARK_) && ((current_angle__$1 > angle_to_target)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(current_angle__$1 - (360)),angle_to_target], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_angle__$1,angle_to_target], null)
));
var current_angle__$2 = cljs.core.nth.call(null,vec__22429,(0),null);
var angle_to_target__$1 = cljs.core.nth.call(null,vec__22429,(1),null);
return cs_game.util.maths.move_towards_linear.call(null,current_angle__$2,angle_to_target__$1,(delta * new cljs.core.Keyword(null,"max-rotate-speed","max-rotate-speed",1401745496).cljs$core$IFn$_invoke$arity$1(missile)));
}));
});
cljs.core._add_method.call(null,cs_game.core.state_tick,new cljs.core.Keyword("entity-state-type","missile","entity-state-type/missile",1793084995),(function (missile,world){
var G__22432 = (((new cljs.core.Keyword(null,"missile-state","missile-state",-671628636).cljs$core$IFn$_invoke$arity$1(missile) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"missile-state","missile-state",-671628636).cljs$core$IFn$_invoke$arity$1(missile).fqn:null);
switch (G__22432) {
case "searching":
var temp__4655__auto__ = cs_game.core.find_nearest_spaceship.call(null,missile,world);
if(cljs.core.truth_(temp__4655__auto__)){
var nearest_spaceship = temp__4655__auto__;
return cljs.core.assoc.call(null,missile,new cljs.core.Keyword(null,"missile-state","missile-state",-671628636),new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"missile-target-index","missile-target-index",-1137991743),new cljs.core.Keyword("entity","id","entity/id",400070257).cljs$core$IFn$_invoke$arity$1(nearest_spaceship));
} else {
return missile;
}

break;
case "locked":
if((cljs.core.nth.call(null,new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"missile-target-index","missile-target-index",-1137991743).cljs$core$IFn$_invoke$arity$1(missile)) == null)){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,missile,new cljs.core.Keyword(null,"missile-state","missile-state",-671628636),new cljs.core.Keyword(null,"searching","searching",1101390875)),new cljs.core.Keyword(null,"missile-target-index","missile-target-index",-1137991743));
} else {
if((new cljs.core.Keyword(null,"fuel-time","fuel-time",-2015756941).cljs$core$IFn$_invoke$arity$1(missile) > (0))){
return cljs.core.update.call(null,cljs.core.assoc.call(null,cs_game.core.aim_missile_towards_target.call(null,missile,cljs.core.nth.call(null,new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"missile-target-index","missile-target-index",-1137991743).cljs$core$IFn$_invoke$arity$1(missile)),new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),cs_game.core.accelerate_forwards.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(missile),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(missile),new cljs.core.Keyword(null,"max-speed","max-speed",-997417461).cljs$core$IFn$_invoke$arity$1(missile),(new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world) * new cljs.core.Keyword(null,"max-accel","max-accel",-2074782050).cljs$core$IFn$_invoke$arity$1(missile)))),new cljs.core.Keyword(null,"fuel-time","fuel-time",-2015756941),cljs.core._,new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(world));
} else {
return missile;

}
}

break;
default:
return cljs.core.assoc.call(null,missile,new cljs.core.Keyword(null,"missile-state","missile-state",-671628636),new cljs.core.Keyword(null,"searching","searching",1101390875));

}
}));
cs_game.core.systems = cljs.core.mapv.call(null,(function (p1__22434_SHARP_){
return cljs.core.assoc.call(null,p1__22434_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587),cs_game.ces.key_for_system.call(null,p1__22434_SHARP_));
}),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword("entity","control-bindings","entity/control-bindings",-1474985954),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.keyboard_move], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.moving], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword(null,"rotate-speed","rotate-speed",-564390296),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.rotating], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword("entity","control-bindings","entity/control-bindings",-1474985954),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.keyboard_weapon_control], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword("entity","health","entity/health",-1396663748),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.check_if_dead], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword("entity","state-type","entity/state-type",1916692232),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.do_state_update], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword("entity","bounce-off-edge","entity/bounce-off-edge",-1725318284),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.bounce_off_edge], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword("entity","remove-off-screen","entity/remove-off-screen",1543692850),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.remove_off_screen], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword("entity","collision","entity/collision",-2066134017),new cljs.core.Keyword("ces","multiple-entity-system?","ces/multiple-entity-system?",1992435950),true,new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.collisions.system], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ces","filter-fn","ces/filter-fn",1689246252),new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528),new cljs.core.Keyword("ces","system-fn","ces/system-fn",1485812736),cs_game.core.track_with_camera], null)], null));
cs_game.core.initial_screen_dimensions = cs_game.util.expanded_lang.get_window_dimensions.call(null);
cs_game.core.initial_screen_width = cljs.core.nth.call(null,cs_game.core.initial_screen_dimensions,(0));
cs_game.core.initial_screen_height = cljs.core.nth.call(null,cs_game.core.initial_screen_dimensions,(1));
cs_game.core.initial_world_width = (3000);
cs_game.core.initial_world_height = (3000);
cs_game.core.initial_world_dimensions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs_game.core.initial_world_width,cs_game.core.initial_world_height], null);
cs_game.core.single_laser = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("weapon","type","weapon/type",-1907642440),new cljs.core.Keyword("weapon-type","single-laser","weapon-type/single-laser",-1572545388),new cljs.core.Keyword("weapon","short-label","weapon/short-label",1562600247),"1"], null);
cs_game.core.shotgun_laser = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("weapon","type","weapon/type",-1907642440),new cljs.core.Keyword("weapon-type","shotgun-laser","weapon-type/shotgun-laser",-547711473),new cljs.core.Keyword("weapon","short-label","weapon/short-label",1562600247),"SG"], null);
cs_game.core.scatter_shot = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("weapon","type","weapon/type",-1907642440),new cljs.core.Keyword("weapon-type","scatter-shot","weapon-type/scatter-shot",-1852810382),new cljs.core.Keyword("weapon","short-label","weapon/short-label",1562600247),"X"], null);
cs_game.core.missile = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("weapon","type","weapon/type",-1907642440),new cljs.core.Keyword("weapon-type","missile","weapon-type/missile",1714208154),new cljs.core.Keyword("weapon","short-label","weapon/short-label",1562600247),"M"], null);
cs_game.core.starter_weapons = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs_game.core.single_laser,cs_game.core.shotgun_laser,cs_game.core.scatter_shot,cs_game.core.missile], null);
cs_game.core.default_player_size = (35);
cs_game.core.player_polygon_points = cs_game.util.shapes.isoceles_triangle.call(null,cs_game.core.default_player_size);
cs_game.core.base_player = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("view","type","view/type",1170670657),new cljs.core.Keyword(null,"weapons","weapons",-1983639898),new cljs.core.Keyword(null,"death-type","death-type",-784670422),new cljs.core.Keyword(null,"max-speed","max-speed",-997417461),new cljs.core.Keyword("view","polygon-points","view/polygon-points",1518607115),new cljs.core.Keyword(null,"current-weapon-index","current-weapon-index",-428004435),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword("entity","bounce-off-edge","entity/bounce-off-edge",-1725318284),new cljs.core.Keyword(null,"max-rotate-speed","max-rotate-speed",1401745496),new cljs.core.Keyword("entity","collision-polygon-points","entity/collision-polygon-points",-1924128388),new cljs.core.Keyword("entity","health","entity/health",-1396663748),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("view","z-index","view/z-index",1894086237),new cljs.core.Keyword(null,"max-accel","max-accel",-2074782050),new cljs.core.Keyword("view","show-in-minimap","view/show-in-minimap",-367841985),new cljs.core.Keyword("entity","collision","entity/collision",-2066134017)],[new cljs.core.Keyword("view-type","polygon","view-type/polygon",-1856432167),cs_game.core.starter_weapons,new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175),(150),cs_game.core.player_polygon_points,(0),cs_game.core.default_player_size,0.5,(150),cs_game.core.player_polygon_points,(100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"spaceship","spaceship",371842471).cljs$core$IFn$_invoke$arity$1(cs_game.core.entity_type__GT_z_index),(300),true,new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175)]);
cs_game.core.create_player1 = (function cs_game$core$create_player1(){
return cljs.core.merge.call(null,cs_game.core.base_player,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("view","color","view/color",1017359682),"white",new cljs.core.Keyword("entity","team","entity/team",-2145323630),(1),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cs_game.core.initial_world_width * 0.34),(cs_game.core.initial_world_height * 0.34)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(45),new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528),(0),new cljs.core.Keyword("entity","control-bindings","entity/control-bindings",-1474985954),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),(65),new cljs.core.Keyword(null,"right","right",-452581833),(68),new cljs.core.Keyword(null,"up","up",-269712113),(87),new cljs.core.Keyword(null,"down","down",1565245570),(83),new cljs.core.Keyword(null,"shoot","shoot",-696325137),(70),new cljs.core.Keyword(null,"change-weapon","change-weapon",-1862959536),(71)], null)], null));
});
cs_game.core.create_player2 = (function cs_game$core$create_player2(){
return cljs.core.merge.call(null,cs_game.core.base_player,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("view","color","view/color",1017359682),"green",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(135),new cljs.core.Keyword("entity","team","entity/team",-2145323630),(2),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cs_game.core.initial_world_width * 0.67),(cs_game.core.initial_world_height * 0.34)], null),new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528),(1),new cljs.core.Keyword("entity","control-bindings","entity/control-bindings",-1474985954),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),(37),new cljs.core.Keyword(null,"right","right",-452581833),(39),new cljs.core.Keyword(null,"up","up",-269712113),(38),new cljs.core.Keyword(null,"down","down",1565245570),(40),new cljs.core.Keyword(null,"shoot","shoot",-696325137),(79),new cljs.core.Keyword(null,"change-weapon","change-weapon",-1862959536),(80)], null)], null));
});
cs_game.core.create_player3 = (function cs_game$core$create_player3(){
return cljs.core.merge.call(null,cs_game.core.base_player,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("view","color","view/color",1017359682),"blue",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(315),new cljs.core.Keyword("entity","team","entity/team",-2145323630),(3),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cs_game.core.initial_world_width * 0.34),(cs_game.core.initial_world_height * 0.67)], null),new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528),(2),new cljs.core.Keyword("entity","control-bindings","entity/control-bindings",-1474985954),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),(37),new cljs.core.Keyword(null,"right","right",-452581833),(39),new cljs.core.Keyword(null,"up","up",-269712113),(38),new cljs.core.Keyword(null,"down","down",1565245570),(40),new cljs.core.Keyword(null,"shoot","shoot",-696325137),(75),new cljs.core.Keyword(null,"change-weapon","change-weapon",-1862959536),(76)], null)], null));
});
cs_game.core.create_player4 = (function cs_game$core$create_player4(){
return cljs.core.merge.call(null,cs_game.core.base_player,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("view","color","view/color",1017359682),"purple",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(225),new cljs.core.Keyword("entity","team","entity/team",-2145323630),(4),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cs_game.core.initial_world_width * 0.67),(cs_game.core.initial_world_height * 0.67)], null),new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528),(3),new cljs.core.Keyword("entity","control-bindings","entity/control-bindings",-1474985954),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),(37),new cljs.core.Keyword(null,"right","right",-452581833),(39),new cljs.core.Keyword(null,"up","up",-269712113),(38),new cljs.core.Keyword(null,"down","down",1565245570),(40),new cljs.core.Keyword(null,"shoot","shoot",-696325137),(75),new cljs.core.Keyword(null,"change-weapon","change-weapon",-1862959536),(76)], null)], null));
});
cs_game.core.create_random_asteroid = (function cs_game$core$create_random_asteroid(){
var size = cs_game.util.maths.rand_between.call(null,(30),(300));
var points = cs_game.util.shapes.random_sided_convex_polygon.call(null,(size / (2)));
var position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null,cs_game.core.initial_world_width),cljs.core.rand.call(null,cs_game.core.initial_world_height)], null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("view","type","view/type",1170670657),new cljs.core.Keyword("view","color","view/color",1017359682),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"rotate-speed","rotate-speed",-564390296),new cljs.core.Keyword("view","polygon-points","view/polygon-points",1518607115),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword("entity","bounce-off-edge","entity/bounce-off-edge",-1725318284),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("entity","collision-polygon-points","entity/collision-polygon-points",-1924128388),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("view","z-index","view/z-index",1894086237),new cljs.core.Keyword("view","show-in-minimap","view/show-in-minimap",-367841985),new cljs.core.Keyword("entity","collision","entity/collision",-2066134017)],[new cljs.core.Keyword("view-type","polygon","view-type/polygon",-1856432167),"saddlebrown",(0),cs_game.util.maths.rand_between.call(null,(-30),(30)),points,size,(1),position,points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs_game.util.maths.rand_between.call(null,(-30),(30)),cs_game.util.maths.rand_between.call(null,(-30),(30))], null),new cljs.core.Keyword(null,"asteroid","asteroid",1186392555).cljs$core$IFn$_invoke$arity$1(cs_game.core.entity_type__GT_z_index),true,new cljs.core.Keyword("entity-collision","asteroid","entity-collision/asteroid",884980787)]);
});
cs_game.core.cameras_for_2players = (function cs_game$core$cameras_for_2players(player1,player2){
var half_screen_width = (cs_game.core.initial_screen_width / (2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player1),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,cs_game.core.initial_screen_height], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player2),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,(0)], null),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,cs_game.core.initial_screen_height], null)], null)], null);
});
cs_game.core.cameras_for_3players = (function cs_game$core$cameras_for_3players(player1,player2,player3){
var half_screen_width = (cs_game.core.initial_screen_width / (2));
var half_screen_height = (cs_game.core.initial_screen_height / (2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player1),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,half_screen_height], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player2),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,(0)], null),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,half_screen_height], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player3),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),half_screen_height], null),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,half_screen_height], null)], null)], null);
});
cs_game.core.cameras_for_4players = (function cs_game$core$cameras_for_4players(player1,player2,player3,player4){
var half_screen_width = (cs_game.core.initial_screen_width / (2));
var half_screen_height = (cs_game.core.initial_screen_height / (2));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player1),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,half_screen_height], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player2),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,(0)], null),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,half_screen_height], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player3),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),half_screen_height], null),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,half_screen_height], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player4),new cljs.core.Keyword(null,"hud-position","hud-position",-657920396),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"screen-position","screen-position",356064906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,half_screen_height], null),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_screen_width,half_screen_height], null)], null)], null);
});
cs_game.core.collision_pairs = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity-collision","projectile","entity-collision/projectile",1590944764),new cljs.core.Keyword("entity-collision","asteroid","entity-collision/asteroid",884980787)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175),new cljs.core.Keyword("entity-collision","asteroid","entity-collision/asteroid",884980787)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175),new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity-collision","projectile","entity-collision/projectile",1590944764),new cljs.core.Keyword("entity-collision","spaceship","entity-collision/spaceship",455006175)], null)], true);
cs_game.core.number_of_asteroids = (70);
cs_game.core.create_world = (function cs_game$core$create_world(number_of_players){
var players = (function (){var G__22437 = number_of_players;
switch (G__22437) {
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs_game.core.create_player1.call(null),cs_game.core.create_player2.call(null)], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs_game.core.create_player1.call(null),cs_game.core.create_player2.call(null),cs_game.core.create_player3.call(null)], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs_game.core.create_player1.call(null),cs_game.core.create_player2.call(null),cs_game.core.create_player3.call(null),cs_game.core.create_player4.call(null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(number_of_players)].join('')));

}
})();
var cameras = (function (){var G__22438 = number_of_players;
switch (G__22438) {
case (2):
return cljs.core.apply.call(null,cs_game.core.cameras_for_2players,players);

break;
case (3):
return cljs.core.apply.call(null,cs_game.core.cameras_for_3players,players);

break;
case (4):
return cljs.core.apply.call(null,cs_game.core.cameras_for_4players,players);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(number_of_players)].join('')));

}
})();
var entities = cs_game.util.expanded_lang.concatv.call(null,cs_game.util.expanded_lang.concatv.call(null,cljs.core.PersistentVector.EMPTY,players),cljs.core.mapv.call(null,cs_game.core.create_random_asteroid,cljs.core.range.call(null,cs_game.core.number_of_asteroids)));
var w = cs_game.ces.blank_world;
var w__$1 = cljs.core.merge.call(null,w,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"collision-pairs","collision-pairs",774660318),cs_game.core.collision_pairs,new cljs.core.Keyword(null,"spatial-hash-config","spatial-hash-config",-1132303178),cs_game.spatial_hashing.generate_config.call(null,cs_game.core.initial_world_width,cs_game.core.initial_world_height,(5),(400)),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),cs_game.core.initial_world_dimensions,new cljs.core.Keyword(null,"screen-dimensions","screen-dimensions",-836470069),cs_game.core.initial_screen_dimensions,new cljs.core.Keyword(null,"cameras","cameras",-1446544612),cameras,new cljs.core.Keyword(null,"delta","delta",108939957),(1),new cljs.core.Keyword(null,"delta-scale","delta-scale",-933186809),(1)], null));
var w__$2 = cs_game.ces.add_entities.call(null,entities,w__$1);
return cs_game.ces.run_systems.call(null,w__$2,cs_game.core.systems);
});
cs_game.core.off_screen_canvas_el = document.getElementById("off-screen-canvas");
cs_game.util.canvas.set_size.call(null,cs_game.core.off_screen_canvas_el,cs_game.core.initial_screen_width,cs_game.core.initial_screen_height);
cs_game.core.off_screen_ctx = cs_game.util.canvas.context.call(null,cs_game.core.off_screen_canvas_el);
cs_game.core.bg_el = document.getElementById("bg");
cs_game.core.bg_pattern = cs_game.core.off_screen_ctx.createPattern(cs_game.core.bg_el,"repeat");
cs_game.core.on_screen_canvas_el = document.getElementById("on-screen-canvas");
cs_game.util.canvas.set_size.call(null,cs_game.core.on_screen_canvas_el,cs_game.core.initial_screen_width,cs_game.core.initial_screen_height);
cs_game.core.on_screen_ctx = cs_game.util.canvas.context.call(null,cs_game.core.on_screen_canvas_el);
cs_game.core.bindings = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"reverse-time","reverse-time",-476272027),new cljs.core.Keyword(null,"start-game-2player","start-game-2player",1014652262),new cljs.core.Keyword(null,"step-forwards","step-forwards",1005841837),new cljs.core.Keyword(null,"back-to-menu","back-to-menu",-1169131794),new cljs.core.Keyword(null,"bullet-time","bullet-time",-1694080082),new cljs.core.Keyword(null,"step-backwards","step-backwards",-541432753),new cljs.core.Keyword(null,"start-game-4player","start-game-4player",995592721),new cljs.core.Keyword(null,"toggle-debug","toggle-debug",-143604494),new cljs.core.Keyword(null,"pause","pause",-2095325672),new cljs.core.Keyword(null,"toggle-freeze-time","toggle-freeze-time",-618266502),new cljs.core.Keyword(null,"start-game-3player","start-game-3player",-231659300)],[(82),(50),(190),(81),(84),(188),(52),(81),(27),(69),(51)]);
cs_game.core.playback_past = (function cs_game$core$playback_past(game){
var past = new cljs.core.Keyword("game","past","game/past",185217855).cljs$core$IFn$_invoke$arity$1(game);
var vec__22444 = ((cljs.core.not.call(null,cs_game.util.expanded_lang.strict_empty_QMARK_.call(null,past)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,past),cljs.core.pop.call(null,past)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(game),past], null));
var updated_world = cljs.core.nth.call(null,vec__22444,(0),null);
var updated_past = cljs.core.nth.call(null,vec__22444,(1),null);
return cljs.core.assoc.call(null,game,new cljs.core.Keyword("game","world","game/world",-417255325),updated_world,new cljs.core.Keyword("game","past","game/past",185217855),updated_past);
});
cs_game.core.snapshot_world_to_past = (function cs_game$core$snapshot_world_to_past(game){
var leeway = (100);
var max_frames_of_past = (leeway + new cljs.core.Keyword("game","max-frames-of-past","game/max-frames-of-past",-1444753715).cljs$core$IFn$_invoke$arity$1(game));
var snapshot_of_world = new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(game);
var current_frames_of_past = cljs.core.count.call(null,new cljs.core.Keyword("game","past","game/past",185217855).cljs$core$IFn$_invoke$arity$1(game));
var g = game;
var g__$1 = cljs.core.update.call(null,g,new cljs.core.Keyword("game","past","game/past",185217855),cljs.core.conj,snapshot_of_world);
if((current_frames_of_past > max_frames_of_past)){
return cljs.core.update.call(null,g__$1,new cljs.core.Keyword("game","past","game/past",185217855),((function (g,g__$1,leeway,max_frames_of_past,snapshot_of_world,current_frames_of_past){
return (function (p1__22447_SHARP_){
return cljs.core.subvec.call(null,p1__22447_SHARP_,(cljs.core.count.call(null,p1__22447_SHARP_) - leeway));
});})(g,g__$1,leeway,max_frames_of_past,snapshot_of_world,current_frames_of_past))
);
} else {
return g__$1;
}
});
cs_game.core.update_world = (function cs_game$core$update_world(game){
var target_delta_scale = (cljs.core.truth_(cs_game.util.keyboard.held_QMARK_.call(null,new cljs.core.Keyword(null,"bullet-time","bullet-time",-1694080082).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))?0.1:(1));
var current_delta_scale = new cljs.core.Keyword(null,"delta-scale","delta-scale",-933186809).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(game));
var new_delta_scale = cs_game.util.maths.move_towards_linear.call(null,current_delta_scale,target_delta_scale,0.05);
var g = game;
var g__$1 = cljs.core.assoc_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","world","game/world",-417255325),new cljs.core.Keyword(null,"entity-spatial-hash","entity-spatial-hash",112773425)], null),cs_game.spatial_hashing.build.call(null,cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(g))),new cljs.core.Keyword(null,"spatial-hash-config","spatial-hash-config",-1132303178).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(g))));
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","world","game/world",-417255325),new cljs.core.Keyword(null,"delta","delta",108939957)], null),(new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(game)) * new_delta_scale));
var g__$3 = cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","world","game/world",-417255325),new cljs.core.Keyword(null,"delta-scale","delta-scale",-933186809)], null),new_delta_scale);
var g__$4 = cs_game.core.snapshot_world_to_past.call(null,g__$3);
return cljs.core.assoc.call(null,g__$4,new cljs.core.Keyword("game","world","game/world",-417255325),cs_game.ces.run_systems.call(null,new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(g__$4),cs_game.core.systems));
});
cs_game.core.start_game = (function cs_game$core$start_game(game,number_of_players){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword("game","world","game/world",-417255325),cs_game.core.create_world.call(null,number_of_players),new cljs.core.Keyword("game","last-frame-start-time","game/last-frame-start-time",1702568619),cs_game.util.expanded_lang.get_time.call(null),new cljs.core.Keyword("game","past","game/past",185217855),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("game","state","game/state",-1991754593),new cljs.core.Keyword("game-state","in-game","game-state/in-game",2059498071));
});
cs_game.core.render = (function cs_game$core$render(game){
var G__22449_22450 = (((new cljs.core.Keyword("game","state","game/state",-1991754593).cljs$core$IFn$_invoke$arity$1(game) instanceof cljs.core.Keyword))?new cljs.core.Keyword("game","state","game/state",-1991754593).cljs$core$IFn$_invoke$arity$1(game).fqn:null);
switch (G__22449_22450) {
case "game-state/menu":
cs_game.view.render_menu.call(null,cs_game.core.on_screen_ctx,cs_game.core.initial_screen_width,cs_game.core.initial_screen_height);

break;
case "game-state/in-game":
cs_game.view.render_world.call(null,cs_game.core.off_screen_canvas_el,cs_game.core.off_screen_ctx,cs_game.core.on_screen_ctx,new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(game),cs_game.core.bg_pattern);

break;
case "game-state/frozen":
cs_game.view.render_world.call(null,cs_game.core.off_screen_canvas_el,cs_game.core.off_screen_ctx,cs_game.core.on_screen_ctx,new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(game),cs_game.core.bg_pattern);

break;
case "game-state/pause":
cs_game.view.render_world.call(null,cs_game.core.off_screen_canvas_el,cs_game.core.off_screen_ctx,cs_game.core.on_screen_ctx,new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(game),cs_game.core.bg_pattern);

cs_game.view.render_pause_overlay.call(null,cs_game.core.on_screen_ctx,cs_game.core.initial_screen_width,cs_game.core.initial_screen_height);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword("game","state","game/state",-1991754593).cljs$core$IFn$_invoke$arity$1(game))].join('')));

}

return cs_game.view.render_fps_overlay.call(null,cs_game.core.on_screen_ctx,game);
});
cs_game.core.handle_global_input = (function cs_game$core$handle_global_input(game){
var g = game;
var g__$1 = (function (){var G__22453 = (((new cljs.core.Keyword("game","state","game/state",-1991754593).cljs$core$IFn$_invoke$arity$1(g) instanceof cljs.core.Keyword))?new cljs.core.Keyword("game","state","game/state",-1991754593).cljs$core$IFn$_invoke$arity$1(g).fqn:null);
switch (G__22453) {
case "game-state/menu":
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"start-game-2player","start-game-2player",1014652262).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cs_game.core.start_game.call(null,g,(2));
} else {
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"start-game-3player","start-game-3player",-231659300).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cs_game.core.start_game.call(null,g,(3));
} else {
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"start-game-4player","start-game-4player",995592721).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cs_game.core.start_game.call(null,g,(4));
} else {
return g;

}
}
}

break;
case "game-state/in-game":
if(cljs.core.truth_(cs_game.util.keyboard.held_QMARK_.call(null,new cljs.core.Keyword(null,"reverse-time","reverse-time",-476272027).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cs_game.core.playback_past.call(null,g);
} else {
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"toggle-freeze-time","toggle-freeze-time",-618266502).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cljs.core.assoc.call(null,g,new cljs.core.Keyword("game","state","game/state",-1991754593),new cljs.core.Keyword("game-state","frozen","game-state/frozen",1858097390));
} else {
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cljs.core.assoc.call(null,g,new cljs.core.Keyword("game","state","game/state",-1991754593),new cljs.core.Keyword("game-state","pause","game-state/pause",-1634154782));
} else {
return cs_game.core.update_world.call(null,g);

}
}
}

break;
case "game-state/pause":
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cljs.core.assoc.call(null,g,new cljs.core.Keyword("game","state","game/state",-1991754593),new cljs.core.Keyword("game-state","in-game","game-state/in-game",2059498071));
} else {
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"back-to-menu","back-to-menu",-1169131794).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cljs.core.assoc.call(null,g,new cljs.core.Keyword("game","state","game/state",-1991754593),new cljs.core.Keyword("game-state","menu","game-state/menu",141562868));
} else {
return g;

}
}

break;
case "game-state/frozen":
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"step-backwards","step-backwards",-541432753).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cs_game.core.playback_past.call(null,g);
} else {
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"step-forwards","step-forwards",1005841837).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cs_game.core.update_world.call(null,g);
} else {
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"toggle-freeze-time","toggle-freeze-time",-618266502).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cljs.core.assoc.call(null,g,new cljs.core.Keyword("game","state","game/state",-1991754593),new cljs.core.Keyword("game-state","in-game","game-state/in-game",2059498071));
} else {
return g;

}
}
}

break;
default:
return g;

}
})();
if(cljs.core.truth_(cs_game.util.keyboard.just_down_QMARK_.call(null,new cljs.core.Keyword(null,"toggle-debug","toggle-debug",-143604494).cljs$core$IFn$_invoke$arity$1(cs_game.core.bindings)))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","world","game/world",-417255325),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null),cljs.core.not);
} else {
return g__$1;
}
});
cs_game.core.update_fps_history = (function cs_game$core$update_fps_history(fps_history,max_frames_to_keep,time_since_last_frame){
var fps_history__$1 = fps_history;
var fps_history__$2 = (((cljs.core.count.call(null,fps_history__$1) > max_frames_to_keep))?cljs.core.subvec.call(null,fps_history__$1,(cljs.core.count.call(null,fps_history__$1) - max_frames_to_keep)):fps_history__$1);
return cljs.core.conj.call(null,fps_history__$2,((1000) / time_since_last_frame));
});
if(typeof cs_game.core.repl_game_snapshot !== 'undefined'){
} else {
cs_game.core.repl_game_snapshot = cljs.core.atom.call(null,null);
}
cs_game.core.update_loop = (function cs_game$core$update_loop(){
var game = cljs.core.deref.call(null,cs_game.core.repl_game_snapshot);
var current_frame_start_time = cs_game.util.expanded_lang.get_time.call(null);
var last_frame_start_time = new cljs.core.Keyword("game","last-frame-start-time","game/last-frame-start-time",1702568619).cljs$core$IFn$_invoke$arity$1(game);
var time_since_last_frame = (current_frame_start_time - last_frame_start_time);
var game__$1 = (function (){var g = game;
var g__$1 = cljs.core.assoc_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","world","game/world",-417255325),new cljs.core.Keyword(null,"delta","delta",108939957)], null),(time_since_last_frame / (1000)));
var g__$2 = cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword("game","last-frame-start-time","game/last-frame-start-time",1702568619),current_frame_start_time);
var g__$3 = cs_game.core.handle_global_input.call(null,g__$2);
return cljs.core.update.call(null,g__$3,new cljs.core.Keyword("game","fps-history","game/fps-history",217807044),cs_game.core.update_fps_history,new cljs.core.Keyword("game","max-fps-history","game/max-fps-history",850542870).cljs$core$IFn$_invoke$arity$1(g__$3),time_since_last_frame);
})();
cs_game.core.render.call(null,game__$1);

cs_game.util.keyboard.tick.call(null);

var current_frame_duration = (cs_game.util.expanded_lang.get_time.call(null) - current_frame_start_time);
var time_to_next_frame = (function (){var x__20763__auto__ = (0);
var y__20764__auto__ = (new cljs.core.Keyword("game","ideal-frame-time","game/ideal-frame-time",-512490899).cljs$core$IFn$_invoke$arity$1(game__$1) - current_frame_duration);
return ((x__20763__auto__ > y__20764__auto__) ? x__20763__auto__ : y__20764__auto__);
})();
setTimeout(cs_game$core$update_loop,time_to_next_frame);

return cljs.core.reset_BANG_.call(null,cs_game.core.repl_game_snapshot,game__$1);
});
cs_game.core.start = (function cs_game$core$start(){
cs_game.util.keyboard.add_listeners.call(null);

var ideal_fps = (30);
var game = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("game","max-fps-history","game/max-fps-history",850542870),(ideal_fps * (5)),new cljs.core.Keyword("game","fps-history","game/fps-history",217807044),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("game","ideal-fps","game/ideal-fps",-1041814198),ideal_fps,new cljs.core.Keyword("game","ideal-frame-time","game/ideal-frame-time",-512490899),((1000) / ideal_fps),new cljs.core.Keyword("game","max-frames-of-past","game/max-frames-of-past",-1444753715),((60) * ideal_fps),new cljs.core.Keyword("game","state","game/state",-1991754593),new cljs.core.Keyword("game-state","menu","game-state/menu",141562868)], null);
cljs.core.reset_BANG_.call(null,cs_game.core.repl_game_snapshot,game);

return cs_game.core.update_loop.call(null);
});
cs_game.core.repl_game = (function cs_game$core$repl_game(){
return cljs.core.deref.call(null,cs_game.core.repl_game_snapshot);
});
cs_game.core.repl_world = (function cs_game$core$repl_world(){
return new cljs.core.Keyword("game","world","game/world",-417255325).cljs$core$IFn$_invoke$arity$1(cs_game.core.repl_game.call(null));
});
cs_game.core.repl_entity = (function cs_game$core$repl_entity(var_args){
var args22455 = [];
var len__21507__auto___22461 = arguments.length;
var i__21508__auto___22462 = (0);
while(true){
if((i__21508__auto___22462 < len__21507__auto___22461)){
args22455.push((arguments[i__21508__auto___22462]));

var G__22463 = (i__21508__auto___22462 + (1));
i__21508__auto___22462 = G__22463;
continue;
} else {
}
break;
}

var G__22460 = args22455.length;
switch (G__22460) {
case 1:
return cs_game.core.repl_entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__21526__auto__ = (new cljs.core.IndexedSeq(args22455.slice((2)),(0),null));
return cs_game.core.repl_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21526__auto__);

}
});

cs_game.core.repl_entity.cljs$core$IFn$_invoke$arity$1 = (function (index){
return cljs.core.nth.call(null,new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(cs_game.core.repl_world.call(null)),index);
});

cs_game.core.repl_entity.cljs$core$IFn$_invoke$arity$variadic = (function (index,f,args){
var entity = cs_game.core.repl_entity.call(null,index);
var updated_entity = cljs.core.apply.call(null,f,entity,args);
cljs.core.swap_BANG_.call(null,cs_game.core.repl_game_snapshot,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","world","game/world",-417255325),new cljs.core.Keyword("ces","entities","ces/entities",1939820666),index], null),updated_entity);

return updated_entity;
});

cs_game.core.repl_entity.cljs$lang$applyTo = (function (seq22456){
var G__22457 = cljs.core.first.call(null,seq22456);
var seq22456__$1 = cljs.core.next.call(null,seq22456);
var G__22458 = cljs.core.first.call(null,seq22456__$1);
var seq22456__$2 = cljs.core.next.call(null,seq22456__$1);
return cs_game.core.repl_entity.cljs$core$IFn$_invoke$arity$variadic(G__22457,G__22458,seq22456__$2);
});

cs_game.core.repl_entity.cljs$lang$maxFixedArity = (2);

cs_game.core.repl_add_entities = (function cs_game$core$repl_add_entities(var_args){
var args__21514__auto__ = [];
var len__21507__auto___22467 = arguments.length;
var i__21508__auto___22468 = (0);
while(true){
if((i__21508__auto___22468 < len__21507__auto___22467)){
args__21514__auto__.push((arguments[i__21508__auto___22468]));

var G__22469 = (i__21508__auto___22468 + (1));
i__21508__auto___22468 = G__22469;
continue;
} else {
}
break;
}

var argseq__21515__auto__ = ((((0) < args__21514__auto__.length))?(new cljs.core.IndexedSeq(args__21514__auto__.slice((0)),(0),null)):null);
return cs_game.core.repl_add_entities.cljs$core$IFn$_invoke$arity$variadic(argseq__21515__auto__);
});

cs_game.core.repl_add_entities.cljs$core$IFn$_invoke$arity$variadic = (function (entities){
return cljs.core.swap_BANG_.call(null,cs_game.core.repl_game_snapshot,cljs.core.update,(function (p1__22465_SHARP_){
return cs_game.ces.add_entities_to_world.call(null,entities,p1__22465_SHARP_,cs_game.core.systems);
}));
});

cs_game.core.repl_add_entities.cljs$lang$maxFixedArity = (0);

cs_game.core.repl_add_entities.cljs$lang$applyTo = (function (seq22466){
return cs_game.core.repl_add_entities.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22466));
});

if(typeof cs_game.core._ !== 'undefined'){
} else {
cs_game.core._ = cs_game.core.start.call(null);
}

//# sourceMappingURL=core.js.map?rel=1550610525319
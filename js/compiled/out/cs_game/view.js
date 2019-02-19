// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.view');
goog.require('cljs.core');
goog.require('cs_game.util.canvas');
goog.require('cs_game.util.maths');
goog.require('cs_game.spatial_hashing');
goog.require('cs_game.util.expanded_lang');
cs_game.view.outline = (function cs_game$view$outline(ctx){
cs_game.util.canvas.line_width.call(null,ctx,2.5);

cs_game.util.canvas.stroke_style.call(null,ctx,"black");

return cs_game.util.canvas.stroke.call(null,ctx);
});
if(typeof cs_game.view.render_entity !== 'undefined'){
} else {
cs_game.view.render_entity = (function (){var method_table__21357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21361__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cs-game.view","render-entity"),((function (method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__){
return (function (_,entity){
return new cljs.core.Keyword("view","type","view/type",1170670657).cljs$core$IFn$_invoke$arity$1(entity);
});})(method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__,hierarchy__21361__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21361__auto__,method_table__21357__auto__,prefer_table__21358__auto__,method_cache__21359__auto__,cached_hierarchy__21360__auto__));
})();
}
cljs.core._add_method.call(null,cs_game.view.render_entity,new cljs.core.Keyword("view-type","polygon","view-type/polygon",-1856432167),(function (ctx,p__21764){
var map__21765 = p__21764;
var map__21765__$1 = ((((!((map__21765 == null)))?((((map__21765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21765):map__21765);
var position = cljs.core.get.call(null,map__21765__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.call(null,map__21765__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var color = cljs.core.get.call(null,map__21765__$1,new cljs.core.Keyword("view","color","view/color",1017359682));
var polygon_points = cljs.core.get.call(null,map__21765__$1,new cljs.core.Keyword("view","polygon-points","view/polygon-points",1518607115));
var vec__21767 = position;
var x__21749__auto__ = cljs.core.nth.call(null,vec__21767,(0),null);
var y__21750__auto__ = cljs.core.nth.call(null,vec__21767,(1),null);
var do_alpha__21751__auto__ = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto__ = cljs.core.not_EQ_.call(null,(0),cs_game.util.maths.degrees_to_radians.call(null,rotation));
var do_translate__21753__auto__ = (cljs.core.not_EQ_.call(null,(0),x__21749__auto__)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto__));
var original_alpha__21754__auto__ = ((do_alpha__21751__auto__)?ctx.globalAlpha:null);
if(do_alpha__21751__auto__){
ctx.globalAlpha = (original_alpha__21754__auto__ * (-1));
} else {
}

if(do_translate__21753__auto__){
ctx.translate(x__21749__auto__,y__21750__auto__);
} else {
}

if(do_rotate__21752__auto__){
ctx.rotate(cs_game.util.maths.degrees_to_radians.call(null,rotation));
} else {
}

cs_game.util.canvas.draw_points.call(null,ctx,polygon_points);

cs_game.util.canvas.fill_style.call(null,ctx,color);

cs_game.util.canvas.fill.call(null,ctx);

cs_game.view.outline.call(null,ctx);

if(do_rotate__21752__auto__){
ctx.rotate((- cs_game.util.maths.degrees_to_radians.call(null,rotation)));
} else {
}

if(do_translate__21753__auto__){
ctx.translate((- x__21749__auto__),(- y__21750__auto__));
} else {
}

if(do_alpha__21751__auto__){
return ctx.globalAlpha = original_alpha__21754__auto__;
} else {
return null;
}
}));
cljs.core._add_method.call(null,cs_game.view.render_entity,new cljs.core.Keyword("view-type","explosion","view-type/explosion",88568893),(function (ctx,explosion){
var vec__21770 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(explosion);
var x__21749__auto__ = cljs.core.nth.call(null,vec__21770,(0),null);
var y__21750__auto__ = cljs.core.nth.call(null,vec__21770,(1),null);
var do_alpha__21751__auto__ = cljs.core.not_EQ_.call(null,(-1),new cljs.core.Keyword("view","alpha","view/alpha",-1578568844).cljs$core$IFn$_invoke$arity$1(explosion));
var do_rotate__21752__auto__ = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto__ = (cljs.core.not_EQ_.call(null,(0),x__21749__auto__)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto__));
var original_alpha__21754__auto__ = ((do_alpha__21751__auto__)?ctx.globalAlpha:null);
if(do_alpha__21751__auto__){
ctx.globalAlpha = (original_alpha__21754__auto__ * new cljs.core.Keyword("view","alpha","view/alpha",-1578568844).cljs$core$IFn$_invoke$arity$1(explosion));
} else {
}

if(do_translate__21753__auto__){
ctx.translate(x__21749__auto__,y__21750__auto__);
} else {
}

if(do_rotate__21752__auto__){
ctx.rotate((0));
} else {
}

cs_game.util.canvas.centered_circle.call(null,ctx,(0),(0),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(explosion) / (2)));

cs_game.util.canvas.fill_style.call(null,ctx,new cljs.core.Keyword("view","color","view/color",1017359682).cljs$core$IFn$_invoke$arity$1(explosion));

cs_game.util.canvas.fill.call(null,ctx);

if(cljs.core.truth_(new cljs.core.Keyword("view","no-outline","view/no-outline",-2088140596).cljs$core$IFn$_invoke$arity$1(explosion))){
} else {
cs_game.view.outline.call(null,ctx);
}

if(do_rotate__21752__auto__){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto__){
ctx.translate((- x__21749__auto__),(- y__21750__auto__));
} else {
}

if(do_alpha__21751__auto__){
return ctx.globalAlpha = original_alpha__21754__auto__;
} else {
return null;
}
}));
cs_game.view.within_world_boundaries_QMARK_ = (function cs_game$view$within_world_boundaries_QMARK_(world_width,world_height,entity){
var vec__21776 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(entity);
var x = cljs.core.nth.call(null,vec__21776,(0),null);
var y = cljs.core.nth.call(null,vec__21776,(1),null);
return ((x < world_width)) && ((x > (0))) && ((y > (0))) && ((y < world_height));
});
cs_game.view.minimap_size = (200);
cs_game.view.render_minimap = (function cs_game$view$render_minimap(ctx,drawable_entities,world){
var vec__21793 = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(world);
var world_width = cljs.core.nth.call(null,vec__21793,(0),null);
var world_height = cljs.core.nth.call(null,vec__21793,(1),null);
var xscale = (cs_game.view.minimap_size / world_width);
var yscale = (cs_game.view.minimap_size / world_height);
cs_game.util.canvas.fill_style.call(null,ctx,"black");

cs_game.util.canvas.fill_rect.call(null,ctx,(0),(0),cs_game.view.minimap_size,cs_game.view.minimap_size);

var seq__21796_21806 = cljs.core.seq.call(null,cljs.core.filterv.call(null,((function (vec__21793,world_width,world_height,xscale,yscale){
return (function (p1__21779_SHARP_){
return cs_game.view.within_world_boundaries_QMARK_.call(null,world_width,world_height,p1__21779_SHARP_);
});})(vec__21793,world_width,world_height,xscale,yscale))
,drawable_entities));
var chunk__21797_21807 = null;
var count__21798_21808 = (0);
var i__21799_21809 = (0);
while(true){
if((i__21799_21809 < count__21798_21808)){
var e_21810 = cljs.core._nth.call(null,chunk__21797_21807,i__21799_21809);
var vec__21800_21811 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(e_21810);
var x_21812 = cljs.core.nth.call(null,vec__21800_21811,(0),null);
var y_21813 = cljs.core.nth.call(null,vec__21800_21811,(1),null);
var scaled_x_21814 = (x_21812 * xscale);
var scaled_y_21815 = (y_21813 * yscale);
var size_scale_21816 = ((xscale + yscale) / (2));
var size_21817 = (function (){var x__20763__auto__ = (2);
var y__20764__auto__ = ((size_scale_21816 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(e_21810)) / (2));
return ((x__20763__auto__ > y__20764__auto__) ? x__20763__auto__ : y__20764__auto__);
})();
cs_game.util.canvas.fill_style.call(null,ctx,new cljs.core.Keyword("view","color","view/color",1017359682).cljs$core$IFn$_invoke$arity$1(e_21810));

cs_game.util.canvas.fill_centered_rect.call(null,ctx,scaled_x_21814,scaled_y_21815,size_21817,size_21817);

var G__21818 = seq__21796_21806;
var G__21819 = chunk__21797_21807;
var G__21820 = count__21798_21808;
var G__21821 = (i__21799_21809 + (1));
seq__21796_21806 = G__21818;
chunk__21797_21807 = G__21819;
count__21798_21808 = G__21820;
i__21799_21809 = G__21821;
continue;
} else {
var temp__4657__auto___21822 = cljs.core.seq.call(null,seq__21796_21806);
if(temp__4657__auto___21822){
var seq__21796_21823__$1 = temp__4657__auto___21822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21796_21823__$1)){
var c__21243__auto___21824 = cljs.core.chunk_first.call(null,seq__21796_21823__$1);
var G__21825 = cljs.core.chunk_rest.call(null,seq__21796_21823__$1);
var G__21826 = c__21243__auto___21824;
var G__21827 = cljs.core.count.call(null,c__21243__auto___21824);
var G__21828 = (0);
seq__21796_21806 = G__21825;
chunk__21797_21807 = G__21826;
count__21798_21808 = G__21827;
i__21799_21809 = G__21828;
continue;
} else {
var e_21829 = cljs.core.first.call(null,seq__21796_21823__$1);
var vec__21803_21830 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(e_21829);
var x_21831 = cljs.core.nth.call(null,vec__21803_21830,(0),null);
var y_21832 = cljs.core.nth.call(null,vec__21803_21830,(1),null);
var scaled_x_21833 = (x_21831 * xscale);
var scaled_y_21834 = (y_21832 * yscale);
var size_scale_21835 = ((xscale + yscale) / (2));
var size_21836 = (function (){var x__20763__auto__ = (2);
var y__20764__auto__ = ((size_scale_21835 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(e_21829)) / (2));
return ((x__20763__auto__ > y__20764__auto__) ? x__20763__auto__ : y__20764__auto__);
})();
cs_game.util.canvas.fill_style.call(null,ctx,new cljs.core.Keyword("view","color","view/color",1017359682).cljs$core$IFn$_invoke$arity$1(e_21829));

cs_game.util.canvas.fill_centered_rect.call(null,ctx,scaled_x_21833,scaled_y_21834,size_21836,size_21836);

var G__21837 = cljs.core.next.call(null,seq__21796_21823__$1);
var G__21838 = null;
var G__21839 = (0);
var G__21840 = (0);
seq__21796_21806 = G__21837;
chunk__21797_21807 = G__21838;
count__21798_21808 = G__21839;
i__21799_21809 = G__21840;
continue;
}
} else {
}
}
break;
}

cs_game.util.canvas.stroke_style.call(null,ctx,"#111");

cs_game.util.canvas.line_width.call(null,ctx,(3));

return cs_game.util.canvas.stroke_rect.call(null,ctx,(0),(0),cs_game.view.minimap_size,cs_game.view.minimap_size);
});
cs_game.view.health_bar_height = (16);
cs_game.view.health_bar_width = (80);
cs_game.view.render_health_bar = (function cs_game$view$render_health_bar(ctx,player){
cs_game.util.canvas.fill_style.call(null,ctx,"green");

return cs_game.util.canvas.fill_rect.call(null,ctx,(0),(0),((cs_game.view.health_bar_width / (100)) * new cljs.core.Keyword("entity","health","entity/health",-1396663748).cljs$core$IFn$_invoke$arity$1(player)),cs_game.view.health_bar_height);
});
cs_game.view.weapon_box_size = (30);
cs_game.view.render_weapons = (function cs_game$view$render_weapons(ctx,player){
var current_weapon_index = new cljs.core.Keyword(null,"current-weapon-index","current-weapon-index",-428004435).cljs$core$IFn$_invoke$arity$1(player);
var seq__21857 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(player)));
var chunk__21858 = null;
var count__21859 = (0);
var i__21860 = (0);
while(true){
if((i__21860 < count__21859)){
var vec__21861 = cljs.core._nth.call(null,chunk__21858,i__21860);
var index = cljs.core.nth.call(null,vec__21861,(0),null);
var weapon = cljs.core.nth.call(null,vec__21861,(1),null);
var vec__21864_21873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index * ((2) + cs_game.view.weapon_box_size)),(0)], null);
var x__21749__auto___21874 = cljs.core.nth.call(null,vec__21864_21873,(0),null);
var y__21750__auto___21875 = cljs.core.nth.call(null,vec__21864_21873,(1),null);
var do_alpha__21751__auto___21876 = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto___21877 = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto___21878 = (cljs.core.not_EQ_.call(null,(0),x__21749__auto___21874)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto___21875));
var original_alpha__21754__auto___21879 = ((do_alpha__21751__auto___21876)?ctx.globalAlpha:null);
if(do_alpha__21751__auto___21876){
ctx.globalAlpha = (original_alpha__21754__auto___21879 * (-1));
} else {
}

if(do_translate__21753__auto___21878){
ctx.translate(x__21749__auto___21874,y__21750__auto___21875);
} else {
}

if(do_rotate__21752__auto___21877){
ctx.rotate((0));
} else {
}

cs_game.util.canvas.fill_style.call(null,ctx,((cljs.core._EQ_.call(null,current_weapon_index,index))?"red":"dimgrey"));

cs_game.util.canvas.fill_rect.call(null,ctx,(0),(0),cs_game.view.weapon_box_size,cs_game.view.weapon_box_size);

cs_game.util.canvas.fill_style.call(null,ctx,"white");

cs_game.util.canvas.font.call(null,ctx,"14px Arial");

cs_game.util.canvas.text_align.call(null,ctx,"center");

cs_game.util.canvas.text_baseline.call(null,ctx,"middle");

cs_game.util.canvas.fill_text.call(null,ctx,new cljs.core.Keyword("weapon","short-label","weapon/short-label",1562600247).cljs$core$IFn$_invoke$arity$1(weapon),(cs_game.view.weapon_box_size / (2)),(cs_game.view.weapon_box_size / (2)));

if(do_rotate__21752__auto___21877){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto___21878){
ctx.translate((- x__21749__auto___21874),(- y__21750__auto___21875));
} else {
}

if(do_alpha__21751__auto___21876){
ctx.globalAlpha = original_alpha__21754__auto___21879;
} else {
}

var G__21880 = seq__21857;
var G__21881 = chunk__21858;
var G__21882 = count__21859;
var G__21883 = (i__21860 + (1));
seq__21857 = G__21880;
chunk__21858 = G__21881;
count__21859 = G__21882;
i__21860 = G__21883;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21857);
if(temp__4657__auto__){
var seq__21857__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21857__$1)){
var c__21243__auto__ = cljs.core.chunk_first.call(null,seq__21857__$1);
var G__21884 = cljs.core.chunk_rest.call(null,seq__21857__$1);
var G__21885 = c__21243__auto__;
var G__21886 = cljs.core.count.call(null,c__21243__auto__);
var G__21887 = (0);
seq__21857 = G__21884;
chunk__21858 = G__21885;
count__21859 = G__21886;
i__21860 = G__21887;
continue;
} else {
var vec__21867 = cljs.core.first.call(null,seq__21857__$1);
var index = cljs.core.nth.call(null,vec__21867,(0),null);
var weapon = cljs.core.nth.call(null,vec__21867,(1),null);
var vec__21870_21888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index * ((2) + cs_game.view.weapon_box_size)),(0)], null);
var x__21749__auto___21889 = cljs.core.nth.call(null,vec__21870_21888,(0),null);
var y__21750__auto___21890 = cljs.core.nth.call(null,vec__21870_21888,(1),null);
var do_alpha__21751__auto___21891 = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto___21892 = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto___21893 = (cljs.core.not_EQ_.call(null,(0),x__21749__auto___21889)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto___21890));
var original_alpha__21754__auto___21894 = ((do_alpha__21751__auto___21891)?ctx.globalAlpha:null);
if(do_alpha__21751__auto___21891){
ctx.globalAlpha = (original_alpha__21754__auto___21894 * (-1));
} else {
}

if(do_translate__21753__auto___21893){
ctx.translate(x__21749__auto___21889,y__21750__auto___21890);
} else {
}

if(do_rotate__21752__auto___21892){
ctx.rotate((0));
} else {
}

cs_game.util.canvas.fill_style.call(null,ctx,((cljs.core._EQ_.call(null,current_weapon_index,index))?"red":"dimgrey"));

cs_game.util.canvas.fill_rect.call(null,ctx,(0),(0),cs_game.view.weapon_box_size,cs_game.view.weapon_box_size);

cs_game.util.canvas.fill_style.call(null,ctx,"white");

cs_game.util.canvas.font.call(null,ctx,"14px Arial");

cs_game.util.canvas.text_align.call(null,ctx,"center");

cs_game.util.canvas.text_baseline.call(null,ctx,"middle");

cs_game.util.canvas.fill_text.call(null,ctx,new cljs.core.Keyword("weapon","short-label","weapon/short-label",1562600247).cljs$core$IFn$_invoke$arity$1(weapon),(cs_game.view.weapon_box_size / (2)),(cs_game.view.weapon_box_size / (2)));

if(do_rotate__21752__auto___21892){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto___21893){
ctx.translate((- x__21749__auto___21889),(- y__21750__auto___21890));
} else {
}

if(do_alpha__21751__auto___21891){
ctx.globalAlpha = original_alpha__21754__auto___21894;
} else {
}

var G__21895 = cljs.core.next.call(null,seq__21857__$1);
var G__21896 = null;
var G__21897 = (0);
var G__21898 = (0);
seq__21857 = G__21895;
chunk__21858 = G__21896;
count__21859 = G__21897;
i__21860 = G__21898;
continue;
}
} else {
return null;
}
}
break;
}
});
cs_game.view.padding = (5);
cs_game.view.vertical_spacer = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cs_game.view.padding], null);
cs_game.view.hud_height = ((((cs_game.view.padding + cs_game.view.health_bar_height) + cs_game.view.padding) + cs_game.view.weapon_box_size) + cs_game.view.padding);
cs_game.view.render_player_hud = (function cs_game$view$render_player_hud(ctx,player,camera){
var camera_top_left = new cljs.core.Keyword(null,"screen-position","screen-position",356064906).cljs$core$IFn$_invoke$arity$1(camera);
var vec__21909 = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(camera);
var _ = cljs.core.nth.call(null,vec__21909,(0),null);
var camera_height = cljs.core.nth.call(null,vec__21909,(1),null);
var starting_y = (function (){var G__21912 = (((new cljs.core.Keyword(null,"hud-position","hud-position",-657920396).cljs$core$IFn$_invoke$arity$1(camera) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"hud-position","hud-position",-657920396).cljs$core$IFn$_invoke$arity$1(camera).fqn:null);
switch (G__21912) {
case "top":
return (0);

break;
case "bottom":
return (camera_height - cs_game.view.hud_height);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"hud-position","hud-position",-657920396).cljs$core$IFn$_invoke$arity$1(camera))].join('')));

}
})();
var vec__21913 = cs_game.util.maths.v_PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs_game.view.padding,starting_y], null),cs_game.view.vertical_spacer,camera_top_left);
var x__21749__auto__ = cljs.core.nth.call(null,vec__21913,(0),null);
var y__21750__auto__ = cljs.core.nth.call(null,vec__21913,(1),null);
var do_alpha__21751__auto__ = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto__ = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto__ = (cljs.core.not_EQ_.call(null,(0),x__21749__auto__)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto__));
var original_alpha__21754__auto__ = ((do_alpha__21751__auto__)?ctx.globalAlpha:null);
if(do_alpha__21751__auto__){
ctx.globalAlpha = (original_alpha__21754__auto__ * (-1));
} else {
}

if(do_translate__21753__auto__){
ctx.translate(x__21749__auto__,y__21750__auto__);
} else {
}

if(do_rotate__21752__auto__){
ctx.rotate((0));
} else {
}

cs_game.view.render_health_bar.call(null,ctx,player);

var vec__21916_21920 = cs_game.util.maths.v_PLUS_.call(null,cs_game.view.vertical_spacer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cs_game.view.health_bar_height], null));
var x__21749__auto___21921__$1 = cljs.core.nth.call(null,vec__21916_21920,(0),null);
var y__21750__auto___21922__$1 = cljs.core.nth.call(null,vec__21916_21920,(1),null);
var do_alpha__21751__auto___21923__$1 = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto___21924__$1 = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto___21925__$1 = (cljs.core.not_EQ_.call(null,(0),x__21749__auto___21921__$1)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto___21922__$1));
var original_alpha__21754__auto___21926__$1 = ((do_alpha__21751__auto___21923__$1)?ctx.globalAlpha:null);
if(do_alpha__21751__auto___21923__$1){
ctx.globalAlpha = (original_alpha__21754__auto___21926__$1 * (-1));
} else {
}

if(do_translate__21753__auto___21925__$1){
ctx.translate(x__21749__auto___21921__$1,y__21750__auto___21922__$1);
} else {
}

if(do_rotate__21752__auto___21924__$1){
ctx.rotate((0));
} else {
}

cs_game.view.render_weapons.call(null,ctx,player);

if(do_rotate__21752__auto___21924__$1){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto___21925__$1){
ctx.translate((- x__21749__auto___21921__$1),(- y__21750__auto___21922__$1));
} else {
}

if(do_alpha__21751__auto___21923__$1){
ctx.globalAlpha = original_alpha__21754__auto___21926__$1;
} else {
}

if(do_rotate__21752__auto__){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto__){
ctx.translate((- x__21749__auto__),(- y__21750__auto__));
} else {
}

if(do_alpha__21751__auto__){
return ctx.globalAlpha = original_alpha__21754__auto__;
} else {
return null;
}
});
cs_game.view.render_entity_id = (function cs_game$view$render_entity_id(ctx,p__21927){
var map__21933 = p__21927;
var map__21933__$1 = ((((!((map__21933 == null)))?((((map__21933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21933):map__21933);
var size = cljs.core.get.call(null,map__21933__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var position = cljs.core.get.call(null,map__21933__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__21933__$1,new cljs.core.Keyword("entity","id","entity/id",400070257));
var vec__21935 = position;
var x__21749__auto__ = cljs.core.nth.call(null,vec__21935,(0),null);
var y__21750__auto__ = cljs.core.nth.call(null,vec__21935,(1),null);
var do_alpha__21751__auto__ = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto__ = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto__ = (cljs.core.not_EQ_.call(null,(0),x__21749__auto__)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto__));
var original_alpha__21754__auto__ = ((do_alpha__21751__auto__)?ctx.globalAlpha:null);
if(do_alpha__21751__auto__){
ctx.globalAlpha = (original_alpha__21754__auto__ * (-1));
} else {
}

if(do_translate__21753__auto__){
ctx.translate(x__21749__auto__,y__21750__auto__);
} else {
}

if(do_rotate__21752__auto__){
ctx.rotate((0));
} else {
}

cs_game.util.canvas.fill_style.call(null,ctx,"white");

cs_game.util.canvas.font.call(null,ctx,"20px Arial");

cs_game.util.canvas.text_align.call(null,ctx,"center");

cs_game.util.canvas.fill_text.call(null,ctx,id,(- (size / (2))),(- (size / (2))));

if(do_rotate__21752__auto__){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto__){
ctx.translate((- x__21749__auto__),(- y__21750__auto__));
} else {
}

if(do_alpha__21751__auto__){
return ctx.globalAlpha = original_alpha__21754__auto__;
} else {
return null;
}
});
cs_game.view.render_world = (function cs_game$view$render_world(off_screen_el,off_screen_ctx,on_screen_ctx,world,bg_pattern){
var entities = new cljs.core.Keyword("ces","entities","ces/entities",1939820666).cljs$core$IFn$_invoke$arity$1(world);
var entity_spatial_hash = new cljs.core.Keyword(null,"entity-spatial-hash","entity-spatial-hash",112773425).cljs$core$IFn$_invoke$arity$1(world);
var vec__21999 = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(world);
var world_width = cljs.core.nth.call(null,vec__21999,(0),null);
var world_height = cljs.core.nth.call(null,vec__21999,(1),null);
var vec__22002 = new cljs.core.Keyword(null,"screen-dimensions","screen-dimensions",-836470069).cljs$core$IFn$_invoke$arity$1(world);
var screen_width = cljs.core.nth.call(null,vec__22002,(0),null);
var screen_height = cljs.core.nth.call(null,vec__22002,(1),null);
var ctx = off_screen_ctx;
var seq__22005_22058 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"cameras","cameras",-1446544612).cljs$core$IFn$_invoke$arity$1(world));
var chunk__22006_22059 = null;
var count__22007_22060 = (0);
var i__22008_22061 = (0);
while(true){
if((i__22008_22061 < count__22007_22060)){
var camera_22062 = cljs.core._nth.call(null,chunk__22006_22059,i__22008_22061);
var vec__22009_22063 = cs_game.util.maths.v_PLUS_.call(null,cs_game.util.maths.vneg.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(camera_22062)),cs_game.util.maths.vdiv.call(null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(camera_22062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)));
var x__21749__auto___22064 = cljs.core.nth.call(null,vec__22009_22063,(0),null);
var y__21750__auto___22065 = cljs.core.nth.call(null,vec__22009_22063,(1),null);
var do_alpha__21751__auto___22066 = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto___22067 = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto___22068 = (cljs.core.not_EQ_.call(null,(0),x__21749__auto___22064)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto___22065));
var original_alpha__21754__auto___22069 = ((do_alpha__21751__auto___22066)?ctx.globalAlpha:null);
if(do_alpha__21751__auto___22066){
ctx.globalAlpha = (original_alpha__21754__auto___22069 * (-1));
} else {
}

if(do_translate__21753__auto___22068){
ctx.translate(x__21749__auto___22064,y__21750__auto___22065);
} else {
}

if(do_rotate__21752__auto___22067){
ctx.rotate((0));
} else {
}

var vec__22012_22070 = cs_game.util.maths.v_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(camera_22062),cs_game.util.maths.vdiv.call(null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(camera_22062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)));
var x_22071 = cljs.core.nth.call(null,vec__22012_22070,(0),null);
var y_22072 = cljs.core.nth.call(null,vec__22012_22070,(1),null);
var vec__22015_22073 = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(camera_22062);
var width_22074 = cljs.core.nth.call(null,vec__22015_22073,(0),null);
var height_22075 = cljs.core.nth.call(null,vec__22015_22073,(1),null);
cs_game.util.canvas.fill_style.call(null,ctx,bg_pattern);

cs_game.util.canvas.fill_rect.call(null,ctx,x_22071,y_22072,width_22074,height_22075);

cs_game.util.canvas.stroke_style.call(null,ctx,"black");

cs_game.util.canvas.line_width.call(null,ctx,(30));

cs_game.util.canvas.stroke_rect.call(null,ctx,(0),(0),world_width,world_height);

var comparator_22076 = cljs.core.juxt.call(null,new cljs.core.Keyword("view","z-index","view/z-index",1894086237),new cljs.core.Keyword("entity","id","entity/id",400070257));
var entities_for_camera_22077 = cljs.core.sort_by.call(null,comparator_22076,cljs.core.mapv.call(null,((function (seq__22005_22058,chunk__22006_22059,count__22007_22060,i__22008_22061,comparator_22076,vec__22009_22063,x__21749__auto___22064,y__21750__auto___22065,do_alpha__21751__auto___22066,do_rotate__21752__auto___22067,do_translate__21753__auto___22068,original_alpha__21754__auto___22069,camera_22062,entities,entity_spatial_hash,vec__21999,world_width,world_height,vec__22002,screen_width,screen_height,ctx){
return (function (p1__21938_SHARP_){
return cljs.core.nth.call(null,entities,p1__21938_SHARP_);
});})(seq__22005_22058,chunk__22006_22059,count__22007_22060,i__22008_22061,comparator_22076,vec__22009_22063,x__21749__auto___22064,y__21750__auto___22065,do_alpha__21751__auto___22066,do_rotate__21752__auto___22067,do_translate__21753__auto___22068,original_alpha__21754__auto___22069,camera_22062,entities,entity_spatial_hash,vec__21999,world_width,world_height,vec__22002,screen_width,screen_height,ctx))
,cs_game.spatial_hashing.nearby_entity_indexes.call(null,entity_spatial_hash,camera_22062)));
var seq__22018_22078 = cljs.core.seq.call(null,cljs.core.filterv.call(null,new cljs.core.Keyword("view","type","view/type",1170670657),entities_for_camera_22077));
var chunk__22019_22079 = null;
var count__22020_22080 = (0);
var i__22021_22081 = (0);
while(true){
if((i__22021_22081 < count__22020_22080)){
var e_22082 = cljs.core._nth.call(null,chunk__22019_22079,i__22021_22081);
cs_game.view.render_entity.call(null,ctx,e_22082);

if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(world))){
cs_game.view.render_entity_id.call(null,ctx,e_22082);
} else {
}

var G__22083 = seq__22018_22078;
var G__22084 = chunk__22019_22079;
var G__22085 = count__22020_22080;
var G__22086 = (i__22021_22081 + (1));
seq__22018_22078 = G__22083;
chunk__22019_22079 = G__22084;
count__22020_22080 = G__22085;
i__22021_22081 = G__22086;
continue;
} else {
var temp__4657__auto___22087 = cljs.core.seq.call(null,seq__22018_22078);
if(temp__4657__auto___22087){
var seq__22018_22088__$1 = temp__4657__auto___22087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22018_22088__$1)){
var c__21243__auto___22089 = cljs.core.chunk_first.call(null,seq__22018_22088__$1);
var G__22090 = cljs.core.chunk_rest.call(null,seq__22018_22088__$1);
var G__22091 = c__21243__auto___22089;
var G__22092 = cljs.core.count.call(null,c__21243__auto___22089);
var G__22093 = (0);
seq__22018_22078 = G__22090;
chunk__22019_22079 = G__22091;
count__22020_22080 = G__22092;
i__22021_22081 = G__22093;
continue;
} else {
var e_22094 = cljs.core.first.call(null,seq__22018_22088__$1);
cs_game.view.render_entity.call(null,ctx,e_22094);

if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(world))){
cs_game.view.render_entity_id.call(null,ctx,e_22094);
} else {
}

var G__22095 = cljs.core.next.call(null,seq__22018_22088__$1);
var G__22096 = null;
var G__22097 = (0);
var G__22098 = (0);
seq__22018_22078 = G__22095;
chunk__22019_22079 = G__22096;
count__22020_22080 = G__22097;
i__22021_22081 = G__22098;
continue;
}
} else {
}
}
break;
}

if(do_rotate__21752__auto___22067){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto___22068){
ctx.translate((- x__21749__auto___22064),(- y__21750__auto___22065));
} else {
}

if(do_alpha__21751__auto___22066){
ctx.globalAlpha = original_alpha__21754__auto___22069;
} else {
}

var map__22022_22099 = camera_22062;
var map__22022_22100__$1 = ((((!((map__22022_22099 == null)))?((((map__22022_22099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22022_22099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22022_22099):map__22022_22099);
var vec__22023_22101 = cljs.core.get.call(null,map__22022_22100__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var camera_width_22102 = cljs.core.nth.call(null,vec__22023_22101,(0),null);
var camera_height_22103 = cljs.core.nth.call(null,vec__22023_22101,(1),null);
var screen_position_22104 = cljs.core.get.call(null,map__22022_22100__$1,new cljs.core.Keyword(null,"screen-position","screen-position",356064906));
var vec__22027_22105 = screen_position_22104;
var x__21749__auto___22106 = cljs.core.nth.call(null,vec__22027_22105,(0),null);
var y__21750__auto___22107 = cljs.core.nth.call(null,vec__22027_22105,(1),null);
var do_alpha__21751__auto___22108 = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto___22109 = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto___22110 = (cljs.core.not_EQ_.call(null,(0),x__21749__auto___22106)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto___22107));
var original_alpha__21754__auto___22111 = ((do_alpha__21751__auto___22108)?on_screen_ctx.globalAlpha:null);
if(do_alpha__21751__auto___22108){
on_screen_ctx.globalAlpha = (original_alpha__21754__auto___22111 * (-1));
} else {
}

if(do_translate__21753__auto___22110){
on_screen_ctx.translate(x__21749__auto___22106,y__21750__auto___22107);
} else {
}

if(do_rotate__21752__auto___22109){
on_screen_ctx.rotate((0));
} else {
}

cs_game.util.canvas.draw_image.call(null,on_screen_ctx,off_screen_el,(0),(0),camera_width_22102,camera_height_22103,(0),(0),camera_width_22102,camera_height_22103);

cs_game.util.canvas.stroke_style.call(null,on_screen_ctx,"#111");

cs_game.util.canvas.line_width.call(null,on_screen_ctx,(4));

cs_game.util.canvas.stroke_rect.call(null,on_screen_ctx,(0),(0),camera_width_22102,camera_height_22103);

if(do_rotate__21752__auto___22109){
on_screen_ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto___22110){
on_screen_ctx.translate((- x__21749__auto___22106),(- y__21750__auto___22107));
} else {
}

if(do_alpha__21751__auto___22108){
on_screen_ctx.globalAlpha = original_alpha__21754__auto___22111;
} else {
}

var G__22112 = seq__22005_22058;
var G__22113 = chunk__22006_22059;
var G__22114 = count__22007_22060;
var G__22115 = (i__22008_22061 + (1));
seq__22005_22058 = G__22112;
chunk__22006_22059 = G__22113;
count__22007_22060 = G__22114;
i__22008_22061 = G__22115;
continue;
} else {
var temp__4657__auto___22116 = cljs.core.seq.call(null,seq__22005_22058);
if(temp__4657__auto___22116){
var seq__22005_22117__$1 = temp__4657__auto___22116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22005_22117__$1)){
var c__21243__auto___22118 = cljs.core.chunk_first.call(null,seq__22005_22117__$1);
var G__22119 = cljs.core.chunk_rest.call(null,seq__22005_22117__$1);
var G__22120 = c__21243__auto___22118;
var G__22121 = cljs.core.count.call(null,c__21243__auto___22118);
var G__22122 = (0);
seq__22005_22058 = G__22119;
chunk__22006_22059 = G__22120;
count__22007_22060 = G__22121;
i__22008_22061 = G__22122;
continue;
} else {
var camera_22123 = cljs.core.first.call(null,seq__22005_22117__$1);
var vec__22030_22124 = cs_game.util.maths.v_PLUS_.call(null,cs_game.util.maths.vneg.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(camera_22123)),cs_game.util.maths.vdiv.call(null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(camera_22123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)));
var x__21749__auto___22125 = cljs.core.nth.call(null,vec__22030_22124,(0),null);
var y__21750__auto___22126 = cljs.core.nth.call(null,vec__22030_22124,(1),null);
var do_alpha__21751__auto___22127 = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto___22128 = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto___22129 = (cljs.core.not_EQ_.call(null,(0),x__21749__auto___22125)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto___22126));
var original_alpha__21754__auto___22130 = ((do_alpha__21751__auto___22127)?ctx.globalAlpha:null);
if(do_alpha__21751__auto___22127){
ctx.globalAlpha = (original_alpha__21754__auto___22130 * (-1));
} else {
}

if(do_translate__21753__auto___22129){
ctx.translate(x__21749__auto___22125,y__21750__auto___22126);
} else {
}

if(do_rotate__21752__auto___22128){
ctx.rotate((0));
} else {
}

var vec__22033_22131 = cs_game.util.maths.v_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(camera_22123),cs_game.util.maths.vdiv.call(null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(camera_22123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)));
var x_22132 = cljs.core.nth.call(null,vec__22033_22131,(0),null);
var y_22133 = cljs.core.nth.call(null,vec__22033_22131,(1),null);
var vec__22036_22134 = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(camera_22123);
var width_22135 = cljs.core.nth.call(null,vec__22036_22134,(0),null);
var height_22136 = cljs.core.nth.call(null,vec__22036_22134,(1),null);
cs_game.util.canvas.fill_style.call(null,ctx,bg_pattern);

cs_game.util.canvas.fill_rect.call(null,ctx,x_22132,y_22133,width_22135,height_22136);

cs_game.util.canvas.stroke_style.call(null,ctx,"black");

cs_game.util.canvas.line_width.call(null,ctx,(30));

cs_game.util.canvas.stroke_rect.call(null,ctx,(0),(0),world_width,world_height);

var comparator_22137 = cljs.core.juxt.call(null,new cljs.core.Keyword("view","z-index","view/z-index",1894086237),new cljs.core.Keyword("entity","id","entity/id",400070257));
var entities_for_camera_22138 = cljs.core.sort_by.call(null,comparator_22137,cljs.core.mapv.call(null,((function (seq__22005_22058,chunk__22006_22059,count__22007_22060,i__22008_22061,comparator_22137,vec__22030_22124,x__21749__auto___22125,y__21750__auto___22126,do_alpha__21751__auto___22127,do_rotate__21752__auto___22128,do_translate__21753__auto___22129,original_alpha__21754__auto___22130,camera_22123,seq__22005_22117__$1,temp__4657__auto___22116,entities,entity_spatial_hash,vec__21999,world_width,world_height,vec__22002,screen_width,screen_height,ctx){
return (function (p1__21938_SHARP_){
return cljs.core.nth.call(null,entities,p1__21938_SHARP_);
});})(seq__22005_22058,chunk__22006_22059,count__22007_22060,i__22008_22061,comparator_22137,vec__22030_22124,x__21749__auto___22125,y__21750__auto___22126,do_alpha__21751__auto___22127,do_rotate__21752__auto___22128,do_translate__21753__auto___22129,original_alpha__21754__auto___22130,camera_22123,seq__22005_22117__$1,temp__4657__auto___22116,entities,entity_spatial_hash,vec__21999,world_width,world_height,vec__22002,screen_width,screen_height,ctx))
,cs_game.spatial_hashing.nearby_entity_indexes.call(null,entity_spatial_hash,camera_22123)));
var seq__22039_22139 = cljs.core.seq.call(null,cljs.core.filterv.call(null,new cljs.core.Keyword("view","type","view/type",1170670657),entities_for_camera_22138));
var chunk__22040_22140 = null;
var count__22041_22141 = (0);
var i__22042_22142 = (0);
while(true){
if((i__22042_22142 < count__22041_22141)){
var e_22143 = cljs.core._nth.call(null,chunk__22040_22140,i__22042_22142);
cs_game.view.render_entity.call(null,ctx,e_22143);

if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(world))){
cs_game.view.render_entity_id.call(null,ctx,e_22143);
} else {
}

var G__22144 = seq__22039_22139;
var G__22145 = chunk__22040_22140;
var G__22146 = count__22041_22141;
var G__22147 = (i__22042_22142 + (1));
seq__22039_22139 = G__22144;
chunk__22040_22140 = G__22145;
count__22041_22141 = G__22146;
i__22042_22142 = G__22147;
continue;
} else {
var temp__4657__auto___22148__$1 = cljs.core.seq.call(null,seq__22039_22139);
if(temp__4657__auto___22148__$1){
var seq__22039_22149__$1 = temp__4657__auto___22148__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22039_22149__$1)){
var c__21243__auto___22150 = cljs.core.chunk_first.call(null,seq__22039_22149__$1);
var G__22151 = cljs.core.chunk_rest.call(null,seq__22039_22149__$1);
var G__22152 = c__21243__auto___22150;
var G__22153 = cljs.core.count.call(null,c__21243__auto___22150);
var G__22154 = (0);
seq__22039_22139 = G__22151;
chunk__22040_22140 = G__22152;
count__22041_22141 = G__22153;
i__22042_22142 = G__22154;
continue;
} else {
var e_22155 = cljs.core.first.call(null,seq__22039_22149__$1);
cs_game.view.render_entity.call(null,ctx,e_22155);

if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(world))){
cs_game.view.render_entity_id.call(null,ctx,e_22155);
} else {
}

var G__22156 = cljs.core.next.call(null,seq__22039_22149__$1);
var G__22157 = null;
var G__22158 = (0);
var G__22159 = (0);
seq__22039_22139 = G__22156;
chunk__22040_22140 = G__22157;
count__22041_22141 = G__22158;
i__22042_22142 = G__22159;
continue;
}
} else {
}
}
break;
}

if(do_rotate__21752__auto___22128){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto___22129){
ctx.translate((- x__21749__auto___22125),(- y__21750__auto___22126));
} else {
}

if(do_alpha__21751__auto___22127){
ctx.globalAlpha = original_alpha__21754__auto___22130;
} else {
}

var map__22043_22160 = camera_22123;
var map__22043_22161__$1 = ((((!((map__22043_22160 == null)))?((((map__22043_22160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22043_22160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22043_22160):map__22043_22160);
var vec__22044_22162 = cljs.core.get.call(null,map__22043_22161__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var camera_width_22163 = cljs.core.nth.call(null,vec__22044_22162,(0),null);
var camera_height_22164 = cljs.core.nth.call(null,vec__22044_22162,(1),null);
var screen_position_22165 = cljs.core.get.call(null,map__22043_22161__$1,new cljs.core.Keyword(null,"screen-position","screen-position",356064906));
var vec__22048_22166 = screen_position_22165;
var x__21749__auto___22167 = cljs.core.nth.call(null,vec__22048_22166,(0),null);
var y__21750__auto___22168 = cljs.core.nth.call(null,vec__22048_22166,(1),null);
var do_alpha__21751__auto___22169 = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto___22170 = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto___22171 = (cljs.core.not_EQ_.call(null,(0),x__21749__auto___22167)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto___22168));
var original_alpha__21754__auto___22172 = ((do_alpha__21751__auto___22169)?on_screen_ctx.globalAlpha:null);
if(do_alpha__21751__auto___22169){
on_screen_ctx.globalAlpha = (original_alpha__21754__auto___22172 * (-1));
} else {
}

if(do_translate__21753__auto___22171){
on_screen_ctx.translate(x__21749__auto___22167,y__21750__auto___22168);
} else {
}

if(do_rotate__21752__auto___22170){
on_screen_ctx.rotate((0));
} else {
}

cs_game.util.canvas.draw_image.call(null,on_screen_ctx,off_screen_el,(0),(0),camera_width_22163,camera_height_22164,(0),(0),camera_width_22163,camera_height_22164);

cs_game.util.canvas.stroke_style.call(null,on_screen_ctx,"#111");

cs_game.util.canvas.line_width.call(null,on_screen_ctx,(4));

cs_game.util.canvas.stroke_rect.call(null,on_screen_ctx,(0),(0),camera_width_22163,camera_height_22164);

if(do_rotate__21752__auto___22170){
on_screen_ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto___22171){
on_screen_ctx.translate((- x__21749__auto___22167),(- y__21750__auto___22168));
} else {
}

if(do_alpha__21751__auto___22169){
on_screen_ctx.globalAlpha = original_alpha__21754__auto___22172;
} else {
}

var G__22173 = cljs.core.next.call(null,seq__22005_22117__$1);
var G__22174 = null;
var G__22175 = (0);
var G__22176 = (0);
seq__22005_22058 = G__22173;
chunk__22006_22059 = G__22174;
count__22007_22060 = G__22175;
i__22008_22061 = G__22176;
continue;
}
} else {
}
}
break;
}

var seq__22051_22177 = cljs.core.seq.call(null,cljs.core.mapv.call(null,((function (entities,entity_spatial_hash,vec__21999,world_width,world_height,vec__22002,screen_width,screen_height,ctx){
return (function (p1__21939_SHARP_){
return cljs.core.nth.call(null,entities,p1__21939_SHARP_);
});})(entities,entity_spatial_hash,vec__21999,world_width,world_height,vec__22002,screen_width,screen_height,ctx))
,new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ces","system->entity-indexes","ces/system->entity-indexes",-128003505).cljs$core$IFn$_invoke$arity$1(world))));
var chunk__22052_22178 = null;
var count__22053_22179 = (0);
var i__22054_22180 = (0);
while(true){
if((i__22054_22180 < count__22053_22179)){
var player_22181 = cljs.core._nth.call(null,chunk__22052_22178,i__22054_22180);
var camera_22182 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"cameras","cameras",-1446544612).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528).cljs$core$IFn$_invoke$arity$1(player_22181));
cs_game.view.render_player_hud.call(null,on_screen_ctx,player_22181,camera_22182);

var G__22183 = seq__22051_22177;
var G__22184 = chunk__22052_22178;
var G__22185 = count__22053_22179;
var G__22186 = (i__22054_22180 + (1));
seq__22051_22177 = G__22183;
chunk__22052_22178 = G__22184;
count__22053_22179 = G__22185;
i__22054_22180 = G__22186;
continue;
} else {
var temp__4657__auto___22187 = cljs.core.seq.call(null,seq__22051_22177);
if(temp__4657__auto___22187){
var seq__22051_22188__$1 = temp__4657__auto___22187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22051_22188__$1)){
var c__21243__auto___22189 = cljs.core.chunk_first.call(null,seq__22051_22188__$1);
var G__22190 = cljs.core.chunk_rest.call(null,seq__22051_22188__$1);
var G__22191 = c__21243__auto___22189;
var G__22192 = cljs.core.count.call(null,c__21243__auto___22189);
var G__22193 = (0);
seq__22051_22177 = G__22190;
chunk__22052_22178 = G__22191;
count__22053_22179 = G__22192;
i__22054_22180 = G__22193;
continue;
} else {
var player_22194 = cljs.core.first.call(null,seq__22051_22188__$1);
var camera_22195 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"cameras","cameras",-1446544612).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword("entity","tracked-by-camera-index","entity/tracked-by-camera-index",2006678528).cljs$core$IFn$_invoke$arity$1(player_22194));
cs_game.view.render_player_hud.call(null,on_screen_ctx,player_22194,camera_22195);

var G__22196 = cljs.core.next.call(null,seq__22051_22188__$1);
var G__22197 = null;
var G__22198 = (0);
var G__22199 = (0);
seq__22051_22177 = G__22196;
chunk__22052_22178 = G__22197;
count__22053_22179 = G__22198;
i__22054_22180 = G__22199;
continue;
}
} else {
}
}
break;
}

var vec__22055 = cs_game.util.maths.v_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(screen_width / (2)),(screen_height / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cs_game.view.minimap_size / (2)),(cs_game.view.minimap_size / (2))], null));
var x__21749__auto__ = cljs.core.nth.call(null,vec__22055,(0),null);
var y__21750__auto__ = cljs.core.nth.call(null,vec__22055,(1),null);
var do_alpha__21751__auto__ = cljs.core.not_EQ_.call(null,(-1),(-1));
var do_rotate__21752__auto__ = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto__ = (cljs.core.not_EQ_.call(null,(0),x__21749__auto__)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto__));
var original_alpha__21754__auto__ = ((do_alpha__21751__auto__)?on_screen_ctx.globalAlpha:null);
if(do_alpha__21751__auto__){
on_screen_ctx.globalAlpha = (original_alpha__21754__auto__ * (-1));
} else {
}

if(do_translate__21753__auto__){
on_screen_ctx.translate(x__21749__auto__,y__21750__auto__);
} else {
}

if(do_rotate__21752__auto__){
on_screen_ctx.rotate((0));
} else {
}

cs_game.view.render_minimap.call(null,on_screen_ctx,cljs.core.filterv.call(null,new cljs.core.Keyword("view","show-in-minimap","view/show-in-minimap",-367841985),entities),world);

if(do_rotate__21752__auto__){
on_screen_ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto__){
on_screen_ctx.translate((- x__21749__auto__),(- y__21750__auto__));
} else {
}

if(do_alpha__21751__auto__){
return on_screen_ctx.globalAlpha = original_alpha__21754__auto__;
} else {
return null;
}
});
cs_game.view.render_menu = (function cs_game$view$render_menu(ctx,screen_width,screen_height){
cs_game.util.canvas.fill_style.call(null,ctx,"black");

cs_game.util.canvas.fill_rect.call(null,ctx,(0),(0),screen_width,screen_height);

cs_game.util.canvas.fill_style.call(null,ctx,"white");

cs_game.util.canvas.font.call(null,ctx,"30px Arial");

cs_game.util.canvas.text_align.call(null,ctx,"center");

return cs_game.util.canvas.fill_text.call(null,ctx,"Press 2, 3 or 4 to start a game for that many players",(screen_width / (2)),(screen_height / (2)));
});
cs_game.view.render_pause_overlay = (function cs_game$view$render_pause_overlay(ctx,screen_width,screen_height){
var vec__22203_22206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var x__21749__auto___22207 = cljs.core.nth.call(null,vec__22203_22206,(0),null);
var y__21750__auto___22208 = cljs.core.nth.call(null,vec__22203_22206,(1),null);
var do_alpha__21751__auto___22209 = cljs.core.not_EQ_.call(null,(-1),0.7);
var do_rotate__21752__auto___22210 = cljs.core.not_EQ_.call(null,(0),(0));
var do_translate__21753__auto___22211 = (cljs.core.not_EQ_.call(null,(0),x__21749__auto___22207)) || (cljs.core.not_EQ_.call(null,(0),y__21750__auto___22208));
var original_alpha__21754__auto___22212 = ((do_alpha__21751__auto___22209)?ctx.globalAlpha:null);
if(do_alpha__21751__auto___22209){
ctx.globalAlpha = (original_alpha__21754__auto___22212 * 0.7);
} else {
}

if(do_translate__21753__auto___22211){
ctx.translate(x__21749__auto___22207,y__21750__auto___22208);
} else {
}

if(do_rotate__21752__auto___22210){
ctx.rotate((0));
} else {
}

cs_game.util.canvas.fill_style.call(null,ctx,"black");

cs_game.util.canvas.fill_rect.call(null,ctx,(0),(0),screen_width,screen_height);

if(do_rotate__21752__auto___22210){
ctx.rotate((- (0)));
} else {
}

if(do_translate__21753__auto___22211){
ctx.translate((- x__21749__auto___22207),(- y__21750__auto___22208));
} else {
}

if(do_alpha__21751__auto___22209){
ctx.globalAlpha = original_alpha__21754__auto___22212;
} else {
}

cs_game.util.canvas.fill_style.call(null,ctx,"white");

cs_game.util.canvas.font.call(null,ctx,"30px Arial");

cs_game.util.canvas.text_align.call(null,ctx,"center");

return cs_game.util.canvas.fill_text.call(null,ctx,"Paused (q to return to menu)",(screen_width / (2)),(screen_height / (2)));
});
cs_game.view.render_fps_overlay = (function cs_game$view$render_fps_overlay(ctx,p__22213){
var map__22226 = p__22213;
var map__22226__$1 = ((((!((map__22226 == null)))?((((map__22226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22226):map__22226);
var fps_history = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword("game","fps-history","game/fps-history",217807044));
var max_fps_history = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword("game","max-fps-history","game/max-fps-history",850542870));
var graph_width = (250);
var step_width = (graph_width / max_fps_history);
var offset_for_index = (max_fps_history - cljs.core.count.call(null,fps_history));
var graph_height = (50);
var graph_top = (0);
var graph_bottom = (graph_top + graph_height);
var graph_left = (100);
var graph_right = (graph_left + graph_width);
var max_fps = (60);
var fps__GT_y = ((function (graph_width,step_width,offset_for_index,graph_height,graph_top,graph_bottom,graph_left,graph_right,max_fps,map__22226,map__22226__$1,fps_history,max_fps_history){
return (function (fps){
return (graph_bottom - (fps * (graph_height / max_fps)));
});})(graph_width,step_width,offset_for_index,graph_height,graph_top,graph_bottom,graph_left,graph_right,max_fps,map__22226,map__22226__$1,fps_history,max_fps_history))
;
var index__GT_x = ((function (graph_width,step_width,offset_for_index,graph_height,graph_top,graph_bottom,graph_left,graph_right,max_fps,fps__GT_y,map__22226,map__22226__$1,fps_history,max_fps_history){
return (function (index){
return (graph_left + (index * step_width));
});})(graph_width,step_width,offset_for_index,graph_height,graph_top,graph_bottom,graph_left,graph_right,max_fps,fps__GT_y,map__22226,map__22226__$1,fps_history,max_fps_history))
;
cs_game.util.canvas.fill_style.call(null,ctx,"white");

cs_game.util.canvas.font.call(null,ctx,"12px Arial");

cs_game.util.canvas.text_align.call(null,ctx,"start");

cs_game.util.canvas.text_baseline.call(null,ctx,"middle");

cs_game.util.canvas.fill_text.call(null,ctx,[cljs.core.str(Math.round(cljs.core.last.call(null,fps_history))),cljs.core.str(" fps")].join(''),((5) + graph_right),(graph_top + (graph_height / (2))));

cs_game.util.canvas.line_width.call(null,ctx,(1));

cs_game.util.canvas.begin_path.call(null,ctx);

cs_game.util.canvas.move_to.call(null,ctx,graph_left,fps__GT_y.call(null,cljs.core.first.call(null,fps_history)));

var seq__22228_22238 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,fps_history));
var chunk__22229_22239 = null;
var count__22230_22240 = (0);
var i__22231_22241 = (0);
while(true){
if((i__22231_22241 < count__22230_22240)){
var vec__22232_22242 = cljs.core._nth.call(null,chunk__22229_22239,i__22231_22241);
var index_22243 = cljs.core.nth.call(null,vec__22232_22242,(0),null);
var fps_22244 = cljs.core.nth.call(null,vec__22232_22242,(1),null);
cs_game.util.canvas.line_to.call(null,ctx,index__GT_x.call(null,(offset_for_index + index_22243)),fps__GT_y.call(null,fps_22244));

var G__22245 = seq__22228_22238;
var G__22246 = chunk__22229_22239;
var G__22247 = count__22230_22240;
var G__22248 = (i__22231_22241 + (1));
seq__22228_22238 = G__22245;
chunk__22229_22239 = G__22246;
count__22230_22240 = G__22247;
i__22231_22241 = G__22248;
continue;
} else {
var temp__4657__auto___22249 = cljs.core.seq.call(null,seq__22228_22238);
if(temp__4657__auto___22249){
var seq__22228_22250__$1 = temp__4657__auto___22249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22228_22250__$1)){
var c__21243__auto___22251 = cljs.core.chunk_first.call(null,seq__22228_22250__$1);
var G__22252 = cljs.core.chunk_rest.call(null,seq__22228_22250__$1);
var G__22253 = c__21243__auto___22251;
var G__22254 = cljs.core.count.call(null,c__21243__auto___22251);
var G__22255 = (0);
seq__22228_22238 = G__22252;
chunk__22229_22239 = G__22253;
count__22230_22240 = G__22254;
i__22231_22241 = G__22255;
continue;
} else {
var vec__22235_22256 = cljs.core.first.call(null,seq__22228_22250__$1);
var index_22257 = cljs.core.nth.call(null,vec__22235_22256,(0),null);
var fps_22258 = cljs.core.nth.call(null,vec__22235_22256,(1),null);
cs_game.util.canvas.line_to.call(null,ctx,index__GT_x.call(null,(offset_for_index + index_22257)),fps__GT_y.call(null,fps_22258));

var G__22259 = cljs.core.next.call(null,seq__22228_22250__$1);
var G__22260 = null;
var G__22261 = (0);
var G__22262 = (0);
seq__22228_22238 = G__22259;
chunk__22229_22239 = G__22260;
count__22230_22240 = G__22261;
i__22231_22241 = G__22262;
continue;
}
} else {
}
}
break;
}

cs_game.util.canvas.stroke_style.call(null,ctx,"white");

return cs_game.util.canvas.stroke.call(null,ctx);
});

//# sourceMappingURL=view.js.map?rel=1550610524768
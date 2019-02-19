// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.util.expanded_lang');
goog.require('cljs.core');
cs_game.util.expanded_lang.group_by_transform = (function cs_game$util$expanded_lang$group_by_transform(key_fn,transform_fn,initial_collection,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (m,e){
var k = key_fn.call(null,e);
var v = transform_fn.call(null,e);
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.conj.call(null,cljs.core.get.call(null,m,k,initial_collection),v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
cs_game.util.expanded_lang.strict_empty_QMARK_ = (function cs_game$util$expanded_lang$strict_empty_QMARK_(v){
return cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,v));
});
cs_game.util.expanded_lang.concatv = (function cs_game$util$expanded_lang$concatv(var_args){
var args21293 = [];
var len__21239__auto___21299 = arguments.length;
var i__21240__auto___21300 = (0);
while(true){
if((i__21240__auto___21300 < len__21239__auto___21299)){
args21293.push((arguments[i__21240__auto___21300]));

var G__21301 = (i__21240__auto___21300 + (1));
i__21240__auto___21300 = G__21301;
continue;
} else {
}
break;
}

var G__21298 = args21293.length;
switch (G__21298) {
case 2:
return cs_game.util.expanded_lang.concatv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21258__auto__ = (new cljs.core.IndexedSeq(args21293.slice((2)),(0),null));
return cs_game.util.expanded_lang.concatv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21258__auto__);

}
});

cs_game.util.expanded_lang.concatv.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return cljs.core.into.call(null,v1,v2);
});

cs_game.util.expanded_lang.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,vs){
return cljs.core.into.call(null,v1,cljs.core.apply.call(null,cljs.core.concat,v2,vs));
});

cs_game.util.expanded_lang.concatv.cljs$lang$applyTo = (function (seq21294){
var G__21295 = cljs.core.first.call(null,seq21294);
var seq21294__$1 = cljs.core.next.call(null,seq21294);
var G__21296 = cljs.core.first.call(null,seq21294__$1);
var seq21294__$2 = cljs.core.next.call(null,seq21294__$1);
return cs_game.util.expanded_lang.concatv.cljs$core$IFn$_invoke$arity$variadic(G__21295,G__21296,seq21294__$2);
});

cs_game.util.expanded_lang.concatv.cljs$lang$maxFixedArity = (2);

cs_game.util.expanded_lang.index_by = (function cs_game$util$expanded_lang$index_by(key_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (m,e){
return cljs.core.assoc_BANG_.call(null,m,key_fn.call(null,e),e);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
cs_game.util.expanded_lang.map_values = (function cs_game$util$expanded_lang$map_values(f,m){
return cljs.core.reduce_kv.call(null,(function (p1__21303_SHARP_,p2__21304_SHARP_,p3__21305_SHARP_){
return cljs.core.assoc.call(null,p1__21303_SHARP_,p2__21304_SHARP_,f.call(null,p3__21305_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
cs_game.util.expanded_lang.trace = (function cs_game$util$expanded_lang$trace(v){
cljs.core.println.call(null,v);

return v;
});

cs_game.util.expanded_lang.get_window_dimensions = (function cs_game$util$expanded_lang$get_window_dimensions(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
});
cs_game.util.expanded_lang.get_time = (function cs_game$util$expanded_lang$get_time(){
return (new Date()).getTime();
});

//# sourceMappingURL=expanded_lang.js.map?rel=1492251105921
// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27565 = arguments.length;
var i__21240__auto___27566 = (0);
while(true){
if((i__21240__auto___27566 < len__21239__auto___27565)){
args__21246__auto__.push((arguments[i__21240__auto___27566]));

var G__27567 = (i__21240__auto___27566 + (1));
i__21240__auto___27566 = G__27567;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq27564){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27564));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27569 = arguments.length;
var i__21240__auto___27570 = (0);
while(true){
if((i__21240__auto___27570 < len__21239__auto___27569)){
args__21246__auto__.push((arguments[i__21240__auto___27570]));

var G__27571 = (i__21240__auto___27570 + (1));
i__21240__auto___27570 = G__27571;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq27568){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27568));
});

var g_QMARK__27572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_27573 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27572){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27572))
,null));
var mkg_27574 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27572,g_27573){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27572,g_27573))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__27572,g_27573,mkg_27574){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__27572).call(null,x);
});})(g_QMARK__27572,g_27573,mkg_27574))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__27572,g_27573,mkg_27574){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_27574).call(null,gfn);
});})(g_QMARK__27572,g_27573,mkg_27574))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__27572,g_27573,mkg_27574){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_27573).call(null,generator);
});})(g_QMARK__27572,g_27573,mkg_27574))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27536__auto___27593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27536__auto___27593){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27594 = arguments.length;
var i__21240__auto___27595 = (0);
while(true){
if((i__21240__auto___27595 < len__21239__auto___27594)){
args__21246__auto__.push((arguments[i__21240__auto___27595]));

var G__27596 = (i__21240__auto___27595 + (1));
i__21240__auto___27595 = G__27596;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27593))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27593),args);
});})(g__27536__auto___27593))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27536__auto___27593){
return (function (seq27575){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27575));
});})(g__27536__auto___27593))
;


var g__27536__auto___27597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27536__auto___27597){
return (function cljs$spec$impl$gen$list(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27598 = arguments.length;
var i__21240__auto___27599 = (0);
while(true){
if((i__21240__auto___27599 < len__21239__auto___27598)){
args__21246__auto__.push((arguments[i__21240__auto___27599]));

var G__27600 = (i__21240__auto___27599 + (1));
i__21240__auto___27599 = G__27600;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27597))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27597),args);
});})(g__27536__auto___27597))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27536__auto___27597){
return (function (seq27576){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27576));
});})(g__27536__auto___27597))
;


var g__27536__auto___27601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27536__auto___27601){
return (function cljs$spec$impl$gen$map(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27602 = arguments.length;
var i__21240__auto___27603 = (0);
while(true){
if((i__21240__auto___27603 < len__21239__auto___27602)){
args__21246__auto__.push((arguments[i__21240__auto___27603]));

var G__27604 = (i__21240__auto___27603 + (1));
i__21240__auto___27603 = G__27604;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27601))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27601),args);
});})(g__27536__auto___27601))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27536__auto___27601){
return (function (seq27577){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27577));
});})(g__27536__auto___27601))
;


var g__27536__auto___27605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27536__auto___27605){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27606 = arguments.length;
var i__21240__auto___27607 = (0);
while(true){
if((i__21240__auto___27607 < len__21239__auto___27606)){
args__21246__auto__.push((arguments[i__21240__auto___27607]));

var G__27608 = (i__21240__auto___27607 + (1));
i__21240__auto___27607 = G__27608;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27605))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27605),args);
});})(g__27536__auto___27605))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27536__auto___27605){
return (function (seq27578){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27578));
});})(g__27536__auto___27605))
;


var g__27536__auto___27609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27536__auto___27609){
return (function cljs$spec$impl$gen$set(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27610 = arguments.length;
var i__21240__auto___27611 = (0);
while(true){
if((i__21240__auto___27611 < len__21239__auto___27610)){
args__21246__auto__.push((arguments[i__21240__auto___27611]));

var G__27612 = (i__21240__auto___27611 + (1));
i__21240__auto___27611 = G__27612;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27609))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27609),args);
});})(g__27536__auto___27609))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27536__auto___27609){
return (function (seq27579){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27579));
});})(g__27536__auto___27609))
;


var g__27536__auto___27613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27536__auto___27613){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27614 = arguments.length;
var i__21240__auto___27615 = (0);
while(true){
if((i__21240__auto___27615 < len__21239__auto___27614)){
args__21246__auto__.push((arguments[i__21240__auto___27615]));

var G__27616 = (i__21240__auto___27615 + (1));
i__21240__auto___27615 = G__27616;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27613))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27613),args);
});})(g__27536__auto___27613))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27536__auto___27613){
return (function (seq27580){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27580));
});})(g__27536__auto___27613))
;


var g__27536__auto___27617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27536__auto___27617){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27618 = arguments.length;
var i__21240__auto___27619 = (0);
while(true){
if((i__21240__auto___27619 < len__21239__auto___27618)){
args__21246__auto__.push((arguments[i__21240__auto___27619]));

var G__27620 = (i__21240__auto___27619 + (1));
i__21240__auto___27619 = G__27620;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27617))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27617),args);
});})(g__27536__auto___27617))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27536__auto___27617){
return (function (seq27581){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27581));
});})(g__27536__auto___27617))
;


var g__27536__auto___27621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27536__auto___27621){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27622 = arguments.length;
var i__21240__auto___27623 = (0);
while(true){
if((i__21240__auto___27623 < len__21239__auto___27622)){
args__21246__auto__.push((arguments[i__21240__auto___27623]));

var G__27624 = (i__21240__auto___27623 + (1));
i__21240__auto___27623 = G__27624;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27621))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27621),args);
});})(g__27536__auto___27621))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27536__auto___27621){
return (function (seq27582){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27582));
});})(g__27536__auto___27621))
;


var g__27536__auto___27625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27536__auto___27625){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27626 = arguments.length;
var i__21240__auto___27627 = (0);
while(true){
if((i__21240__auto___27627 < len__21239__auto___27626)){
args__21246__auto__.push((arguments[i__21240__auto___27627]));

var G__27628 = (i__21240__auto___27627 + (1));
i__21240__auto___27627 = G__27628;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27625))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27625),args);
});})(g__27536__auto___27625))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27536__auto___27625){
return (function (seq27583){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27583));
});})(g__27536__auto___27625))
;


var g__27536__auto___27629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27536__auto___27629){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27630 = arguments.length;
var i__21240__auto___27631 = (0);
while(true){
if((i__21240__auto___27631 < len__21239__auto___27630)){
args__21246__auto__.push((arguments[i__21240__auto___27631]));

var G__27632 = (i__21240__auto___27631 + (1));
i__21240__auto___27631 = G__27632;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27629))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27629),args);
});})(g__27536__auto___27629))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27536__auto___27629){
return (function (seq27584){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27584));
});})(g__27536__auto___27629))
;


var g__27536__auto___27633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27536__auto___27633){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27634 = arguments.length;
var i__21240__auto___27635 = (0);
while(true){
if((i__21240__auto___27635 < len__21239__auto___27634)){
args__21246__auto__.push((arguments[i__21240__auto___27635]));

var G__27636 = (i__21240__auto___27635 + (1));
i__21240__auto___27635 = G__27636;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27633))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27633),args);
});})(g__27536__auto___27633))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27536__auto___27633){
return (function (seq27585){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27585));
});})(g__27536__auto___27633))
;


var g__27536__auto___27637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27536__auto___27637){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27638 = arguments.length;
var i__21240__auto___27639 = (0);
while(true){
if((i__21240__auto___27639 < len__21239__auto___27638)){
args__21246__auto__.push((arguments[i__21240__auto___27639]));

var G__27640 = (i__21240__auto___27639 + (1));
i__21240__auto___27639 = G__27640;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27637))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27637),args);
});})(g__27536__auto___27637))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27536__auto___27637){
return (function (seq27586){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27586));
});})(g__27536__auto___27637))
;


var g__27536__auto___27641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27536__auto___27641){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27642 = arguments.length;
var i__21240__auto___27643 = (0);
while(true){
if((i__21240__auto___27643 < len__21239__auto___27642)){
args__21246__auto__.push((arguments[i__21240__auto___27643]));

var G__27644 = (i__21240__auto___27643 + (1));
i__21240__auto___27643 = G__27644;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27641))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27641),args);
});})(g__27536__auto___27641))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27536__auto___27641){
return (function (seq27587){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27587));
});})(g__27536__auto___27641))
;


var g__27536__auto___27645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27536__auto___27645){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27646 = arguments.length;
var i__21240__auto___27647 = (0);
while(true){
if((i__21240__auto___27647 < len__21239__auto___27646)){
args__21246__auto__.push((arguments[i__21240__auto___27647]));

var G__27648 = (i__21240__auto___27647 + (1));
i__21240__auto___27647 = G__27648;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27645))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27645),args);
});})(g__27536__auto___27645))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27536__auto___27645){
return (function (seq27588){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27588));
});})(g__27536__auto___27645))
;


var g__27536__auto___27649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27536__auto___27649){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27650 = arguments.length;
var i__21240__auto___27651 = (0);
while(true){
if((i__21240__auto___27651 < len__21239__auto___27650)){
args__21246__auto__.push((arguments[i__21240__auto___27651]));

var G__27652 = (i__21240__auto___27651 + (1));
i__21240__auto___27651 = G__27652;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27649))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27649),args);
});})(g__27536__auto___27649))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27536__auto___27649){
return (function (seq27589){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27589));
});})(g__27536__auto___27649))
;


var g__27536__auto___27653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27536__auto___27653){
return (function cljs$spec$impl$gen$return(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27654 = arguments.length;
var i__21240__auto___27655 = (0);
while(true){
if((i__21240__auto___27655 < len__21239__auto___27654)){
args__21246__auto__.push((arguments[i__21240__auto___27655]));

var G__27656 = (i__21240__auto___27655 + (1));
i__21240__auto___27655 = G__27656;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27653))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27653),args);
});})(g__27536__auto___27653))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27536__auto___27653){
return (function (seq27590){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27590));
});})(g__27536__auto___27653))
;


var g__27536__auto___27657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27536__auto___27657){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27658 = arguments.length;
var i__21240__auto___27659 = (0);
while(true){
if((i__21240__auto___27659 < len__21239__auto___27658)){
args__21246__auto__.push((arguments[i__21240__auto___27659]));

var G__27660 = (i__21240__auto___27659 + (1));
i__21240__auto___27659 = G__27660;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27657))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27657),args);
});})(g__27536__auto___27657))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27536__auto___27657){
return (function (seq27591){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27591));
});})(g__27536__auto___27657))
;


var g__27536__auto___27661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__27536__auto___27661){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27662 = arguments.length;
var i__21240__auto___27663 = (0);
while(true){
if((i__21240__auto___27663 < len__21239__auto___27662)){
args__21246__auto__.push((arguments[i__21240__auto___27663]));

var G__27664 = (i__21240__auto___27663 + (1));
i__21240__auto___27663 = G__27664;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27536__auto___27661))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27536__auto___27661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27536__auto___27661),args);
});})(g__27536__auto___27661))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__27536__auto___27661){
return (function (seq27592){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27592));
});})(g__27536__auto___27661))
;

var g__27549__auto___27686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27549__auto___27686){
return (function cljs$spec$impl$gen$any(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27687 = arguments.length;
var i__21240__auto___27688 = (0);
while(true){
if((i__21240__auto___27688 < len__21239__auto___27687)){
args__21246__auto__.push((arguments[i__21240__auto___27688]));

var G__27689 = (i__21240__auto___27688 + (1));
i__21240__auto___27688 = G__27689;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27686))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27686){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27686);
});})(g__27549__auto___27686))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27549__auto___27686){
return (function (seq27665){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27665));
});})(g__27549__auto___27686))
;


var g__27549__auto___27690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27549__auto___27690){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27691 = arguments.length;
var i__21240__auto___27692 = (0);
while(true){
if((i__21240__auto___27692 < len__21239__auto___27691)){
args__21246__auto__.push((arguments[i__21240__auto___27692]));

var G__27693 = (i__21240__auto___27692 + (1));
i__21240__auto___27692 = G__27693;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27690))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27690){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27690);
});})(g__27549__auto___27690))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27549__auto___27690){
return (function (seq27666){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27666));
});})(g__27549__auto___27690))
;


var g__27549__auto___27694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27549__auto___27694){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27695 = arguments.length;
var i__21240__auto___27696 = (0);
while(true){
if((i__21240__auto___27696 < len__21239__auto___27695)){
args__21246__auto__.push((arguments[i__21240__auto___27696]));

var G__27697 = (i__21240__auto___27696 + (1));
i__21240__auto___27696 = G__27697;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27694))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27694){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27694);
});})(g__27549__auto___27694))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27549__auto___27694){
return (function (seq27667){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27667));
});})(g__27549__auto___27694))
;


var g__27549__auto___27698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27549__auto___27698){
return (function cljs$spec$impl$gen$char(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27699 = arguments.length;
var i__21240__auto___27700 = (0);
while(true){
if((i__21240__auto___27700 < len__21239__auto___27699)){
args__21246__auto__.push((arguments[i__21240__auto___27700]));

var G__27701 = (i__21240__auto___27700 + (1));
i__21240__auto___27700 = G__27701;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27698))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27698){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27698);
});})(g__27549__auto___27698))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27549__auto___27698){
return (function (seq27668){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27668));
});})(g__27549__auto___27698))
;


var g__27549__auto___27702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27549__auto___27702){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27703 = arguments.length;
var i__21240__auto___27704 = (0);
while(true){
if((i__21240__auto___27704 < len__21239__auto___27703)){
args__21246__auto__.push((arguments[i__21240__auto___27704]));

var G__27705 = (i__21240__auto___27704 + (1));
i__21240__auto___27704 = G__27705;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27702))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27702){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27702);
});})(g__27549__auto___27702))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27549__auto___27702){
return (function (seq27669){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27669));
});})(g__27549__auto___27702))
;


var g__27549__auto___27706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27549__auto___27706){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27707 = arguments.length;
var i__21240__auto___27708 = (0);
while(true){
if((i__21240__auto___27708 < len__21239__auto___27707)){
args__21246__auto__.push((arguments[i__21240__auto___27708]));

var G__27709 = (i__21240__auto___27708 + (1));
i__21240__auto___27708 = G__27709;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27706))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27706){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27706);
});})(g__27549__auto___27706))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27549__auto___27706){
return (function (seq27670){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27670));
});})(g__27549__auto___27706))
;


var g__27549__auto___27710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27549__auto___27710){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27711 = arguments.length;
var i__21240__auto___27712 = (0);
while(true){
if((i__21240__auto___27712 < len__21239__auto___27711)){
args__21246__auto__.push((arguments[i__21240__auto___27712]));

var G__27713 = (i__21240__auto___27712 + (1));
i__21240__auto___27712 = G__27713;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27710))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27710){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27710);
});})(g__27549__auto___27710))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27549__auto___27710){
return (function (seq27671){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27671));
});})(g__27549__auto___27710))
;


var g__27549__auto___27714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27549__auto___27714){
return (function cljs$spec$impl$gen$double(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27715 = arguments.length;
var i__21240__auto___27716 = (0);
while(true){
if((i__21240__auto___27716 < len__21239__auto___27715)){
args__21246__auto__.push((arguments[i__21240__auto___27716]));

var G__27717 = (i__21240__auto___27716 + (1));
i__21240__auto___27716 = G__27717;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27714))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27714){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27714);
});})(g__27549__auto___27714))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27549__auto___27714){
return (function (seq27672){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27672));
});})(g__27549__auto___27714))
;


var g__27549__auto___27718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27549__auto___27718){
return (function cljs$spec$impl$gen$int(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27719 = arguments.length;
var i__21240__auto___27720 = (0);
while(true){
if((i__21240__auto___27720 < len__21239__auto___27719)){
args__21246__auto__.push((arguments[i__21240__auto___27720]));

var G__27721 = (i__21240__auto___27720 + (1));
i__21240__auto___27720 = G__27721;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27718))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27718){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27718);
});})(g__27549__auto___27718))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27549__auto___27718){
return (function (seq27673){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27673));
});})(g__27549__auto___27718))
;


var g__27549__auto___27722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27549__auto___27722){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27723 = arguments.length;
var i__21240__auto___27724 = (0);
while(true){
if((i__21240__auto___27724 < len__21239__auto___27723)){
args__21246__auto__.push((arguments[i__21240__auto___27724]));

var G__27725 = (i__21240__auto___27724 + (1));
i__21240__auto___27724 = G__27725;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27722))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27722){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27722);
});})(g__27549__auto___27722))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27549__auto___27722){
return (function (seq27674){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27674));
});})(g__27549__auto___27722))
;


var g__27549__auto___27726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27549__auto___27726){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27727 = arguments.length;
var i__21240__auto___27728 = (0);
while(true){
if((i__21240__auto___27728 < len__21239__auto___27727)){
args__21246__auto__.push((arguments[i__21240__auto___27728]));

var G__27729 = (i__21240__auto___27728 + (1));
i__21240__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27726))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27726){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27726);
});})(g__27549__auto___27726))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27549__auto___27726){
return (function (seq27675){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27675));
});})(g__27549__auto___27726))
;


var g__27549__auto___27730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27549__auto___27730){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27731 = arguments.length;
var i__21240__auto___27732 = (0);
while(true){
if((i__21240__auto___27732 < len__21239__auto___27731)){
args__21246__auto__.push((arguments[i__21240__auto___27732]));

var G__27733 = (i__21240__auto___27732 + (1));
i__21240__auto___27732 = G__27733;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27730))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27730){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27730);
});})(g__27549__auto___27730))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27549__auto___27730){
return (function (seq27676){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27676));
});})(g__27549__auto___27730))
;


var g__27549__auto___27734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27549__auto___27734){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27735 = arguments.length;
var i__21240__auto___27736 = (0);
while(true){
if((i__21240__auto___27736 < len__21239__auto___27735)){
args__21246__auto__.push((arguments[i__21240__auto___27736]));

var G__27737 = (i__21240__auto___27736 + (1));
i__21240__auto___27736 = G__27737;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27734))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27734){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27734);
});})(g__27549__auto___27734))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27549__auto___27734){
return (function (seq27677){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27677));
});})(g__27549__auto___27734))
;


var g__27549__auto___27738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27549__auto___27738){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27739 = arguments.length;
var i__21240__auto___27740 = (0);
while(true){
if((i__21240__auto___27740 < len__21239__auto___27739)){
args__21246__auto__.push((arguments[i__21240__auto___27740]));

var G__27741 = (i__21240__auto___27740 + (1));
i__21240__auto___27740 = G__27741;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27738))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27738){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27738);
});})(g__27549__auto___27738))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27549__auto___27738){
return (function (seq27678){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27678));
});})(g__27549__auto___27738))
;


var g__27549__auto___27742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27549__auto___27742){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27743 = arguments.length;
var i__21240__auto___27744 = (0);
while(true){
if((i__21240__auto___27744 < len__21239__auto___27743)){
args__21246__auto__.push((arguments[i__21240__auto___27744]));

var G__27745 = (i__21240__auto___27744 + (1));
i__21240__auto___27744 = G__27745;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27742))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27742){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27742);
});})(g__27549__auto___27742))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27549__auto___27742){
return (function (seq27679){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27679));
});})(g__27549__auto___27742))
;


var g__27549__auto___27746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27549__auto___27746){
return (function cljs$spec$impl$gen$string(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27747 = arguments.length;
var i__21240__auto___27748 = (0);
while(true){
if((i__21240__auto___27748 < len__21239__auto___27747)){
args__21246__auto__.push((arguments[i__21240__auto___27748]));

var G__27749 = (i__21240__auto___27748 + (1));
i__21240__auto___27748 = G__27749;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27746))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27746){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27746);
});})(g__27549__auto___27746))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27549__auto___27746){
return (function (seq27680){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27680));
});})(g__27549__auto___27746))
;


var g__27549__auto___27750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27549__auto___27750){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27751 = arguments.length;
var i__21240__auto___27752 = (0);
while(true){
if((i__21240__auto___27752 < len__21239__auto___27751)){
args__21246__auto__.push((arguments[i__21240__auto___27752]));

var G__27753 = (i__21240__auto___27752 + (1));
i__21240__auto___27752 = G__27753;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27750))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27750){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27750);
});})(g__27549__auto___27750))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27549__auto___27750){
return (function (seq27681){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27681));
});})(g__27549__auto___27750))
;


var g__27549__auto___27754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27549__auto___27754){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27755 = arguments.length;
var i__21240__auto___27756 = (0);
while(true){
if((i__21240__auto___27756 < len__21239__auto___27755)){
args__21246__auto__.push((arguments[i__21240__auto___27756]));

var G__27757 = (i__21240__auto___27756 + (1));
i__21240__auto___27756 = G__27757;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27754))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27754){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27754);
});})(g__27549__auto___27754))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27549__auto___27754){
return (function (seq27682){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27682));
});})(g__27549__auto___27754))
;


var g__27549__auto___27758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27549__auto___27758){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27759 = arguments.length;
var i__21240__auto___27760 = (0);
while(true){
if((i__21240__auto___27760 < len__21239__auto___27759)){
args__21246__auto__.push((arguments[i__21240__auto___27760]));

var G__27761 = (i__21240__auto___27760 + (1));
i__21240__auto___27760 = G__27761;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27758))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27758){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27758);
});})(g__27549__auto___27758))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27549__auto___27758){
return (function (seq27683){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27683));
});})(g__27549__auto___27758))
;


var g__27549__auto___27762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27549__auto___27762){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27763 = arguments.length;
var i__21240__auto___27764 = (0);
while(true){
if((i__21240__auto___27764 < len__21239__auto___27763)){
args__21246__auto__.push((arguments[i__21240__auto___27764]));

var G__27765 = (i__21240__auto___27764 + (1));
i__21240__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27762))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27762){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27762);
});})(g__27549__auto___27762))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27549__auto___27762){
return (function (seq27684){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27684));
});})(g__27549__auto___27762))
;


var g__27549__auto___27766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27549__auto___27766){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27767 = arguments.length;
var i__21240__auto___27768 = (0);
while(true){
if((i__21240__auto___27768 < len__21239__auto___27767)){
args__21246__auto__.push((arguments[i__21240__auto___27768]));

var G__27769 = (i__21240__auto___27768 + (1));
i__21240__auto___27768 = G__27769;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});})(g__27549__auto___27766))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27549__auto___27766){
return (function (args){
return cljs.core.deref.call(null,g__27549__auto___27766);
});})(g__27549__auto___27766))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27549__auto___27766){
return (function (seq27685){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27685));
});})(g__27549__auto___27766))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21246__auto__ = [];
var len__21239__auto___27772 = arguments.length;
var i__21240__auto___27773 = (0);
while(true){
if((i__21240__auto___27773 < len__21239__auto___27772)){
args__21246__auto__.push((arguments[i__21240__auto___27773]));

var G__27774 = (i__21240__auto___27773 + (1));
i__21240__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__27770_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27770_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq27771){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27771));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__27775_SHARP_){
return (new Date(p1__27775_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1492251111421
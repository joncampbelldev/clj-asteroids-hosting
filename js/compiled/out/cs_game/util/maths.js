// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.util.maths');
goog.require('cljs.core');
cs_game.util.maths.pi = 3.14159265359;
cs_game.util.maths.radians_per_degree = (cs_game.util.maths.pi / (180));
cs_game.util.maths.degrees_per_radian = ((180) / cs_game.util.maths.pi);
cs_game.util.maths.degrees_to_radians = (function cs_game$util$maths$degrees_to_radians(degrees){
return (degrees * cs_game.util.maths.radians_per_degree);
});
cs_game.util.maths.radians_to_degrees = (function cs_game$util$maths$radians_to_degrees(radians){
return (radians * cs_game.util.maths.degrees_per_radian);
});
cs_game.util.maths.cos = (function cs_game$util$maths$cos(x){
return Math.cos(x);
});
cs_game.util.maths.sin = (function cs_game$util$maths$sin(x){
return Math.sin(x);
});
cs_game.util.maths.tan = (function cs_game$util$maths$tan(x){
return Math.tan(x);
});
cs_game.util.maths.atan2 = (function cs_game$util$maths$atan2(y,x){
return Math.atan2(y,x);
});
cs_game.util.maths.safe_PLUS_ = (function cs_game$util$maths$safe_PLUS_(var_args){
var args__21246__auto__ = [];
var len__21239__auto___41994 = arguments.length;
var i__21240__auto___41995 = (0);
while(true){
if((i__21240__auto___41995 < len__21239__auto___41994)){
args__21246__auto__.push((arguments[i__21240__auto___41995]));

var G__41996 = (i__21240__auto___41995 + (1));
i__21240__auto___41995 = G__41996;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cs_game.util.maths.safe_PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});

cs_game.util.maths.safe_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,(function (p1__41992_SHARP_){
if(cljs.core.truth_(p1__41992_SHARP_)){
return p1__41992_SHARP_;
} else {
return (0);
}
}),xs));
});

cs_game.util.maths.safe_PLUS_.cljs$lang$maxFixedArity = (0);

cs_game.util.maths.safe_PLUS_.cljs$lang$applyTo = (function (seq41993){
return cs_game.util.maths.safe_PLUS_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41993));
});

cs_game.util.maths.v_PLUS_ = (function cs_game$util$maths$v_PLUS_(var_args){
var args41997 = [];
var len__21239__auto___42060 = arguments.length;
var i__21240__auto___42061 = (0);
while(true){
if((i__21240__auto___42061 < len__21239__auto___42060)){
args41997.push((arguments[i__21240__auto___42061]));

var G__42062 = (i__21240__auto___42061 + (1));
i__21240__auto___42061 = G__42062;
continue;
} else {
}
break;
}

var G__41999 = args41997.length;
switch (G__41999) {
case 1:
return cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41997.length)].join('')));

}
});

cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (p__42000){
var vec__42001 = p__42000;
var v1x = cljs.core.nth.call(null,vec__42001,(0),null);
var v1y = cljs.core.nth.call(null,vec__42001,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1x,v1y], null);
});

cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (p__42004,p__42005){
var vec__42006 = p__42004;
var v1x = cljs.core.nth.call(null,vec__42006,(0),null);
var v1y = cljs.core.nth.call(null,vec__42006,(1),null);
var vec__42009 = p__42005;
var v2x = cljs.core.nth.call(null,vec__42009,(0),null);
var v2y = cljs.core.nth.call(null,vec__42009,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(v1x + v2x),(v1y + v2y)], null);
});

cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (p__42012,p__42013,p__42014){
var vec__42015 = p__42012;
var v1x = cljs.core.nth.call(null,vec__42015,(0),null);
var v1y = cljs.core.nth.call(null,vec__42015,(1),null);
var vec__42018 = p__42013;
var v2x = cljs.core.nth.call(null,vec__42018,(0),null);
var v2y = cljs.core.nth.call(null,vec__42018,(1),null);
var vec__42021 = p__42014;
var v3x = cljs.core.nth.call(null,vec__42021,(0),null);
var v3y = cljs.core.nth.call(null,vec__42021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((v1x + v2x) + v3x),((v1y + v2y) + v3y)], null);
});

cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (p__42024,p__42025,p__42026,p__42027){
var vec__42028 = p__42024;
var v1x = cljs.core.nth.call(null,vec__42028,(0),null);
var v1y = cljs.core.nth.call(null,vec__42028,(1),null);
var vec__42031 = p__42025;
var v2x = cljs.core.nth.call(null,vec__42031,(0),null);
var v2y = cljs.core.nth.call(null,vec__42031,(1),null);
var vec__42034 = p__42026;
var v3x = cljs.core.nth.call(null,vec__42034,(0),null);
var v3y = cljs.core.nth.call(null,vec__42034,(1),null);
var vec__42037 = p__42027;
var v4x = cljs.core.nth.call(null,vec__42037,(0),null);
var v4y = cljs.core.nth.call(null,vec__42037,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((v1x + v2x) + v3x) + v4x),(((v1y + v2y) + v3y) + v4y)], null);
});

cs_game.util.maths.v_PLUS_.cljs$core$IFn$_invoke$arity$5 = (function (p__42040,p__42041,p__42042,p__42043,p__42044){
var vec__42045 = p__42040;
var v1x = cljs.core.nth.call(null,vec__42045,(0),null);
var v1y = cljs.core.nth.call(null,vec__42045,(1),null);
var vec__42048 = p__42041;
var v2x = cljs.core.nth.call(null,vec__42048,(0),null);
var v2y = cljs.core.nth.call(null,vec__42048,(1),null);
var vec__42051 = p__42042;
var v3x = cljs.core.nth.call(null,vec__42051,(0),null);
var v3y = cljs.core.nth.call(null,vec__42051,(1),null);
var vec__42054 = p__42043;
var v4x = cljs.core.nth.call(null,vec__42054,(0),null);
var v4y = cljs.core.nth.call(null,vec__42054,(1),null);
var vec__42057 = p__42044;
var v5x = cljs.core.nth.call(null,vec__42057,(0),null);
var v5y = cljs.core.nth.call(null,vec__42057,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((v1x + v2x) + v3x) + v4x) + v5x),((((v1y + v2y) + v3y) + v4y) + v5y)], null);
});

cs_game.util.maths.v_PLUS_.cljs$lang$maxFixedArity = 5;

cs_game.util.maths.v_ = (function cs_game$util$maths$v_(var_args){
var args42064 = [];
var len__21239__auto___42127 = arguments.length;
var i__21240__auto___42128 = (0);
while(true){
if((i__21240__auto___42128 < len__21239__auto___42127)){
args42064.push((arguments[i__21240__auto___42128]));

var G__42129 = (i__21240__auto___42128 + (1));
i__21240__auto___42128 = G__42129;
continue;
} else {
}
break;
}

var G__42066 = args42064.length;
switch (G__42066) {
case 1:
return cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42064.length)].join('')));

}
});

cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$1 = (function (p__42067){
var vec__42068 = p__42067;
var v1x = cljs.core.nth.call(null,vec__42068,(0),null);
var v1y = cljs.core.nth.call(null,vec__42068,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- v1x),(- v1y)], null);
});

cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$2 = (function (p__42071,p__42072){
var vec__42073 = p__42071;
var v1x = cljs.core.nth.call(null,vec__42073,(0),null);
var v1y = cljs.core.nth.call(null,vec__42073,(1),null);
var vec__42076 = p__42072;
var v2x = cljs.core.nth.call(null,vec__42076,(0),null);
var v2y = cljs.core.nth.call(null,vec__42076,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(v1x - v2x),(v1y - v2y)], null);
});

cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$3 = (function (p__42079,p__42080,p__42081){
var vec__42082 = p__42079;
var v1x = cljs.core.nth.call(null,vec__42082,(0),null);
var v1y = cljs.core.nth.call(null,vec__42082,(1),null);
var vec__42085 = p__42080;
var v2x = cljs.core.nth.call(null,vec__42085,(0),null);
var v2y = cljs.core.nth.call(null,vec__42085,(1),null);
var vec__42088 = p__42081;
var v3x = cljs.core.nth.call(null,vec__42088,(0),null);
var v3y = cljs.core.nth.call(null,vec__42088,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((v1x - v2x) - v3x),((v1y - v2y) - v3y)], null);
});

cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$4 = (function (p__42091,p__42092,p__42093,p__42094){
var vec__42095 = p__42091;
var v1x = cljs.core.nth.call(null,vec__42095,(0),null);
var v1y = cljs.core.nth.call(null,vec__42095,(1),null);
var vec__42098 = p__42092;
var v2x = cljs.core.nth.call(null,vec__42098,(0),null);
var v2y = cljs.core.nth.call(null,vec__42098,(1),null);
var vec__42101 = p__42093;
var v3x = cljs.core.nth.call(null,vec__42101,(0),null);
var v3y = cljs.core.nth.call(null,vec__42101,(1),null);
var vec__42104 = p__42094;
var v4x = cljs.core.nth.call(null,vec__42104,(0),null);
var v4y = cljs.core.nth.call(null,vec__42104,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((v1x - v2x) - v3x) - v4x),(((v1y - v2y) - v3y) - v4y)], null);
});

cs_game.util.maths.v_.cljs$core$IFn$_invoke$arity$5 = (function (p__42107,p__42108,p__42109,p__42110,p__42111){
var vec__42112 = p__42107;
var v1x = cljs.core.nth.call(null,vec__42112,(0),null);
var v1y = cljs.core.nth.call(null,vec__42112,(1),null);
var vec__42115 = p__42108;
var v2x = cljs.core.nth.call(null,vec__42115,(0),null);
var v2y = cljs.core.nth.call(null,vec__42115,(1),null);
var vec__42118 = p__42109;
var v3x = cljs.core.nth.call(null,vec__42118,(0),null);
var v3y = cljs.core.nth.call(null,vec__42118,(1),null);
var vec__42121 = p__42110;
var v4x = cljs.core.nth.call(null,vec__42121,(0),null);
var v4y = cljs.core.nth.call(null,vec__42121,(1),null);
var vec__42124 = p__42111;
var v5x = cljs.core.nth.call(null,vec__42124,(0),null);
var v5y = cljs.core.nth.call(null,vec__42124,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((v1x - v2x) - v3x) - v4x) - v5x),((((v1y - v2y) - v3y) - v4y) - v5y)], null);
});

cs_game.util.maths.v_.cljs$lang$maxFixedArity = 5;

cs_game.util.maths.vdiv = (function cs_game$util$maths$vdiv(var_args){
var args42131 = [];
var len__21239__auto___42194 = arguments.length;
var i__21240__auto___42195 = (0);
while(true){
if((i__21240__auto___42195 < len__21239__auto___42194)){
args42131.push((arguments[i__21240__auto___42195]));

var G__42196 = (i__21240__auto___42195 + (1));
i__21240__auto___42195 = G__42196;
continue;
} else {
}
break;
}

var G__42133 = args42131.length;
switch (G__42133) {
case 1:
return cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42131.length)].join('')));

}
});

cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$1 = (function (p__42134){
var vec__42135 = p__42134;
var v1x = cljs.core.nth.call(null,vec__42135,(0),null);
var v1y = cljs.core.nth.call(null,vec__42135,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) / v1x),((1) / v1y)], null);
});

cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$2 = (function (p__42138,p__42139){
var vec__42140 = p__42138;
var v1x = cljs.core.nth.call(null,vec__42140,(0),null);
var v1y = cljs.core.nth.call(null,vec__42140,(1),null);
var vec__42143 = p__42139;
var v2x = cljs.core.nth.call(null,vec__42143,(0),null);
var v2y = cljs.core.nth.call(null,vec__42143,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(v1x / v2x),(v1y / v2y)], null);
});

cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$3 = (function (p__42146,p__42147,p__42148){
var vec__42149 = p__42146;
var v1x = cljs.core.nth.call(null,vec__42149,(0),null);
var v1y = cljs.core.nth.call(null,vec__42149,(1),null);
var vec__42152 = p__42147;
var v2x = cljs.core.nth.call(null,vec__42152,(0),null);
var v2y = cljs.core.nth.call(null,vec__42152,(1),null);
var vec__42155 = p__42148;
var v3x = cljs.core.nth.call(null,vec__42155,(0),null);
var v3y = cljs.core.nth.call(null,vec__42155,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((v1x / v2x) / v3x),((v1y / v2y) / v3y)], null);
});

cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$4 = (function (p__42158,p__42159,p__42160,p__42161){
var vec__42162 = p__42158;
var v1x = cljs.core.nth.call(null,vec__42162,(0),null);
var v1y = cljs.core.nth.call(null,vec__42162,(1),null);
var vec__42165 = p__42159;
var v2x = cljs.core.nth.call(null,vec__42165,(0),null);
var v2y = cljs.core.nth.call(null,vec__42165,(1),null);
var vec__42168 = p__42160;
var v3x = cljs.core.nth.call(null,vec__42168,(0),null);
var v3y = cljs.core.nth.call(null,vec__42168,(1),null);
var vec__42171 = p__42161;
var v4x = cljs.core.nth.call(null,vec__42171,(0),null);
var v4y = cljs.core.nth.call(null,vec__42171,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((v1x / v2x) / v3x) / v4x),(((v1y / v2y) / v3y) / v4y)], null);
});

cs_game.util.maths.vdiv.cljs$core$IFn$_invoke$arity$5 = (function (p__42174,p__42175,p__42176,p__42177,p__42178){
var vec__42179 = p__42174;
var v1x = cljs.core.nth.call(null,vec__42179,(0),null);
var v1y = cljs.core.nth.call(null,vec__42179,(1),null);
var vec__42182 = p__42175;
var v2x = cljs.core.nth.call(null,vec__42182,(0),null);
var v2y = cljs.core.nth.call(null,vec__42182,(1),null);
var vec__42185 = p__42176;
var v3x = cljs.core.nth.call(null,vec__42185,(0),null);
var v3y = cljs.core.nth.call(null,vec__42185,(1),null);
var vec__42188 = p__42177;
var v4x = cljs.core.nth.call(null,vec__42188,(0),null);
var v4y = cljs.core.nth.call(null,vec__42188,(1),null);
var vec__42191 = p__42178;
var v5x = cljs.core.nth.call(null,vec__42191,(0),null);
var v5y = cljs.core.nth.call(null,vec__42191,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((v1x / v2x) / v3x) / v4x) / v5x),((((v1y / v2y) / v3y) / v4y) / v5y)], null);
});

cs_game.util.maths.vdiv.cljs$lang$maxFixedArity = 5;

cs_game.util.maths.v_STAR_ = (function cs_game$util$maths$v_STAR_(var_args){
var args42198 = [];
var len__21239__auto___42261 = arguments.length;
var i__21240__auto___42262 = (0);
while(true){
if((i__21240__auto___42262 < len__21239__auto___42261)){
args42198.push((arguments[i__21240__auto___42262]));

var G__42263 = (i__21240__auto___42262 + (1));
i__21240__auto___42262 = G__42263;
continue;
} else {
}
break;
}

var G__42200 = args42198.length;
switch (G__42200) {
case 1:
return cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42198.length)].join('')));

}
});

cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p__42201){
var vec__42202 = p__42201;
var v1x = cljs.core.nth.call(null,vec__42202,(0),null);
var v1y = cljs.core.nth.call(null,vec__42202,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1x,v1y], null);
});

cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__42205,p__42206){
var vec__42207 = p__42205;
var v1x = cljs.core.nth.call(null,vec__42207,(0),null);
var v1y = cljs.core.nth.call(null,vec__42207,(1),null);
var vec__42210 = p__42206;
var v2x = cljs.core.nth.call(null,vec__42210,(0),null);
var v2y = cljs.core.nth.call(null,vec__42210,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(v1x * v2x),(v1y * v2y)], null);
});

cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (p__42213,p__42214,p__42215){
var vec__42216 = p__42213;
var v1x = cljs.core.nth.call(null,vec__42216,(0),null);
var v1y = cljs.core.nth.call(null,vec__42216,(1),null);
var vec__42219 = p__42214;
var v2x = cljs.core.nth.call(null,vec__42219,(0),null);
var v2y = cljs.core.nth.call(null,vec__42219,(1),null);
var vec__42222 = p__42215;
var v3x = cljs.core.nth.call(null,vec__42222,(0),null);
var v3y = cljs.core.nth.call(null,vec__42222,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((v1x * v2x) * v3x),((v1y * v2y) * v3y)], null);
});

cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (p__42225,p__42226,p__42227,p__42228){
var vec__42229 = p__42225;
var v1x = cljs.core.nth.call(null,vec__42229,(0),null);
var v1y = cljs.core.nth.call(null,vec__42229,(1),null);
var vec__42232 = p__42226;
var v2x = cljs.core.nth.call(null,vec__42232,(0),null);
var v2y = cljs.core.nth.call(null,vec__42232,(1),null);
var vec__42235 = p__42227;
var v3x = cljs.core.nth.call(null,vec__42235,(0),null);
var v3y = cljs.core.nth.call(null,vec__42235,(1),null);
var vec__42238 = p__42228;
var v4x = cljs.core.nth.call(null,vec__42238,(0),null);
var v4y = cljs.core.nth.call(null,vec__42238,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((v1x * v2x) * v3x) * v4x),(((v1y * v2y) * v3y) * v4y)], null);
});

cs_game.util.maths.v_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (p__42241,p__42242,p__42243,p__42244,p__42245){
var vec__42246 = p__42241;
var v1x = cljs.core.nth.call(null,vec__42246,(0),null);
var v1y = cljs.core.nth.call(null,vec__42246,(1),null);
var vec__42249 = p__42242;
var v2x = cljs.core.nth.call(null,vec__42249,(0),null);
var v2y = cljs.core.nth.call(null,vec__42249,(1),null);
var vec__42252 = p__42243;
var v3x = cljs.core.nth.call(null,vec__42252,(0),null);
var v3y = cljs.core.nth.call(null,vec__42252,(1),null);
var vec__42255 = p__42244;
var v4x = cljs.core.nth.call(null,vec__42255,(0),null);
var v4y = cljs.core.nth.call(null,vec__42255,(1),null);
var vec__42258 = p__42245;
var v5x = cljs.core.nth.call(null,vec__42258,(0),null);
var v5y = cljs.core.nth.call(null,vec__42258,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((v1x * v2x) * v3x) * v4x) * v5x),((((v1y * v2y) * v3y) * v4y) * v5y)], null);
});

cs_game.util.maths.v_STAR_.cljs$lang$maxFixedArity = 5;

cs_game.util.maths.vneg = (function cs_game$util$maths$vneg(var_args){
var args__21246__auto__ = [];
var len__21239__auto___42266 = arguments.length;
var i__21240__auto___42267 = (0);
while(true){
if((i__21240__auto___42267 < len__21239__auto___42266)){
args__21246__auto__.push((arguments[i__21240__auto___42267]));

var G__42268 = (i__21240__auto___42267 + (1));
i__21240__auto___42267 = G__42268;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return cs_game.util.maths.vneg.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});

cs_game.util.maths.vneg.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return cljs.core.apply.call(null,cs_game.util.maths.v_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),vs);
});

cs_game.util.maths.vneg.cljs$lang$maxFixedArity = (0);

cs_game.util.maths.vneg.cljs$lang$applyTo = (function (seq42265){
return cs_game.util.maths.vneg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42265));
});

cs_game.util.maths.vmag = (function cs_game$util$maths$vmag(p__42269){
var vec__42273 = p__42269;
var x = cljs.core.nth.call(null,vec__42273,(0),null);
var y = cljs.core.nth.call(null,vec__42273,(1),null);
return Math.sqrt(((x * x) + (y * y)));
});
cs_game.util.maths.clamp = (function cs_game$util$maths$clamp(min,max,x){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;

}
}
});
cs_game.util.maths.abs = (function cs_game$util$maths$abs(x){
return Math.abs(x);
});
cs_game.util.maths.rand_between_positives = (function cs_game$util$maths$rand_between_positives(low,high){
return (cljs.core.rand.call(null,(high - low)) + low);
});
cs_game.util.maths.rand_between = (function cs_game$util$maths$rand_between(low,high){
if(((low < (0))) && ((high < (0)))){
return (- cs_game.util.maths.rand_between_positives.call(null,cs_game.util.maths.abs.call(null,high),cs_game.util.maths.abs.call(null,low)));
} else {
if(((low > (0))) && ((high > (0)))){
return cs_game.util.maths.rand_between_positives.call(null,low,high);
} else {
return (cljs.core.rand.call(null,(cs_game.util.maths.abs.call(null,low) + cs_game.util.maths.abs.call(null,high))) + low);

}
}
});
cs_game.util.maths.move_towards_asymptote = (function cs_game$util$maths$move_towards_asymptote(start,target,scale){
var diff = (target - start);
return (start + (diff * scale));
});
cs_game.util.maths.move_towards_linear = (function cs_game$util$maths$move_towards_linear(start,target,amount){
var op = (((start < target))?cljs.core._PLUS_:cljs.core._);
var comp = (((start < target))?cljs.core._GT_:cljs.core._LT_);
var new$ = op.call(null,start,amount);
if(cljs.core.truth_(comp.call(null,new$,target))){
return target;
} else {
return new$;
}
});

//# sourceMappingURL=maths.js.map?rel=1493524431882
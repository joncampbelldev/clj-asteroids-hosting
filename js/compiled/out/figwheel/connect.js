// Compiled by ClojureScript 1.9.225 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('cs_game.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__22850__delegate = function (x){
if(cljs.core.truth_(cs_game.core.on_js_reload)){
return cljs.core.apply.call(null,cs_game.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cs-game.core/on-js-reload' is missing");
}
};
var G__22850 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__22851__i = 0, G__22851__a = new Array(arguments.length -  0);
while (G__22851__i < G__22851__a.length) {G__22851__a[G__22851__i] = arguments[G__22851__i + 0]; ++G__22851__i;}
  x = new cljs.core.IndexedSeq(G__22851__a,0);
} 
return G__22850__delegate.call(this,x);};
G__22850.cljs$lang$maxFixedArity = 0;
G__22850.cljs$lang$applyTo = (function (arglist__22852){
var x = cljs.core.seq(arglist__22852);
return G__22850__delegate(x);
});
G__22850.cljs$core$IFn$_invoke$arity$variadic = G__22850__delegate;
return G__22850;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1539099342049
// Compiled by ClojureScript 1.9.225 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30977 = [];
var len__21239__auto___30980 = arguments.length;
var i__21240__auto___30981 = (0);
while(true){
if((i__21240__auto___30981 < len__21239__auto___30980)){
args30977.push((arguments[i__21240__auto___30981]));

var G__30982 = (i__21240__auto___30981 + (1));
i__21240__auto___30981 = G__30982;
continue;
} else {
}
break;
}

var G__30979 = args30977.length;
switch (G__30979) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30977.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21246__auto__ = [];
var len__21239__auto___30985 = arguments.length;
var i__21240__auto___30986 = (0);
while(true){
if((i__21240__auto___30986 < len__21239__auto___30985)){
args__21246__auto__.push((arguments[i__21240__auto___30986]));

var G__30987 = (i__21240__auto___30986 + (1));
i__21240__auto___30986 = G__30987;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30984){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30984));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21246__auto__ = [];
var len__21239__auto___30989 = arguments.length;
var i__21240__auto___30990 = (0);
while(true){
if((i__21240__auto___30990 < len__21239__auto___30989)){
args__21246__auto__.push((arguments[i__21240__auto___30990]));

var G__30991 = (i__21240__auto___30990 + (1));
i__21240__auto___30990 = G__30991;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30988){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30988));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30992 = cljs.core._EQ_;
var expr__30993 = (function (){var or__20164__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30996){if((e30996 instanceof Error)){
var e = e30996;
return false;
} else {
throw e30996;

}
}})();
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30992.call(null,"true",expr__30993))){
return true;
} else {
if(cljs.core.truth_(pred__30992.call(null,"false",expr__30993))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30993)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30998){if((e30998 instanceof Error)){
var e = e30998;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30998;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30999){
var map__31002 = p__30999;
var map__31002__$1 = ((((!((map__31002 == null)))?((((map__31002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31002):map__31002);
var message = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20164__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20152__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20152__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20152__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23560__auto___31164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___31164,ch){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___31164,ch){
return (function (state_31133){
var state_val_31134 = (state_31133[(1)]);
if((state_val_31134 === (7))){
var inst_31129 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31135_31165 = state_31133__$1;
(statearr_31135_31165[(2)] = inst_31129);

(statearr_31135_31165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (1))){
var state_31133__$1 = state_31133;
var statearr_31136_31166 = state_31133__$1;
(statearr_31136_31166[(2)] = null);

(statearr_31136_31166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (4))){
var inst_31086 = (state_31133[(7)]);
var inst_31086__$1 = (state_31133[(2)]);
var state_31133__$1 = (function (){var statearr_31137 = state_31133;
(statearr_31137[(7)] = inst_31086__$1);

return statearr_31137;
})();
if(cljs.core.truth_(inst_31086__$1)){
var statearr_31138_31167 = state_31133__$1;
(statearr_31138_31167[(1)] = (5));

} else {
var statearr_31139_31168 = state_31133__$1;
(statearr_31139_31168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (15))){
var inst_31093 = (state_31133[(8)]);
var inst_31108 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31093);
var inst_31109 = cljs.core.first.call(null,inst_31108);
var inst_31110 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31109);
var inst_31111 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31110)].join('');
var inst_31112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31111);
var state_31133__$1 = state_31133;
var statearr_31140_31169 = state_31133__$1;
(statearr_31140_31169[(2)] = inst_31112);

(statearr_31140_31169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (13))){
var inst_31117 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31141_31170 = state_31133__$1;
(statearr_31141_31170[(2)] = inst_31117);

(statearr_31141_31170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (6))){
var state_31133__$1 = state_31133;
var statearr_31142_31171 = state_31133__$1;
(statearr_31142_31171[(2)] = null);

(statearr_31142_31171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (17))){
var inst_31115 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31143_31172 = state_31133__$1;
(statearr_31143_31172[(2)] = inst_31115);

(statearr_31143_31172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (3))){
var inst_31131 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31133__$1,inst_31131);
} else {
if((state_val_31134 === (12))){
var inst_31092 = (state_31133[(9)]);
var inst_31106 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31092,opts);
var state_31133__$1 = state_31133;
if(cljs.core.truth_(inst_31106)){
var statearr_31144_31173 = state_31133__$1;
(statearr_31144_31173[(1)] = (15));

} else {
var statearr_31145_31174 = state_31133__$1;
(statearr_31145_31174[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (2))){
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31133__$1,(4),ch);
} else {
if((state_val_31134 === (11))){
var inst_31093 = (state_31133[(8)]);
var inst_31098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31099 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31093);
var inst_31100 = cljs.core.async.timeout.call(null,(1000));
var inst_31101 = [inst_31099,inst_31100];
var inst_31102 = (new cljs.core.PersistentVector(null,2,(5),inst_31098,inst_31101,null));
var state_31133__$1 = state_31133;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31133__$1,(14),inst_31102);
} else {
if((state_val_31134 === (9))){
var inst_31093 = (state_31133[(8)]);
var inst_31119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31120 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31093);
var inst_31121 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31120);
var inst_31122 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31121)].join('');
var inst_31123 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31122);
var state_31133__$1 = (function (){var statearr_31146 = state_31133;
(statearr_31146[(10)] = inst_31119);

return statearr_31146;
})();
var statearr_31147_31175 = state_31133__$1;
(statearr_31147_31175[(2)] = inst_31123);

(statearr_31147_31175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (5))){
var inst_31086 = (state_31133[(7)]);
var inst_31088 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31089 = (new cljs.core.PersistentArrayMap(null,2,inst_31088,null));
var inst_31090 = (new cljs.core.PersistentHashSet(null,inst_31089,null));
var inst_31091 = figwheel.client.focus_msgs.call(null,inst_31090,inst_31086);
var inst_31092 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31091);
var inst_31093 = cljs.core.first.call(null,inst_31091);
var inst_31094 = figwheel.client.autoload_QMARK_.call(null);
var state_31133__$1 = (function (){var statearr_31148 = state_31133;
(statearr_31148[(9)] = inst_31092);

(statearr_31148[(8)] = inst_31093);

return statearr_31148;
})();
if(cljs.core.truth_(inst_31094)){
var statearr_31149_31176 = state_31133__$1;
(statearr_31149_31176[(1)] = (8));

} else {
var statearr_31150_31177 = state_31133__$1;
(statearr_31150_31177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (14))){
var inst_31104 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31151_31178 = state_31133__$1;
(statearr_31151_31178[(2)] = inst_31104);

(statearr_31151_31178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (16))){
var state_31133__$1 = state_31133;
var statearr_31152_31179 = state_31133__$1;
(statearr_31152_31179[(2)] = null);

(statearr_31152_31179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (10))){
var inst_31125 = (state_31133[(2)]);
var state_31133__$1 = (function (){var statearr_31153 = state_31133;
(statearr_31153[(11)] = inst_31125);

return statearr_31153;
})();
var statearr_31154_31180 = state_31133__$1;
(statearr_31154_31180[(2)] = null);

(statearr_31154_31180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (8))){
var inst_31092 = (state_31133[(9)]);
var inst_31096 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31092,opts);
var state_31133__$1 = state_31133;
if(cljs.core.truth_(inst_31096)){
var statearr_31155_31181 = state_31133__$1;
(statearr_31155_31181[(1)] = (11));

} else {
var statearr_31156_31182 = state_31133__$1;
(statearr_31156_31182[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23560__auto___31164,ch))
;
return ((function (switch__23448__auto__,c__23560__auto___31164,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23449__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23449__auto____0 = (function (){
var statearr_31160 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31160[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23449__auto__);

(statearr_31160[(1)] = (1));

return statearr_31160;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23449__auto____1 = (function (state_31133){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_31133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e31161){if((e31161 instanceof Object)){
var ex__23452__auto__ = e31161;
var statearr_31162_31183 = state_31133;
(statearr_31162_31183[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31184 = state_31133;
state_31133 = G__31184;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23449__auto__ = function(state_31133){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23449__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23449__auto____1.call(this,state_31133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23449__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23449__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___31164,ch))
})();
var state__23562__auto__ = (function (){var statearr_31163 = f__23561__auto__.call(null);
(statearr_31163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___31164);

return statearr_31163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___31164,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31185_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31185_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31188 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31188){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31187){if((e31187 instanceof Error)){
var e = e31187;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31188], null));
} else {
var e = e31187;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31188))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31189){
var map__31198 = p__31189;
var map__31198__$1 = ((((!((map__31198 == null)))?((((map__31198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31198):map__31198);
var opts = map__31198__$1;
var build_id = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31198,map__31198__$1,opts,build_id){
return (function (p__31200){
var vec__31201 = p__31200;
var seq__31202 = cljs.core.seq.call(null,vec__31201);
var first__31203 = cljs.core.first.call(null,seq__31202);
var seq__31202__$1 = cljs.core.next.call(null,seq__31202);
var map__31204 = first__31203;
var map__31204__$1 = ((((!((map__31204 == null)))?((((map__31204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31204):map__31204);
var msg = map__31204__$1;
var msg_name = cljs.core.get.call(null,map__31204__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31202__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31201,seq__31202,first__31203,seq__31202__$1,map__31204,map__31204__$1,msg,msg_name,_,map__31198,map__31198__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31201,seq__31202,first__31203,seq__31202__$1,map__31204,map__31204__$1,msg,msg_name,_,map__31198,map__31198__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31198,map__31198__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31212){
var vec__31213 = p__31212;
var seq__31214 = cljs.core.seq.call(null,vec__31213);
var first__31215 = cljs.core.first.call(null,seq__31214);
var seq__31214__$1 = cljs.core.next.call(null,seq__31214);
var map__31216 = first__31215;
var map__31216__$1 = ((((!((map__31216 == null)))?((((map__31216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31216):map__31216);
var msg = map__31216__$1;
var msg_name = cljs.core.get.call(null,map__31216__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31214__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31218){
var map__31230 = p__31218;
var map__31230__$1 = ((((!((map__31230 == null)))?((((map__31230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31230):map__31230);
var on_compile_warning = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31230,map__31230__$1,on_compile_warning,on_compile_fail){
return (function (p__31232){
var vec__31233 = p__31232;
var seq__31234 = cljs.core.seq.call(null,vec__31233);
var first__31235 = cljs.core.first.call(null,seq__31234);
var seq__31234__$1 = cljs.core.next.call(null,seq__31234);
var map__31236 = first__31235;
var map__31236__$1 = ((((!((map__31236 == null)))?((((map__31236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31236):map__31236);
var msg = map__31236__$1;
var msg_name = cljs.core.get.call(null,map__31236__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31234__$1;
var pred__31238 = cljs.core._EQ_;
var expr__31239 = msg_name;
if(cljs.core.truth_(pred__31238.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31239))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31238.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31239))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31230,map__31230__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__,msg_hist,msg_names,msg){
return (function (state_31447){
var state_val_31448 = (state_31447[(1)]);
if((state_val_31448 === (7))){
var inst_31375 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
if(cljs.core.truth_(inst_31375)){
var statearr_31449_31495 = state_31447__$1;
(statearr_31449_31495[(1)] = (8));

} else {
var statearr_31450_31496 = state_31447__$1;
(statearr_31450_31496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (20))){
var inst_31441 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31451_31497 = state_31447__$1;
(statearr_31451_31497[(2)] = inst_31441);

(statearr_31451_31497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (27))){
var inst_31437 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31452_31498 = state_31447__$1;
(statearr_31452_31498[(2)] = inst_31437);

(statearr_31452_31498[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (1))){
var inst_31368 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31447__$1 = state_31447;
if(cljs.core.truth_(inst_31368)){
var statearr_31453_31499 = state_31447__$1;
(statearr_31453_31499[(1)] = (2));

} else {
var statearr_31454_31500 = state_31447__$1;
(statearr_31454_31500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (24))){
var inst_31439 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31455_31501 = state_31447__$1;
(statearr_31455_31501[(2)] = inst_31439);

(statearr_31455_31501[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (4))){
var inst_31445 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31447__$1,inst_31445);
} else {
if((state_val_31448 === (15))){
var inst_31443 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31456_31502 = state_31447__$1;
(statearr_31456_31502[(2)] = inst_31443);

(statearr_31456_31502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (21))){
var inst_31402 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31457_31503 = state_31447__$1;
(statearr_31457_31503[(2)] = inst_31402);

(statearr_31457_31503[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (31))){
var inst_31426 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31447__$1 = state_31447;
if(cljs.core.truth_(inst_31426)){
var statearr_31458_31504 = state_31447__$1;
(statearr_31458_31504[(1)] = (34));

} else {
var statearr_31459_31505 = state_31447__$1;
(statearr_31459_31505[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (32))){
var inst_31435 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31460_31506 = state_31447__$1;
(statearr_31460_31506[(2)] = inst_31435);

(statearr_31460_31506[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (33))){
var inst_31424 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31461_31507 = state_31447__$1;
(statearr_31461_31507[(2)] = inst_31424);

(statearr_31461_31507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (13))){
var inst_31389 = figwheel.client.heads_up.clear.call(null);
var state_31447__$1 = state_31447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(16),inst_31389);
} else {
if((state_val_31448 === (22))){
var inst_31406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31407 = figwheel.client.heads_up.append_warning_message.call(null,inst_31406);
var state_31447__$1 = state_31447;
var statearr_31462_31508 = state_31447__$1;
(statearr_31462_31508[(2)] = inst_31407);

(statearr_31462_31508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (36))){
var inst_31433 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31463_31509 = state_31447__$1;
(statearr_31463_31509[(2)] = inst_31433);

(statearr_31463_31509[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (29))){
var inst_31417 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31464_31510 = state_31447__$1;
(statearr_31464_31510[(2)] = inst_31417);

(statearr_31464_31510[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (6))){
var inst_31370 = (state_31447[(7)]);
var state_31447__$1 = state_31447;
var statearr_31465_31511 = state_31447__$1;
(statearr_31465_31511[(2)] = inst_31370);

(statearr_31465_31511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (28))){
var inst_31413 = (state_31447[(2)]);
var inst_31414 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31415 = figwheel.client.heads_up.display_warning.call(null,inst_31414);
var state_31447__$1 = (function (){var statearr_31466 = state_31447;
(statearr_31466[(8)] = inst_31413);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(29),inst_31415);
} else {
if((state_val_31448 === (25))){
var inst_31411 = figwheel.client.heads_up.clear.call(null);
var state_31447__$1 = state_31447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(28),inst_31411);
} else {
if((state_val_31448 === (34))){
var inst_31428 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31447__$1 = state_31447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(37),inst_31428);
} else {
if((state_val_31448 === (17))){
var inst_31395 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31467_31512 = state_31447__$1;
(statearr_31467_31512[(2)] = inst_31395);

(statearr_31467_31512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (3))){
var inst_31387 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31447__$1 = state_31447;
if(cljs.core.truth_(inst_31387)){
var statearr_31468_31513 = state_31447__$1;
(statearr_31468_31513[(1)] = (13));

} else {
var statearr_31469_31514 = state_31447__$1;
(statearr_31469_31514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (12))){
var inst_31383 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31470_31515 = state_31447__$1;
(statearr_31470_31515[(2)] = inst_31383);

(statearr_31470_31515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (2))){
var inst_31370 = (state_31447[(7)]);
var inst_31370__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31447__$1 = (function (){var statearr_31471 = state_31447;
(statearr_31471[(7)] = inst_31370__$1);

return statearr_31471;
})();
if(cljs.core.truth_(inst_31370__$1)){
var statearr_31472_31516 = state_31447__$1;
(statearr_31472_31516[(1)] = (5));

} else {
var statearr_31473_31517 = state_31447__$1;
(statearr_31473_31517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (23))){
var inst_31409 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31447__$1 = state_31447;
if(cljs.core.truth_(inst_31409)){
var statearr_31474_31518 = state_31447__$1;
(statearr_31474_31518[(1)] = (25));

} else {
var statearr_31475_31519 = state_31447__$1;
(statearr_31475_31519[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (35))){
var state_31447__$1 = state_31447;
var statearr_31476_31520 = state_31447__$1;
(statearr_31476_31520[(2)] = null);

(statearr_31476_31520[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (19))){
var inst_31404 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31447__$1 = state_31447;
if(cljs.core.truth_(inst_31404)){
var statearr_31477_31521 = state_31447__$1;
(statearr_31477_31521[(1)] = (22));

} else {
var statearr_31478_31522 = state_31447__$1;
(statearr_31478_31522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (11))){
var inst_31379 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31479_31523 = state_31447__$1;
(statearr_31479_31523[(2)] = inst_31379);

(statearr_31479_31523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (9))){
var inst_31381 = figwheel.client.heads_up.clear.call(null);
var state_31447__$1 = state_31447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(12),inst_31381);
} else {
if((state_val_31448 === (5))){
var inst_31372 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31447__$1 = state_31447;
var statearr_31480_31524 = state_31447__$1;
(statearr_31480_31524[(2)] = inst_31372);

(statearr_31480_31524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (14))){
var inst_31397 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31447__$1 = state_31447;
if(cljs.core.truth_(inst_31397)){
var statearr_31481_31525 = state_31447__$1;
(statearr_31481_31525[(1)] = (18));

} else {
var statearr_31482_31526 = state_31447__$1;
(statearr_31482_31526[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (26))){
var inst_31419 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31447__$1 = state_31447;
if(cljs.core.truth_(inst_31419)){
var statearr_31483_31527 = state_31447__$1;
(statearr_31483_31527[(1)] = (30));

} else {
var statearr_31484_31528 = state_31447__$1;
(statearr_31484_31528[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (16))){
var inst_31391 = (state_31447[(2)]);
var inst_31392 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31393 = figwheel.client.heads_up.display_exception.call(null,inst_31392);
var state_31447__$1 = (function (){var statearr_31485 = state_31447;
(statearr_31485[(9)] = inst_31391);

return statearr_31485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(17),inst_31393);
} else {
if((state_val_31448 === (30))){
var inst_31421 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31422 = figwheel.client.heads_up.display_warning.call(null,inst_31421);
var state_31447__$1 = state_31447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(33),inst_31422);
} else {
if((state_val_31448 === (10))){
var inst_31385 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31486_31529 = state_31447__$1;
(statearr_31486_31529[(2)] = inst_31385);

(statearr_31486_31529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (18))){
var inst_31399 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31400 = figwheel.client.heads_up.display_exception.call(null,inst_31399);
var state_31447__$1 = state_31447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(21),inst_31400);
} else {
if((state_val_31448 === (37))){
var inst_31430 = (state_31447[(2)]);
var state_31447__$1 = state_31447;
var statearr_31487_31530 = state_31447__$1;
(statearr_31487_31530[(2)] = inst_31430);

(statearr_31487_31530[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31448 === (8))){
var inst_31377 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31447__$1 = state_31447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31447__$1,(11),inst_31377);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23560__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23448__auto__,c__23560__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto____0 = (function (){
var statearr_31491 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31491[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto__);

(statearr_31491[(1)] = (1));

return statearr_31491;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto____1 = (function (state_31447){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_31447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e31492){if((e31492 instanceof Object)){
var ex__23452__auto__ = e31492;
var statearr_31493_31531 = state_31447;
(statearr_31493_31531[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31532 = state_31447;
state_31447 = G__31532;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto__ = function(state_31447){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto____1.call(this,state_31447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__,msg_hist,msg_names,msg))
})();
var state__23562__auto__ = (function (){var statearr_31494 = f__23561__auto__.call(null);
(statearr_31494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_31494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__,msg_hist,msg_names,msg))
);

return c__23560__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23560__auto___31595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___31595,ch){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___31595,ch){
return (function (state_31578){
var state_val_31579 = (state_31578[(1)]);
if((state_val_31579 === (1))){
var state_31578__$1 = state_31578;
var statearr_31580_31596 = state_31578__$1;
(statearr_31580_31596[(2)] = null);

(statearr_31580_31596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (2))){
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31578__$1,(4),ch);
} else {
if((state_val_31579 === (3))){
var inst_31576 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31578__$1,inst_31576);
} else {
if((state_val_31579 === (4))){
var inst_31566 = (state_31578[(7)]);
var inst_31566__$1 = (state_31578[(2)]);
var state_31578__$1 = (function (){var statearr_31581 = state_31578;
(statearr_31581[(7)] = inst_31566__$1);

return statearr_31581;
})();
if(cljs.core.truth_(inst_31566__$1)){
var statearr_31582_31597 = state_31578__$1;
(statearr_31582_31597[(1)] = (5));

} else {
var statearr_31583_31598 = state_31578__$1;
(statearr_31583_31598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (5))){
var inst_31566 = (state_31578[(7)]);
var inst_31568 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31566);
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31578__$1,(8),inst_31568);
} else {
if((state_val_31579 === (6))){
var state_31578__$1 = state_31578;
var statearr_31584_31599 = state_31578__$1;
(statearr_31584_31599[(2)] = null);

(statearr_31584_31599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (7))){
var inst_31574 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31585_31600 = state_31578__$1;
(statearr_31585_31600[(2)] = inst_31574);

(statearr_31585_31600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (8))){
var inst_31570 = (state_31578[(2)]);
var state_31578__$1 = (function (){var statearr_31586 = state_31578;
(statearr_31586[(8)] = inst_31570);

return statearr_31586;
})();
var statearr_31587_31601 = state_31578__$1;
(statearr_31587_31601[(2)] = null);

(statearr_31587_31601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23560__auto___31595,ch))
;
return ((function (switch__23448__auto__,c__23560__auto___31595,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23449__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23449__auto____0 = (function (){
var statearr_31591 = [null,null,null,null,null,null,null,null,null];
(statearr_31591[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23449__auto__);

(statearr_31591[(1)] = (1));

return statearr_31591;
});
var figwheel$client$heads_up_plugin_$_state_machine__23449__auto____1 = (function (state_31578){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_31578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e31592){if((e31592 instanceof Object)){
var ex__23452__auto__ = e31592;
var statearr_31593_31602 = state_31578;
(statearr_31593_31602[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31603 = state_31578;
state_31578 = G__31603;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23449__auto__ = function(state_31578){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23449__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23449__auto____1.call(this,state_31578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23449__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23449__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___31595,ch))
})();
var state__23562__auto__ = (function (){var statearr_31594 = f__23561__auto__.call(null);
(statearr_31594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___31595);

return statearr_31594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___31595,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__){
return (function (state_31624){
var state_val_31625 = (state_31624[(1)]);
if((state_val_31625 === (1))){
var inst_31619 = cljs.core.async.timeout.call(null,(3000));
var state_31624__$1 = state_31624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31624__$1,(2),inst_31619);
} else {
if((state_val_31625 === (2))){
var inst_31621 = (state_31624[(2)]);
var inst_31622 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31624__$1 = (function (){var statearr_31626 = state_31624;
(statearr_31626[(7)] = inst_31621);

return statearr_31626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31624__$1,inst_31622);
} else {
return null;
}
}
});})(c__23560__auto__))
;
return ((function (switch__23448__auto__,c__23560__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23449__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23449__auto____0 = (function (){
var statearr_31630 = [null,null,null,null,null,null,null,null];
(statearr_31630[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23449__auto__);

(statearr_31630[(1)] = (1));

return statearr_31630;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23449__auto____1 = (function (state_31624){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_31624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e31631){if((e31631 instanceof Object)){
var ex__23452__auto__ = e31631;
var statearr_31632_31634 = state_31624;
(statearr_31632_31634[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31635 = state_31624;
state_31624 = G__31635;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23449__auto__ = function(state_31624){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23449__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23449__auto____1.call(this,state_31624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23449__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23449__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__))
})();
var state__23562__auto__ = (function (){var statearr_31633 = f__23561__auto__.call(null);
(statearr_31633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_31633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__))
);

return c__23560__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31658){
var state_val_31659 = (state_31658[(1)]);
if((state_val_31659 === (1))){
var inst_31652 = cljs.core.async.timeout.call(null,(2000));
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31658__$1,(2),inst_31652);
} else {
if((state_val_31659 === (2))){
var inst_31654 = (state_31658[(2)]);
var inst_31655 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31656 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31655);
var state_31658__$1 = (function (){var statearr_31660 = state_31658;
(statearr_31660[(7)] = inst_31654);

return statearr_31660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31658__$1,inst_31656);
} else {
return null;
}
}
});})(c__23560__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__23448__auto__,c__23560__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto____0 = (function (){
var statearr_31664 = [null,null,null,null,null,null,null,null];
(statearr_31664[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto__);

(statearr_31664[(1)] = (1));

return statearr_31664;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto____1 = (function (state_31658){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_31658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e31665){if((e31665 instanceof Object)){
var ex__23452__auto__ = e31665;
var statearr_31666_31668 = state_31658;
(statearr_31666_31668[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31669 = state_31658;
state_31658 = G__31669;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23562__auto__ = (function (){var statearr_31667 = f__23561__auto__.call(null);
(statearr_31667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_31667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__,figwheel_version,temp__4657__auto__))
);

return c__23560__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31670){
var map__31674 = p__31670;
var map__31674__$1 = ((((!((map__31674 == null)))?((((map__31674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31674):map__31674);
var file = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31676 = "";
var G__31676__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31676),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31676);
var G__31676__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31676__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31676__$1);
if(cljs.core.truth_((function (){var and__20152__auto__ = line;
if(cljs.core.truth_(and__20152__auto__)){
return column;
} else {
return and__20152__auto__;
}
})())){
return [cljs.core.str(G__31676__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31676__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31677){
var map__31684 = p__31677;
var map__31684__$1 = ((((!((map__31684 == null)))?((((map__31684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31684):map__31684);
var ed = map__31684__$1;
var formatted_exception = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31686_31690 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31687_31691 = null;
var count__31688_31692 = (0);
var i__31689_31693 = (0);
while(true){
if((i__31689_31693 < count__31688_31692)){
var msg_31694 = cljs.core._nth.call(null,chunk__31687_31691,i__31689_31693);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31694);

var G__31695 = seq__31686_31690;
var G__31696 = chunk__31687_31691;
var G__31697 = count__31688_31692;
var G__31698 = (i__31689_31693 + (1));
seq__31686_31690 = G__31695;
chunk__31687_31691 = G__31696;
count__31688_31692 = G__31697;
i__31689_31693 = G__31698;
continue;
} else {
var temp__4657__auto___31699 = cljs.core.seq.call(null,seq__31686_31690);
if(temp__4657__auto___31699){
var seq__31686_31700__$1 = temp__4657__auto___31699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31686_31700__$1)){
var c__20975__auto___31701 = cljs.core.chunk_first.call(null,seq__31686_31700__$1);
var G__31702 = cljs.core.chunk_rest.call(null,seq__31686_31700__$1);
var G__31703 = c__20975__auto___31701;
var G__31704 = cljs.core.count.call(null,c__20975__auto___31701);
var G__31705 = (0);
seq__31686_31690 = G__31702;
chunk__31687_31691 = G__31703;
count__31688_31692 = G__31704;
i__31689_31693 = G__31705;
continue;
} else {
var msg_31706 = cljs.core.first.call(null,seq__31686_31700__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31706);

var G__31707 = cljs.core.next.call(null,seq__31686_31700__$1);
var G__31708 = null;
var G__31709 = (0);
var G__31710 = (0);
seq__31686_31690 = G__31707;
chunk__31687_31691 = G__31708;
count__31688_31692 = G__31709;
i__31689_31693 = G__31710;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31711){
var map__31714 = p__31711;
var map__31714__$1 = ((((!((map__31714 == null)))?((((map__31714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31714):map__31714);
var w = map__31714__$1;
var message = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20152__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20152__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20152__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31726 = cljs.core.seq.call(null,plugins);
var chunk__31727 = null;
var count__31728 = (0);
var i__31729 = (0);
while(true){
if((i__31729 < count__31728)){
var vec__31730 = cljs.core._nth.call(null,chunk__31727,i__31729);
var k = cljs.core.nth.call(null,vec__31730,(0),null);
var plugin = cljs.core.nth.call(null,vec__31730,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31736 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31726,chunk__31727,count__31728,i__31729,pl_31736,vec__31730,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31736.call(null,msg_hist);
});})(seq__31726,chunk__31727,count__31728,i__31729,pl_31736,vec__31730,k,plugin))
);
} else {
}

var G__31737 = seq__31726;
var G__31738 = chunk__31727;
var G__31739 = count__31728;
var G__31740 = (i__31729 + (1));
seq__31726 = G__31737;
chunk__31727 = G__31738;
count__31728 = G__31739;
i__31729 = G__31740;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31726);
if(temp__4657__auto__){
var seq__31726__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31726__$1)){
var c__20975__auto__ = cljs.core.chunk_first.call(null,seq__31726__$1);
var G__31741 = cljs.core.chunk_rest.call(null,seq__31726__$1);
var G__31742 = c__20975__auto__;
var G__31743 = cljs.core.count.call(null,c__20975__auto__);
var G__31744 = (0);
seq__31726 = G__31741;
chunk__31727 = G__31742;
count__31728 = G__31743;
i__31729 = G__31744;
continue;
} else {
var vec__31733 = cljs.core.first.call(null,seq__31726__$1);
var k = cljs.core.nth.call(null,vec__31733,(0),null);
var plugin = cljs.core.nth.call(null,vec__31733,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31745 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31726,chunk__31727,count__31728,i__31729,pl_31745,vec__31733,k,plugin,seq__31726__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31745.call(null,msg_hist);
});})(seq__31726,chunk__31727,count__31728,i__31729,pl_31745,vec__31733,k,plugin,seq__31726__$1,temp__4657__auto__))
);
} else {
}

var G__31746 = cljs.core.next.call(null,seq__31726__$1);
var G__31747 = null;
var G__31748 = (0);
var G__31749 = (0);
seq__31726 = G__31746;
chunk__31727 = G__31747;
count__31728 = G__31748;
i__31729 = G__31749;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31750 = [];
var len__21239__auto___31757 = arguments.length;
var i__21240__auto___31758 = (0);
while(true){
if((i__21240__auto___31758 < len__21239__auto___31757)){
args31750.push((arguments[i__21240__auto___31758]));

var G__31759 = (i__21240__auto___31758 + (1));
i__21240__auto___31758 = G__31759;
continue;
} else {
}
break;
}

var G__31752 = args31750.length;
switch (G__31752) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31750.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31753_31761 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31754_31762 = null;
var count__31755_31763 = (0);
var i__31756_31764 = (0);
while(true){
if((i__31756_31764 < count__31755_31763)){
var msg_31765 = cljs.core._nth.call(null,chunk__31754_31762,i__31756_31764);
figwheel.client.socket.handle_incoming_message.call(null,msg_31765);

var G__31766 = seq__31753_31761;
var G__31767 = chunk__31754_31762;
var G__31768 = count__31755_31763;
var G__31769 = (i__31756_31764 + (1));
seq__31753_31761 = G__31766;
chunk__31754_31762 = G__31767;
count__31755_31763 = G__31768;
i__31756_31764 = G__31769;
continue;
} else {
var temp__4657__auto___31770 = cljs.core.seq.call(null,seq__31753_31761);
if(temp__4657__auto___31770){
var seq__31753_31771__$1 = temp__4657__auto___31770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31753_31771__$1)){
var c__20975__auto___31772 = cljs.core.chunk_first.call(null,seq__31753_31771__$1);
var G__31773 = cljs.core.chunk_rest.call(null,seq__31753_31771__$1);
var G__31774 = c__20975__auto___31772;
var G__31775 = cljs.core.count.call(null,c__20975__auto___31772);
var G__31776 = (0);
seq__31753_31761 = G__31773;
chunk__31754_31762 = G__31774;
count__31755_31763 = G__31775;
i__31756_31764 = G__31776;
continue;
} else {
var msg_31777 = cljs.core.first.call(null,seq__31753_31771__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31777);

var G__31778 = cljs.core.next.call(null,seq__31753_31771__$1);
var G__31779 = null;
var G__31780 = (0);
var G__31781 = (0);
seq__31753_31761 = G__31778;
chunk__31754_31762 = G__31779;
count__31755_31763 = G__31780;
i__31756_31764 = G__31781;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21246__auto__ = [];
var len__21239__auto___31786 = arguments.length;
var i__21240__auto___31787 = (0);
while(true){
if((i__21240__auto___31787 < len__21239__auto___31786)){
args__21246__auto__.push((arguments[i__21240__auto___31787]));

var G__31788 = (i__21240__auto___31787 + (1));
i__21240__auto___31787 = G__31788;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((0) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21247__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31783){
var map__31784 = p__31783;
var map__31784__$1 = ((((!((map__31784 == null)))?((((map__31784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31784):map__31784);
var opts = map__31784__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31782){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31782));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31790){if((e31790 instanceof Error)){
var e = e31790;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31790;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31794){
var map__31795 = p__31794;
var map__31795__$1 = ((((!((map__31795 == null)))?((((map__31795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31795):map__31795);
var msg_name = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1492251115779
// Compiled by ClojureScript 1.9.225 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20164__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20164__auto__){
return or__20164__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20164__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26464_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26464_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26469 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26470 = null;
var count__26471 = (0);
var i__26472 = (0);
while(true){
if((i__26472 < count__26471)){
var n = cljs.core._nth.call(null,chunk__26470,i__26472);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26473 = seq__26469;
var G__26474 = chunk__26470;
var G__26475 = count__26471;
var G__26476 = (i__26472 + (1));
seq__26469 = G__26473;
chunk__26470 = G__26474;
count__26471 = G__26475;
i__26472 = G__26476;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26469);
if(temp__4657__auto__){
var seq__26469__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26469__$1)){
var c__20975__auto__ = cljs.core.chunk_first.call(null,seq__26469__$1);
var G__26477 = cljs.core.chunk_rest.call(null,seq__26469__$1);
var G__26478 = c__20975__auto__;
var G__26479 = cljs.core.count.call(null,c__20975__auto__);
var G__26480 = (0);
seq__26469 = G__26477;
chunk__26470 = G__26478;
count__26471 = G__26479;
i__26472 = G__26480;
continue;
} else {
var n = cljs.core.first.call(null,seq__26469__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26481 = cljs.core.next.call(null,seq__26469__$1);
var G__26482 = null;
var G__26483 = (0);
var G__26484 = (0);
seq__26469 = G__26481;
chunk__26470 = G__26482;
count__26471 = G__26483;
i__26472 = G__26484;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26535_26546 = cljs.core.seq.call(null,deps);
var chunk__26536_26547 = null;
var count__26537_26548 = (0);
var i__26538_26549 = (0);
while(true){
if((i__26538_26549 < count__26537_26548)){
var dep_26550 = cljs.core._nth.call(null,chunk__26536_26547,i__26538_26549);
topo_sort_helper_STAR_.call(null,dep_26550,(depth + (1)),state);

var G__26551 = seq__26535_26546;
var G__26552 = chunk__26536_26547;
var G__26553 = count__26537_26548;
var G__26554 = (i__26538_26549 + (1));
seq__26535_26546 = G__26551;
chunk__26536_26547 = G__26552;
count__26537_26548 = G__26553;
i__26538_26549 = G__26554;
continue;
} else {
var temp__4657__auto___26555 = cljs.core.seq.call(null,seq__26535_26546);
if(temp__4657__auto___26555){
var seq__26535_26556__$1 = temp__4657__auto___26555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26535_26556__$1)){
var c__20975__auto___26557 = cljs.core.chunk_first.call(null,seq__26535_26556__$1);
var G__26558 = cljs.core.chunk_rest.call(null,seq__26535_26556__$1);
var G__26559 = c__20975__auto___26557;
var G__26560 = cljs.core.count.call(null,c__20975__auto___26557);
var G__26561 = (0);
seq__26535_26546 = G__26558;
chunk__26536_26547 = G__26559;
count__26537_26548 = G__26560;
i__26538_26549 = G__26561;
continue;
} else {
var dep_26562 = cljs.core.first.call(null,seq__26535_26556__$1);
topo_sort_helper_STAR_.call(null,dep_26562,(depth + (1)),state);

var G__26563 = cljs.core.next.call(null,seq__26535_26556__$1);
var G__26564 = null;
var G__26565 = (0);
var G__26566 = (0);
seq__26535_26546 = G__26563;
chunk__26536_26547 = G__26564;
count__26537_26548 = G__26565;
i__26538_26549 = G__26566;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26539){
var vec__26543 = p__26539;
var seq__26544 = cljs.core.seq.call(null,vec__26543);
var first__26545 = cljs.core.first.call(null,seq__26544);
var seq__26544__$1 = cljs.core.next.call(null,seq__26544);
var x = first__26545;
var xs = seq__26544__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26543,seq__26544,first__26545,seq__26544__$1,x,xs,get_deps__$1){
return (function (p1__26485_SHARP_){
return clojure.set.difference.call(null,p1__26485_SHARP_,x);
});})(vec__26543,seq__26544,first__26545,seq__26544__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26579 = cljs.core.seq.call(null,provides);
var chunk__26580 = null;
var count__26581 = (0);
var i__26582 = (0);
while(true){
if((i__26582 < count__26581)){
var prov = cljs.core._nth.call(null,chunk__26580,i__26582);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26583_26591 = cljs.core.seq.call(null,requires);
var chunk__26584_26592 = null;
var count__26585_26593 = (0);
var i__26586_26594 = (0);
while(true){
if((i__26586_26594 < count__26585_26593)){
var req_26595 = cljs.core._nth.call(null,chunk__26584_26592,i__26586_26594);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26595,prov);

var G__26596 = seq__26583_26591;
var G__26597 = chunk__26584_26592;
var G__26598 = count__26585_26593;
var G__26599 = (i__26586_26594 + (1));
seq__26583_26591 = G__26596;
chunk__26584_26592 = G__26597;
count__26585_26593 = G__26598;
i__26586_26594 = G__26599;
continue;
} else {
var temp__4657__auto___26600 = cljs.core.seq.call(null,seq__26583_26591);
if(temp__4657__auto___26600){
var seq__26583_26601__$1 = temp__4657__auto___26600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26583_26601__$1)){
var c__20975__auto___26602 = cljs.core.chunk_first.call(null,seq__26583_26601__$1);
var G__26603 = cljs.core.chunk_rest.call(null,seq__26583_26601__$1);
var G__26604 = c__20975__auto___26602;
var G__26605 = cljs.core.count.call(null,c__20975__auto___26602);
var G__26606 = (0);
seq__26583_26591 = G__26603;
chunk__26584_26592 = G__26604;
count__26585_26593 = G__26605;
i__26586_26594 = G__26606;
continue;
} else {
var req_26607 = cljs.core.first.call(null,seq__26583_26601__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26607,prov);

var G__26608 = cljs.core.next.call(null,seq__26583_26601__$1);
var G__26609 = null;
var G__26610 = (0);
var G__26611 = (0);
seq__26583_26591 = G__26608;
chunk__26584_26592 = G__26609;
count__26585_26593 = G__26610;
i__26586_26594 = G__26611;
continue;
}
} else {
}
}
break;
}

var G__26612 = seq__26579;
var G__26613 = chunk__26580;
var G__26614 = count__26581;
var G__26615 = (i__26582 + (1));
seq__26579 = G__26612;
chunk__26580 = G__26613;
count__26581 = G__26614;
i__26582 = G__26615;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26579);
if(temp__4657__auto__){
var seq__26579__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26579__$1)){
var c__20975__auto__ = cljs.core.chunk_first.call(null,seq__26579__$1);
var G__26616 = cljs.core.chunk_rest.call(null,seq__26579__$1);
var G__26617 = c__20975__auto__;
var G__26618 = cljs.core.count.call(null,c__20975__auto__);
var G__26619 = (0);
seq__26579 = G__26616;
chunk__26580 = G__26617;
count__26581 = G__26618;
i__26582 = G__26619;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26579__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26587_26620 = cljs.core.seq.call(null,requires);
var chunk__26588_26621 = null;
var count__26589_26622 = (0);
var i__26590_26623 = (0);
while(true){
if((i__26590_26623 < count__26589_26622)){
var req_26624 = cljs.core._nth.call(null,chunk__26588_26621,i__26590_26623);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26624,prov);

var G__26625 = seq__26587_26620;
var G__26626 = chunk__26588_26621;
var G__26627 = count__26589_26622;
var G__26628 = (i__26590_26623 + (1));
seq__26587_26620 = G__26625;
chunk__26588_26621 = G__26626;
count__26589_26622 = G__26627;
i__26590_26623 = G__26628;
continue;
} else {
var temp__4657__auto___26629__$1 = cljs.core.seq.call(null,seq__26587_26620);
if(temp__4657__auto___26629__$1){
var seq__26587_26630__$1 = temp__4657__auto___26629__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26587_26630__$1)){
var c__20975__auto___26631 = cljs.core.chunk_first.call(null,seq__26587_26630__$1);
var G__26632 = cljs.core.chunk_rest.call(null,seq__26587_26630__$1);
var G__26633 = c__20975__auto___26631;
var G__26634 = cljs.core.count.call(null,c__20975__auto___26631);
var G__26635 = (0);
seq__26587_26620 = G__26632;
chunk__26588_26621 = G__26633;
count__26589_26622 = G__26634;
i__26590_26623 = G__26635;
continue;
} else {
var req_26636 = cljs.core.first.call(null,seq__26587_26630__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26636,prov);

var G__26637 = cljs.core.next.call(null,seq__26587_26630__$1);
var G__26638 = null;
var G__26639 = (0);
var G__26640 = (0);
seq__26587_26620 = G__26637;
chunk__26588_26621 = G__26638;
count__26589_26622 = G__26639;
i__26590_26623 = G__26640;
continue;
}
} else {
}
}
break;
}

var G__26641 = cljs.core.next.call(null,seq__26579__$1);
var G__26642 = null;
var G__26643 = (0);
var G__26644 = (0);
seq__26579 = G__26641;
chunk__26580 = G__26642;
count__26581 = G__26643;
i__26582 = G__26644;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26649_26653 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26650_26654 = null;
var count__26651_26655 = (0);
var i__26652_26656 = (0);
while(true){
if((i__26652_26656 < count__26651_26655)){
var ns_26657 = cljs.core._nth.call(null,chunk__26650_26654,i__26652_26656);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26657);

var G__26658 = seq__26649_26653;
var G__26659 = chunk__26650_26654;
var G__26660 = count__26651_26655;
var G__26661 = (i__26652_26656 + (1));
seq__26649_26653 = G__26658;
chunk__26650_26654 = G__26659;
count__26651_26655 = G__26660;
i__26652_26656 = G__26661;
continue;
} else {
var temp__4657__auto___26662 = cljs.core.seq.call(null,seq__26649_26653);
if(temp__4657__auto___26662){
var seq__26649_26663__$1 = temp__4657__auto___26662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26649_26663__$1)){
var c__20975__auto___26664 = cljs.core.chunk_first.call(null,seq__26649_26663__$1);
var G__26665 = cljs.core.chunk_rest.call(null,seq__26649_26663__$1);
var G__26666 = c__20975__auto___26664;
var G__26667 = cljs.core.count.call(null,c__20975__auto___26664);
var G__26668 = (0);
seq__26649_26653 = G__26665;
chunk__26650_26654 = G__26666;
count__26651_26655 = G__26667;
i__26652_26656 = G__26668;
continue;
} else {
var ns_26669 = cljs.core.first.call(null,seq__26649_26663__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26669);

var G__26670 = cljs.core.next.call(null,seq__26649_26663__$1);
var G__26671 = null;
var G__26672 = (0);
var G__26673 = (0);
seq__26649_26653 = G__26670;
chunk__26650_26654 = G__26671;
count__26651_26655 = G__26672;
i__26652_26656 = G__26673;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20164__auto__ = goog.require__;
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26674__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26675__i = 0, G__26675__a = new Array(arguments.length -  0);
while (G__26675__i < G__26675__a.length) {G__26675__a[G__26675__i] = arguments[G__26675__i + 0]; ++G__26675__i;}
  args = new cljs.core.IndexedSeq(G__26675__a,0);
} 
return G__26674__delegate.call(this,args);};
G__26674.cljs$lang$maxFixedArity = 0;
G__26674.cljs$lang$applyTo = (function (arglist__26676){
var args = cljs.core.seq(arglist__26676);
return G__26674__delegate(args);
});
G__26674.cljs$core$IFn$_invoke$arity$variadic = G__26674__delegate;
return G__26674;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26678 = cljs.core._EQ_;
var expr__26679 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26678.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26679))){
var path_parts = ((function (pred__26678,expr__26679){
return (function (p1__26677_SHARP_){
return clojure.string.split.call(null,p1__26677_SHARP_,/[\/\\]/);
});})(pred__26678,expr__26679))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26678,expr__26679){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26681){if((e26681 instanceof Error)){
var e = e26681;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26681;

}
}})());
});
;})(path_parts,sep,root,pred__26678,expr__26679))
} else {
if(cljs.core.truth_(pred__26678.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26679))){
return ((function (pred__26678,expr__26679){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26678,expr__26679){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26678,expr__26679))
);

return deferred.addErrback(((function (deferred,pred__26678,expr__26679){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26678,expr__26679))
);
});
;})(pred__26678,expr__26679))
} else {
return ((function (pred__26678,expr__26679){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26678,expr__26679))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26682,callback){
var map__26685 = p__26682;
var map__26685__$1 = ((((!((map__26685 == null)))?((((map__26685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26685):map__26685);
var file_msg = map__26685__$1;
var request_url = cljs.core.get.call(null,map__26685__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26685,map__26685__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26685,map__26685__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__){
return (function (state_26709){
var state_val_26710 = (state_26709[(1)]);
if((state_val_26710 === (7))){
var inst_26705 = (state_26709[(2)]);
var state_26709__$1 = state_26709;
var statearr_26711_26731 = state_26709__$1;
(statearr_26711_26731[(2)] = inst_26705);

(statearr_26711_26731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (1))){
var state_26709__$1 = state_26709;
var statearr_26712_26732 = state_26709__$1;
(statearr_26712_26732[(2)] = null);

(statearr_26712_26732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (4))){
var inst_26689 = (state_26709[(7)]);
var inst_26689__$1 = (state_26709[(2)]);
var state_26709__$1 = (function (){var statearr_26713 = state_26709;
(statearr_26713[(7)] = inst_26689__$1);

return statearr_26713;
})();
if(cljs.core.truth_(inst_26689__$1)){
var statearr_26714_26733 = state_26709__$1;
(statearr_26714_26733[(1)] = (5));

} else {
var statearr_26715_26734 = state_26709__$1;
(statearr_26715_26734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (6))){
var state_26709__$1 = state_26709;
var statearr_26716_26735 = state_26709__$1;
(statearr_26716_26735[(2)] = null);

(statearr_26716_26735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (3))){
var inst_26707 = (state_26709[(2)]);
var state_26709__$1 = state_26709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26709__$1,inst_26707);
} else {
if((state_val_26710 === (2))){
var state_26709__$1 = state_26709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26709__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26710 === (11))){
var inst_26701 = (state_26709[(2)]);
var state_26709__$1 = (function (){var statearr_26717 = state_26709;
(statearr_26717[(8)] = inst_26701);

return statearr_26717;
})();
var statearr_26718_26736 = state_26709__$1;
(statearr_26718_26736[(2)] = null);

(statearr_26718_26736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (9))){
var inst_26693 = (state_26709[(9)]);
var inst_26695 = (state_26709[(10)]);
var inst_26697 = inst_26695.call(null,inst_26693);
var state_26709__$1 = state_26709;
var statearr_26719_26737 = state_26709__$1;
(statearr_26719_26737[(2)] = inst_26697);

(statearr_26719_26737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (5))){
var inst_26689 = (state_26709[(7)]);
var inst_26691 = figwheel.client.file_reloading.blocking_load.call(null,inst_26689);
var state_26709__$1 = state_26709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26709__$1,(8),inst_26691);
} else {
if((state_val_26710 === (10))){
var inst_26693 = (state_26709[(9)]);
var inst_26699 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26693);
var state_26709__$1 = state_26709;
var statearr_26720_26738 = state_26709__$1;
(statearr_26720_26738[(2)] = inst_26699);

(statearr_26720_26738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (8))){
var inst_26695 = (state_26709[(10)]);
var inst_26689 = (state_26709[(7)]);
var inst_26693 = (state_26709[(2)]);
var inst_26694 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26695__$1 = cljs.core.get.call(null,inst_26694,inst_26689);
var state_26709__$1 = (function (){var statearr_26721 = state_26709;
(statearr_26721[(9)] = inst_26693);

(statearr_26721[(10)] = inst_26695__$1);

return statearr_26721;
})();
if(cljs.core.truth_(inst_26695__$1)){
var statearr_26722_26739 = state_26709__$1;
(statearr_26722_26739[(1)] = (9));

} else {
var statearr_26723_26740 = state_26709__$1;
(statearr_26723_26740[(1)] = (10));

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
});})(c__23560__auto__))
;
return ((function (switch__23448__auto__,c__23560__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23449__auto__ = null;
var figwheel$client$file_reloading$state_machine__23449__auto____0 = (function (){
var statearr_26727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26727[(0)] = figwheel$client$file_reloading$state_machine__23449__auto__);

(statearr_26727[(1)] = (1));

return statearr_26727;
});
var figwheel$client$file_reloading$state_machine__23449__auto____1 = (function (state_26709){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_26709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e26728){if((e26728 instanceof Object)){
var ex__23452__auto__ = e26728;
var statearr_26729_26741 = state_26709;
(statearr_26729_26741[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26742 = state_26709;
state_26709 = G__26742;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23449__auto__ = function(state_26709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23449__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23449__auto____1.call(this,state_26709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23449__auto____0;
figwheel$client$file_reloading$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23449__auto____1;
return figwheel$client$file_reloading$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__))
})();
var state__23562__auto__ = (function (){var statearr_26730 = f__23561__auto__.call(null);
(statearr_26730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_26730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__))
);

return c__23560__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26743,callback){
var map__26746 = p__26743;
var map__26746__$1 = ((((!((map__26746 == null)))?((((map__26746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26746):map__26746);
var file_msg = map__26746__$1;
var namespace = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26746,map__26746__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26746,map__26746__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26748){
var map__26751 = p__26748;
var map__26751__$1 = ((((!((map__26751 == null)))?((((map__26751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26751):map__26751);
var file_msg = map__26751__$1;
var namespace = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20152__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20152__auto__){
var or__20164__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
var or__20164__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20164__auto____$1)){
return or__20164__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20152__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26753,callback){
var map__26756 = p__26753;
var map__26756__$1 = ((((!((map__26756 == null)))?((((map__26756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26756):map__26756);
var file_msg = map__26756__$1;
var request_url = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23560__auto___26860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___26860,out){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___26860,out){
return (function (state_26842){
var state_val_26843 = (state_26842[(1)]);
if((state_val_26843 === (1))){
var inst_26816 = cljs.core.seq.call(null,files);
var inst_26817 = cljs.core.first.call(null,inst_26816);
var inst_26818 = cljs.core.next.call(null,inst_26816);
var inst_26819 = files;
var state_26842__$1 = (function (){var statearr_26844 = state_26842;
(statearr_26844[(7)] = inst_26818);

(statearr_26844[(8)] = inst_26819);

(statearr_26844[(9)] = inst_26817);

return statearr_26844;
})();
var statearr_26845_26861 = state_26842__$1;
(statearr_26845_26861[(2)] = null);

(statearr_26845_26861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (2))){
var inst_26825 = (state_26842[(10)]);
var inst_26819 = (state_26842[(8)]);
var inst_26824 = cljs.core.seq.call(null,inst_26819);
var inst_26825__$1 = cljs.core.first.call(null,inst_26824);
var inst_26826 = cljs.core.next.call(null,inst_26824);
var inst_26827 = (inst_26825__$1 == null);
var inst_26828 = cljs.core.not.call(null,inst_26827);
var state_26842__$1 = (function (){var statearr_26846 = state_26842;
(statearr_26846[(10)] = inst_26825__$1);

(statearr_26846[(11)] = inst_26826);

return statearr_26846;
})();
if(inst_26828){
var statearr_26847_26862 = state_26842__$1;
(statearr_26847_26862[(1)] = (4));

} else {
var statearr_26848_26863 = state_26842__$1;
(statearr_26848_26863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (3))){
var inst_26840 = (state_26842[(2)]);
var state_26842__$1 = state_26842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26842__$1,inst_26840);
} else {
if((state_val_26843 === (4))){
var inst_26825 = (state_26842[(10)]);
var inst_26830 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26825);
var state_26842__$1 = state_26842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26842__$1,(7),inst_26830);
} else {
if((state_val_26843 === (5))){
var inst_26836 = cljs.core.async.close_BANG_.call(null,out);
var state_26842__$1 = state_26842;
var statearr_26849_26864 = state_26842__$1;
(statearr_26849_26864[(2)] = inst_26836);

(statearr_26849_26864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (6))){
var inst_26838 = (state_26842[(2)]);
var state_26842__$1 = state_26842;
var statearr_26850_26865 = state_26842__$1;
(statearr_26850_26865[(2)] = inst_26838);

(statearr_26850_26865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (7))){
var inst_26826 = (state_26842[(11)]);
var inst_26832 = (state_26842[(2)]);
var inst_26833 = cljs.core.async.put_BANG_.call(null,out,inst_26832);
var inst_26819 = inst_26826;
var state_26842__$1 = (function (){var statearr_26851 = state_26842;
(statearr_26851[(8)] = inst_26819);

(statearr_26851[(12)] = inst_26833);

return statearr_26851;
})();
var statearr_26852_26866 = state_26842__$1;
(statearr_26852_26866[(2)] = null);

(statearr_26852_26866[(1)] = (2));


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
});})(c__23560__auto___26860,out))
;
return ((function (switch__23448__auto__,c__23560__auto___26860,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto____0 = (function (){
var statearr_26856 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26856[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto__);

(statearr_26856[(1)] = (1));

return statearr_26856;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto____1 = (function (state_26842){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_26842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e26857){if((e26857 instanceof Object)){
var ex__23452__auto__ = e26857;
var statearr_26858_26867 = state_26842;
(statearr_26858_26867[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26868 = state_26842;
state_26842 = G__26868;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto__ = function(state_26842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto____1.call(this,state_26842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___26860,out))
})();
var state__23562__auto__ = (function (){var statearr_26859 = f__23561__auto__.call(null);
(statearr_26859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___26860);

return statearr_26859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___26860,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26869,opts){
var map__26873 = p__26869;
var map__26873__$1 = ((((!((map__26873 == null)))?((((map__26873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26873):map__26873);
var eval_body__$1 = cljs.core.get.call(null,map__26873__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26873__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20152__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20152__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20152__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26875){var e = e26875;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26876_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26876_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26885){
var vec__26886 = p__26885;
var k = cljs.core.nth.call(null,vec__26886,(0),null);
var v = cljs.core.nth.call(null,vec__26886,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26889){
var vec__26890 = p__26889;
var k = cljs.core.nth.call(null,vec__26890,(0),null);
var v = cljs.core.nth.call(null,vec__26890,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26896,p__26897){
var map__27144 = p__26896;
var map__27144__$1 = ((((!((map__27144 == null)))?((((map__27144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27144):map__27144);
var opts = map__27144__$1;
var before_jsload = cljs.core.get.call(null,map__27144__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27144__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27144__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27145 = p__26897;
var map__27145__$1 = ((((!((map__27145 == null)))?((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27145):map__27145);
var msg = map__27145__$1;
var files = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27298){
var state_val_27299 = (state_27298[(1)]);
if((state_val_27299 === (7))){
var inst_27160 = (state_27298[(7)]);
var inst_27162 = (state_27298[(8)]);
var inst_27161 = (state_27298[(9)]);
var inst_27159 = (state_27298[(10)]);
var inst_27167 = cljs.core._nth.call(null,inst_27160,inst_27162);
var inst_27168 = figwheel.client.file_reloading.eval_body.call(null,inst_27167,opts);
var inst_27169 = (inst_27162 + (1));
var tmp27300 = inst_27160;
var tmp27301 = inst_27161;
var tmp27302 = inst_27159;
var inst_27159__$1 = tmp27302;
var inst_27160__$1 = tmp27300;
var inst_27161__$1 = tmp27301;
var inst_27162__$1 = inst_27169;
var state_27298__$1 = (function (){var statearr_27303 = state_27298;
(statearr_27303[(7)] = inst_27160__$1);

(statearr_27303[(8)] = inst_27162__$1);

(statearr_27303[(11)] = inst_27168);

(statearr_27303[(9)] = inst_27161__$1);

(statearr_27303[(10)] = inst_27159__$1);

return statearr_27303;
})();
var statearr_27304_27390 = state_27298__$1;
(statearr_27304_27390[(2)] = null);

(statearr_27304_27390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (20))){
var inst_27202 = (state_27298[(12)]);
var inst_27210 = figwheel.client.file_reloading.sort_files.call(null,inst_27202);
var state_27298__$1 = state_27298;
var statearr_27305_27391 = state_27298__$1;
(statearr_27305_27391[(2)] = inst_27210);

(statearr_27305_27391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (27))){
var state_27298__$1 = state_27298;
var statearr_27306_27392 = state_27298__$1;
(statearr_27306_27392[(2)] = null);

(statearr_27306_27392[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (1))){
var inst_27151 = (state_27298[(13)]);
var inst_27148 = before_jsload.call(null,files);
var inst_27149 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27150 = (function (){return ((function (inst_27151,inst_27148,inst_27149,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26893_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26893_SHARP_);
});
;})(inst_27151,inst_27148,inst_27149,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27151__$1 = cljs.core.filter.call(null,inst_27150,files);
var inst_27152 = cljs.core.not_empty.call(null,inst_27151__$1);
var state_27298__$1 = (function (){var statearr_27307 = state_27298;
(statearr_27307[(14)] = inst_27148);

(statearr_27307[(13)] = inst_27151__$1);

(statearr_27307[(15)] = inst_27149);

return statearr_27307;
})();
if(cljs.core.truth_(inst_27152)){
var statearr_27308_27393 = state_27298__$1;
(statearr_27308_27393[(1)] = (2));

} else {
var statearr_27309_27394 = state_27298__$1;
(statearr_27309_27394[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (24))){
var state_27298__$1 = state_27298;
var statearr_27310_27395 = state_27298__$1;
(statearr_27310_27395[(2)] = null);

(statearr_27310_27395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (39))){
var inst_27252 = (state_27298[(16)]);
var state_27298__$1 = state_27298;
var statearr_27311_27396 = state_27298__$1;
(statearr_27311_27396[(2)] = inst_27252);

(statearr_27311_27396[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (46))){
var inst_27293 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
var statearr_27312_27397 = state_27298__$1;
(statearr_27312_27397[(2)] = inst_27293);

(statearr_27312_27397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (4))){
var inst_27196 = (state_27298[(2)]);
var inst_27197 = cljs.core.List.EMPTY;
var inst_27198 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27197);
var inst_27199 = (function (){return ((function (inst_27196,inst_27197,inst_27198,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26894_SHARP_){
var and__20152__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26894_SHARP_);
if(cljs.core.truth_(and__20152__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26894_SHARP_));
} else {
return and__20152__auto__;
}
});
;})(inst_27196,inst_27197,inst_27198,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27200 = cljs.core.filter.call(null,inst_27199,files);
var inst_27201 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27202 = cljs.core.concat.call(null,inst_27200,inst_27201);
var state_27298__$1 = (function (){var statearr_27313 = state_27298;
(statearr_27313[(17)] = inst_27196);

(statearr_27313[(12)] = inst_27202);

(statearr_27313[(18)] = inst_27198);

return statearr_27313;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27314_27398 = state_27298__$1;
(statearr_27314_27398[(1)] = (16));

} else {
var statearr_27315_27399 = state_27298__$1;
(statearr_27315_27399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (15))){
var inst_27186 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
var statearr_27316_27400 = state_27298__$1;
(statearr_27316_27400[(2)] = inst_27186);

(statearr_27316_27400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (21))){
var inst_27212 = (state_27298[(19)]);
var inst_27212__$1 = (state_27298[(2)]);
var inst_27213 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27212__$1);
var state_27298__$1 = (function (){var statearr_27317 = state_27298;
(statearr_27317[(19)] = inst_27212__$1);

return statearr_27317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27298__$1,(22),inst_27213);
} else {
if((state_val_27299 === (31))){
var inst_27296 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27298__$1,inst_27296);
} else {
if((state_val_27299 === (32))){
var inst_27252 = (state_27298[(16)]);
var inst_27257 = inst_27252.cljs$lang$protocol_mask$partition0$;
var inst_27258 = (inst_27257 & (64));
var inst_27259 = inst_27252.cljs$core$ISeq$;
var inst_27260 = (inst_27258) || (inst_27259);
var state_27298__$1 = state_27298;
if(cljs.core.truth_(inst_27260)){
var statearr_27318_27401 = state_27298__$1;
(statearr_27318_27401[(1)] = (35));

} else {
var statearr_27319_27402 = state_27298__$1;
(statearr_27319_27402[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (40))){
var inst_27273 = (state_27298[(20)]);
var inst_27272 = (state_27298[(2)]);
var inst_27273__$1 = cljs.core.get.call(null,inst_27272,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27274 = cljs.core.get.call(null,inst_27272,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27275 = cljs.core.not_empty.call(null,inst_27273__$1);
var state_27298__$1 = (function (){var statearr_27320 = state_27298;
(statearr_27320[(20)] = inst_27273__$1);

(statearr_27320[(21)] = inst_27274);

return statearr_27320;
})();
if(cljs.core.truth_(inst_27275)){
var statearr_27321_27403 = state_27298__$1;
(statearr_27321_27403[(1)] = (41));

} else {
var statearr_27322_27404 = state_27298__$1;
(statearr_27322_27404[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (33))){
var state_27298__$1 = state_27298;
var statearr_27323_27405 = state_27298__$1;
(statearr_27323_27405[(2)] = false);

(statearr_27323_27405[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (13))){
var inst_27172 = (state_27298[(22)]);
var inst_27176 = cljs.core.chunk_first.call(null,inst_27172);
var inst_27177 = cljs.core.chunk_rest.call(null,inst_27172);
var inst_27178 = cljs.core.count.call(null,inst_27176);
var inst_27159 = inst_27177;
var inst_27160 = inst_27176;
var inst_27161 = inst_27178;
var inst_27162 = (0);
var state_27298__$1 = (function (){var statearr_27324 = state_27298;
(statearr_27324[(7)] = inst_27160);

(statearr_27324[(8)] = inst_27162);

(statearr_27324[(9)] = inst_27161);

(statearr_27324[(10)] = inst_27159);

return statearr_27324;
})();
var statearr_27325_27406 = state_27298__$1;
(statearr_27325_27406[(2)] = null);

(statearr_27325_27406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (22))){
var inst_27220 = (state_27298[(23)]);
var inst_27212 = (state_27298[(19)]);
var inst_27215 = (state_27298[(24)]);
var inst_27216 = (state_27298[(25)]);
var inst_27215__$1 = (state_27298[(2)]);
var inst_27216__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27215__$1);
var inst_27217 = (function (){var all_files = inst_27212;
var res_SINGLEQUOTE_ = inst_27215__$1;
var res = inst_27216__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27220,inst_27212,inst_27215,inst_27216,inst_27215__$1,inst_27216__$1,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26895_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26895_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27220,inst_27212,inst_27215,inst_27216,inst_27215__$1,inst_27216__$1,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27218 = cljs.core.filter.call(null,inst_27217,inst_27215__$1);
var inst_27219 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27220__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27219);
var inst_27221 = cljs.core.not_empty.call(null,inst_27220__$1);
var state_27298__$1 = (function (){var statearr_27326 = state_27298;
(statearr_27326[(26)] = inst_27218);

(statearr_27326[(23)] = inst_27220__$1);

(statearr_27326[(24)] = inst_27215__$1);

(statearr_27326[(25)] = inst_27216__$1);

return statearr_27326;
})();
if(cljs.core.truth_(inst_27221)){
var statearr_27327_27407 = state_27298__$1;
(statearr_27327_27407[(1)] = (23));

} else {
var statearr_27328_27408 = state_27298__$1;
(statearr_27328_27408[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (36))){
var state_27298__$1 = state_27298;
var statearr_27329_27409 = state_27298__$1;
(statearr_27329_27409[(2)] = false);

(statearr_27329_27409[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (41))){
var inst_27273 = (state_27298[(20)]);
var inst_27277 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27278 = cljs.core.map.call(null,inst_27277,inst_27273);
var inst_27279 = cljs.core.pr_str.call(null,inst_27278);
var inst_27280 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27279)].join('');
var inst_27281 = figwheel.client.utils.log.call(null,inst_27280);
var state_27298__$1 = state_27298;
var statearr_27330_27410 = state_27298__$1;
(statearr_27330_27410[(2)] = inst_27281);

(statearr_27330_27410[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (43))){
var inst_27274 = (state_27298[(21)]);
var inst_27284 = (state_27298[(2)]);
var inst_27285 = cljs.core.not_empty.call(null,inst_27274);
var state_27298__$1 = (function (){var statearr_27331 = state_27298;
(statearr_27331[(27)] = inst_27284);

return statearr_27331;
})();
if(cljs.core.truth_(inst_27285)){
var statearr_27332_27411 = state_27298__$1;
(statearr_27332_27411[(1)] = (44));

} else {
var statearr_27333_27412 = state_27298__$1;
(statearr_27333_27412[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (29))){
var inst_27218 = (state_27298[(26)]);
var inst_27220 = (state_27298[(23)]);
var inst_27252 = (state_27298[(16)]);
var inst_27212 = (state_27298[(19)]);
var inst_27215 = (state_27298[(24)]);
var inst_27216 = (state_27298[(25)]);
var inst_27248 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27251 = (function (){var all_files = inst_27212;
var res_SINGLEQUOTE_ = inst_27215;
var res = inst_27216;
var files_not_loaded = inst_27218;
var dependencies_that_loaded = inst_27220;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27218,inst_27220,inst_27252,inst_27212,inst_27215,inst_27216,inst_27248,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27250){
var map__27334 = p__27250;
var map__27334__$1 = ((((!((map__27334 == null)))?((((map__27334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27334):map__27334);
var namespace = cljs.core.get.call(null,map__27334__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27218,inst_27220,inst_27252,inst_27212,inst_27215,inst_27216,inst_27248,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27252__$1 = cljs.core.group_by.call(null,inst_27251,inst_27218);
var inst_27254 = (inst_27252__$1 == null);
var inst_27255 = cljs.core.not.call(null,inst_27254);
var state_27298__$1 = (function (){var statearr_27336 = state_27298;
(statearr_27336[(16)] = inst_27252__$1);

(statearr_27336[(28)] = inst_27248);

return statearr_27336;
})();
if(inst_27255){
var statearr_27337_27413 = state_27298__$1;
(statearr_27337_27413[(1)] = (32));

} else {
var statearr_27338_27414 = state_27298__$1;
(statearr_27338_27414[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (44))){
var inst_27274 = (state_27298[(21)]);
var inst_27287 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27274);
var inst_27288 = cljs.core.pr_str.call(null,inst_27287);
var inst_27289 = [cljs.core.str("not required: "),cljs.core.str(inst_27288)].join('');
var inst_27290 = figwheel.client.utils.log.call(null,inst_27289);
var state_27298__$1 = state_27298;
var statearr_27339_27415 = state_27298__$1;
(statearr_27339_27415[(2)] = inst_27290);

(statearr_27339_27415[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (6))){
var inst_27193 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
var statearr_27340_27416 = state_27298__$1;
(statearr_27340_27416[(2)] = inst_27193);

(statearr_27340_27416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (28))){
var inst_27218 = (state_27298[(26)]);
var inst_27245 = (state_27298[(2)]);
var inst_27246 = cljs.core.not_empty.call(null,inst_27218);
var state_27298__$1 = (function (){var statearr_27341 = state_27298;
(statearr_27341[(29)] = inst_27245);

return statearr_27341;
})();
if(cljs.core.truth_(inst_27246)){
var statearr_27342_27417 = state_27298__$1;
(statearr_27342_27417[(1)] = (29));

} else {
var statearr_27343_27418 = state_27298__$1;
(statearr_27343_27418[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (25))){
var inst_27216 = (state_27298[(25)]);
var inst_27232 = (state_27298[(2)]);
var inst_27233 = cljs.core.not_empty.call(null,inst_27216);
var state_27298__$1 = (function (){var statearr_27344 = state_27298;
(statearr_27344[(30)] = inst_27232);

return statearr_27344;
})();
if(cljs.core.truth_(inst_27233)){
var statearr_27345_27419 = state_27298__$1;
(statearr_27345_27419[(1)] = (26));

} else {
var statearr_27346_27420 = state_27298__$1;
(statearr_27346_27420[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (34))){
var inst_27267 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
if(cljs.core.truth_(inst_27267)){
var statearr_27347_27421 = state_27298__$1;
(statearr_27347_27421[(1)] = (38));

} else {
var statearr_27348_27422 = state_27298__$1;
(statearr_27348_27422[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (17))){
var state_27298__$1 = state_27298;
var statearr_27349_27423 = state_27298__$1;
(statearr_27349_27423[(2)] = recompile_dependents);

(statearr_27349_27423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (3))){
var state_27298__$1 = state_27298;
var statearr_27350_27424 = state_27298__$1;
(statearr_27350_27424[(2)] = null);

(statearr_27350_27424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (12))){
var inst_27189 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
var statearr_27351_27425 = state_27298__$1;
(statearr_27351_27425[(2)] = inst_27189);

(statearr_27351_27425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (2))){
var inst_27151 = (state_27298[(13)]);
var inst_27158 = cljs.core.seq.call(null,inst_27151);
var inst_27159 = inst_27158;
var inst_27160 = null;
var inst_27161 = (0);
var inst_27162 = (0);
var state_27298__$1 = (function (){var statearr_27352 = state_27298;
(statearr_27352[(7)] = inst_27160);

(statearr_27352[(8)] = inst_27162);

(statearr_27352[(9)] = inst_27161);

(statearr_27352[(10)] = inst_27159);

return statearr_27352;
})();
var statearr_27353_27426 = state_27298__$1;
(statearr_27353_27426[(2)] = null);

(statearr_27353_27426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (23))){
var inst_27218 = (state_27298[(26)]);
var inst_27220 = (state_27298[(23)]);
var inst_27212 = (state_27298[(19)]);
var inst_27215 = (state_27298[(24)]);
var inst_27216 = (state_27298[(25)]);
var inst_27223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27225 = (function (){var all_files = inst_27212;
var res_SINGLEQUOTE_ = inst_27215;
var res = inst_27216;
var files_not_loaded = inst_27218;
var dependencies_that_loaded = inst_27220;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27218,inst_27220,inst_27212,inst_27215,inst_27216,inst_27223,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27224){
var map__27354 = p__27224;
var map__27354__$1 = ((((!((map__27354 == null)))?((((map__27354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27354):map__27354);
var request_url = cljs.core.get.call(null,map__27354__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27218,inst_27220,inst_27212,inst_27215,inst_27216,inst_27223,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27226 = cljs.core.reverse.call(null,inst_27220);
var inst_27227 = cljs.core.map.call(null,inst_27225,inst_27226);
var inst_27228 = cljs.core.pr_str.call(null,inst_27227);
var inst_27229 = figwheel.client.utils.log.call(null,inst_27228);
var state_27298__$1 = (function (){var statearr_27356 = state_27298;
(statearr_27356[(31)] = inst_27223);

return statearr_27356;
})();
var statearr_27357_27427 = state_27298__$1;
(statearr_27357_27427[(2)] = inst_27229);

(statearr_27357_27427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (35))){
var state_27298__$1 = state_27298;
var statearr_27358_27428 = state_27298__$1;
(statearr_27358_27428[(2)] = true);

(statearr_27358_27428[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (19))){
var inst_27202 = (state_27298[(12)]);
var inst_27208 = figwheel.client.file_reloading.expand_files.call(null,inst_27202);
var state_27298__$1 = state_27298;
var statearr_27359_27429 = state_27298__$1;
(statearr_27359_27429[(2)] = inst_27208);

(statearr_27359_27429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (11))){
var state_27298__$1 = state_27298;
var statearr_27360_27430 = state_27298__$1;
(statearr_27360_27430[(2)] = null);

(statearr_27360_27430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (9))){
var inst_27191 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
var statearr_27361_27431 = state_27298__$1;
(statearr_27361_27431[(2)] = inst_27191);

(statearr_27361_27431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (5))){
var inst_27162 = (state_27298[(8)]);
var inst_27161 = (state_27298[(9)]);
var inst_27164 = (inst_27162 < inst_27161);
var inst_27165 = inst_27164;
var state_27298__$1 = state_27298;
if(cljs.core.truth_(inst_27165)){
var statearr_27362_27432 = state_27298__$1;
(statearr_27362_27432[(1)] = (7));

} else {
var statearr_27363_27433 = state_27298__$1;
(statearr_27363_27433[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (14))){
var inst_27172 = (state_27298[(22)]);
var inst_27181 = cljs.core.first.call(null,inst_27172);
var inst_27182 = figwheel.client.file_reloading.eval_body.call(null,inst_27181,opts);
var inst_27183 = cljs.core.next.call(null,inst_27172);
var inst_27159 = inst_27183;
var inst_27160 = null;
var inst_27161 = (0);
var inst_27162 = (0);
var state_27298__$1 = (function (){var statearr_27364 = state_27298;
(statearr_27364[(32)] = inst_27182);

(statearr_27364[(7)] = inst_27160);

(statearr_27364[(8)] = inst_27162);

(statearr_27364[(9)] = inst_27161);

(statearr_27364[(10)] = inst_27159);

return statearr_27364;
})();
var statearr_27365_27434 = state_27298__$1;
(statearr_27365_27434[(2)] = null);

(statearr_27365_27434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (45))){
var state_27298__$1 = state_27298;
var statearr_27366_27435 = state_27298__$1;
(statearr_27366_27435[(2)] = null);

(statearr_27366_27435[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (26))){
var inst_27218 = (state_27298[(26)]);
var inst_27220 = (state_27298[(23)]);
var inst_27212 = (state_27298[(19)]);
var inst_27215 = (state_27298[(24)]);
var inst_27216 = (state_27298[(25)]);
var inst_27235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27237 = (function (){var all_files = inst_27212;
var res_SINGLEQUOTE_ = inst_27215;
var res = inst_27216;
var files_not_loaded = inst_27218;
var dependencies_that_loaded = inst_27220;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27218,inst_27220,inst_27212,inst_27215,inst_27216,inst_27235,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27236){
var map__27367 = p__27236;
var map__27367__$1 = ((((!((map__27367 == null)))?((((map__27367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27367):map__27367);
var namespace = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27218,inst_27220,inst_27212,inst_27215,inst_27216,inst_27235,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27238 = cljs.core.map.call(null,inst_27237,inst_27216);
var inst_27239 = cljs.core.pr_str.call(null,inst_27238);
var inst_27240 = figwheel.client.utils.log.call(null,inst_27239);
var inst_27241 = (function (){var all_files = inst_27212;
var res_SINGLEQUOTE_ = inst_27215;
var res = inst_27216;
var files_not_loaded = inst_27218;
var dependencies_that_loaded = inst_27220;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27218,inst_27220,inst_27212,inst_27215,inst_27216,inst_27235,inst_27237,inst_27238,inst_27239,inst_27240,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27218,inst_27220,inst_27212,inst_27215,inst_27216,inst_27235,inst_27237,inst_27238,inst_27239,inst_27240,state_val_27299,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27242 = setTimeout(inst_27241,(10));
var state_27298__$1 = (function (){var statearr_27369 = state_27298;
(statearr_27369[(33)] = inst_27235);

(statearr_27369[(34)] = inst_27240);

return statearr_27369;
})();
var statearr_27370_27436 = state_27298__$1;
(statearr_27370_27436[(2)] = inst_27242);

(statearr_27370_27436[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (16))){
var state_27298__$1 = state_27298;
var statearr_27371_27437 = state_27298__$1;
(statearr_27371_27437[(2)] = reload_dependents);

(statearr_27371_27437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (38))){
var inst_27252 = (state_27298[(16)]);
var inst_27269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27252);
var state_27298__$1 = state_27298;
var statearr_27372_27438 = state_27298__$1;
(statearr_27372_27438[(2)] = inst_27269);

(statearr_27372_27438[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (30))){
var state_27298__$1 = state_27298;
var statearr_27373_27439 = state_27298__$1;
(statearr_27373_27439[(2)] = null);

(statearr_27373_27439[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (10))){
var inst_27172 = (state_27298[(22)]);
var inst_27174 = cljs.core.chunked_seq_QMARK_.call(null,inst_27172);
var state_27298__$1 = state_27298;
if(inst_27174){
var statearr_27374_27440 = state_27298__$1;
(statearr_27374_27440[(1)] = (13));

} else {
var statearr_27375_27441 = state_27298__$1;
(statearr_27375_27441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (18))){
var inst_27206 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
if(cljs.core.truth_(inst_27206)){
var statearr_27376_27442 = state_27298__$1;
(statearr_27376_27442[(1)] = (19));

} else {
var statearr_27377_27443 = state_27298__$1;
(statearr_27377_27443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (42))){
var state_27298__$1 = state_27298;
var statearr_27378_27444 = state_27298__$1;
(statearr_27378_27444[(2)] = null);

(statearr_27378_27444[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (37))){
var inst_27264 = (state_27298[(2)]);
var state_27298__$1 = state_27298;
var statearr_27379_27445 = state_27298__$1;
(statearr_27379_27445[(2)] = inst_27264);

(statearr_27379_27445[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27299 === (8))){
var inst_27159 = (state_27298[(10)]);
var inst_27172 = (state_27298[(22)]);
var inst_27172__$1 = cljs.core.seq.call(null,inst_27159);
var state_27298__$1 = (function (){var statearr_27380 = state_27298;
(statearr_27380[(22)] = inst_27172__$1);

return statearr_27380;
})();
if(inst_27172__$1){
var statearr_27381_27446 = state_27298__$1;
(statearr_27381_27446[(1)] = (10));

} else {
var statearr_27382_27447 = state_27298__$1;
(statearr_27382_27447[(1)] = (11));

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
});})(c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23448__auto__,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto____0 = (function (){
var statearr_27386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27386[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto__);

(statearr_27386[(1)] = (1));

return statearr_27386;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto____1 = (function (state_27298){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_27298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e27387){if((e27387 instanceof Object)){
var ex__23452__auto__ = e27387;
var statearr_27388_27448 = state_27298;
(statearr_27388_27448[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27449 = state_27298;
state_27298 = G__27449;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto__ = function(state_27298){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto____1.call(this,state_27298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23562__auto__ = (function (){var statearr_27389 = f__23561__auto__.call(null);
(statearr_27389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_27389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__,map__27144,map__27144__$1,opts,before_jsload,on_jsload,reload_dependents,map__27145,map__27145__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23560__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27452,link){
var map__27455 = p__27452;
var map__27455__$1 = ((((!((map__27455 == null)))?((((map__27455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27455):map__27455);
var file = cljs.core.get.call(null,map__27455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27455,map__27455__$1,file){
return (function (p1__27450_SHARP_,p2__27451_SHARP_){
if(cljs.core._EQ_.call(null,p1__27450_SHARP_,p2__27451_SHARP_)){
return p1__27450_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27455,map__27455__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27461){
var map__27462 = p__27461;
var map__27462__$1 = ((((!((map__27462 == null)))?((((map__27462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27462):map__27462);
var match_length = cljs.core.get.call(null,map__27462__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27462__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27457_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27457_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27464 = [];
var len__21239__auto___27467 = arguments.length;
var i__21240__auto___27468 = (0);
while(true){
if((i__21240__auto___27468 < len__21239__auto___27467)){
args27464.push((arguments[i__21240__auto___27468]));

var G__27469 = (i__21240__auto___27468 + (1));
i__21240__auto___27468 = G__27469;
continue;
} else {
}
break;
}

var G__27466 = args27464.length;
switch (G__27466) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27464.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27471_SHARP_,p2__27472_SHARP_){
return cljs.core.assoc.call(null,p1__27471_SHARP_,cljs.core.get.call(null,p2__27472_SHARP_,key),p2__27472_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27473){
var map__27476 = p__27473;
var map__27476__$1 = ((((!((map__27476 == null)))?((((map__27476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27476):map__27476);
var f_data = map__27476__$1;
var file = cljs.core.get.call(null,map__27476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27478,files_msg){
var map__27485 = p__27478;
var map__27485__$1 = ((((!((map__27485 == null)))?((((map__27485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27485):map__27485);
var opts = map__27485__$1;
var on_cssload = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27487_27491 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27488_27492 = null;
var count__27489_27493 = (0);
var i__27490_27494 = (0);
while(true){
if((i__27490_27494 < count__27489_27493)){
var f_27495 = cljs.core._nth.call(null,chunk__27488_27492,i__27490_27494);
figwheel.client.file_reloading.reload_css_file.call(null,f_27495);

var G__27496 = seq__27487_27491;
var G__27497 = chunk__27488_27492;
var G__27498 = count__27489_27493;
var G__27499 = (i__27490_27494 + (1));
seq__27487_27491 = G__27496;
chunk__27488_27492 = G__27497;
count__27489_27493 = G__27498;
i__27490_27494 = G__27499;
continue;
} else {
var temp__4657__auto___27500 = cljs.core.seq.call(null,seq__27487_27491);
if(temp__4657__auto___27500){
var seq__27487_27501__$1 = temp__4657__auto___27500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27487_27501__$1)){
var c__20975__auto___27502 = cljs.core.chunk_first.call(null,seq__27487_27501__$1);
var G__27503 = cljs.core.chunk_rest.call(null,seq__27487_27501__$1);
var G__27504 = c__20975__auto___27502;
var G__27505 = cljs.core.count.call(null,c__20975__auto___27502);
var G__27506 = (0);
seq__27487_27491 = G__27503;
chunk__27488_27492 = G__27504;
count__27489_27493 = G__27505;
i__27490_27494 = G__27506;
continue;
} else {
var f_27507 = cljs.core.first.call(null,seq__27487_27501__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27507);

var G__27508 = cljs.core.next.call(null,seq__27487_27501__$1);
var G__27509 = null;
var G__27510 = (0);
var G__27511 = (0);
seq__27487_27491 = G__27508;
chunk__27488_27492 = G__27509;
count__27489_27493 = G__27510;
i__27490_27494 = G__27511;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27485,map__27485__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27485,map__27485__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1492251111019
// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28829){
var map__28854 = p__28829;
var map__28854__$1 = ((((!((map__28854 == null)))?((((map__28854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28854):map__28854);
var m = map__28854__$1;
var n = cljs.core.get.call(null,map__28854__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28856_28878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28857_28879 = null;
var count__28858_28880 = (0);
var i__28859_28881 = (0);
while(true){
if((i__28859_28881 < count__28858_28880)){
var f_28882 = cljs.core._nth.call(null,chunk__28857_28879,i__28859_28881);
cljs.core.println.call(null,"  ",f_28882);

var G__28883 = seq__28856_28878;
var G__28884 = chunk__28857_28879;
var G__28885 = count__28858_28880;
var G__28886 = (i__28859_28881 + (1));
seq__28856_28878 = G__28883;
chunk__28857_28879 = G__28884;
count__28858_28880 = G__28885;
i__28859_28881 = G__28886;
continue;
} else {
var temp__4657__auto___28887 = cljs.core.seq.call(null,seq__28856_28878);
if(temp__4657__auto___28887){
var seq__28856_28888__$1 = temp__4657__auto___28887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28856_28888__$1)){
var c__20975__auto___28889 = cljs.core.chunk_first.call(null,seq__28856_28888__$1);
var G__28890 = cljs.core.chunk_rest.call(null,seq__28856_28888__$1);
var G__28891 = c__20975__auto___28889;
var G__28892 = cljs.core.count.call(null,c__20975__auto___28889);
var G__28893 = (0);
seq__28856_28878 = G__28890;
chunk__28857_28879 = G__28891;
count__28858_28880 = G__28892;
i__28859_28881 = G__28893;
continue;
} else {
var f_28894 = cljs.core.first.call(null,seq__28856_28888__$1);
cljs.core.println.call(null,"  ",f_28894);

var G__28895 = cljs.core.next.call(null,seq__28856_28888__$1);
var G__28896 = null;
var G__28897 = (0);
var G__28898 = (0);
seq__28856_28878 = G__28895;
chunk__28857_28879 = G__28896;
count__28858_28880 = G__28897;
i__28859_28881 = G__28898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20164__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28899);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28899)))?cljs.core.second.call(null,arglists_28899):arglists_28899));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28860_28900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28861_28901 = null;
var count__28862_28902 = (0);
var i__28863_28903 = (0);
while(true){
if((i__28863_28903 < count__28862_28902)){
var vec__28864_28904 = cljs.core._nth.call(null,chunk__28861_28901,i__28863_28903);
var name_28905 = cljs.core.nth.call(null,vec__28864_28904,(0),null);
var map__28867_28906 = cljs.core.nth.call(null,vec__28864_28904,(1),null);
var map__28867_28907__$1 = ((((!((map__28867_28906 == null)))?((((map__28867_28906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28867_28906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28867_28906):map__28867_28906);
var doc_28908 = cljs.core.get.call(null,map__28867_28907__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28909 = cljs.core.get.call(null,map__28867_28907__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28905);

cljs.core.println.call(null," ",arglists_28909);

if(cljs.core.truth_(doc_28908)){
cljs.core.println.call(null," ",doc_28908);
} else {
}

var G__28910 = seq__28860_28900;
var G__28911 = chunk__28861_28901;
var G__28912 = count__28862_28902;
var G__28913 = (i__28863_28903 + (1));
seq__28860_28900 = G__28910;
chunk__28861_28901 = G__28911;
count__28862_28902 = G__28912;
i__28863_28903 = G__28913;
continue;
} else {
var temp__4657__auto___28914 = cljs.core.seq.call(null,seq__28860_28900);
if(temp__4657__auto___28914){
var seq__28860_28915__$1 = temp__4657__auto___28914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28860_28915__$1)){
var c__20975__auto___28916 = cljs.core.chunk_first.call(null,seq__28860_28915__$1);
var G__28917 = cljs.core.chunk_rest.call(null,seq__28860_28915__$1);
var G__28918 = c__20975__auto___28916;
var G__28919 = cljs.core.count.call(null,c__20975__auto___28916);
var G__28920 = (0);
seq__28860_28900 = G__28917;
chunk__28861_28901 = G__28918;
count__28862_28902 = G__28919;
i__28863_28903 = G__28920;
continue;
} else {
var vec__28869_28921 = cljs.core.first.call(null,seq__28860_28915__$1);
var name_28922 = cljs.core.nth.call(null,vec__28869_28921,(0),null);
var map__28872_28923 = cljs.core.nth.call(null,vec__28869_28921,(1),null);
var map__28872_28924__$1 = ((((!((map__28872_28923 == null)))?((((map__28872_28923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28872_28923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28872_28923):map__28872_28923);
var doc_28925 = cljs.core.get.call(null,map__28872_28924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28926 = cljs.core.get.call(null,map__28872_28924__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28922);

cljs.core.println.call(null," ",arglists_28926);

if(cljs.core.truth_(doc_28925)){
cljs.core.println.call(null," ",doc_28925);
} else {
}

var G__28927 = cljs.core.next.call(null,seq__28860_28915__$1);
var G__28928 = null;
var G__28929 = (0);
var G__28930 = (0);
seq__28860_28900 = G__28927;
chunk__28861_28901 = G__28928;
count__28862_28902 = G__28929;
i__28863_28903 = G__28930;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28874 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28875 = null;
var count__28876 = (0);
var i__28877 = (0);
while(true){
if((i__28877 < count__28876)){
var role = cljs.core._nth.call(null,chunk__28875,i__28877);
var temp__4657__auto___28931__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28931__$1)){
var spec_28932 = temp__4657__auto___28931__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28932));
} else {
}

var G__28933 = seq__28874;
var G__28934 = chunk__28875;
var G__28935 = count__28876;
var G__28936 = (i__28877 + (1));
seq__28874 = G__28933;
chunk__28875 = G__28934;
count__28876 = G__28935;
i__28877 = G__28936;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28874);
if(temp__4657__auto____$1){
var seq__28874__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28874__$1)){
var c__20975__auto__ = cljs.core.chunk_first.call(null,seq__28874__$1);
var G__28937 = cljs.core.chunk_rest.call(null,seq__28874__$1);
var G__28938 = c__20975__auto__;
var G__28939 = cljs.core.count.call(null,c__20975__auto__);
var G__28940 = (0);
seq__28874 = G__28937;
chunk__28875 = G__28938;
count__28876 = G__28939;
i__28877 = G__28940;
continue;
} else {
var role = cljs.core.first.call(null,seq__28874__$1);
var temp__4657__auto___28941__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28941__$2)){
var spec_28942 = temp__4657__auto___28941__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28942));
} else {
}

var G__28943 = cljs.core.next.call(null,seq__28874__$1);
var G__28944 = null;
var G__28945 = (0);
var G__28946 = (0);
seq__28874 = G__28943;
chunk__28875 = G__28944;
count__28876 = G__28945;
i__28877 = G__28946;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1492251112865
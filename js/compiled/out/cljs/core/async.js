// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23605 = [];
var len__21239__auto___23611 = arguments.length;
var i__21240__auto___23612 = (0);
while(true){
if((i__21240__auto___23612 < len__21239__auto___23611)){
args23605.push((arguments[i__21240__auto___23612]));

var G__23613 = (i__21240__auto___23612 + (1));
i__21240__auto___23612 = G__23613;
continue;
} else {
}
break;
}

var G__23607 = args23605.length;
switch (G__23607) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23605.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23608 = (function (f,blockable,meta23609){
this.f = f;
this.blockable = blockable;
this.meta23609 = meta23609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23610,meta23609__$1){
var self__ = this;
var _23610__$1 = this;
return (new cljs.core.async.t_cljs$core$async23608(self__.f,self__.blockable,meta23609__$1));
});

cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23610){
var self__ = this;
var _23610__$1 = this;
return self__.meta23609;
});

cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23609","meta23609",-1106122007,null)], null);
});

cljs.core.async.t_cljs$core$async23608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23608";

cljs.core.async.t_cljs$core$async23608.cljs$lang$ctorPrWriter = (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async23608");
});

cljs.core.async.__GT_t_cljs$core$async23608 = (function cljs$core$async$__GT_t_cljs$core$async23608(f__$1,blockable__$1,meta23609){
return (new cljs.core.async.t_cljs$core$async23608(f__$1,blockable__$1,meta23609));
});

}

return (new cljs.core.async.t_cljs$core$async23608(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23617 = [];
var len__21239__auto___23620 = arguments.length;
var i__21240__auto___23621 = (0);
while(true){
if((i__21240__auto___23621 < len__21239__auto___23620)){
args23617.push((arguments[i__21240__auto___23621]));

var G__23622 = (i__21240__auto___23621 + (1));
i__21240__auto___23621 = G__23622;
continue;
} else {
}
break;
}

var G__23619 = args23617.length;
switch (G__23619) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23617.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23624 = [];
var len__21239__auto___23627 = arguments.length;
var i__21240__auto___23628 = (0);
while(true){
if((i__21240__auto___23628 < len__21239__auto___23627)){
args23624.push((arguments[i__21240__auto___23628]));

var G__23629 = (i__21240__auto___23628 + (1));
i__21240__auto___23628 = G__23629;
continue;
} else {
}
break;
}

var G__23626 = args23624.length;
switch (G__23626) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23624.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23631 = [];
var len__21239__auto___23634 = arguments.length;
var i__21240__auto___23635 = (0);
while(true){
if((i__21240__auto___23635 < len__21239__auto___23634)){
args23631.push((arguments[i__21240__auto___23635]));

var G__23636 = (i__21240__auto___23635 + (1));
i__21240__auto___23635 = G__23636;
continue;
} else {
}
break;
}

var G__23633 = args23631.length;
switch (G__23633) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23631.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23638 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23638);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23638,ret){
return (function (){
return fn1.call(null,val_23638);
});})(val_23638,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23639 = [];
var len__21239__auto___23642 = arguments.length;
var i__21240__auto___23643 = (0);
while(true){
if((i__21240__auto___23643 < len__21239__auto___23642)){
args23639.push((arguments[i__21240__auto___23643]));

var G__23644 = (i__21240__auto___23643 + (1));
i__21240__auto___23643 = G__23644;
continue;
} else {
}
break;
}

var G__23641 = args23639.length;
switch (G__23641) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23639.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21079__auto___23646 = n;
var x_23647 = (0);
while(true){
if((x_23647 < n__21079__auto___23646)){
(a[x_23647] = (0));

var G__23648 = (x_23647 + (1));
x_23647 = G__23648;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23649 = (i + (1));
i = G__23649;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23653 = (function (alt_flag,flag,meta23654){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23654 = meta23654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23655,meta23654__$1){
var self__ = this;
var _23655__$1 = this;
return (new cljs.core.async.t_cljs$core$async23653(self__.alt_flag,self__.flag,meta23654__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23655){
var self__ = this;
var _23655__$1 = this;
return self__.meta23654;
});})(flag))
;

cljs.core.async.t_cljs$core$async23653.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23653.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23653.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23654","meta23654",-2099814317,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23653";

cljs.core.async.t_cljs$core$async23653.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async23653");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23653 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23653(alt_flag__$1,flag__$1,meta23654){
return (new cljs.core.async.t_cljs$core$async23653(alt_flag__$1,flag__$1,meta23654));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23653(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23659 = (function (alt_handler,flag,cb,meta23660){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23660 = meta23660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23661,meta23660__$1){
var self__ = this;
var _23661__$1 = this;
return (new cljs.core.async.t_cljs$core$async23659(self__.alt_handler,self__.flag,self__.cb,meta23660__$1));
});

cljs.core.async.t_cljs$core$async23659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23661){
var self__ = this;
var _23661__$1 = this;
return self__.meta23660;
});

cljs.core.async.t_cljs$core$async23659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23660","meta23660",-158040122,null)], null);
});

cljs.core.async.t_cljs$core$async23659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23659";

cljs.core.async.t_cljs$core$async23659.cljs$lang$ctorPrWriter = (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async23659");
});

cljs.core.async.__GT_t_cljs$core$async23659 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23659(alt_handler__$1,flag__$1,cb__$1,meta23660){
return (new cljs.core.async.t_cljs$core$async23659(alt_handler__$1,flag__$1,cb__$1,meta23660));
});

}

return (new cljs.core.async.t_cljs$core$async23659(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23662_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23662_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23663_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23663_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20164__auto__ = wport;
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23664 = (i + (1));
i = G__23664;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20164__auto__ = ret;
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20152__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20152__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20152__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21246__auto__ = [];
var len__21239__auto___23670 = arguments.length;
var i__21240__auto___23671 = (0);
while(true){
if((i__21240__auto___23671 < len__21239__auto___23670)){
args__21246__auto__.push((arguments[i__21240__auto___23671]));

var G__23672 = (i__21240__auto___23671 + (1));
i__21240__auto___23671 = G__23672;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((1) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21247__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23667){
var map__23668 = p__23667;
var map__23668__$1 = ((((!((map__23668 == null)))?((((map__23668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23668):map__23668);
var opts = map__23668__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23665){
var G__23666 = cljs.core.first.call(null,seq23665);
var seq23665__$1 = cljs.core.next.call(null,seq23665);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23666,seq23665__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23673 = [];
var len__21239__auto___23723 = arguments.length;
var i__21240__auto___23724 = (0);
while(true){
if((i__21240__auto___23724 < len__21239__auto___23723)){
args23673.push((arguments[i__21240__auto___23724]));

var G__23725 = (i__21240__auto___23724 + (1));
i__21240__auto___23724 = G__23725;
continue;
} else {
}
break;
}

var G__23675 = args23673.length;
switch (G__23675) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23673.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23560__auto___23727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___23727){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___23727){
return (function (state_23699){
var state_val_23700 = (state_23699[(1)]);
if((state_val_23700 === (7))){
var inst_23695 = (state_23699[(2)]);
var state_23699__$1 = state_23699;
var statearr_23701_23728 = state_23699__$1;
(statearr_23701_23728[(2)] = inst_23695);

(statearr_23701_23728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (1))){
var state_23699__$1 = state_23699;
var statearr_23702_23729 = state_23699__$1;
(statearr_23702_23729[(2)] = null);

(statearr_23702_23729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (4))){
var inst_23678 = (state_23699[(7)]);
var inst_23678__$1 = (state_23699[(2)]);
var inst_23679 = (inst_23678__$1 == null);
var state_23699__$1 = (function (){var statearr_23703 = state_23699;
(statearr_23703[(7)] = inst_23678__$1);

return statearr_23703;
})();
if(cljs.core.truth_(inst_23679)){
var statearr_23704_23730 = state_23699__$1;
(statearr_23704_23730[(1)] = (5));

} else {
var statearr_23705_23731 = state_23699__$1;
(statearr_23705_23731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (13))){
var state_23699__$1 = state_23699;
var statearr_23706_23732 = state_23699__$1;
(statearr_23706_23732[(2)] = null);

(statearr_23706_23732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (6))){
var inst_23678 = (state_23699[(7)]);
var state_23699__$1 = state_23699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23699__$1,(11),to,inst_23678);
} else {
if((state_val_23700 === (3))){
var inst_23697 = (state_23699[(2)]);
var state_23699__$1 = state_23699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23699__$1,inst_23697);
} else {
if((state_val_23700 === (12))){
var state_23699__$1 = state_23699;
var statearr_23707_23733 = state_23699__$1;
(statearr_23707_23733[(2)] = null);

(statearr_23707_23733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (2))){
var state_23699__$1 = state_23699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23699__$1,(4),from);
} else {
if((state_val_23700 === (11))){
var inst_23688 = (state_23699[(2)]);
var state_23699__$1 = state_23699;
if(cljs.core.truth_(inst_23688)){
var statearr_23708_23734 = state_23699__$1;
(statearr_23708_23734[(1)] = (12));

} else {
var statearr_23709_23735 = state_23699__$1;
(statearr_23709_23735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (9))){
var state_23699__$1 = state_23699;
var statearr_23710_23736 = state_23699__$1;
(statearr_23710_23736[(2)] = null);

(statearr_23710_23736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (5))){
var state_23699__$1 = state_23699;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23711_23737 = state_23699__$1;
(statearr_23711_23737[(1)] = (8));

} else {
var statearr_23712_23738 = state_23699__$1;
(statearr_23712_23738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (14))){
var inst_23693 = (state_23699[(2)]);
var state_23699__$1 = state_23699;
var statearr_23713_23739 = state_23699__$1;
(statearr_23713_23739[(2)] = inst_23693);

(statearr_23713_23739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (10))){
var inst_23685 = (state_23699[(2)]);
var state_23699__$1 = state_23699;
var statearr_23714_23740 = state_23699__$1;
(statearr_23714_23740[(2)] = inst_23685);

(statearr_23714_23740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (8))){
var inst_23682 = cljs.core.async.close_BANG_.call(null,to);
var state_23699__$1 = state_23699;
var statearr_23715_23741 = state_23699__$1;
(statearr_23715_23741[(2)] = inst_23682);

(statearr_23715_23741[(1)] = (10));


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
});})(c__23560__auto___23727))
;
return ((function (switch__23448__auto__,c__23560__auto___23727){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_23719 = [null,null,null,null,null,null,null,null];
(statearr_23719[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_23719[(1)] = (1));

return statearr_23719;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_23699){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_23699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e23720){if((e23720 instanceof Object)){
var ex__23452__auto__ = e23720;
var statearr_23721_23742 = state_23699;
(statearr_23721_23742[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23743 = state_23699;
state_23699 = G__23743;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_23699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_23699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___23727))
})();
var state__23562__auto__ = (function (){var statearr_23722 = f__23561__auto__.call(null);
(statearr_23722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___23727);

return statearr_23722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___23727))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23931){
var vec__23932 = p__23931;
var v = cljs.core.nth.call(null,vec__23932,(0),null);
var p = cljs.core.nth.call(null,vec__23932,(1),null);
var job = vec__23932;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23560__auto___24118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___24118,res,vec__23932,v,p,job,jobs,results){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___24118,res,vec__23932,v,p,job,jobs,results){
return (function (state_23939){
var state_val_23940 = (state_23939[(1)]);
if((state_val_23940 === (1))){
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23939__$1,(2),res,v);
} else {
if((state_val_23940 === (2))){
var inst_23936 = (state_23939[(2)]);
var inst_23937 = cljs.core.async.close_BANG_.call(null,res);
var state_23939__$1 = (function (){var statearr_23941 = state_23939;
(statearr_23941[(7)] = inst_23936);

return statearr_23941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23939__$1,inst_23937);
} else {
return null;
}
}
});})(c__23560__auto___24118,res,vec__23932,v,p,job,jobs,results))
;
return ((function (switch__23448__auto__,c__23560__auto___24118,res,vec__23932,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0 = (function (){
var statearr_23945 = [null,null,null,null,null,null,null,null];
(statearr_23945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__);

(statearr_23945[(1)] = (1));

return statearr_23945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1 = (function (state_23939){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_23939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e23946){if((e23946 instanceof Object)){
var ex__23452__auto__ = e23946;
var statearr_23947_24119 = state_23939;
(statearr_23947_24119[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24120 = state_23939;
state_23939 = G__24120;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = function(state_23939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1.call(this,state_23939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___24118,res,vec__23932,v,p,job,jobs,results))
})();
var state__23562__auto__ = (function (){var statearr_23948 = f__23561__auto__.call(null);
(statearr_23948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___24118);

return statearr_23948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___24118,res,vec__23932,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23949){
var vec__23950 = p__23949;
var v = cljs.core.nth.call(null,vec__23950,(0),null);
var p = cljs.core.nth.call(null,vec__23950,(1),null);
var job = vec__23950;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21079__auto___24121 = n;
var __24122 = (0);
while(true){
if((__24122 < n__21079__auto___24121)){
var G__23953_24123 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23953_24123) {
case "compute":
var c__23560__auto___24125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24122,c__23560__auto___24125,G__23953_24123,n__21079__auto___24121,jobs,results,process,async){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (__24122,c__23560__auto___24125,G__23953_24123,n__21079__auto___24121,jobs,results,process,async){
return (function (state_23966){
var state_val_23967 = (state_23966[(1)]);
if((state_val_23967 === (1))){
var state_23966__$1 = state_23966;
var statearr_23968_24126 = state_23966__$1;
(statearr_23968_24126[(2)] = null);

(statearr_23968_24126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (2))){
var state_23966__$1 = state_23966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23966__$1,(4),jobs);
} else {
if((state_val_23967 === (3))){
var inst_23964 = (state_23966[(2)]);
var state_23966__$1 = state_23966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23966__$1,inst_23964);
} else {
if((state_val_23967 === (4))){
var inst_23956 = (state_23966[(2)]);
var inst_23957 = process.call(null,inst_23956);
var state_23966__$1 = state_23966;
if(cljs.core.truth_(inst_23957)){
var statearr_23969_24127 = state_23966__$1;
(statearr_23969_24127[(1)] = (5));

} else {
var statearr_23970_24128 = state_23966__$1;
(statearr_23970_24128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (5))){
var state_23966__$1 = state_23966;
var statearr_23971_24129 = state_23966__$1;
(statearr_23971_24129[(2)] = null);

(statearr_23971_24129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (6))){
var state_23966__$1 = state_23966;
var statearr_23972_24130 = state_23966__$1;
(statearr_23972_24130[(2)] = null);

(statearr_23972_24130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (7))){
var inst_23962 = (state_23966[(2)]);
var state_23966__$1 = state_23966;
var statearr_23973_24131 = state_23966__$1;
(statearr_23973_24131[(2)] = inst_23962);

(statearr_23973_24131[(1)] = (3));


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
});})(__24122,c__23560__auto___24125,G__23953_24123,n__21079__auto___24121,jobs,results,process,async))
;
return ((function (__24122,switch__23448__auto__,c__23560__auto___24125,G__23953_24123,n__21079__auto___24121,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0 = (function (){
var statearr_23977 = [null,null,null,null,null,null,null];
(statearr_23977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__);

(statearr_23977[(1)] = (1));

return statearr_23977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1 = (function (state_23966){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_23966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e23978){if((e23978 instanceof Object)){
var ex__23452__auto__ = e23978;
var statearr_23979_24132 = state_23966;
(statearr_23979_24132[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24133 = state_23966;
state_23966 = G__24133;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = function(state_23966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1.call(this,state_23966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__;
})()
;})(__24122,switch__23448__auto__,c__23560__auto___24125,G__23953_24123,n__21079__auto___24121,jobs,results,process,async))
})();
var state__23562__auto__ = (function (){var statearr_23980 = f__23561__auto__.call(null);
(statearr_23980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___24125);

return statearr_23980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(__24122,c__23560__auto___24125,G__23953_24123,n__21079__auto___24121,jobs,results,process,async))
);


break;
case "async":
var c__23560__auto___24134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24122,c__23560__auto___24134,G__23953_24123,n__21079__auto___24121,jobs,results,process,async){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (__24122,c__23560__auto___24134,G__23953_24123,n__21079__auto___24121,jobs,results,process,async){
return (function (state_23993){
var state_val_23994 = (state_23993[(1)]);
if((state_val_23994 === (1))){
var state_23993__$1 = state_23993;
var statearr_23995_24135 = state_23993__$1;
(statearr_23995_24135[(2)] = null);

(statearr_23995_24135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (2))){
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23993__$1,(4),jobs);
} else {
if((state_val_23994 === (3))){
var inst_23991 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23993__$1,inst_23991);
} else {
if((state_val_23994 === (4))){
var inst_23983 = (state_23993[(2)]);
var inst_23984 = async.call(null,inst_23983);
var state_23993__$1 = state_23993;
if(cljs.core.truth_(inst_23984)){
var statearr_23996_24136 = state_23993__$1;
(statearr_23996_24136[(1)] = (5));

} else {
var statearr_23997_24137 = state_23993__$1;
(statearr_23997_24137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (5))){
var state_23993__$1 = state_23993;
var statearr_23998_24138 = state_23993__$1;
(statearr_23998_24138[(2)] = null);

(statearr_23998_24138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (6))){
var state_23993__$1 = state_23993;
var statearr_23999_24139 = state_23993__$1;
(statearr_23999_24139[(2)] = null);

(statearr_23999_24139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (7))){
var inst_23989 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
var statearr_24000_24140 = state_23993__$1;
(statearr_24000_24140[(2)] = inst_23989);

(statearr_24000_24140[(1)] = (3));


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
});})(__24122,c__23560__auto___24134,G__23953_24123,n__21079__auto___24121,jobs,results,process,async))
;
return ((function (__24122,switch__23448__auto__,c__23560__auto___24134,G__23953_24123,n__21079__auto___24121,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0 = (function (){
var statearr_24004 = [null,null,null,null,null,null,null];
(statearr_24004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__);

(statearr_24004[(1)] = (1));

return statearr_24004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1 = (function (state_23993){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_23993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e24005){if((e24005 instanceof Object)){
var ex__23452__auto__ = e24005;
var statearr_24006_24141 = state_23993;
(statearr_24006_24141[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24142 = state_23993;
state_23993 = G__24142;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = function(state_23993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1.call(this,state_23993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__;
})()
;})(__24122,switch__23448__auto__,c__23560__auto___24134,G__23953_24123,n__21079__auto___24121,jobs,results,process,async))
})();
var state__23562__auto__ = (function (){var statearr_24007 = f__23561__auto__.call(null);
(statearr_24007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___24134);

return statearr_24007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(__24122,c__23560__auto___24134,G__23953_24123,n__21079__auto___24121,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24143 = (__24122 + (1));
__24122 = G__24143;
continue;
} else {
}
break;
}

var c__23560__auto___24144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___24144,jobs,results,process,async){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___24144,jobs,results,process,async){
return (function (state_24029){
var state_val_24030 = (state_24029[(1)]);
if((state_val_24030 === (1))){
var state_24029__$1 = state_24029;
var statearr_24031_24145 = state_24029__$1;
(statearr_24031_24145[(2)] = null);

(statearr_24031_24145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24030 === (2))){
var state_24029__$1 = state_24029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24029__$1,(4),from);
} else {
if((state_val_24030 === (3))){
var inst_24027 = (state_24029[(2)]);
var state_24029__$1 = state_24029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24029__$1,inst_24027);
} else {
if((state_val_24030 === (4))){
var inst_24010 = (state_24029[(7)]);
var inst_24010__$1 = (state_24029[(2)]);
var inst_24011 = (inst_24010__$1 == null);
var state_24029__$1 = (function (){var statearr_24032 = state_24029;
(statearr_24032[(7)] = inst_24010__$1);

return statearr_24032;
})();
if(cljs.core.truth_(inst_24011)){
var statearr_24033_24146 = state_24029__$1;
(statearr_24033_24146[(1)] = (5));

} else {
var statearr_24034_24147 = state_24029__$1;
(statearr_24034_24147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24030 === (5))){
var inst_24013 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24029__$1 = state_24029;
var statearr_24035_24148 = state_24029__$1;
(statearr_24035_24148[(2)] = inst_24013);

(statearr_24035_24148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24030 === (6))){
var inst_24010 = (state_24029[(7)]);
var inst_24015 = (state_24029[(8)]);
var inst_24015__$1 = cljs.core.async.chan.call(null,(1));
var inst_24016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24017 = [inst_24010,inst_24015__$1];
var inst_24018 = (new cljs.core.PersistentVector(null,2,(5),inst_24016,inst_24017,null));
var state_24029__$1 = (function (){var statearr_24036 = state_24029;
(statearr_24036[(8)] = inst_24015__$1);

return statearr_24036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24029__$1,(8),jobs,inst_24018);
} else {
if((state_val_24030 === (7))){
var inst_24025 = (state_24029[(2)]);
var state_24029__$1 = state_24029;
var statearr_24037_24149 = state_24029__$1;
(statearr_24037_24149[(2)] = inst_24025);

(statearr_24037_24149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24030 === (8))){
var inst_24015 = (state_24029[(8)]);
var inst_24020 = (state_24029[(2)]);
var state_24029__$1 = (function (){var statearr_24038 = state_24029;
(statearr_24038[(9)] = inst_24020);

return statearr_24038;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24029__$1,(9),results,inst_24015);
} else {
if((state_val_24030 === (9))){
var inst_24022 = (state_24029[(2)]);
var state_24029__$1 = (function (){var statearr_24039 = state_24029;
(statearr_24039[(10)] = inst_24022);

return statearr_24039;
})();
var statearr_24040_24150 = state_24029__$1;
(statearr_24040_24150[(2)] = null);

(statearr_24040_24150[(1)] = (2));


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
});})(c__23560__auto___24144,jobs,results,process,async))
;
return ((function (switch__23448__auto__,c__23560__auto___24144,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0 = (function (){
var statearr_24044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__);

(statearr_24044[(1)] = (1));

return statearr_24044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1 = (function (state_24029){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_24029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e24045){if((e24045 instanceof Object)){
var ex__23452__auto__ = e24045;
var statearr_24046_24151 = state_24029;
(statearr_24046_24151[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24152 = state_24029;
state_24029 = G__24152;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = function(state_24029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1.call(this,state_24029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___24144,jobs,results,process,async))
})();
var state__23562__auto__ = (function (){var statearr_24047 = f__23561__auto__.call(null);
(statearr_24047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___24144);

return statearr_24047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___24144,jobs,results,process,async))
);


var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__,jobs,results,process,async){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__,jobs,results,process,async){
return (function (state_24085){
var state_val_24086 = (state_24085[(1)]);
if((state_val_24086 === (7))){
var inst_24081 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
var statearr_24087_24153 = state_24085__$1;
(statearr_24087_24153[(2)] = inst_24081);

(statearr_24087_24153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (20))){
var state_24085__$1 = state_24085;
var statearr_24088_24154 = state_24085__$1;
(statearr_24088_24154[(2)] = null);

(statearr_24088_24154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (1))){
var state_24085__$1 = state_24085;
var statearr_24089_24155 = state_24085__$1;
(statearr_24089_24155[(2)] = null);

(statearr_24089_24155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (4))){
var inst_24050 = (state_24085[(7)]);
var inst_24050__$1 = (state_24085[(2)]);
var inst_24051 = (inst_24050__$1 == null);
var state_24085__$1 = (function (){var statearr_24090 = state_24085;
(statearr_24090[(7)] = inst_24050__$1);

return statearr_24090;
})();
if(cljs.core.truth_(inst_24051)){
var statearr_24091_24156 = state_24085__$1;
(statearr_24091_24156[(1)] = (5));

} else {
var statearr_24092_24157 = state_24085__$1;
(statearr_24092_24157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (15))){
var inst_24063 = (state_24085[(8)]);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24085__$1,(18),to,inst_24063);
} else {
if((state_val_24086 === (21))){
var inst_24076 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
var statearr_24093_24158 = state_24085__$1;
(statearr_24093_24158[(2)] = inst_24076);

(statearr_24093_24158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (13))){
var inst_24078 = (state_24085[(2)]);
var state_24085__$1 = (function (){var statearr_24094 = state_24085;
(statearr_24094[(9)] = inst_24078);

return statearr_24094;
})();
var statearr_24095_24159 = state_24085__$1;
(statearr_24095_24159[(2)] = null);

(statearr_24095_24159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (6))){
var inst_24050 = (state_24085[(7)]);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24085__$1,(11),inst_24050);
} else {
if((state_val_24086 === (17))){
var inst_24071 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
if(cljs.core.truth_(inst_24071)){
var statearr_24096_24160 = state_24085__$1;
(statearr_24096_24160[(1)] = (19));

} else {
var statearr_24097_24161 = state_24085__$1;
(statearr_24097_24161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (3))){
var inst_24083 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24085__$1,inst_24083);
} else {
if((state_val_24086 === (12))){
var inst_24060 = (state_24085[(10)]);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24085__$1,(14),inst_24060);
} else {
if((state_val_24086 === (2))){
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24085__$1,(4),results);
} else {
if((state_val_24086 === (19))){
var state_24085__$1 = state_24085;
var statearr_24098_24162 = state_24085__$1;
(statearr_24098_24162[(2)] = null);

(statearr_24098_24162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (11))){
var inst_24060 = (state_24085[(2)]);
var state_24085__$1 = (function (){var statearr_24099 = state_24085;
(statearr_24099[(10)] = inst_24060);

return statearr_24099;
})();
var statearr_24100_24163 = state_24085__$1;
(statearr_24100_24163[(2)] = null);

(statearr_24100_24163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (9))){
var state_24085__$1 = state_24085;
var statearr_24101_24164 = state_24085__$1;
(statearr_24101_24164[(2)] = null);

(statearr_24101_24164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (5))){
var state_24085__$1 = state_24085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24102_24165 = state_24085__$1;
(statearr_24102_24165[(1)] = (8));

} else {
var statearr_24103_24166 = state_24085__$1;
(statearr_24103_24166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (14))){
var inst_24065 = (state_24085[(11)]);
var inst_24063 = (state_24085[(8)]);
var inst_24063__$1 = (state_24085[(2)]);
var inst_24064 = (inst_24063__$1 == null);
var inst_24065__$1 = cljs.core.not.call(null,inst_24064);
var state_24085__$1 = (function (){var statearr_24104 = state_24085;
(statearr_24104[(11)] = inst_24065__$1);

(statearr_24104[(8)] = inst_24063__$1);

return statearr_24104;
})();
if(inst_24065__$1){
var statearr_24105_24167 = state_24085__$1;
(statearr_24105_24167[(1)] = (15));

} else {
var statearr_24106_24168 = state_24085__$1;
(statearr_24106_24168[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (16))){
var inst_24065 = (state_24085[(11)]);
var state_24085__$1 = state_24085;
var statearr_24107_24169 = state_24085__$1;
(statearr_24107_24169[(2)] = inst_24065);

(statearr_24107_24169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (10))){
var inst_24057 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
var statearr_24108_24170 = state_24085__$1;
(statearr_24108_24170[(2)] = inst_24057);

(statearr_24108_24170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (18))){
var inst_24068 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
var statearr_24109_24171 = state_24085__$1;
(statearr_24109_24171[(2)] = inst_24068);

(statearr_24109_24171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (8))){
var inst_24054 = cljs.core.async.close_BANG_.call(null,to);
var state_24085__$1 = state_24085;
var statearr_24110_24172 = state_24085__$1;
(statearr_24110_24172[(2)] = inst_24054);

(statearr_24110_24172[(1)] = (10));


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
});})(c__23560__auto__,jobs,results,process,async))
;
return ((function (switch__23448__auto__,c__23560__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0 = (function (){
var statearr_24114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__);

(statearr_24114[(1)] = (1));

return statearr_24114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1 = (function (state_24085){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_24085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e24115){if((e24115 instanceof Object)){
var ex__23452__auto__ = e24115;
var statearr_24116_24173 = state_24085;
(statearr_24116_24173[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24174 = state_24085;
state_24085 = G__24174;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__ = function(state_24085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1.call(this,state_24085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23449__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__,jobs,results,process,async))
})();
var state__23562__auto__ = (function (){var statearr_24117 = f__23561__auto__.call(null);
(statearr_24117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_24117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__,jobs,results,process,async))
);

return c__23560__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24175 = [];
var len__21239__auto___24178 = arguments.length;
var i__21240__auto___24179 = (0);
while(true){
if((i__21240__auto___24179 < len__21239__auto___24178)){
args24175.push((arguments[i__21240__auto___24179]));

var G__24180 = (i__21240__auto___24179 + (1));
i__21240__auto___24179 = G__24180;
continue;
} else {
}
break;
}

var G__24177 = args24175.length;
switch (G__24177) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24175.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24182 = [];
var len__21239__auto___24185 = arguments.length;
var i__21240__auto___24186 = (0);
while(true){
if((i__21240__auto___24186 < len__21239__auto___24185)){
args24182.push((arguments[i__21240__auto___24186]));

var G__24187 = (i__21240__auto___24186 + (1));
i__21240__auto___24186 = G__24187;
continue;
} else {
}
break;
}

var G__24184 = args24182.length;
switch (G__24184) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24182.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24189 = [];
var len__21239__auto___24242 = arguments.length;
var i__21240__auto___24243 = (0);
while(true){
if((i__21240__auto___24243 < len__21239__auto___24242)){
args24189.push((arguments[i__21240__auto___24243]));

var G__24244 = (i__21240__auto___24243 + (1));
i__21240__auto___24243 = G__24244;
continue;
} else {
}
break;
}

var G__24191 = args24189.length;
switch (G__24191) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24189.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23560__auto___24246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___24246,tc,fc){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___24246,tc,fc){
return (function (state_24217){
var state_val_24218 = (state_24217[(1)]);
if((state_val_24218 === (7))){
var inst_24213 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24219_24247 = state_24217__$1;
(statearr_24219_24247[(2)] = inst_24213);

(statearr_24219_24247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (1))){
var state_24217__$1 = state_24217;
var statearr_24220_24248 = state_24217__$1;
(statearr_24220_24248[(2)] = null);

(statearr_24220_24248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (4))){
var inst_24194 = (state_24217[(7)]);
var inst_24194__$1 = (state_24217[(2)]);
var inst_24195 = (inst_24194__$1 == null);
var state_24217__$1 = (function (){var statearr_24221 = state_24217;
(statearr_24221[(7)] = inst_24194__$1);

return statearr_24221;
})();
if(cljs.core.truth_(inst_24195)){
var statearr_24222_24249 = state_24217__$1;
(statearr_24222_24249[(1)] = (5));

} else {
var statearr_24223_24250 = state_24217__$1;
(statearr_24223_24250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (13))){
var state_24217__$1 = state_24217;
var statearr_24224_24251 = state_24217__$1;
(statearr_24224_24251[(2)] = null);

(statearr_24224_24251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (6))){
var inst_24194 = (state_24217[(7)]);
var inst_24200 = p.call(null,inst_24194);
var state_24217__$1 = state_24217;
if(cljs.core.truth_(inst_24200)){
var statearr_24225_24252 = state_24217__$1;
(statearr_24225_24252[(1)] = (9));

} else {
var statearr_24226_24253 = state_24217__$1;
(statearr_24226_24253[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (3))){
var inst_24215 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24217__$1,inst_24215);
} else {
if((state_val_24218 === (12))){
var state_24217__$1 = state_24217;
var statearr_24227_24254 = state_24217__$1;
(statearr_24227_24254[(2)] = null);

(statearr_24227_24254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (2))){
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24217__$1,(4),ch);
} else {
if((state_val_24218 === (11))){
var inst_24194 = (state_24217[(7)]);
var inst_24204 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24217__$1,(8),inst_24204,inst_24194);
} else {
if((state_val_24218 === (9))){
var state_24217__$1 = state_24217;
var statearr_24228_24255 = state_24217__$1;
(statearr_24228_24255[(2)] = tc);

(statearr_24228_24255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (5))){
var inst_24197 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24198 = cljs.core.async.close_BANG_.call(null,fc);
var state_24217__$1 = (function (){var statearr_24229 = state_24217;
(statearr_24229[(8)] = inst_24197);

return statearr_24229;
})();
var statearr_24230_24256 = state_24217__$1;
(statearr_24230_24256[(2)] = inst_24198);

(statearr_24230_24256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (14))){
var inst_24211 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24231_24257 = state_24217__$1;
(statearr_24231_24257[(2)] = inst_24211);

(statearr_24231_24257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (10))){
var state_24217__$1 = state_24217;
var statearr_24232_24258 = state_24217__$1;
(statearr_24232_24258[(2)] = fc);

(statearr_24232_24258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (8))){
var inst_24206 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
if(cljs.core.truth_(inst_24206)){
var statearr_24233_24259 = state_24217__$1;
(statearr_24233_24259[(1)] = (12));

} else {
var statearr_24234_24260 = state_24217__$1;
(statearr_24234_24260[(1)] = (13));

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
});})(c__23560__auto___24246,tc,fc))
;
return ((function (switch__23448__auto__,c__23560__auto___24246,tc,fc){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_24238 = [null,null,null,null,null,null,null,null,null];
(statearr_24238[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_24238[(1)] = (1));

return statearr_24238;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_24217){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_24217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e24239){if((e24239 instanceof Object)){
var ex__23452__auto__ = e24239;
var statearr_24240_24261 = state_24217;
(statearr_24240_24261[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24262 = state_24217;
state_24217 = G__24262;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_24217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_24217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___24246,tc,fc))
})();
var state__23562__auto__ = (function (){var statearr_24241 = f__23561__auto__.call(null);
(statearr_24241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___24246);

return statearr_24241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___24246,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__){
return (function (state_24326){
var state_val_24327 = (state_24326[(1)]);
if((state_val_24327 === (7))){
var inst_24322 = (state_24326[(2)]);
var state_24326__$1 = state_24326;
var statearr_24328_24349 = state_24326__$1;
(statearr_24328_24349[(2)] = inst_24322);

(statearr_24328_24349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (1))){
var inst_24306 = init;
var state_24326__$1 = (function (){var statearr_24329 = state_24326;
(statearr_24329[(7)] = inst_24306);

return statearr_24329;
})();
var statearr_24330_24350 = state_24326__$1;
(statearr_24330_24350[(2)] = null);

(statearr_24330_24350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (4))){
var inst_24309 = (state_24326[(8)]);
var inst_24309__$1 = (state_24326[(2)]);
var inst_24310 = (inst_24309__$1 == null);
var state_24326__$1 = (function (){var statearr_24331 = state_24326;
(statearr_24331[(8)] = inst_24309__$1);

return statearr_24331;
})();
if(cljs.core.truth_(inst_24310)){
var statearr_24332_24351 = state_24326__$1;
(statearr_24332_24351[(1)] = (5));

} else {
var statearr_24333_24352 = state_24326__$1;
(statearr_24333_24352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (6))){
var inst_24306 = (state_24326[(7)]);
var inst_24313 = (state_24326[(9)]);
var inst_24309 = (state_24326[(8)]);
var inst_24313__$1 = f.call(null,inst_24306,inst_24309);
var inst_24314 = cljs.core.reduced_QMARK_.call(null,inst_24313__$1);
var state_24326__$1 = (function (){var statearr_24334 = state_24326;
(statearr_24334[(9)] = inst_24313__$1);

return statearr_24334;
})();
if(inst_24314){
var statearr_24335_24353 = state_24326__$1;
(statearr_24335_24353[(1)] = (8));

} else {
var statearr_24336_24354 = state_24326__$1;
(statearr_24336_24354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (3))){
var inst_24324 = (state_24326[(2)]);
var state_24326__$1 = state_24326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24326__$1,inst_24324);
} else {
if((state_val_24327 === (2))){
var state_24326__$1 = state_24326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24326__$1,(4),ch);
} else {
if((state_val_24327 === (9))){
var inst_24313 = (state_24326[(9)]);
var inst_24306 = inst_24313;
var state_24326__$1 = (function (){var statearr_24337 = state_24326;
(statearr_24337[(7)] = inst_24306);

return statearr_24337;
})();
var statearr_24338_24355 = state_24326__$1;
(statearr_24338_24355[(2)] = null);

(statearr_24338_24355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (5))){
var inst_24306 = (state_24326[(7)]);
var state_24326__$1 = state_24326;
var statearr_24339_24356 = state_24326__$1;
(statearr_24339_24356[(2)] = inst_24306);

(statearr_24339_24356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (10))){
var inst_24320 = (state_24326[(2)]);
var state_24326__$1 = state_24326;
var statearr_24340_24357 = state_24326__$1;
(statearr_24340_24357[(2)] = inst_24320);

(statearr_24340_24357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (8))){
var inst_24313 = (state_24326[(9)]);
var inst_24316 = cljs.core.deref.call(null,inst_24313);
var state_24326__$1 = state_24326;
var statearr_24341_24358 = state_24326__$1;
(statearr_24341_24358[(2)] = inst_24316);

(statearr_24341_24358[(1)] = (10));


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
});})(c__23560__auto__))
;
return ((function (switch__23448__auto__,c__23560__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23449__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23449__auto____0 = (function (){
var statearr_24345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24345[(0)] = cljs$core$async$reduce_$_state_machine__23449__auto__);

(statearr_24345[(1)] = (1));

return statearr_24345;
});
var cljs$core$async$reduce_$_state_machine__23449__auto____1 = (function (state_24326){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_24326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e24346){if((e24346 instanceof Object)){
var ex__23452__auto__ = e24346;
var statearr_24347_24359 = state_24326;
(statearr_24347_24359[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24360 = state_24326;
state_24326 = G__24360;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23449__auto__ = function(state_24326){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23449__auto____1.call(this,state_24326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23449__auto____0;
cljs$core$async$reduce_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23449__auto____1;
return cljs$core$async$reduce_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__))
})();
var state__23562__auto__ = (function (){var statearr_24348 = f__23561__auto__.call(null);
(statearr_24348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_24348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__))
);

return c__23560__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24361 = [];
var len__21239__auto___24413 = arguments.length;
var i__21240__auto___24414 = (0);
while(true){
if((i__21240__auto___24414 < len__21239__auto___24413)){
args24361.push((arguments[i__21240__auto___24414]));

var G__24415 = (i__21240__auto___24414 + (1));
i__21240__auto___24414 = G__24415;
continue;
} else {
}
break;
}

var G__24363 = args24361.length;
switch (G__24363) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24361.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__){
return (function (state_24388){
var state_val_24389 = (state_24388[(1)]);
if((state_val_24389 === (7))){
var inst_24370 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24390_24417 = state_24388__$1;
(statearr_24390_24417[(2)] = inst_24370);

(statearr_24390_24417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (1))){
var inst_24364 = cljs.core.seq.call(null,coll);
var inst_24365 = inst_24364;
var state_24388__$1 = (function (){var statearr_24391 = state_24388;
(statearr_24391[(7)] = inst_24365);

return statearr_24391;
})();
var statearr_24392_24418 = state_24388__$1;
(statearr_24392_24418[(2)] = null);

(statearr_24392_24418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (4))){
var inst_24365 = (state_24388[(7)]);
var inst_24368 = cljs.core.first.call(null,inst_24365);
var state_24388__$1 = state_24388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24388__$1,(7),ch,inst_24368);
} else {
if((state_val_24389 === (13))){
var inst_24382 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24393_24419 = state_24388__$1;
(statearr_24393_24419[(2)] = inst_24382);

(statearr_24393_24419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (6))){
var inst_24373 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
if(cljs.core.truth_(inst_24373)){
var statearr_24394_24420 = state_24388__$1;
(statearr_24394_24420[(1)] = (8));

} else {
var statearr_24395_24421 = state_24388__$1;
(statearr_24395_24421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (3))){
var inst_24386 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24388__$1,inst_24386);
} else {
if((state_val_24389 === (12))){
var state_24388__$1 = state_24388;
var statearr_24396_24422 = state_24388__$1;
(statearr_24396_24422[(2)] = null);

(statearr_24396_24422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (2))){
var inst_24365 = (state_24388[(7)]);
var state_24388__$1 = state_24388;
if(cljs.core.truth_(inst_24365)){
var statearr_24397_24423 = state_24388__$1;
(statearr_24397_24423[(1)] = (4));

} else {
var statearr_24398_24424 = state_24388__$1;
(statearr_24398_24424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (11))){
var inst_24379 = cljs.core.async.close_BANG_.call(null,ch);
var state_24388__$1 = state_24388;
var statearr_24399_24425 = state_24388__$1;
(statearr_24399_24425[(2)] = inst_24379);

(statearr_24399_24425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (9))){
var state_24388__$1 = state_24388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24400_24426 = state_24388__$1;
(statearr_24400_24426[(1)] = (11));

} else {
var statearr_24401_24427 = state_24388__$1;
(statearr_24401_24427[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (5))){
var inst_24365 = (state_24388[(7)]);
var state_24388__$1 = state_24388;
var statearr_24402_24428 = state_24388__$1;
(statearr_24402_24428[(2)] = inst_24365);

(statearr_24402_24428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (10))){
var inst_24384 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24403_24429 = state_24388__$1;
(statearr_24403_24429[(2)] = inst_24384);

(statearr_24403_24429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (8))){
var inst_24365 = (state_24388[(7)]);
var inst_24375 = cljs.core.next.call(null,inst_24365);
var inst_24365__$1 = inst_24375;
var state_24388__$1 = (function (){var statearr_24404 = state_24388;
(statearr_24404[(7)] = inst_24365__$1);

return statearr_24404;
})();
var statearr_24405_24430 = state_24388__$1;
(statearr_24405_24430[(2)] = null);

(statearr_24405_24430[(1)] = (2));


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
});})(c__23560__auto__))
;
return ((function (switch__23448__auto__,c__23560__auto__){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_24409 = [null,null,null,null,null,null,null,null];
(statearr_24409[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_24409[(1)] = (1));

return statearr_24409;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_24388){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_24388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e24410){if((e24410 instanceof Object)){
var ex__23452__auto__ = e24410;
var statearr_24411_24431 = state_24388;
(statearr_24411_24431[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24432 = state_24388;
state_24388 = G__24432;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_24388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_24388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__))
})();
var state__23562__auto__ = (function (){var statearr_24412 = f__23561__auto__.call(null);
(statearr_24412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_24412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__))
);

return c__23560__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20827__auto__ = (((_ == null))?null:_);
var m__20828__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,_);
} else {
var m__20828__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20827__auto__ = (((m == null))?null:m);
var m__20828__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20828__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20827__auto__ = (((m == null))?null:m);
var m__20828__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,m,ch);
} else {
var m__20828__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20827__auto__ = (((m == null))?null:m);
var m__20828__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,m);
} else {
var m__20828__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24658 = (function (mult,ch,cs,meta24659){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24659 = meta24659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24660,meta24659__$1){
var self__ = this;
var _24660__$1 = this;
return (new cljs.core.async.t_cljs$core$async24658(self__.mult,self__.ch,self__.cs,meta24659__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24660){
var self__ = this;
var _24660__$1 = this;
return self__.meta24659;
});})(cs))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24658.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24659","meta24659",-421922739,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24658";

cljs.core.async.t_cljs$core$async24658.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async24658");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24658 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24658(mult__$1,ch__$1,cs__$1,meta24659){
return (new cljs.core.async.t_cljs$core$async24658(mult__$1,ch__$1,cs__$1,meta24659));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24658(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23560__auto___24883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___24883,cs,m,dchan,dctr,done){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___24883,cs,m,dchan,dctr,done){
return (function (state_24795){
var state_val_24796 = (state_24795[(1)]);
if((state_val_24796 === (7))){
var inst_24791 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24797_24884 = state_24795__$1;
(statearr_24797_24884[(2)] = inst_24791);

(statearr_24797_24884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (20))){
var inst_24694 = (state_24795[(7)]);
var inst_24706 = cljs.core.first.call(null,inst_24694);
var inst_24707 = cljs.core.nth.call(null,inst_24706,(0),null);
var inst_24708 = cljs.core.nth.call(null,inst_24706,(1),null);
var state_24795__$1 = (function (){var statearr_24798 = state_24795;
(statearr_24798[(8)] = inst_24707);

return statearr_24798;
})();
if(cljs.core.truth_(inst_24708)){
var statearr_24799_24885 = state_24795__$1;
(statearr_24799_24885[(1)] = (22));

} else {
var statearr_24800_24886 = state_24795__$1;
(statearr_24800_24886[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (27))){
var inst_24663 = (state_24795[(9)]);
var inst_24738 = (state_24795[(10)]);
var inst_24743 = (state_24795[(11)]);
var inst_24736 = (state_24795[(12)]);
var inst_24743__$1 = cljs.core._nth.call(null,inst_24736,inst_24738);
var inst_24744 = cljs.core.async.put_BANG_.call(null,inst_24743__$1,inst_24663,done);
var state_24795__$1 = (function (){var statearr_24801 = state_24795;
(statearr_24801[(11)] = inst_24743__$1);

return statearr_24801;
})();
if(cljs.core.truth_(inst_24744)){
var statearr_24802_24887 = state_24795__$1;
(statearr_24802_24887[(1)] = (30));

} else {
var statearr_24803_24888 = state_24795__$1;
(statearr_24803_24888[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (1))){
var state_24795__$1 = state_24795;
var statearr_24804_24889 = state_24795__$1;
(statearr_24804_24889[(2)] = null);

(statearr_24804_24889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (24))){
var inst_24694 = (state_24795[(7)]);
var inst_24713 = (state_24795[(2)]);
var inst_24714 = cljs.core.next.call(null,inst_24694);
var inst_24672 = inst_24714;
var inst_24673 = null;
var inst_24674 = (0);
var inst_24675 = (0);
var state_24795__$1 = (function (){var statearr_24805 = state_24795;
(statearr_24805[(13)] = inst_24713);

(statearr_24805[(14)] = inst_24672);

(statearr_24805[(15)] = inst_24675);

(statearr_24805[(16)] = inst_24674);

(statearr_24805[(17)] = inst_24673);

return statearr_24805;
})();
var statearr_24806_24890 = state_24795__$1;
(statearr_24806_24890[(2)] = null);

(statearr_24806_24890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (39))){
var state_24795__$1 = state_24795;
var statearr_24810_24891 = state_24795__$1;
(statearr_24810_24891[(2)] = null);

(statearr_24810_24891[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (4))){
var inst_24663 = (state_24795[(9)]);
var inst_24663__$1 = (state_24795[(2)]);
var inst_24664 = (inst_24663__$1 == null);
var state_24795__$1 = (function (){var statearr_24811 = state_24795;
(statearr_24811[(9)] = inst_24663__$1);

return statearr_24811;
})();
if(cljs.core.truth_(inst_24664)){
var statearr_24812_24892 = state_24795__$1;
(statearr_24812_24892[(1)] = (5));

} else {
var statearr_24813_24893 = state_24795__$1;
(statearr_24813_24893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (15))){
var inst_24672 = (state_24795[(14)]);
var inst_24675 = (state_24795[(15)]);
var inst_24674 = (state_24795[(16)]);
var inst_24673 = (state_24795[(17)]);
var inst_24690 = (state_24795[(2)]);
var inst_24691 = (inst_24675 + (1));
var tmp24807 = inst_24672;
var tmp24808 = inst_24674;
var tmp24809 = inst_24673;
var inst_24672__$1 = tmp24807;
var inst_24673__$1 = tmp24809;
var inst_24674__$1 = tmp24808;
var inst_24675__$1 = inst_24691;
var state_24795__$1 = (function (){var statearr_24814 = state_24795;
(statearr_24814[(14)] = inst_24672__$1);

(statearr_24814[(15)] = inst_24675__$1);

(statearr_24814[(18)] = inst_24690);

(statearr_24814[(16)] = inst_24674__$1);

(statearr_24814[(17)] = inst_24673__$1);

return statearr_24814;
})();
var statearr_24815_24894 = state_24795__$1;
(statearr_24815_24894[(2)] = null);

(statearr_24815_24894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (21))){
var inst_24717 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24819_24895 = state_24795__$1;
(statearr_24819_24895[(2)] = inst_24717);

(statearr_24819_24895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (31))){
var inst_24743 = (state_24795[(11)]);
var inst_24747 = done.call(null,null);
var inst_24748 = cljs.core.async.untap_STAR_.call(null,m,inst_24743);
var state_24795__$1 = (function (){var statearr_24820 = state_24795;
(statearr_24820[(19)] = inst_24747);

return statearr_24820;
})();
var statearr_24821_24896 = state_24795__$1;
(statearr_24821_24896[(2)] = inst_24748);

(statearr_24821_24896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (32))){
var inst_24738 = (state_24795[(10)]);
var inst_24735 = (state_24795[(20)]);
var inst_24737 = (state_24795[(21)]);
var inst_24736 = (state_24795[(12)]);
var inst_24750 = (state_24795[(2)]);
var inst_24751 = (inst_24738 + (1));
var tmp24816 = inst_24735;
var tmp24817 = inst_24737;
var tmp24818 = inst_24736;
var inst_24735__$1 = tmp24816;
var inst_24736__$1 = tmp24818;
var inst_24737__$1 = tmp24817;
var inst_24738__$1 = inst_24751;
var state_24795__$1 = (function (){var statearr_24822 = state_24795;
(statearr_24822[(10)] = inst_24738__$1);

(statearr_24822[(22)] = inst_24750);

(statearr_24822[(20)] = inst_24735__$1);

(statearr_24822[(21)] = inst_24737__$1);

(statearr_24822[(12)] = inst_24736__$1);

return statearr_24822;
})();
var statearr_24823_24897 = state_24795__$1;
(statearr_24823_24897[(2)] = null);

(statearr_24823_24897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (40))){
var inst_24763 = (state_24795[(23)]);
var inst_24767 = done.call(null,null);
var inst_24768 = cljs.core.async.untap_STAR_.call(null,m,inst_24763);
var state_24795__$1 = (function (){var statearr_24824 = state_24795;
(statearr_24824[(24)] = inst_24767);

return statearr_24824;
})();
var statearr_24825_24898 = state_24795__$1;
(statearr_24825_24898[(2)] = inst_24768);

(statearr_24825_24898[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (33))){
var inst_24754 = (state_24795[(25)]);
var inst_24756 = cljs.core.chunked_seq_QMARK_.call(null,inst_24754);
var state_24795__$1 = state_24795;
if(inst_24756){
var statearr_24826_24899 = state_24795__$1;
(statearr_24826_24899[(1)] = (36));

} else {
var statearr_24827_24900 = state_24795__$1;
(statearr_24827_24900[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (13))){
var inst_24684 = (state_24795[(26)]);
var inst_24687 = cljs.core.async.close_BANG_.call(null,inst_24684);
var state_24795__$1 = state_24795;
var statearr_24828_24901 = state_24795__$1;
(statearr_24828_24901[(2)] = inst_24687);

(statearr_24828_24901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (22))){
var inst_24707 = (state_24795[(8)]);
var inst_24710 = cljs.core.async.close_BANG_.call(null,inst_24707);
var state_24795__$1 = state_24795;
var statearr_24829_24902 = state_24795__$1;
(statearr_24829_24902[(2)] = inst_24710);

(statearr_24829_24902[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (36))){
var inst_24754 = (state_24795[(25)]);
var inst_24758 = cljs.core.chunk_first.call(null,inst_24754);
var inst_24759 = cljs.core.chunk_rest.call(null,inst_24754);
var inst_24760 = cljs.core.count.call(null,inst_24758);
var inst_24735 = inst_24759;
var inst_24736 = inst_24758;
var inst_24737 = inst_24760;
var inst_24738 = (0);
var state_24795__$1 = (function (){var statearr_24830 = state_24795;
(statearr_24830[(10)] = inst_24738);

(statearr_24830[(20)] = inst_24735);

(statearr_24830[(21)] = inst_24737);

(statearr_24830[(12)] = inst_24736);

return statearr_24830;
})();
var statearr_24831_24903 = state_24795__$1;
(statearr_24831_24903[(2)] = null);

(statearr_24831_24903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (41))){
var inst_24754 = (state_24795[(25)]);
var inst_24770 = (state_24795[(2)]);
var inst_24771 = cljs.core.next.call(null,inst_24754);
var inst_24735 = inst_24771;
var inst_24736 = null;
var inst_24737 = (0);
var inst_24738 = (0);
var state_24795__$1 = (function (){var statearr_24832 = state_24795;
(statearr_24832[(10)] = inst_24738);

(statearr_24832[(20)] = inst_24735);

(statearr_24832[(21)] = inst_24737);

(statearr_24832[(12)] = inst_24736);

(statearr_24832[(27)] = inst_24770);

return statearr_24832;
})();
var statearr_24833_24904 = state_24795__$1;
(statearr_24833_24904[(2)] = null);

(statearr_24833_24904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (43))){
var state_24795__$1 = state_24795;
var statearr_24834_24905 = state_24795__$1;
(statearr_24834_24905[(2)] = null);

(statearr_24834_24905[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (29))){
var inst_24779 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24835_24906 = state_24795__$1;
(statearr_24835_24906[(2)] = inst_24779);

(statearr_24835_24906[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (44))){
var inst_24788 = (state_24795[(2)]);
var state_24795__$1 = (function (){var statearr_24836 = state_24795;
(statearr_24836[(28)] = inst_24788);

return statearr_24836;
})();
var statearr_24837_24907 = state_24795__$1;
(statearr_24837_24907[(2)] = null);

(statearr_24837_24907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (6))){
var inst_24727 = (state_24795[(29)]);
var inst_24726 = cljs.core.deref.call(null,cs);
var inst_24727__$1 = cljs.core.keys.call(null,inst_24726);
var inst_24728 = cljs.core.count.call(null,inst_24727__$1);
var inst_24729 = cljs.core.reset_BANG_.call(null,dctr,inst_24728);
var inst_24734 = cljs.core.seq.call(null,inst_24727__$1);
var inst_24735 = inst_24734;
var inst_24736 = null;
var inst_24737 = (0);
var inst_24738 = (0);
var state_24795__$1 = (function (){var statearr_24838 = state_24795;
(statearr_24838[(10)] = inst_24738);

(statearr_24838[(20)] = inst_24735);

(statearr_24838[(21)] = inst_24737);

(statearr_24838[(12)] = inst_24736);

(statearr_24838[(29)] = inst_24727__$1);

(statearr_24838[(30)] = inst_24729);

return statearr_24838;
})();
var statearr_24839_24908 = state_24795__$1;
(statearr_24839_24908[(2)] = null);

(statearr_24839_24908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (28))){
var inst_24735 = (state_24795[(20)]);
var inst_24754 = (state_24795[(25)]);
var inst_24754__$1 = cljs.core.seq.call(null,inst_24735);
var state_24795__$1 = (function (){var statearr_24840 = state_24795;
(statearr_24840[(25)] = inst_24754__$1);

return statearr_24840;
})();
if(inst_24754__$1){
var statearr_24841_24909 = state_24795__$1;
(statearr_24841_24909[(1)] = (33));

} else {
var statearr_24842_24910 = state_24795__$1;
(statearr_24842_24910[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (25))){
var inst_24738 = (state_24795[(10)]);
var inst_24737 = (state_24795[(21)]);
var inst_24740 = (inst_24738 < inst_24737);
var inst_24741 = inst_24740;
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24741)){
var statearr_24843_24911 = state_24795__$1;
(statearr_24843_24911[(1)] = (27));

} else {
var statearr_24844_24912 = state_24795__$1;
(statearr_24844_24912[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (34))){
var state_24795__$1 = state_24795;
var statearr_24845_24913 = state_24795__$1;
(statearr_24845_24913[(2)] = null);

(statearr_24845_24913[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (17))){
var state_24795__$1 = state_24795;
var statearr_24846_24914 = state_24795__$1;
(statearr_24846_24914[(2)] = null);

(statearr_24846_24914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (3))){
var inst_24793 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24795__$1,inst_24793);
} else {
if((state_val_24796 === (12))){
var inst_24722 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24847_24915 = state_24795__$1;
(statearr_24847_24915[(2)] = inst_24722);

(statearr_24847_24915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (2))){
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(4),ch);
} else {
if((state_val_24796 === (23))){
var state_24795__$1 = state_24795;
var statearr_24848_24916 = state_24795__$1;
(statearr_24848_24916[(2)] = null);

(statearr_24848_24916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (35))){
var inst_24777 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24849_24917 = state_24795__$1;
(statearr_24849_24917[(2)] = inst_24777);

(statearr_24849_24917[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (19))){
var inst_24694 = (state_24795[(7)]);
var inst_24698 = cljs.core.chunk_first.call(null,inst_24694);
var inst_24699 = cljs.core.chunk_rest.call(null,inst_24694);
var inst_24700 = cljs.core.count.call(null,inst_24698);
var inst_24672 = inst_24699;
var inst_24673 = inst_24698;
var inst_24674 = inst_24700;
var inst_24675 = (0);
var state_24795__$1 = (function (){var statearr_24850 = state_24795;
(statearr_24850[(14)] = inst_24672);

(statearr_24850[(15)] = inst_24675);

(statearr_24850[(16)] = inst_24674);

(statearr_24850[(17)] = inst_24673);

return statearr_24850;
})();
var statearr_24851_24918 = state_24795__$1;
(statearr_24851_24918[(2)] = null);

(statearr_24851_24918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (11))){
var inst_24672 = (state_24795[(14)]);
var inst_24694 = (state_24795[(7)]);
var inst_24694__$1 = cljs.core.seq.call(null,inst_24672);
var state_24795__$1 = (function (){var statearr_24852 = state_24795;
(statearr_24852[(7)] = inst_24694__$1);

return statearr_24852;
})();
if(inst_24694__$1){
var statearr_24853_24919 = state_24795__$1;
(statearr_24853_24919[(1)] = (16));

} else {
var statearr_24854_24920 = state_24795__$1;
(statearr_24854_24920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (9))){
var inst_24724 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24855_24921 = state_24795__$1;
(statearr_24855_24921[(2)] = inst_24724);

(statearr_24855_24921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (5))){
var inst_24670 = cljs.core.deref.call(null,cs);
var inst_24671 = cljs.core.seq.call(null,inst_24670);
var inst_24672 = inst_24671;
var inst_24673 = null;
var inst_24674 = (0);
var inst_24675 = (0);
var state_24795__$1 = (function (){var statearr_24856 = state_24795;
(statearr_24856[(14)] = inst_24672);

(statearr_24856[(15)] = inst_24675);

(statearr_24856[(16)] = inst_24674);

(statearr_24856[(17)] = inst_24673);

return statearr_24856;
})();
var statearr_24857_24922 = state_24795__$1;
(statearr_24857_24922[(2)] = null);

(statearr_24857_24922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (14))){
var state_24795__$1 = state_24795;
var statearr_24858_24923 = state_24795__$1;
(statearr_24858_24923[(2)] = null);

(statearr_24858_24923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (45))){
var inst_24785 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24859_24924 = state_24795__$1;
(statearr_24859_24924[(2)] = inst_24785);

(statearr_24859_24924[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (26))){
var inst_24727 = (state_24795[(29)]);
var inst_24781 = (state_24795[(2)]);
var inst_24782 = cljs.core.seq.call(null,inst_24727);
var state_24795__$1 = (function (){var statearr_24860 = state_24795;
(statearr_24860[(31)] = inst_24781);

return statearr_24860;
})();
if(inst_24782){
var statearr_24861_24925 = state_24795__$1;
(statearr_24861_24925[(1)] = (42));

} else {
var statearr_24862_24926 = state_24795__$1;
(statearr_24862_24926[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (16))){
var inst_24694 = (state_24795[(7)]);
var inst_24696 = cljs.core.chunked_seq_QMARK_.call(null,inst_24694);
var state_24795__$1 = state_24795;
if(inst_24696){
var statearr_24863_24927 = state_24795__$1;
(statearr_24863_24927[(1)] = (19));

} else {
var statearr_24864_24928 = state_24795__$1;
(statearr_24864_24928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (38))){
var inst_24774 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24865_24929 = state_24795__$1;
(statearr_24865_24929[(2)] = inst_24774);

(statearr_24865_24929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (30))){
var state_24795__$1 = state_24795;
var statearr_24866_24930 = state_24795__$1;
(statearr_24866_24930[(2)] = null);

(statearr_24866_24930[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (10))){
var inst_24675 = (state_24795[(15)]);
var inst_24673 = (state_24795[(17)]);
var inst_24683 = cljs.core._nth.call(null,inst_24673,inst_24675);
var inst_24684 = cljs.core.nth.call(null,inst_24683,(0),null);
var inst_24685 = cljs.core.nth.call(null,inst_24683,(1),null);
var state_24795__$1 = (function (){var statearr_24867 = state_24795;
(statearr_24867[(26)] = inst_24684);

return statearr_24867;
})();
if(cljs.core.truth_(inst_24685)){
var statearr_24868_24931 = state_24795__$1;
(statearr_24868_24931[(1)] = (13));

} else {
var statearr_24869_24932 = state_24795__$1;
(statearr_24869_24932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (18))){
var inst_24720 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24870_24933 = state_24795__$1;
(statearr_24870_24933[(2)] = inst_24720);

(statearr_24870_24933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (42))){
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(45),dchan);
} else {
if((state_val_24796 === (37))){
var inst_24663 = (state_24795[(9)]);
var inst_24763 = (state_24795[(23)]);
var inst_24754 = (state_24795[(25)]);
var inst_24763__$1 = cljs.core.first.call(null,inst_24754);
var inst_24764 = cljs.core.async.put_BANG_.call(null,inst_24763__$1,inst_24663,done);
var state_24795__$1 = (function (){var statearr_24871 = state_24795;
(statearr_24871[(23)] = inst_24763__$1);

return statearr_24871;
})();
if(cljs.core.truth_(inst_24764)){
var statearr_24872_24934 = state_24795__$1;
(statearr_24872_24934[(1)] = (39));

} else {
var statearr_24873_24935 = state_24795__$1;
(statearr_24873_24935[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (8))){
var inst_24675 = (state_24795[(15)]);
var inst_24674 = (state_24795[(16)]);
var inst_24677 = (inst_24675 < inst_24674);
var inst_24678 = inst_24677;
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24678)){
var statearr_24874_24936 = state_24795__$1;
(statearr_24874_24936[(1)] = (10));

} else {
var statearr_24875_24937 = state_24795__$1;
(statearr_24875_24937[(1)] = (11));

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
});})(c__23560__auto___24883,cs,m,dchan,dctr,done))
;
return ((function (switch__23448__auto__,c__23560__auto___24883,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23449__auto__ = null;
var cljs$core$async$mult_$_state_machine__23449__auto____0 = (function (){
var statearr_24879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24879[(0)] = cljs$core$async$mult_$_state_machine__23449__auto__);

(statearr_24879[(1)] = (1));

return statearr_24879;
});
var cljs$core$async$mult_$_state_machine__23449__auto____1 = (function (state_24795){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_24795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e24880){if((e24880 instanceof Object)){
var ex__23452__auto__ = e24880;
var statearr_24881_24938 = state_24795;
(statearr_24881_24938[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24939 = state_24795;
state_24795 = G__24939;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23449__auto__ = function(state_24795){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23449__auto____1.call(this,state_24795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23449__auto____0;
cljs$core$async$mult_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23449__auto____1;
return cljs$core$async$mult_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___24883,cs,m,dchan,dctr,done))
})();
var state__23562__auto__ = (function (){var statearr_24882 = f__23561__auto__.call(null);
(statearr_24882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___24883);

return statearr_24882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___24883,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24940 = [];
var len__21239__auto___24943 = arguments.length;
var i__21240__auto___24944 = (0);
while(true){
if((i__21240__auto___24944 < len__21239__auto___24943)){
args24940.push((arguments[i__21240__auto___24944]));

var G__24945 = (i__21240__auto___24944 + (1));
i__21240__auto___24944 = G__24945;
continue;
} else {
}
break;
}

var G__24942 = args24940.length;
switch (G__24942) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24940.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20827__auto__ = (((m == null))?null:m);
var m__20828__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,m,ch);
} else {
var m__20828__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20827__auto__ = (((m == null))?null:m);
var m__20828__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,m,ch);
} else {
var m__20828__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20827__auto__ = (((m == null))?null:m);
var m__20828__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,m);
} else {
var m__20828__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20827__auto__ = (((m == null))?null:m);
var m__20828__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,m,state_map);
} else {
var m__20828__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20827__auto__ = (((m == null))?null:m);
var m__20828__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,m,mode);
} else {
var m__20828__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21246__auto__ = [];
var len__21239__auto___24957 = arguments.length;
var i__21240__auto___24958 = (0);
while(true){
if((i__21240__auto___24958 < len__21239__auto___24957)){
args__21246__auto__.push((arguments[i__21240__auto___24958]));

var G__24959 = (i__21240__auto___24958 + (1));
i__21240__auto___24958 = G__24959;
continue;
} else {
}
break;
}

var argseq__21247__auto__ = ((((3) < args__21246__auto__.length))?(new cljs.core.IndexedSeq(args__21246__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21247__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24951){
var map__24952 = p__24951;
var map__24952__$1 = ((((!((map__24952 == null)))?((((map__24952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24952):map__24952);
var opts = map__24952__$1;
var statearr_24954_24960 = state;
(statearr_24954_24960[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24952,map__24952__$1,opts){
return (function (val){
var statearr_24955_24961 = state;
(statearr_24955_24961[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24952,map__24952__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24956_24962 = state;
(statearr_24956_24962[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24947){
var G__24948 = cljs.core.first.call(null,seq24947);
var seq24947__$1 = cljs.core.next.call(null,seq24947);
var G__24949 = cljs.core.first.call(null,seq24947__$1);
var seq24947__$2 = cljs.core.next.call(null,seq24947__$1);
var G__24950 = cljs.core.first.call(null,seq24947__$2);
var seq24947__$3 = cljs.core.next.call(null,seq24947__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24948,G__24949,G__24950,seq24947__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25128 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25129){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25129 = meta25129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25130,meta25129__$1){
var self__ = this;
var _25130__$1 = this;
return (new cljs.core.async.t_cljs$core$async25128(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25129__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25130){
var self__ = this;
var _25130__$1 = this;
return self__.meta25129;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25129","meta25129",1146225555,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25128";

cljs.core.async.t_cljs$core$async25128.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async25128");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25128 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25128(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25129){
return (new cljs.core.async.t_cljs$core$async25128(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25129));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25128(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23560__auto___25293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___25293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___25293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25230){
var state_val_25231 = (state_25230[(1)]);
if((state_val_25231 === (7))){
var inst_25146 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25232_25294 = state_25230__$1;
(statearr_25232_25294[(2)] = inst_25146);

(statearr_25232_25294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (20))){
var inst_25158 = (state_25230[(7)]);
var state_25230__$1 = state_25230;
var statearr_25233_25295 = state_25230__$1;
(statearr_25233_25295[(2)] = inst_25158);

(statearr_25233_25295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (27))){
var state_25230__$1 = state_25230;
var statearr_25234_25296 = state_25230__$1;
(statearr_25234_25296[(2)] = null);

(statearr_25234_25296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (1))){
var inst_25134 = (state_25230[(8)]);
var inst_25134__$1 = calc_state.call(null);
var inst_25136 = (inst_25134__$1 == null);
var inst_25137 = cljs.core.not.call(null,inst_25136);
var state_25230__$1 = (function (){var statearr_25235 = state_25230;
(statearr_25235[(8)] = inst_25134__$1);

return statearr_25235;
})();
if(inst_25137){
var statearr_25236_25297 = state_25230__$1;
(statearr_25236_25297[(1)] = (2));

} else {
var statearr_25237_25298 = state_25230__$1;
(statearr_25237_25298[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (24))){
var inst_25190 = (state_25230[(9)]);
var inst_25181 = (state_25230[(10)]);
var inst_25204 = (state_25230[(11)]);
var inst_25204__$1 = inst_25181.call(null,inst_25190);
var state_25230__$1 = (function (){var statearr_25238 = state_25230;
(statearr_25238[(11)] = inst_25204__$1);

return statearr_25238;
})();
if(cljs.core.truth_(inst_25204__$1)){
var statearr_25239_25299 = state_25230__$1;
(statearr_25239_25299[(1)] = (29));

} else {
var statearr_25240_25300 = state_25230__$1;
(statearr_25240_25300[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (4))){
var inst_25149 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25149)){
var statearr_25241_25301 = state_25230__$1;
(statearr_25241_25301[(1)] = (8));

} else {
var statearr_25242_25302 = state_25230__$1;
(statearr_25242_25302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (15))){
var inst_25175 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25175)){
var statearr_25243_25303 = state_25230__$1;
(statearr_25243_25303[(1)] = (19));

} else {
var statearr_25244_25304 = state_25230__$1;
(statearr_25244_25304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (21))){
var inst_25180 = (state_25230[(12)]);
var inst_25180__$1 = (state_25230[(2)]);
var inst_25181 = cljs.core.get.call(null,inst_25180__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25182 = cljs.core.get.call(null,inst_25180__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25183 = cljs.core.get.call(null,inst_25180__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25230__$1 = (function (){var statearr_25245 = state_25230;
(statearr_25245[(10)] = inst_25181);

(statearr_25245[(13)] = inst_25182);

(statearr_25245[(12)] = inst_25180__$1);

return statearr_25245;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25230__$1,(22),inst_25183);
} else {
if((state_val_25231 === (31))){
var inst_25212 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25212)){
var statearr_25246_25305 = state_25230__$1;
(statearr_25246_25305[(1)] = (32));

} else {
var statearr_25247_25306 = state_25230__$1;
(statearr_25247_25306[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (32))){
var inst_25189 = (state_25230[(14)]);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25230__$1,(35),out,inst_25189);
} else {
if((state_val_25231 === (33))){
var inst_25180 = (state_25230[(12)]);
var inst_25158 = inst_25180;
var state_25230__$1 = (function (){var statearr_25248 = state_25230;
(statearr_25248[(7)] = inst_25158);

return statearr_25248;
})();
var statearr_25249_25307 = state_25230__$1;
(statearr_25249_25307[(2)] = null);

(statearr_25249_25307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (13))){
var inst_25158 = (state_25230[(7)]);
var inst_25165 = inst_25158.cljs$lang$protocol_mask$partition0$;
var inst_25166 = (inst_25165 & (64));
var inst_25167 = inst_25158.cljs$core$ISeq$;
var inst_25168 = (inst_25166) || (inst_25167);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25168)){
var statearr_25250_25308 = state_25230__$1;
(statearr_25250_25308[(1)] = (16));

} else {
var statearr_25251_25309 = state_25230__$1;
(statearr_25251_25309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (22))){
var inst_25190 = (state_25230[(9)]);
var inst_25189 = (state_25230[(14)]);
var inst_25188 = (state_25230[(2)]);
var inst_25189__$1 = cljs.core.nth.call(null,inst_25188,(0),null);
var inst_25190__$1 = cljs.core.nth.call(null,inst_25188,(1),null);
var inst_25191 = (inst_25189__$1 == null);
var inst_25192 = cljs.core._EQ_.call(null,inst_25190__$1,change);
var inst_25193 = (inst_25191) || (inst_25192);
var state_25230__$1 = (function (){var statearr_25252 = state_25230;
(statearr_25252[(9)] = inst_25190__$1);

(statearr_25252[(14)] = inst_25189__$1);

return statearr_25252;
})();
if(cljs.core.truth_(inst_25193)){
var statearr_25253_25310 = state_25230__$1;
(statearr_25253_25310[(1)] = (23));

} else {
var statearr_25254_25311 = state_25230__$1;
(statearr_25254_25311[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (36))){
var inst_25180 = (state_25230[(12)]);
var inst_25158 = inst_25180;
var state_25230__$1 = (function (){var statearr_25255 = state_25230;
(statearr_25255[(7)] = inst_25158);

return statearr_25255;
})();
var statearr_25256_25312 = state_25230__$1;
(statearr_25256_25312[(2)] = null);

(statearr_25256_25312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (29))){
var inst_25204 = (state_25230[(11)]);
var state_25230__$1 = state_25230;
var statearr_25257_25313 = state_25230__$1;
(statearr_25257_25313[(2)] = inst_25204);

(statearr_25257_25313[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (6))){
var state_25230__$1 = state_25230;
var statearr_25258_25314 = state_25230__$1;
(statearr_25258_25314[(2)] = false);

(statearr_25258_25314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (28))){
var inst_25200 = (state_25230[(2)]);
var inst_25201 = calc_state.call(null);
var inst_25158 = inst_25201;
var state_25230__$1 = (function (){var statearr_25259 = state_25230;
(statearr_25259[(7)] = inst_25158);

(statearr_25259[(15)] = inst_25200);

return statearr_25259;
})();
var statearr_25260_25315 = state_25230__$1;
(statearr_25260_25315[(2)] = null);

(statearr_25260_25315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (25))){
var inst_25226 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25261_25316 = state_25230__$1;
(statearr_25261_25316[(2)] = inst_25226);

(statearr_25261_25316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (34))){
var inst_25224 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25262_25317 = state_25230__$1;
(statearr_25262_25317[(2)] = inst_25224);

(statearr_25262_25317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (17))){
var state_25230__$1 = state_25230;
var statearr_25263_25318 = state_25230__$1;
(statearr_25263_25318[(2)] = false);

(statearr_25263_25318[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (3))){
var state_25230__$1 = state_25230;
var statearr_25264_25319 = state_25230__$1;
(statearr_25264_25319[(2)] = false);

(statearr_25264_25319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (12))){
var inst_25228 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25230__$1,inst_25228);
} else {
if((state_val_25231 === (2))){
var inst_25134 = (state_25230[(8)]);
var inst_25139 = inst_25134.cljs$lang$protocol_mask$partition0$;
var inst_25140 = (inst_25139 & (64));
var inst_25141 = inst_25134.cljs$core$ISeq$;
var inst_25142 = (inst_25140) || (inst_25141);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25142)){
var statearr_25265_25320 = state_25230__$1;
(statearr_25265_25320[(1)] = (5));

} else {
var statearr_25266_25321 = state_25230__$1;
(statearr_25266_25321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (23))){
var inst_25189 = (state_25230[(14)]);
var inst_25195 = (inst_25189 == null);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25195)){
var statearr_25267_25322 = state_25230__$1;
(statearr_25267_25322[(1)] = (26));

} else {
var statearr_25268_25323 = state_25230__$1;
(statearr_25268_25323[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (35))){
var inst_25215 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25215)){
var statearr_25269_25324 = state_25230__$1;
(statearr_25269_25324[(1)] = (36));

} else {
var statearr_25270_25325 = state_25230__$1;
(statearr_25270_25325[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (19))){
var inst_25158 = (state_25230[(7)]);
var inst_25177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25158);
var state_25230__$1 = state_25230;
var statearr_25271_25326 = state_25230__$1;
(statearr_25271_25326[(2)] = inst_25177);

(statearr_25271_25326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (11))){
var inst_25158 = (state_25230[(7)]);
var inst_25162 = (inst_25158 == null);
var inst_25163 = cljs.core.not.call(null,inst_25162);
var state_25230__$1 = state_25230;
if(inst_25163){
var statearr_25272_25327 = state_25230__$1;
(statearr_25272_25327[(1)] = (13));

} else {
var statearr_25273_25328 = state_25230__$1;
(statearr_25273_25328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (9))){
var inst_25134 = (state_25230[(8)]);
var state_25230__$1 = state_25230;
var statearr_25274_25329 = state_25230__$1;
(statearr_25274_25329[(2)] = inst_25134);

(statearr_25274_25329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (5))){
var state_25230__$1 = state_25230;
var statearr_25275_25330 = state_25230__$1;
(statearr_25275_25330[(2)] = true);

(statearr_25275_25330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (14))){
var state_25230__$1 = state_25230;
var statearr_25276_25331 = state_25230__$1;
(statearr_25276_25331[(2)] = false);

(statearr_25276_25331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (26))){
var inst_25190 = (state_25230[(9)]);
var inst_25197 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25190);
var state_25230__$1 = state_25230;
var statearr_25277_25332 = state_25230__$1;
(statearr_25277_25332[(2)] = inst_25197);

(statearr_25277_25332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (16))){
var state_25230__$1 = state_25230;
var statearr_25278_25333 = state_25230__$1;
(statearr_25278_25333[(2)] = true);

(statearr_25278_25333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (38))){
var inst_25220 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25279_25334 = state_25230__$1;
(statearr_25279_25334[(2)] = inst_25220);

(statearr_25279_25334[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (30))){
var inst_25190 = (state_25230[(9)]);
var inst_25181 = (state_25230[(10)]);
var inst_25182 = (state_25230[(13)]);
var inst_25207 = cljs.core.empty_QMARK_.call(null,inst_25181);
var inst_25208 = inst_25182.call(null,inst_25190);
var inst_25209 = cljs.core.not.call(null,inst_25208);
var inst_25210 = (inst_25207) && (inst_25209);
var state_25230__$1 = state_25230;
var statearr_25280_25335 = state_25230__$1;
(statearr_25280_25335[(2)] = inst_25210);

(statearr_25280_25335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (10))){
var inst_25134 = (state_25230[(8)]);
var inst_25154 = (state_25230[(2)]);
var inst_25155 = cljs.core.get.call(null,inst_25154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25156 = cljs.core.get.call(null,inst_25154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25157 = cljs.core.get.call(null,inst_25154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25158 = inst_25134;
var state_25230__$1 = (function (){var statearr_25281 = state_25230;
(statearr_25281[(16)] = inst_25155);

(statearr_25281[(17)] = inst_25156);

(statearr_25281[(7)] = inst_25158);

(statearr_25281[(18)] = inst_25157);

return statearr_25281;
})();
var statearr_25282_25336 = state_25230__$1;
(statearr_25282_25336[(2)] = null);

(statearr_25282_25336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (18))){
var inst_25172 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25283_25337 = state_25230__$1;
(statearr_25283_25337[(2)] = inst_25172);

(statearr_25283_25337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (37))){
var state_25230__$1 = state_25230;
var statearr_25284_25338 = state_25230__$1;
(statearr_25284_25338[(2)] = null);

(statearr_25284_25338[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (8))){
var inst_25134 = (state_25230[(8)]);
var inst_25151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25134);
var state_25230__$1 = state_25230;
var statearr_25285_25339 = state_25230__$1;
(statearr_25285_25339[(2)] = inst_25151);

(statearr_25285_25339[(1)] = (10));


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
});})(c__23560__auto___25293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23448__auto__,c__23560__auto___25293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23449__auto__ = null;
var cljs$core$async$mix_$_state_machine__23449__auto____0 = (function (){
var statearr_25289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25289[(0)] = cljs$core$async$mix_$_state_machine__23449__auto__);

(statearr_25289[(1)] = (1));

return statearr_25289;
});
var cljs$core$async$mix_$_state_machine__23449__auto____1 = (function (state_25230){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_25230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e25290){if((e25290 instanceof Object)){
var ex__23452__auto__ = e25290;
var statearr_25291_25340 = state_25230;
(statearr_25291_25340[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25341 = state_25230;
state_25230 = G__25341;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23449__auto__ = function(state_25230){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23449__auto____1.call(this,state_25230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23449__auto____0;
cljs$core$async$mix_$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23449__auto____1;
return cljs$core$async$mix_$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___25293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23562__auto__ = (function (){var statearr_25292 = f__23561__auto__.call(null);
(statearr_25292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___25293);

return statearr_25292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___25293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20827__auto__ = (((p == null))?null:p);
var m__20828__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20828__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20827__auto__ = (((p == null))?null:p);
var m__20828__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,p,v,ch);
} else {
var m__20828__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25342 = [];
var len__21239__auto___25345 = arguments.length;
var i__21240__auto___25346 = (0);
while(true){
if((i__21240__auto___25346 < len__21239__auto___25345)){
args25342.push((arguments[i__21240__auto___25346]));

var G__25347 = (i__21240__auto___25346 + (1));
i__21240__auto___25346 = G__25347;
continue;
} else {
}
break;
}

var G__25344 = args25342.length;
switch (G__25344) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25342.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20827__auto__ = (((p == null))?null:p);
var m__20828__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,p);
} else {
var m__20828__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20827__auto__ = (((p == null))?null:p);
var m__20828__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20827__auto__)]);
if(!((m__20828__auto__ == null))){
return m__20828__auto__.call(null,p,v);
} else {
var m__20828__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20828__auto____$1 == null))){
return m__20828__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25350 = [];
var len__21239__auto___25475 = arguments.length;
var i__21240__auto___25476 = (0);
while(true){
if((i__21240__auto___25476 < len__21239__auto___25475)){
args25350.push((arguments[i__21240__auto___25476]));

var G__25477 = (i__21240__auto___25476 + (1));
i__21240__auto___25476 = G__25477;
continue;
} else {
}
break;
}

var G__25352 = args25350.length;
switch (G__25352) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25350.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20164__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20164__auto__)){
return or__20164__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20164__auto__,mults){
return (function (p1__25349_SHARP_){
if(cljs.core.truth_(p1__25349_SHARP_.call(null,topic))){
return p1__25349_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25349_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20164__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25353 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25354){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25354 = meta25354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25355,meta25354__$1){
var self__ = this;
var _25355__$1 = this;
return (new cljs.core.async.t_cljs$core$async25353(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25354__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25355){
var self__ = this;
var _25355__$1 = this;
return self__.meta25354;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25353.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25354","meta25354",-285308145,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25353";

cljs.core.async.t_cljs$core$async25353.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async25353");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25353 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25353(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25354){
return (new cljs.core.async.t_cljs$core$async25353(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25354));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25353(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23560__auto___25479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___25479,mults,ensure_mult,p){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___25479,mults,ensure_mult,p){
return (function (state_25427){
var state_val_25428 = (state_25427[(1)]);
if((state_val_25428 === (7))){
var inst_25423 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25429_25480 = state_25427__$1;
(statearr_25429_25480[(2)] = inst_25423);

(statearr_25429_25480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (20))){
var state_25427__$1 = state_25427;
var statearr_25430_25481 = state_25427__$1;
(statearr_25430_25481[(2)] = null);

(statearr_25430_25481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (1))){
var state_25427__$1 = state_25427;
var statearr_25431_25482 = state_25427__$1;
(statearr_25431_25482[(2)] = null);

(statearr_25431_25482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (24))){
var inst_25406 = (state_25427[(7)]);
var inst_25415 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25406);
var state_25427__$1 = state_25427;
var statearr_25432_25483 = state_25427__$1;
(statearr_25432_25483[(2)] = inst_25415);

(statearr_25432_25483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (4))){
var inst_25358 = (state_25427[(8)]);
var inst_25358__$1 = (state_25427[(2)]);
var inst_25359 = (inst_25358__$1 == null);
var state_25427__$1 = (function (){var statearr_25433 = state_25427;
(statearr_25433[(8)] = inst_25358__$1);

return statearr_25433;
})();
if(cljs.core.truth_(inst_25359)){
var statearr_25434_25484 = state_25427__$1;
(statearr_25434_25484[(1)] = (5));

} else {
var statearr_25435_25485 = state_25427__$1;
(statearr_25435_25485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (15))){
var inst_25400 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25436_25486 = state_25427__$1;
(statearr_25436_25486[(2)] = inst_25400);

(statearr_25436_25486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (21))){
var inst_25420 = (state_25427[(2)]);
var state_25427__$1 = (function (){var statearr_25437 = state_25427;
(statearr_25437[(9)] = inst_25420);

return statearr_25437;
})();
var statearr_25438_25487 = state_25427__$1;
(statearr_25438_25487[(2)] = null);

(statearr_25438_25487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (13))){
var inst_25382 = (state_25427[(10)]);
var inst_25384 = cljs.core.chunked_seq_QMARK_.call(null,inst_25382);
var state_25427__$1 = state_25427;
if(inst_25384){
var statearr_25439_25488 = state_25427__$1;
(statearr_25439_25488[(1)] = (16));

} else {
var statearr_25440_25489 = state_25427__$1;
(statearr_25440_25489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (22))){
var inst_25412 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
if(cljs.core.truth_(inst_25412)){
var statearr_25441_25490 = state_25427__$1;
(statearr_25441_25490[(1)] = (23));

} else {
var statearr_25442_25491 = state_25427__$1;
(statearr_25442_25491[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (6))){
var inst_25406 = (state_25427[(7)]);
var inst_25358 = (state_25427[(8)]);
var inst_25408 = (state_25427[(11)]);
var inst_25406__$1 = topic_fn.call(null,inst_25358);
var inst_25407 = cljs.core.deref.call(null,mults);
var inst_25408__$1 = cljs.core.get.call(null,inst_25407,inst_25406__$1);
var state_25427__$1 = (function (){var statearr_25443 = state_25427;
(statearr_25443[(7)] = inst_25406__$1);

(statearr_25443[(11)] = inst_25408__$1);

return statearr_25443;
})();
if(cljs.core.truth_(inst_25408__$1)){
var statearr_25444_25492 = state_25427__$1;
(statearr_25444_25492[(1)] = (19));

} else {
var statearr_25445_25493 = state_25427__$1;
(statearr_25445_25493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (25))){
var inst_25417 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25446_25494 = state_25427__$1;
(statearr_25446_25494[(2)] = inst_25417);

(statearr_25446_25494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (17))){
var inst_25382 = (state_25427[(10)]);
var inst_25391 = cljs.core.first.call(null,inst_25382);
var inst_25392 = cljs.core.async.muxch_STAR_.call(null,inst_25391);
var inst_25393 = cljs.core.async.close_BANG_.call(null,inst_25392);
var inst_25394 = cljs.core.next.call(null,inst_25382);
var inst_25368 = inst_25394;
var inst_25369 = null;
var inst_25370 = (0);
var inst_25371 = (0);
var state_25427__$1 = (function (){var statearr_25447 = state_25427;
(statearr_25447[(12)] = inst_25371);

(statearr_25447[(13)] = inst_25370);

(statearr_25447[(14)] = inst_25369);

(statearr_25447[(15)] = inst_25368);

(statearr_25447[(16)] = inst_25393);

return statearr_25447;
})();
var statearr_25448_25495 = state_25427__$1;
(statearr_25448_25495[(2)] = null);

(statearr_25448_25495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (3))){
var inst_25425 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25427__$1,inst_25425);
} else {
if((state_val_25428 === (12))){
var inst_25402 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25449_25496 = state_25427__$1;
(statearr_25449_25496[(2)] = inst_25402);

(statearr_25449_25496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (2))){
var state_25427__$1 = state_25427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25427__$1,(4),ch);
} else {
if((state_val_25428 === (23))){
var state_25427__$1 = state_25427;
var statearr_25450_25497 = state_25427__$1;
(statearr_25450_25497[(2)] = null);

(statearr_25450_25497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (19))){
var inst_25358 = (state_25427[(8)]);
var inst_25408 = (state_25427[(11)]);
var inst_25410 = cljs.core.async.muxch_STAR_.call(null,inst_25408);
var state_25427__$1 = state_25427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25427__$1,(22),inst_25410,inst_25358);
} else {
if((state_val_25428 === (11))){
var inst_25382 = (state_25427[(10)]);
var inst_25368 = (state_25427[(15)]);
var inst_25382__$1 = cljs.core.seq.call(null,inst_25368);
var state_25427__$1 = (function (){var statearr_25451 = state_25427;
(statearr_25451[(10)] = inst_25382__$1);

return statearr_25451;
})();
if(inst_25382__$1){
var statearr_25452_25498 = state_25427__$1;
(statearr_25452_25498[(1)] = (13));

} else {
var statearr_25453_25499 = state_25427__$1;
(statearr_25453_25499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (9))){
var inst_25404 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25454_25500 = state_25427__$1;
(statearr_25454_25500[(2)] = inst_25404);

(statearr_25454_25500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (5))){
var inst_25365 = cljs.core.deref.call(null,mults);
var inst_25366 = cljs.core.vals.call(null,inst_25365);
var inst_25367 = cljs.core.seq.call(null,inst_25366);
var inst_25368 = inst_25367;
var inst_25369 = null;
var inst_25370 = (0);
var inst_25371 = (0);
var state_25427__$1 = (function (){var statearr_25455 = state_25427;
(statearr_25455[(12)] = inst_25371);

(statearr_25455[(13)] = inst_25370);

(statearr_25455[(14)] = inst_25369);

(statearr_25455[(15)] = inst_25368);

return statearr_25455;
})();
var statearr_25456_25501 = state_25427__$1;
(statearr_25456_25501[(2)] = null);

(statearr_25456_25501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (14))){
var state_25427__$1 = state_25427;
var statearr_25460_25502 = state_25427__$1;
(statearr_25460_25502[(2)] = null);

(statearr_25460_25502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (16))){
var inst_25382 = (state_25427[(10)]);
var inst_25386 = cljs.core.chunk_first.call(null,inst_25382);
var inst_25387 = cljs.core.chunk_rest.call(null,inst_25382);
var inst_25388 = cljs.core.count.call(null,inst_25386);
var inst_25368 = inst_25387;
var inst_25369 = inst_25386;
var inst_25370 = inst_25388;
var inst_25371 = (0);
var state_25427__$1 = (function (){var statearr_25461 = state_25427;
(statearr_25461[(12)] = inst_25371);

(statearr_25461[(13)] = inst_25370);

(statearr_25461[(14)] = inst_25369);

(statearr_25461[(15)] = inst_25368);

return statearr_25461;
})();
var statearr_25462_25503 = state_25427__$1;
(statearr_25462_25503[(2)] = null);

(statearr_25462_25503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (10))){
var inst_25371 = (state_25427[(12)]);
var inst_25370 = (state_25427[(13)]);
var inst_25369 = (state_25427[(14)]);
var inst_25368 = (state_25427[(15)]);
var inst_25376 = cljs.core._nth.call(null,inst_25369,inst_25371);
var inst_25377 = cljs.core.async.muxch_STAR_.call(null,inst_25376);
var inst_25378 = cljs.core.async.close_BANG_.call(null,inst_25377);
var inst_25379 = (inst_25371 + (1));
var tmp25457 = inst_25370;
var tmp25458 = inst_25369;
var tmp25459 = inst_25368;
var inst_25368__$1 = tmp25459;
var inst_25369__$1 = tmp25458;
var inst_25370__$1 = tmp25457;
var inst_25371__$1 = inst_25379;
var state_25427__$1 = (function (){var statearr_25463 = state_25427;
(statearr_25463[(17)] = inst_25378);

(statearr_25463[(12)] = inst_25371__$1);

(statearr_25463[(13)] = inst_25370__$1);

(statearr_25463[(14)] = inst_25369__$1);

(statearr_25463[(15)] = inst_25368__$1);

return statearr_25463;
})();
var statearr_25464_25504 = state_25427__$1;
(statearr_25464_25504[(2)] = null);

(statearr_25464_25504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (18))){
var inst_25397 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25465_25505 = state_25427__$1;
(statearr_25465_25505[(2)] = inst_25397);

(statearr_25465_25505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (8))){
var inst_25371 = (state_25427[(12)]);
var inst_25370 = (state_25427[(13)]);
var inst_25373 = (inst_25371 < inst_25370);
var inst_25374 = inst_25373;
var state_25427__$1 = state_25427;
if(cljs.core.truth_(inst_25374)){
var statearr_25466_25506 = state_25427__$1;
(statearr_25466_25506[(1)] = (10));

} else {
var statearr_25467_25507 = state_25427__$1;
(statearr_25467_25507[(1)] = (11));

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
});})(c__23560__auto___25479,mults,ensure_mult,p))
;
return ((function (switch__23448__auto__,c__23560__auto___25479,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_25471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25471[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_25471[(1)] = (1));

return statearr_25471;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_25427){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_25427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e25472){if((e25472 instanceof Object)){
var ex__23452__auto__ = e25472;
var statearr_25473_25508 = state_25427;
(statearr_25473_25508[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25509 = state_25427;
state_25427 = G__25509;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_25427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_25427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___25479,mults,ensure_mult,p))
})();
var state__23562__auto__ = (function (){var statearr_25474 = f__23561__auto__.call(null);
(statearr_25474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___25479);

return statearr_25474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___25479,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25510 = [];
var len__21239__auto___25513 = arguments.length;
var i__21240__auto___25514 = (0);
while(true){
if((i__21240__auto___25514 < len__21239__auto___25513)){
args25510.push((arguments[i__21240__auto___25514]));

var G__25515 = (i__21240__auto___25514 + (1));
i__21240__auto___25514 = G__25515;
continue;
} else {
}
break;
}

var G__25512 = args25510.length;
switch (G__25512) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25510.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25517 = [];
var len__21239__auto___25520 = arguments.length;
var i__21240__auto___25521 = (0);
while(true){
if((i__21240__auto___25521 < len__21239__auto___25520)){
args25517.push((arguments[i__21240__auto___25521]));

var G__25522 = (i__21240__auto___25521 + (1));
i__21240__auto___25521 = G__25522;
continue;
} else {
}
break;
}

var G__25519 = args25517.length;
switch (G__25519) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25517.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25524 = [];
var len__21239__auto___25595 = arguments.length;
var i__21240__auto___25596 = (0);
while(true){
if((i__21240__auto___25596 < len__21239__auto___25595)){
args25524.push((arguments[i__21240__auto___25596]));

var G__25597 = (i__21240__auto___25596 + (1));
i__21240__auto___25596 = G__25597;
continue;
} else {
}
break;
}

var G__25526 = args25524.length;
switch (G__25526) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25524.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23560__auto___25599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___25599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___25599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25565){
var state_val_25566 = (state_25565[(1)]);
if((state_val_25566 === (7))){
var state_25565__$1 = state_25565;
var statearr_25567_25600 = state_25565__$1;
(statearr_25567_25600[(2)] = null);

(statearr_25567_25600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (1))){
var state_25565__$1 = state_25565;
var statearr_25568_25601 = state_25565__$1;
(statearr_25568_25601[(2)] = null);

(statearr_25568_25601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (4))){
var inst_25529 = (state_25565[(7)]);
var inst_25531 = (inst_25529 < cnt);
var state_25565__$1 = state_25565;
if(cljs.core.truth_(inst_25531)){
var statearr_25569_25602 = state_25565__$1;
(statearr_25569_25602[(1)] = (6));

} else {
var statearr_25570_25603 = state_25565__$1;
(statearr_25570_25603[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (15))){
var inst_25561 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
var statearr_25571_25604 = state_25565__$1;
(statearr_25571_25604[(2)] = inst_25561);

(statearr_25571_25604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (13))){
var inst_25554 = cljs.core.async.close_BANG_.call(null,out);
var state_25565__$1 = state_25565;
var statearr_25572_25605 = state_25565__$1;
(statearr_25572_25605[(2)] = inst_25554);

(statearr_25572_25605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (6))){
var state_25565__$1 = state_25565;
var statearr_25573_25606 = state_25565__$1;
(statearr_25573_25606[(2)] = null);

(statearr_25573_25606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (3))){
var inst_25563 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25565__$1,inst_25563);
} else {
if((state_val_25566 === (12))){
var inst_25551 = (state_25565[(8)]);
var inst_25551__$1 = (state_25565[(2)]);
var inst_25552 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25551__$1);
var state_25565__$1 = (function (){var statearr_25574 = state_25565;
(statearr_25574[(8)] = inst_25551__$1);

return statearr_25574;
})();
if(cljs.core.truth_(inst_25552)){
var statearr_25575_25607 = state_25565__$1;
(statearr_25575_25607[(1)] = (13));

} else {
var statearr_25576_25608 = state_25565__$1;
(statearr_25576_25608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (2))){
var inst_25528 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25529 = (0);
var state_25565__$1 = (function (){var statearr_25577 = state_25565;
(statearr_25577[(9)] = inst_25528);

(statearr_25577[(7)] = inst_25529);

return statearr_25577;
})();
var statearr_25578_25609 = state_25565__$1;
(statearr_25578_25609[(2)] = null);

(statearr_25578_25609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (11))){
var inst_25529 = (state_25565[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25565,(10),Object,null,(9));
var inst_25538 = chs__$1.call(null,inst_25529);
var inst_25539 = done.call(null,inst_25529);
var inst_25540 = cljs.core.async.take_BANG_.call(null,inst_25538,inst_25539);
var state_25565__$1 = state_25565;
var statearr_25579_25610 = state_25565__$1;
(statearr_25579_25610[(2)] = inst_25540);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (9))){
var inst_25529 = (state_25565[(7)]);
var inst_25542 = (state_25565[(2)]);
var inst_25543 = (inst_25529 + (1));
var inst_25529__$1 = inst_25543;
var state_25565__$1 = (function (){var statearr_25580 = state_25565;
(statearr_25580[(10)] = inst_25542);

(statearr_25580[(7)] = inst_25529__$1);

return statearr_25580;
})();
var statearr_25581_25611 = state_25565__$1;
(statearr_25581_25611[(2)] = null);

(statearr_25581_25611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (5))){
var inst_25549 = (state_25565[(2)]);
var state_25565__$1 = (function (){var statearr_25582 = state_25565;
(statearr_25582[(11)] = inst_25549);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25565__$1,(12),dchan);
} else {
if((state_val_25566 === (14))){
var inst_25551 = (state_25565[(8)]);
var inst_25556 = cljs.core.apply.call(null,f,inst_25551);
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25565__$1,(16),out,inst_25556);
} else {
if((state_val_25566 === (16))){
var inst_25558 = (state_25565[(2)]);
var state_25565__$1 = (function (){var statearr_25583 = state_25565;
(statearr_25583[(12)] = inst_25558);

return statearr_25583;
})();
var statearr_25584_25612 = state_25565__$1;
(statearr_25584_25612[(2)] = null);

(statearr_25584_25612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (10))){
var inst_25533 = (state_25565[(2)]);
var inst_25534 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25565__$1 = (function (){var statearr_25585 = state_25565;
(statearr_25585[(13)] = inst_25533);

return statearr_25585;
})();
var statearr_25586_25613 = state_25565__$1;
(statearr_25586_25613[(2)] = inst_25534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (8))){
var inst_25547 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
var statearr_25587_25614 = state_25565__$1;
(statearr_25587_25614[(2)] = inst_25547);

(statearr_25587_25614[(1)] = (5));


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
});})(c__23560__auto___25599,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23448__auto__,c__23560__auto___25599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_25591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25591[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_25591[(1)] = (1));

return statearr_25591;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_25565){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_25565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e25592){if((e25592 instanceof Object)){
var ex__23452__auto__ = e25592;
var statearr_25593_25615 = state_25565;
(statearr_25593_25615[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25616 = state_25565;
state_25565 = G__25616;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_25565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_25565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___25599,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23562__auto__ = (function (){var statearr_25594 = f__23561__auto__.call(null);
(statearr_25594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___25599);

return statearr_25594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___25599,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25618 = [];
var len__21239__auto___25676 = arguments.length;
var i__21240__auto___25677 = (0);
while(true){
if((i__21240__auto___25677 < len__21239__auto___25676)){
args25618.push((arguments[i__21240__auto___25677]));

var G__25678 = (i__21240__auto___25677 + (1));
i__21240__auto___25677 = G__25678;
continue;
} else {
}
break;
}

var G__25620 = args25618.length;
switch (G__25620) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25618.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23560__auto___25680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___25680,out){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___25680,out){
return (function (state_25652){
var state_val_25653 = (state_25652[(1)]);
if((state_val_25653 === (7))){
var inst_25631 = (state_25652[(7)]);
var inst_25632 = (state_25652[(8)]);
var inst_25631__$1 = (state_25652[(2)]);
var inst_25632__$1 = cljs.core.nth.call(null,inst_25631__$1,(0),null);
var inst_25633 = cljs.core.nth.call(null,inst_25631__$1,(1),null);
var inst_25634 = (inst_25632__$1 == null);
var state_25652__$1 = (function (){var statearr_25654 = state_25652;
(statearr_25654[(7)] = inst_25631__$1);

(statearr_25654[(9)] = inst_25633);

(statearr_25654[(8)] = inst_25632__$1);

return statearr_25654;
})();
if(cljs.core.truth_(inst_25634)){
var statearr_25655_25681 = state_25652__$1;
(statearr_25655_25681[(1)] = (8));

} else {
var statearr_25656_25682 = state_25652__$1;
(statearr_25656_25682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (1))){
var inst_25621 = cljs.core.vec.call(null,chs);
var inst_25622 = inst_25621;
var state_25652__$1 = (function (){var statearr_25657 = state_25652;
(statearr_25657[(10)] = inst_25622);

return statearr_25657;
})();
var statearr_25658_25683 = state_25652__$1;
(statearr_25658_25683[(2)] = null);

(statearr_25658_25683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (4))){
var inst_25622 = (state_25652[(10)]);
var state_25652__$1 = state_25652;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25652__$1,(7),inst_25622);
} else {
if((state_val_25653 === (6))){
var inst_25648 = (state_25652[(2)]);
var state_25652__$1 = state_25652;
var statearr_25659_25684 = state_25652__$1;
(statearr_25659_25684[(2)] = inst_25648);

(statearr_25659_25684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (3))){
var inst_25650 = (state_25652[(2)]);
var state_25652__$1 = state_25652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25652__$1,inst_25650);
} else {
if((state_val_25653 === (2))){
var inst_25622 = (state_25652[(10)]);
var inst_25624 = cljs.core.count.call(null,inst_25622);
var inst_25625 = (inst_25624 > (0));
var state_25652__$1 = state_25652;
if(cljs.core.truth_(inst_25625)){
var statearr_25661_25685 = state_25652__$1;
(statearr_25661_25685[(1)] = (4));

} else {
var statearr_25662_25686 = state_25652__$1;
(statearr_25662_25686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (11))){
var inst_25622 = (state_25652[(10)]);
var inst_25641 = (state_25652[(2)]);
var tmp25660 = inst_25622;
var inst_25622__$1 = tmp25660;
var state_25652__$1 = (function (){var statearr_25663 = state_25652;
(statearr_25663[(10)] = inst_25622__$1);

(statearr_25663[(11)] = inst_25641);

return statearr_25663;
})();
var statearr_25664_25687 = state_25652__$1;
(statearr_25664_25687[(2)] = null);

(statearr_25664_25687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (9))){
var inst_25632 = (state_25652[(8)]);
var state_25652__$1 = state_25652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25652__$1,(11),out,inst_25632);
} else {
if((state_val_25653 === (5))){
var inst_25646 = cljs.core.async.close_BANG_.call(null,out);
var state_25652__$1 = state_25652;
var statearr_25665_25688 = state_25652__$1;
(statearr_25665_25688[(2)] = inst_25646);

(statearr_25665_25688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (10))){
var inst_25644 = (state_25652[(2)]);
var state_25652__$1 = state_25652;
var statearr_25666_25689 = state_25652__$1;
(statearr_25666_25689[(2)] = inst_25644);

(statearr_25666_25689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (8))){
var inst_25622 = (state_25652[(10)]);
var inst_25631 = (state_25652[(7)]);
var inst_25633 = (state_25652[(9)]);
var inst_25632 = (state_25652[(8)]);
var inst_25636 = (function (){var cs = inst_25622;
var vec__25627 = inst_25631;
var v = inst_25632;
var c = inst_25633;
return ((function (cs,vec__25627,v,c,inst_25622,inst_25631,inst_25633,inst_25632,state_val_25653,c__23560__auto___25680,out){
return (function (p1__25617_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25617_SHARP_);
});
;})(cs,vec__25627,v,c,inst_25622,inst_25631,inst_25633,inst_25632,state_val_25653,c__23560__auto___25680,out))
})();
var inst_25637 = cljs.core.filterv.call(null,inst_25636,inst_25622);
var inst_25622__$1 = inst_25637;
var state_25652__$1 = (function (){var statearr_25667 = state_25652;
(statearr_25667[(10)] = inst_25622__$1);

return statearr_25667;
})();
var statearr_25668_25690 = state_25652__$1;
(statearr_25668_25690[(2)] = null);

(statearr_25668_25690[(1)] = (2));


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
});})(c__23560__auto___25680,out))
;
return ((function (switch__23448__auto__,c__23560__auto___25680,out){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_25672 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25672[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_25672[(1)] = (1));

return statearr_25672;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_25652){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_25652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e25673){if((e25673 instanceof Object)){
var ex__23452__auto__ = e25673;
var statearr_25674_25691 = state_25652;
(statearr_25674_25691[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25692 = state_25652;
state_25652 = G__25692;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_25652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_25652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___25680,out))
})();
var state__23562__auto__ = (function (){var statearr_25675 = f__23561__auto__.call(null);
(statearr_25675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___25680);

return statearr_25675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___25680,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25693 = [];
var len__21239__auto___25742 = arguments.length;
var i__21240__auto___25743 = (0);
while(true){
if((i__21240__auto___25743 < len__21239__auto___25742)){
args25693.push((arguments[i__21240__auto___25743]));

var G__25744 = (i__21240__auto___25743 + (1));
i__21240__auto___25743 = G__25744;
continue;
} else {
}
break;
}

var G__25695 = args25693.length;
switch (G__25695) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25693.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23560__auto___25746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___25746,out){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___25746,out){
return (function (state_25719){
var state_val_25720 = (state_25719[(1)]);
if((state_val_25720 === (7))){
var inst_25701 = (state_25719[(7)]);
var inst_25701__$1 = (state_25719[(2)]);
var inst_25702 = (inst_25701__$1 == null);
var inst_25703 = cljs.core.not.call(null,inst_25702);
var state_25719__$1 = (function (){var statearr_25721 = state_25719;
(statearr_25721[(7)] = inst_25701__$1);

return statearr_25721;
})();
if(inst_25703){
var statearr_25722_25747 = state_25719__$1;
(statearr_25722_25747[(1)] = (8));

} else {
var statearr_25723_25748 = state_25719__$1;
(statearr_25723_25748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (1))){
var inst_25696 = (0);
var state_25719__$1 = (function (){var statearr_25724 = state_25719;
(statearr_25724[(8)] = inst_25696);

return statearr_25724;
})();
var statearr_25725_25749 = state_25719__$1;
(statearr_25725_25749[(2)] = null);

(statearr_25725_25749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (4))){
var state_25719__$1 = state_25719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25719__$1,(7),ch);
} else {
if((state_val_25720 === (6))){
var inst_25714 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
var statearr_25726_25750 = state_25719__$1;
(statearr_25726_25750[(2)] = inst_25714);

(statearr_25726_25750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (3))){
var inst_25716 = (state_25719[(2)]);
var inst_25717 = cljs.core.async.close_BANG_.call(null,out);
var state_25719__$1 = (function (){var statearr_25727 = state_25719;
(statearr_25727[(9)] = inst_25716);

return statearr_25727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25719__$1,inst_25717);
} else {
if((state_val_25720 === (2))){
var inst_25696 = (state_25719[(8)]);
var inst_25698 = (inst_25696 < n);
var state_25719__$1 = state_25719;
if(cljs.core.truth_(inst_25698)){
var statearr_25728_25751 = state_25719__$1;
(statearr_25728_25751[(1)] = (4));

} else {
var statearr_25729_25752 = state_25719__$1;
(statearr_25729_25752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (11))){
var inst_25696 = (state_25719[(8)]);
var inst_25706 = (state_25719[(2)]);
var inst_25707 = (inst_25696 + (1));
var inst_25696__$1 = inst_25707;
var state_25719__$1 = (function (){var statearr_25730 = state_25719;
(statearr_25730[(10)] = inst_25706);

(statearr_25730[(8)] = inst_25696__$1);

return statearr_25730;
})();
var statearr_25731_25753 = state_25719__$1;
(statearr_25731_25753[(2)] = null);

(statearr_25731_25753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (9))){
var state_25719__$1 = state_25719;
var statearr_25732_25754 = state_25719__$1;
(statearr_25732_25754[(2)] = null);

(statearr_25732_25754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (5))){
var state_25719__$1 = state_25719;
var statearr_25733_25755 = state_25719__$1;
(statearr_25733_25755[(2)] = null);

(statearr_25733_25755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (10))){
var inst_25711 = (state_25719[(2)]);
var state_25719__$1 = state_25719;
var statearr_25734_25756 = state_25719__$1;
(statearr_25734_25756[(2)] = inst_25711);

(statearr_25734_25756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25720 === (8))){
var inst_25701 = (state_25719[(7)]);
var state_25719__$1 = state_25719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25719__$1,(11),out,inst_25701);
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
});})(c__23560__auto___25746,out))
;
return ((function (switch__23448__auto__,c__23560__auto___25746,out){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_25738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25738[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_25738[(1)] = (1));

return statearr_25738;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_25719){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_25719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e25739){if((e25739 instanceof Object)){
var ex__23452__auto__ = e25739;
var statearr_25740_25757 = state_25719;
(statearr_25740_25757[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25758 = state_25719;
state_25719 = G__25758;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_25719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_25719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___25746,out))
})();
var state__23562__auto__ = (function (){var statearr_25741 = f__23561__auto__.call(null);
(statearr_25741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___25746);

return statearr_25741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___25746,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25766 = (function (map_LT_,f,ch,meta25767){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25767 = meta25767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25768,meta25767__$1){
var self__ = this;
var _25768__$1 = this;
return (new cljs.core.async.t_cljs$core$async25766(self__.map_LT_,self__.f,self__.ch,meta25767__$1));
});

cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25768){
var self__ = this;
var _25768__$1 = this;
return self__.meta25767;
});

cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25769 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25769 = (function (map_LT_,f,ch,meta25767,_,fn1,meta25770){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25767 = meta25767;
this._ = _;
this.fn1 = fn1;
this.meta25770 = meta25770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25771,meta25770__$1){
var self__ = this;
var _25771__$1 = this;
return (new cljs.core.async.t_cljs$core$async25769(self__.map_LT_,self__.f,self__.ch,self__.meta25767,self__._,self__.fn1,meta25770__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25771){
var self__ = this;
var _25771__$1 = this;
return self__.meta25770;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25759_SHARP_){
return f1.call(null,(((p1__25759_SHARP_ == null))?null:self__.f.call(null,p1__25759_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25769.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25767","meta25767",-1640108650,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25766","cljs.core.async/t_cljs$core$async25766",-1168738074,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25770","meta25770",892903172,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25769.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25769";

cljs.core.async.t_cljs$core$async25769.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async25769");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25769 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25769(map_LT___$1,f__$1,ch__$1,meta25767__$1,___$2,fn1__$1,meta25770){
return (new cljs.core.async.t_cljs$core$async25769(map_LT___$1,f__$1,ch__$1,meta25767__$1,___$2,fn1__$1,meta25770));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25769(self__.map_LT_,self__.f,self__.ch,self__.meta25767,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20152__auto__ = ret;
if(cljs.core.truth_(and__20152__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20152__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25766.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25767","meta25767",-1640108650,null)], null);
});

cljs.core.async.t_cljs$core$async25766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25766";

cljs.core.async.t_cljs$core$async25766.cljs$lang$ctorPrWriter = (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async25766");
});

cljs.core.async.__GT_t_cljs$core$async25766 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25766(map_LT___$1,f__$1,ch__$1,meta25767){
return (new cljs.core.async.t_cljs$core$async25766(map_LT___$1,f__$1,ch__$1,meta25767));
});

}

return (new cljs.core.async.t_cljs$core$async25766(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25775 = (function (map_GT_,f,ch,meta25776){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25776 = meta25776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25777,meta25776__$1){
var self__ = this;
var _25777__$1 = this;
return (new cljs.core.async.t_cljs$core$async25775(self__.map_GT_,self__.f,self__.ch,meta25776__$1));
});

cljs.core.async.t_cljs$core$async25775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25777){
var self__ = this;
var _25777__$1 = this;
return self__.meta25776;
});

cljs.core.async.t_cljs$core$async25775.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25775.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25775.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25775.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25775.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25775.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25776","meta25776",-1262819143,null)], null);
});

cljs.core.async.t_cljs$core$async25775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25775";

cljs.core.async.t_cljs$core$async25775.cljs$lang$ctorPrWriter = (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async25775");
});

cljs.core.async.__GT_t_cljs$core$async25775 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25775(map_GT___$1,f__$1,ch__$1,meta25776){
return (new cljs.core.async.t_cljs$core$async25775(map_GT___$1,f__$1,ch__$1,meta25776));
});

}

return (new cljs.core.async.t_cljs$core$async25775(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25781 = (function (filter_GT_,p,ch,meta25782){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25782 = meta25782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25783,meta25782__$1){
var self__ = this;
var _25783__$1 = this;
return (new cljs.core.async.t_cljs$core$async25781(self__.filter_GT_,self__.p,self__.ch,meta25782__$1));
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25783){
var self__ = this;
var _25783__$1 = this;
return self__.meta25782;
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25782","meta25782",285302304,null)], null);
});

cljs.core.async.t_cljs$core$async25781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25781";

cljs.core.async.t_cljs$core$async25781.cljs$lang$ctorPrWriter = (function (this__20770__auto__,writer__20771__auto__,opt__20772__auto__){
return cljs.core._write.call(null,writer__20771__auto__,"cljs.core.async/t_cljs$core$async25781");
});

cljs.core.async.__GT_t_cljs$core$async25781 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25781(filter_GT___$1,p__$1,ch__$1,meta25782){
return (new cljs.core.async.t_cljs$core$async25781(filter_GT___$1,p__$1,ch__$1,meta25782));
});

}

return (new cljs.core.async.t_cljs$core$async25781(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25784 = [];
var len__21239__auto___25828 = arguments.length;
var i__21240__auto___25829 = (0);
while(true){
if((i__21240__auto___25829 < len__21239__auto___25828)){
args25784.push((arguments[i__21240__auto___25829]));

var G__25830 = (i__21240__auto___25829 + (1));
i__21240__auto___25829 = G__25830;
continue;
} else {
}
break;
}

var G__25786 = args25784.length;
switch (G__25786) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25784.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23560__auto___25832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___25832,out){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___25832,out){
return (function (state_25807){
var state_val_25808 = (state_25807[(1)]);
if((state_val_25808 === (7))){
var inst_25803 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25809_25833 = state_25807__$1;
(statearr_25809_25833[(2)] = inst_25803);

(statearr_25809_25833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (1))){
var state_25807__$1 = state_25807;
var statearr_25810_25834 = state_25807__$1;
(statearr_25810_25834[(2)] = null);

(statearr_25810_25834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (4))){
var inst_25789 = (state_25807[(7)]);
var inst_25789__$1 = (state_25807[(2)]);
var inst_25790 = (inst_25789__$1 == null);
var state_25807__$1 = (function (){var statearr_25811 = state_25807;
(statearr_25811[(7)] = inst_25789__$1);

return statearr_25811;
})();
if(cljs.core.truth_(inst_25790)){
var statearr_25812_25835 = state_25807__$1;
(statearr_25812_25835[(1)] = (5));

} else {
var statearr_25813_25836 = state_25807__$1;
(statearr_25813_25836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (6))){
var inst_25789 = (state_25807[(7)]);
var inst_25794 = p.call(null,inst_25789);
var state_25807__$1 = state_25807;
if(cljs.core.truth_(inst_25794)){
var statearr_25814_25837 = state_25807__$1;
(statearr_25814_25837[(1)] = (8));

} else {
var statearr_25815_25838 = state_25807__$1;
(statearr_25815_25838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (3))){
var inst_25805 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25807__$1,inst_25805);
} else {
if((state_val_25808 === (2))){
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25807__$1,(4),ch);
} else {
if((state_val_25808 === (11))){
var inst_25797 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25816_25839 = state_25807__$1;
(statearr_25816_25839[(2)] = inst_25797);

(statearr_25816_25839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (9))){
var state_25807__$1 = state_25807;
var statearr_25817_25840 = state_25807__$1;
(statearr_25817_25840[(2)] = null);

(statearr_25817_25840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (5))){
var inst_25792 = cljs.core.async.close_BANG_.call(null,out);
var state_25807__$1 = state_25807;
var statearr_25818_25841 = state_25807__$1;
(statearr_25818_25841[(2)] = inst_25792);

(statearr_25818_25841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (10))){
var inst_25800 = (state_25807[(2)]);
var state_25807__$1 = (function (){var statearr_25819 = state_25807;
(statearr_25819[(8)] = inst_25800);

return statearr_25819;
})();
var statearr_25820_25842 = state_25807__$1;
(statearr_25820_25842[(2)] = null);

(statearr_25820_25842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (8))){
var inst_25789 = (state_25807[(7)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25807__$1,(11),out,inst_25789);
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
});})(c__23560__auto___25832,out))
;
return ((function (switch__23448__auto__,c__23560__auto___25832,out){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_25824 = [null,null,null,null,null,null,null,null,null];
(statearr_25824[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_25824[(1)] = (1));

return statearr_25824;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_25807){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_25807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e25825){if((e25825 instanceof Object)){
var ex__23452__auto__ = e25825;
var statearr_25826_25843 = state_25807;
(statearr_25826_25843[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25844 = state_25807;
state_25807 = G__25844;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_25807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_25807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___25832,out))
})();
var state__23562__auto__ = (function (){var statearr_25827 = f__23561__auto__.call(null);
(statearr_25827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___25832);

return statearr_25827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___25832,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25845 = [];
var len__21239__auto___25848 = arguments.length;
var i__21240__auto___25849 = (0);
while(true){
if((i__21240__auto___25849 < len__21239__auto___25848)){
args25845.push((arguments[i__21240__auto___25849]));

var G__25850 = (i__21240__auto___25849 + (1));
i__21240__auto___25849 = G__25850;
continue;
} else {
}
break;
}

var G__25847 = args25845.length;
switch (G__25847) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25845.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto__){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto__){
return (function (state_26017){
var state_val_26018 = (state_26017[(1)]);
if((state_val_26018 === (7))){
var inst_26013 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26019_26060 = state_26017__$1;
(statearr_26019_26060[(2)] = inst_26013);

(statearr_26019_26060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (20))){
var inst_25983 = (state_26017[(7)]);
var inst_25994 = (state_26017[(2)]);
var inst_25995 = cljs.core.next.call(null,inst_25983);
var inst_25969 = inst_25995;
var inst_25970 = null;
var inst_25971 = (0);
var inst_25972 = (0);
var state_26017__$1 = (function (){var statearr_26020 = state_26017;
(statearr_26020[(8)] = inst_25969);

(statearr_26020[(9)] = inst_25970);

(statearr_26020[(10)] = inst_25972);

(statearr_26020[(11)] = inst_25994);

(statearr_26020[(12)] = inst_25971);

return statearr_26020;
})();
var statearr_26021_26061 = state_26017__$1;
(statearr_26021_26061[(2)] = null);

(statearr_26021_26061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (1))){
var state_26017__$1 = state_26017;
var statearr_26022_26062 = state_26017__$1;
(statearr_26022_26062[(2)] = null);

(statearr_26022_26062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (4))){
var inst_25958 = (state_26017[(13)]);
var inst_25958__$1 = (state_26017[(2)]);
var inst_25959 = (inst_25958__$1 == null);
var state_26017__$1 = (function (){var statearr_26023 = state_26017;
(statearr_26023[(13)] = inst_25958__$1);

return statearr_26023;
})();
if(cljs.core.truth_(inst_25959)){
var statearr_26024_26063 = state_26017__$1;
(statearr_26024_26063[(1)] = (5));

} else {
var statearr_26025_26064 = state_26017__$1;
(statearr_26025_26064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (15))){
var state_26017__$1 = state_26017;
var statearr_26029_26065 = state_26017__$1;
(statearr_26029_26065[(2)] = null);

(statearr_26029_26065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (21))){
var state_26017__$1 = state_26017;
var statearr_26030_26066 = state_26017__$1;
(statearr_26030_26066[(2)] = null);

(statearr_26030_26066[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (13))){
var inst_25969 = (state_26017[(8)]);
var inst_25970 = (state_26017[(9)]);
var inst_25972 = (state_26017[(10)]);
var inst_25971 = (state_26017[(12)]);
var inst_25979 = (state_26017[(2)]);
var inst_25980 = (inst_25972 + (1));
var tmp26026 = inst_25969;
var tmp26027 = inst_25970;
var tmp26028 = inst_25971;
var inst_25969__$1 = tmp26026;
var inst_25970__$1 = tmp26027;
var inst_25971__$1 = tmp26028;
var inst_25972__$1 = inst_25980;
var state_26017__$1 = (function (){var statearr_26031 = state_26017;
(statearr_26031[(8)] = inst_25969__$1);

(statearr_26031[(9)] = inst_25970__$1);

(statearr_26031[(10)] = inst_25972__$1);

(statearr_26031[(14)] = inst_25979);

(statearr_26031[(12)] = inst_25971__$1);

return statearr_26031;
})();
var statearr_26032_26067 = state_26017__$1;
(statearr_26032_26067[(2)] = null);

(statearr_26032_26067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (22))){
var state_26017__$1 = state_26017;
var statearr_26033_26068 = state_26017__$1;
(statearr_26033_26068[(2)] = null);

(statearr_26033_26068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (6))){
var inst_25958 = (state_26017[(13)]);
var inst_25967 = f.call(null,inst_25958);
var inst_25968 = cljs.core.seq.call(null,inst_25967);
var inst_25969 = inst_25968;
var inst_25970 = null;
var inst_25971 = (0);
var inst_25972 = (0);
var state_26017__$1 = (function (){var statearr_26034 = state_26017;
(statearr_26034[(8)] = inst_25969);

(statearr_26034[(9)] = inst_25970);

(statearr_26034[(10)] = inst_25972);

(statearr_26034[(12)] = inst_25971);

return statearr_26034;
})();
var statearr_26035_26069 = state_26017__$1;
(statearr_26035_26069[(2)] = null);

(statearr_26035_26069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (17))){
var inst_25983 = (state_26017[(7)]);
var inst_25987 = cljs.core.chunk_first.call(null,inst_25983);
var inst_25988 = cljs.core.chunk_rest.call(null,inst_25983);
var inst_25989 = cljs.core.count.call(null,inst_25987);
var inst_25969 = inst_25988;
var inst_25970 = inst_25987;
var inst_25971 = inst_25989;
var inst_25972 = (0);
var state_26017__$1 = (function (){var statearr_26036 = state_26017;
(statearr_26036[(8)] = inst_25969);

(statearr_26036[(9)] = inst_25970);

(statearr_26036[(10)] = inst_25972);

(statearr_26036[(12)] = inst_25971);

return statearr_26036;
})();
var statearr_26037_26070 = state_26017__$1;
(statearr_26037_26070[(2)] = null);

(statearr_26037_26070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (3))){
var inst_26015 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26017__$1,inst_26015);
} else {
if((state_val_26018 === (12))){
var inst_26003 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26038_26071 = state_26017__$1;
(statearr_26038_26071[(2)] = inst_26003);

(statearr_26038_26071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (2))){
var state_26017__$1 = state_26017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26017__$1,(4),in$);
} else {
if((state_val_26018 === (23))){
var inst_26011 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26039_26072 = state_26017__$1;
(statearr_26039_26072[(2)] = inst_26011);

(statearr_26039_26072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (19))){
var inst_25998 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26040_26073 = state_26017__$1;
(statearr_26040_26073[(2)] = inst_25998);

(statearr_26040_26073[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (11))){
var inst_25969 = (state_26017[(8)]);
var inst_25983 = (state_26017[(7)]);
var inst_25983__$1 = cljs.core.seq.call(null,inst_25969);
var state_26017__$1 = (function (){var statearr_26041 = state_26017;
(statearr_26041[(7)] = inst_25983__$1);

return statearr_26041;
})();
if(inst_25983__$1){
var statearr_26042_26074 = state_26017__$1;
(statearr_26042_26074[(1)] = (14));

} else {
var statearr_26043_26075 = state_26017__$1;
(statearr_26043_26075[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (9))){
var inst_26005 = (state_26017[(2)]);
var inst_26006 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26017__$1 = (function (){var statearr_26044 = state_26017;
(statearr_26044[(15)] = inst_26005);

return statearr_26044;
})();
if(cljs.core.truth_(inst_26006)){
var statearr_26045_26076 = state_26017__$1;
(statearr_26045_26076[(1)] = (21));

} else {
var statearr_26046_26077 = state_26017__$1;
(statearr_26046_26077[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (5))){
var inst_25961 = cljs.core.async.close_BANG_.call(null,out);
var state_26017__$1 = state_26017;
var statearr_26047_26078 = state_26017__$1;
(statearr_26047_26078[(2)] = inst_25961);

(statearr_26047_26078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (14))){
var inst_25983 = (state_26017[(7)]);
var inst_25985 = cljs.core.chunked_seq_QMARK_.call(null,inst_25983);
var state_26017__$1 = state_26017;
if(inst_25985){
var statearr_26048_26079 = state_26017__$1;
(statearr_26048_26079[(1)] = (17));

} else {
var statearr_26049_26080 = state_26017__$1;
(statearr_26049_26080[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (16))){
var inst_26001 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26050_26081 = state_26017__$1;
(statearr_26050_26081[(2)] = inst_26001);

(statearr_26050_26081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (10))){
var inst_25970 = (state_26017[(9)]);
var inst_25972 = (state_26017[(10)]);
var inst_25977 = cljs.core._nth.call(null,inst_25970,inst_25972);
var state_26017__$1 = state_26017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26017__$1,(13),out,inst_25977);
} else {
if((state_val_26018 === (18))){
var inst_25983 = (state_26017[(7)]);
var inst_25992 = cljs.core.first.call(null,inst_25983);
var state_26017__$1 = state_26017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26017__$1,(20),out,inst_25992);
} else {
if((state_val_26018 === (8))){
var inst_25972 = (state_26017[(10)]);
var inst_25971 = (state_26017[(12)]);
var inst_25974 = (inst_25972 < inst_25971);
var inst_25975 = inst_25974;
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_25975)){
var statearr_26051_26082 = state_26017__$1;
(statearr_26051_26082[(1)] = (10));

} else {
var statearr_26052_26083 = state_26017__$1;
(statearr_26052_26083[(1)] = (11));

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
});})(c__23560__auto__))
;
return ((function (switch__23448__auto__,c__23560__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23449__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23449__auto____0 = (function (){
var statearr_26056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26056[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23449__auto__);

(statearr_26056[(1)] = (1));

return statearr_26056;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23449__auto____1 = (function (state_26017){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_26017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e26057){if((e26057 instanceof Object)){
var ex__23452__auto__ = e26057;
var statearr_26058_26084 = state_26017;
(statearr_26058_26084[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26085 = state_26017;
state_26017 = G__26085;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23449__auto__ = function(state_26017){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23449__auto____1.call(this,state_26017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23449__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23449__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto__))
})();
var state__23562__auto__ = (function (){var statearr_26059 = f__23561__auto__.call(null);
(statearr_26059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto__);

return statearr_26059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto__))
);

return c__23560__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26086 = [];
var len__21239__auto___26089 = arguments.length;
var i__21240__auto___26090 = (0);
while(true){
if((i__21240__auto___26090 < len__21239__auto___26089)){
args26086.push((arguments[i__21240__auto___26090]));

var G__26091 = (i__21240__auto___26090 + (1));
i__21240__auto___26090 = G__26091;
continue;
} else {
}
break;
}

var G__26088 = args26086.length;
switch (G__26088) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26086.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26093 = [];
var len__21239__auto___26096 = arguments.length;
var i__21240__auto___26097 = (0);
while(true){
if((i__21240__auto___26097 < len__21239__auto___26096)){
args26093.push((arguments[i__21240__auto___26097]));

var G__26098 = (i__21240__auto___26097 + (1));
i__21240__auto___26097 = G__26098;
continue;
} else {
}
break;
}

var G__26095 = args26093.length;
switch (G__26095) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26093.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26100 = [];
var len__21239__auto___26151 = arguments.length;
var i__21240__auto___26152 = (0);
while(true){
if((i__21240__auto___26152 < len__21239__auto___26151)){
args26100.push((arguments[i__21240__auto___26152]));

var G__26153 = (i__21240__auto___26152 + (1));
i__21240__auto___26152 = G__26153;
continue;
} else {
}
break;
}

var G__26102 = args26100.length;
switch (G__26102) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26100.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23560__auto___26155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___26155,out){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___26155,out){
return (function (state_26126){
var state_val_26127 = (state_26126[(1)]);
if((state_val_26127 === (7))){
var inst_26121 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26128_26156 = state_26126__$1;
(statearr_26128_26156[(2)] = inst_26121);

(statearr_26128_26156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (1))){
var inst_26103 = null;
var state_26126__$1 = (function (){var statearr_26129 = state_26126;
(statearr_26129[(7)] = inst_26103);

return statearr_26129;
})();
var statearr_26130_26157 = state_26126__$1;
(statearr_26130_26157[(2)] = null);

(statearr_26130_26157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (4))){
var inst_26106 = (state_26126[(8)]);
var inst_26106__$1 = (state_26126[(2)]);
var inst_26107 = (inst_26106__$1 == null);
var inst_26108 = cljs.core.not.call(null,inst_26107);
var state_26126__$1 = (function (){var statearr_26131 = state_26126;
(statearr_26131[(8)] = inst_26106__$1);

return statearr_26131;
})();
if(inst_26108){
var statearr_26132_26158 = state_26126__$1;
(statearr_26132_26158[(1)] = (5));

} else {
var statearr_26133_26159 = state_26126__$1;
(statearr_26133_26159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (6))){
var state_26126__$1 = state_26126;
var statearr_26134_26160 = state_26126__$1;
(statearr_26134_26160[(2)] = null);

(statearr_26134_26160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (3))){
var inst_26123 = (state_26126[(2)]);
var inst_26124 = cljs.core.async.close_BANG_.call(null,out);
var state_26126__$1 = (function (){var statearr_26135 = state_26126;
(statearr_26135[(9)] = inst_26123);

return statearr_26135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26126__$1,inst_26124);
} else {
if((state_val_26127 === (2))){
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,(4),ch);
} else {
if((state_val_26127 === (11))){
var inst_26106 = (state_26126[(8)]);
var inst_26115 = (state_26126[(2)]);
var inst_26103 = inst_26106;
var state_26126__$1 = (function (){var statearr_26136 = state_26126;
(statearr_26136[(10)] = inst_26115);

(statearr_26136[(7)] = inst_26103);

return statearr_26136;
})();
var statearr_26137_26161 = state_26126__$1;
(statearr_26137_26161[(2)] = null);

(statearr_26137_26161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (9))){
var inst_26106 = (state_26126[(8)]);
var state_26126__$1 = state_26126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26126__$1,(11),out,inst_26106);
} else {
if((state_val_26127 === (5))){
var inst_26103 = (state_26126[(7)]);
var inst_26106 = (state_26126[(8)]);
var inst_26110 = cljs.core._EQ_.call(null,inst_26106,inst_26103);
var state_26126__$1 = state_26126;
if(inst_26110){
var statearr_26139_26162 = state_26126__$1;
(statearr_26139_26162[(1)] = (8));

} else {
var statearr_26140_26163 = state_26126__$1;
(statearr_26140_26163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (10))){
var inst_26118 = (state_26126[(2)]);
var state_26126__$1 = state_26126;
var statearr_26141_26164 = state_26126__$1;
(statearr_26141_26164[(2)] = inst_26118);

(statearr_26141_26164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26127 === (8))){
var inst_26103 = (state_26126[(7)]);
var tmp26138 = inst_26103;
var inst_26103__$1 = tmp26138;
var state_26126__$1 = (function (){var statearr_26142 = state_26126;
(statearr_26142[(7)] = inst_26103__$1);

return statearr_26142;
})();
var statearr_26143_26165 = state_26126__$1;
(statearr_26143_26165[(2)] = null);

(statearr_26143_26165[(1)] = (2));


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
});})(c__23560__auto___26155,out))
;
return ((function (switch__23448__auto__,c__23560__auto___26155,out){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_26147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26147[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_26147[(1)] = (1));

return statearr_26147;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_26126){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_26126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e26148){if((e26148 instanceof Object)){
var ex__23452__auto__ = e26148;
var statearr_26149_26166 = state_26126;
(statearr_26149_26166[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26167 = state_26126;
state_26126 = G__26167;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_26126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_26126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___26155,out))
})();
var state__23562__auto__ = (function (){var statearr_26150 = f__23561__auto__.call(null);
(statearr_26150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___26155);

return statearr_26150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___26155,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26168 = [];
var len__21239__auto___26238 = arguments.length;
var i__21240__auto___26239 = (0);
while(true){
if((i__21240__auto___26239 < len__21239__auto___26238)){
args26168.push((arguments[i__21240__auto___26239]));

var G__26240 = (i__21240__auto___26239 + (1));
i__21240__auto___26239 = G__26240;
continue;
} else {
}
break;
}

var G__26170 = args26168.length;
switch (G__26170) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26168.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23560__auto___26242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___26242,out){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___26242,out){
return (function (state_26208){
var state_val_26209 = (state_26208[(1)]);
if((state_val_26209 === (7))){
var inst_26204 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
var statearr_26210_26243 = state_26208__$1;
(statearr_26210_26243[(2)] = inst_26204);

(statearr_26210_26243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (1))){
var inst_26171 = (new Array(n));
var inst_26172 = inst_26171;
var inst_26173 = (0);
var state_26208__$1 = (function (){var statearr_26211 = state_26208;
(statearr_26211[(7)] = inst_26172);

(statearr_26211[(8)] = inst_26173);

return statearr_26211;
})();
var statearr_26212_26244 = state_26208__$1;
(statearr_26212_26244[(2)] = null);

(statearr_26212_26244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (4))){
var inst_26176 = (state_26208[(9)]);
var inst_26176__$1 = (state_26208[(2)]);
var inst_26177 = (inst_26176__$1 == null);
var inst_26178 = cljs.core.not.call(null,inst_26177);
var state_26208__$1 = (function (){var statearr_26213 = state_26208;
(statearr_26213[(9)] = inst_26176__$1);

return statearr_26213;
})();
if(inst_26178){
var statearr_26214_26245 = state_26208__$1;
(statearr_26214_26245[(1)] = (5));

} else {
var statearr_26215_26246 = state_26208__$1;
(statearr_26215_26246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (15))){
var inst_26198 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
var statearr_26216_26247 = state_26208__$1;
(statearr_26216_26247[(2)] = inst_26198);

(statearr_26216_26247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (13))){
var state_26208__$1 = state_26208;
var statearr_26217_26248 = state_26208__$1;
(statearr_26217_26248[(2)] = null);

(statearr_26217_26248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (6))){
var inst_26173 = (state_26208[(8)]);
var inst_26194 = (inst_26173 > (0));
var state_26208__$1 = state_26208;
if(cljs.core.truth_(inst_26194)){
var statearr_26218_26249 = state_26208__$1;
(statearr_26218_26249[(1)] = (12));

} else {
var statearr_26219_26250 = state_26208__$1;
(statearr_26219_26250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (3))){
var inst_26206 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26208__$1,inst_26206);
} else {
if((state_val_26209 === (12))){
var inst_26172 = (state_26208[(7)]);
var inst_26196 = cljs.core.vec.call(null,inst_26172);
var state_26208__$1 = state_26208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26208__$1,(15),out,inst_26196);
} else {
if((state_val_26209 === (2))){
var state_26208__$1 = state_26208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26208__$1,(4),ch);
} else {
if((state_val_26209 === (11))){
var inst_26188 = (state_26208[(2)]);
var inst_26189 = (new Array(n));
var inst_26172 = inst_26189;
var inst_26173 = (0);
var state_26208__$1 = (function (){var statearr_26220 = state_26208;
(statearr_26220[(7)] = inst_26172);

(statearr_26220[(8)] = inst_26173);

(statearr_26220[(10)] = inst_26188);

return statearr_26220;
})();
var statearr_26221_26251 = state_26208__$1;
(statearr_26221_26251[(2)] = null);

(statearr_26221_26251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (9))){
var inst_26172 = (state_26208[(7)]);
var inst_26186 = cljs.core.vec.call(null,inst_26172);
var state_26208__$1 = state_26208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26208__$1,(11),out,inst_26186);
} else {
if((state_val_26209 === (5))){
var inst_26172 = (state_26208[(7)]);
var inst_26173 = (state_26208[(8)]);
var inst_26176 = (state_26208[(9)]);
var inst_26181 = (state_26208[(11)]);
var inst_26180 = (inst_26172[inst_26173] = inst_26176);
var inst_26181__$1 = (inst_26173 + (1));
var inst_26182 = (inst_26181__$1 < n);
var state_26208__$1 = (function (){var statearr_26222 = state_26208;
(statearr_26222[(12)] = inst_26180);

(statearr_26222[(11)] = inst_26181__$1);

return statearr_26222;
})();
if(cljs.core.truth_(inst_26182)){
var statearr_26223_26252 = state_26208__$1;
(statearr_26223_26252[(1)] = (8));

} else {
var statearr_26224_26253 = state_26208__$1;
(statearr_26224_26253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (14))){
var inst_26201 = (state_26208[(2)]);
var inst_26202 = cljs.core.async.close_BANG_.call(null,out);
var state_26208__$1 = (function (){var statearr_26226 = state_26208;
(statearr_26226[(13)] = inst_26201);

return statearr_26226;
})();
var statearr_26227_26254 = state_26208__$1;
(statearr_26227_26254[(2)] = inst_26202);

(statearr_26227_26254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (10))){
var inst_26192 = (state_26208[(2)]);
var state_26208__$1 = state_26208;
var statearr_26228_26255 = state_26208__$1;
(statearr_26228_26255[(2)] = inst_26192);

(statearr_26228_26255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26209 === (8))){
var inst_26172 = (state_26208[(7)]);
var inst_26181 = (state_26208[(11)]);
var tmp26225 = inst_26172;
var inst_26172__$1 = tmp26225;
var inst_26173 = inst_26181;
var state_26208__$1 = (function (){var statearr_26229 = state_26208;
(statearr_26229[(7)] = inst_26172__$1);

(statearr_26229[(8)] = inst_26173);

return statearr_26229;
})();
var statearr_26230_26256 = state_26208__$1;
(statearr_26230_26256[(2)] = null);

(statearr_26230_26256[(1)] = (2));


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
});})(c__23560__auto___26242,out))
;
return ((function (switch__23448__auto__,c__23560__auto___26242,out){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_26234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26234[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_26234[(1)] = (1));

return statearr_26234;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_26208){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_26208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e26235){if((e26235 instanceof Object)){
var ex__23452__auto__ = e26235;
var statearr_26236_26257 = state_26208;
(statearr_26236_26257[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26258 = state_26208;
state_26208 = G__26258;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_26208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_26208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___26242,out))
})();
var state__23562__auto__ = (function (){var statearr_26237 = f__23561__auto__.call(null);
(statearr_26237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___26242);

return statearr_26237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___26242,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26259 = [];
var len__21239__auto___26333 = arguments.length;
var i__21240__auto___26334 = (0);
while(true){
if((i__21240__auto___26334 < len__21239__auto___26333)){
args26259.push((arguments[i__21240__auto___26334]));

var G__26335 = (i__21240__auto___26334 + (1));
i__21240__auto___26334 = G__26335;
continue;
} else {
}
break;
}

var G__26261 = args26259.length;
switch (G__26261) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26259.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23560__auto___26337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23560__auto___26337,out){
return (function (){
var f__23561__auto__ = (function (){var switch__23448__auto__ = ((function (c__23560__auto___26337,out){
return (function (state_26303){
var state_val_26304 = (state_26303[(1)]);
if((state_val_26304 === (7))){
var inst_26299 = (state_26303[(2)]);
var state_26303__$1 = state_26303;
var statearr_26305_26338 = state_26303__$1;
(statearr_26305_26338[(2)] = inst_26299);

(statearr_26305_26338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (1))){
var inst_26262 = [];
var inst_26263 = inst_26262;
var inst_26264 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26303__$1 = (function (){var statearr_26306 = state_26303;
(statearr_26306[(7)] = inst_26263);

(statearr_26306[(8)] = inst_26264);

return statearr_26306;
})();
var statearr_26307_26339 = state_26303__$1;
(statearr_26307_26339[(2)] = null);

(statearr_26307_26339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (4))){
var inst_26267 = (state_26303[(9)]);
var inst_26267__$1 = (state_26303[(2)]);
var inst_26268 = (inst_26267__$1 == null);
var inst_26269 = cljs.core.not.call(null,inst_26268);
var state_26303__$1 = (function (){var statearr_26308 = state_26303;
(statearr_26308[(9)] = inst_26267__$1);

return statearr_26308;
})();
if(inst_26269){
var statearr_26309_26340 = state_26303__$1;
(statearr_26309_26340[(1)] = (5));

} else {
var statearr_26310_26341 = state_26303__$1;
(statearr_26310_26341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (15))){
var inst_26293 = (state_26303[(2)]);
var state_26303__$1 = state_26303;
var statearr_26311_26342 = state_26303__$1;
(statearr_26311_26342[(2)] = inst_26293);

(statearr_26311_26342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (13))){
var state_26303__$1 = state_26303;
var statearr_26312_26343 = state_26303__$1;
(statearr_26312_26343[(2)] = null);

(statearr_26312_26343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (6))){
var inst_26263 = (state_26303[(7)]);
var inst_26288 = inst_26263.length;
var inst_26289 = (inst_26288 > (0));
var state_26303__$1 = state_26303;
if(cljs.core.truth_(inst_26289)){
var statearr_26313_26344 = state_26303__$1;
(statearr_26313_26344[(1)] = (12));

} else {
var statearr_26314_26345 = state_26303__$1;
(statearr_26314_26345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (3))){
var inst_26301 = (state_26303[(2)]);
var state_26303__$1 = state_26303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26303__$1,inst_26301);
} else {
if((state_val_26304 === (12))){
var inst_26263 = (state_26303[(7)]);
var inst_26291 = cljs.core.vec.call(null,inst_26263);
var state_26303__$1 = state_26303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26303__$1,(15),out,inst_26291);
} else {
if((state_val_26304 === (2))){
var state_26303__$1 = state_26303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26303__$1,(4),ch);
} else {
if((state_val_26304 === (11))){
var inst_26271 = (state_26303[(10)]);
var inst_26267 = (state_26303[(9)]);
var inst_26281 = (state_26303[(2)]);
var inst_26282 = [];
var inst_26283 = inst_26282.push(inst_26267);
var inst_26263 = inst_26282;
var inst_26264 = inst_26271;
var state_26303__$1 = (function (){var statearr_26315 = state_26303;
(statearr_26315[(11)] = inst_26283);

(statearr_26315[(7)] = inst_26263);

(statearr_26315[(12)] = inst_26281);

(statearr_26315[(8)] = inst_26264);

return statearr_26315;
})();
var statearr_26316_26346 = state_26303__$1;
(statearr_26316_26346[(2)] = null);

(statearr_26316_26346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (9))){
var inst_26263 = (state_26303[(7)]);
var inst_26279 = cljs.core.vec.call(null,inst_26263);
var state_26303__$1 = state_26303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26303__$1,(11),out,inst_26279);
} else {
if((state_val_26304 === (5))){
var inst_26264 = (state_26303[(8)]);
var inst_26271 = (state_26303[(10)]);
var inst_26267 = (state_26303[(9)]);
var inst_26271__$1 = f.call(null,inst_26267);
var inst_26272 = cljs.core._EQ_.call(null,inst_26271__$1,inst_26264);
var inst_26273 = cljs.core.keyword_identical_QMARK_.call(null,inst_26264,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26274 = (inst_26272) || (inst_26273);
var state_26303__$1 = (function (){var statearr_26317 = state_26303;
(statearr_26317[(10)] = inst_26271__$1);

return statearr_26317;
})();
if(cljs.core.truth_(inst_26274)){
var statearr_26318_26347 = state_26303__$1;
(statearr_26318_26347[(1)] = (8));

} else {
var statearr_26319_26348 = state_26303__$1;
(statearr_26319_26348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (14))){
var inst_26296 = (state_26303[(2)]);
var inst_26297 = cljs.core.async.close_BANG_.call(null,out);
var state_26303__$1 = (function (){var statearr_26321 = state_26303;
(statearr_26321[(13)] = inst_26296);

return statearr_26321;
})();
var statearr_26322_26349 = state_26303__$1;
(statearr_26322_26349[(2)] = inst_26297);

(statearr_26322_26349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (10))){
var inst_26286 = (state_26303[(2)]);
var state_26303__$1 = state_26303;
var statearr_26323_26350 = state_26303__$1;
(statearr_26323_26350[(2)] = inst_26286);

(statearr_26323_26350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26304 === (8))){
var inst_26263 = (state_26303[(7)]);
var inst_26271 = (state_26303[(10)]);
var inst_26267 = (state_26303[(9)]);
var inst_26276 = inst_26263.push(inst_26267);
var tmp26320 = inst_26263;
var inst_26263__$1 = tmp26320;
var inst_26264 = inst_26271;
var state_26303__$1 = (function (){var statearr_26324 = state_26303;
(statearr_26324[(7)] = inst_26263__$1);

(statearr_26324[(8)] = inst_26264);

(statearr_26324[(14)] = inst_26276);

return statearr_26324;
})();
var statearr_26325_26351 = state_26303__$1;
(statearr_26325_26351[(2)] = null);

(statearr_26325_26351[(1)] = (2));


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
});})(c__23560__auto___26337,out))
;
return ((function (switch__23448__auto__,c__23560__auto___26337,out){
return (function() {
var cljs$core$async$state_machine__23449__auto__ = null;
var cljs$core$async$state_machine__23449__auto____0 = (function (){
var statearr_26329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26329[(0)] = cljs$core$async$state_machine__23449__auto__);

(statearr_26329[(1)] = (1));

return statearr_26329;
});
var cljs$core$async$state_machine__23449__auto____1 = (function (state_26303){
while(true){
var ret_value__23450__auto__ = (function (){try{while(true){
var result__23451__auto__ = switch__23448__auto__.call(null,state_26303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23451__auto__;
}
break;
}
}catch (e26330){if((e26330 instanceof Object)){
var ex__23452__auto__ = e26330;
var statearr_26331_26352 = state_26303;
(statearr_26331_26352[(5)] = ex__23452__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26353 = state_26303;
state_26303 = G__26353;
continue;
} else {
return ret_value__23450__auto__;
}
break;
}
});
cljs$core$async$state_machine__23449__auto__ = function(state_26303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23449__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23449__auto____1.call(this,state_26303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23449__auto____0;
cljs$core$async$state_machine__23449__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23449__auto____1;
return cljs$core$async$state_machine__23449__auto__;
})()
;})(switch__23448__auto__,c__23560__auto___26337,out))
})();
var state__23562__auto__ = (function (){var statearr_26332 = f__23561__auto__.call(null);
(statearr_26332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23560__auto___26337);

return statearr_26332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23562__auto__);
});})(c__23560__auto___26337,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1492251110073
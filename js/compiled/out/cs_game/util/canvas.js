// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.util.canvas');
goog.require('cljs.core');
cs_game.util.canvas.context = (function cs_game$util$canvas$context(dom){
return dom.getContext("2d");
});
cs_game.util.canvas.global_alpha = (function cs_game$util$canvas$global_alpha(var_args){
var args21818 = [];
var len__21239__auto___21821 = arguments.length;
var i__21240__auto___21822 = (0);
while(true){
if((i__21240__auto___21822 < len__21239__auto___21821)){
args21818.push((arguments[i__21240__auto___21822]));

var G__21823 = (i__21240__auto___21822 + (1));
i__21240__auto___21822 = G__21823;
continue;
} else {
}
break;
}

var G__21820 = args21818.length;
switch (G__21820) {
case 1:
return cs_game.util.canvas.global_alpha.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cs_game.util.canvas.global_alpha.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21818.length)].join('')));

}
});

cs_game.util.canvas.global_alpha.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return ctx.globalAlpha;
});

cs_game.util.canvas.global_alpha.cljs$core$IFn$_invoke$arity$2 = (function (ctx,alpha){
return ctx.globalAlpha = alpha;
});

cs_game.util.canvas.global_alpha.cljs$lang$maxFixedArity = 2;

cs_game.util.canvas.fill_style = (function cs_game$util$canvas$fill_style(ctx,color){
return ctx.fillStyle = color;
});
cs_game.util.canvas.stroke_style = (function cs_game$util$canvas$stroke_style(ctx,color){
return ctx.strokeStyle = color;
});
cs_game.util.canvas.line_width = (function cs_game$util$canvas$line_width(ctx,width){
return ctx.lineWidth = width;
});
cs_game.util.canvas.set_size = (function cs_game$util$canvas$set_size(el,width,height){
el.width = width;

return el.height = height;
});
cs_game.util.canvas.save = (function cs_game$util$canvas$save(ctx){
return ctx.save();
});
cs_game.util.canvas.restore = (function cs_game$util$canvas$restore(ctx){
return ctx.restore();
});
cs_game.util.canvas.translate = (function cs_game$util$canvas$translate(ctx,x,y){
return ctx.translate(x,y);
});
cs_game.util.canvas.rotate = (function cs_game$util$canvas$rotate(ctx,radians){
return ctx.rotate(radians);
});
cs_game.util.canvas.begin_path = (function cs_game$util$canvas$begin_path(ctx){
return ctx.beginPath();
});
cs_game.util.canvas.close_path = (function cs_game$util$canvas$close_path(ctx){
return ctx.closePath();
});
cs_game.util.canvas.move_to = (function cs_game$util$canvas$move_to(ctx,x,y){
return ctx.moveTo(x,y);
});
cs_game.util.canvas.line_to = (function cs_game$util$canvas$line_to(ctx,x,y){
return ctx.lineTo(x,y);
});
cs_game.util.canvas.arc_to = (function cs_game$util$canvas$arc_to(ctx,sx,sy,ex,ey,radius){
return ctx.arcTo(sx,sy,ex,ey,radius);
});
cs_game.util.canvas.draw_points = (function cs_game$util$canvas$draw_points(ctx,points){
var vec__21841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points),cljs.core.rest.call(null,points)], null);
var vec__21844 = cljs.core.nth.call(null,vec__21841,(0),null);
var fx = cljs.core.nth.call(null,vec__21844,(0),null);
var fy = cljs.core.nth.call(null,vec__21844,(1),null);
var rest_of_points = cljs.core.nth.call(null,vec__21841,(1),null);
cs_game.util.canvas.begin_path.call(null,ctx);

cs_game.util.canvas.move_to.call(null,ctx,fx,fy);

var seq__21847_21857 = cljs.core.seq.call(null,rest_of_points);
var chunk__21848_21858 = null;
var count__21849_21859 = (0);
var i__21850_21860 = (0);
while(true){
if((i__21850_21860 < count__21849_21859)){
var vec__21851_21861 = cljs.core._nth.call(null,chunk__21848_21858,i__21850_21860);
var x_21862 = cljs.core.nth.call(null,vec__21851_21861,(0),null);
var y_21863 = cljs.core.nth.call(null,vec__21851_21861,(1),null);
cs_game.util.canvas.line_to.call(null,ctx,x_21862,y_21863);

var G__21864 = seq__21847_21857;
var G__21865 = chunk__21848_21858;
var G__21866 = count__21849_21859;
var G__21867 = (i__21850_21860 + (1));
seq__21847_21857 = G__21864;
chunk__21848_21858 = G__21865;
count__21849_21859 = G__21866;
i__21850_21860 = G__21867;
continue;
} else {
var temp__4657__auto___21868 = cljs.core.seq.call(null,seq__21847_21857);
if(temp__4657__auto___21868){
var seq__21847_21869__$1 = temp__4657__auto___21868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21847_21869__$1)){
var c__20975__auto___21870 = cljs.core.chunk_first.call(null,seq__21847_21869__$1);
var G__21871 = cljs.core.chunk_rest.call(null,seq__21847_21869__$1);
var G__21872 = c__20975__auto___21870;
var G__21873 = cljs.core.count.call(null,c__20975__auto___21870);
var G__21874 = (0);
seq__21847_21857 = G__21871;
chunk__21848_21858 = G__21872;
count__21849_21859 = G__21873;
i__21850_21860 = G__21874;
continue;
} else {
var vec__21854_21875 = cljs.core.first.call(null,seq__21847_21869__$1);
var x_21876 = cljs.core.nth.call(null,vec__21854_21875,(0),null);
var y_21877 = cljs.core.nth.call(null,vec__21854_21875,(1),null);
cs_game.util.canvas.line_to.call(null,ctx,x_21876,y_21877);

var G__21878 = cljs.core.next.call(null,seq__21847_21869__$1);
var G__21879 = null;
var G__21880 = (0);
var G__21881 = (0);
seq__21847_21857 = G__21878;
chunk__21848_21858 = G__21879;
count__21849_21859 = G__21880;
i__21850_21860 = G__21881;
continue;
}
} else {
}
}
break;
}

return cs_game.util.canvas.close_path.call(null,ctx);
});
cs_game.util.canvas.arc = (function cs_game$util$canvas$arc(ctx,x,y,radius,start_angle,end_angle,counter_clockwise_QMARK_){
return ctx.arc(x,y,radius,start_angle,end_angle,counter_clockwise_QMARK_);
});
cs_game.util.canvas.pi = 3.14159265359;
cs_game.util.canvas.centered_circle = (function cs_game$util$canvas$centered_circle(ctx,x,y,radius){
cs_game.util.canvas.begin_path.call(null,ctx);

return cs_game.util.canvas.arc.call(null,ctx,x,y,radius,(0),((2) * cs_game.util.canvas.pi),false);
});
cs_game.util.canvas.fill = (function cs_game$util$canvas$fill(ctx){
return ctx.fill();
});
cs_game.util.canvas.stroke = (function cs_game$util$canvas$stroke(ctx){
return ctx.stroke();
});
cs_game.util.canvas.fill_rect = (function cs_game$util$canvas$fill_rect(ctx,x,y,width,height){
return ctx.fillRect(x,y,width,height);
});
cs_game.util.canvas.fill_centered_rect = (function cs_game$util$canvas$fill_centered_rect(ctx,x,y,width,height){
return cs_game.util.canvas.fill_rect.call(null,ctx,(x - (width / (2))),(y - (height / (2))),width,height);
});
cs_game.util.canvas.draw_rounded_rect = (function cs_game$util$canvas$draw_rounded_rect(ctx,x,y,width,height,radius){
cs_game.util.canvas.begin_path.call(null,ctx);

cs_game.util.canvas.move_to.call(null,ctx,x,(y + radius));

cs_game.util.canvas.line_to.call(null,ctx,x,((y + height) - radius));

cs_game.util.canvas.arc_to.call(null,ctx,x,(y + height),(x + radius),(y + height),radius);

cs_game.util.canvas.line_to.call(null,ctx,((x + width) - radius),(y + height));

cs_game.util.canvas.arc_to.call(null,ctx,(x + width),(y + height),(x + width),((y + height) - radius),radius);

cs_game.util.canvas.line_to.call(null,ctx,(x + width),(y + radius));

cs_game.util.canvas.arc_to.call(null,ctx,(x + width),y,((x + width) - radius),y,radius);

cs_game.util.canvas.line_to.call(null,ctx,(x + radius),y);

return cs_game.util.canvas.arc_to.call(null,ctx,x,y,x,(y + radius),radius);
});
cs_game.util.canvas.stroke_rect = (function cs_game$util$canvas$stroke_rect(ctx,x,y,width,height){
return ctx.strokeRect(x,y,width,height);
});
cs_game.util.canvas.stroke_centered_rect = (function cs_game$util$canvas$stroke_centered_rect(ctx,x,y,width,height){
return cs_game.util.canvas.stroke_rect.call(null,ctx,(x - (width / (2))),(y - (height / (2))),width,height);
});
cs_game.util.canvas.draw_image = (function cs_game$util$canvas$draw_image(ctx,el,sx,sy,swidth,sheight,dx,dy,dwidth,dheight){
return ctx.drawImage(el,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);
});
cs_game.util.canvas.text_align = (function cs_game$util$canvas$text_align(ctx,text_align__$1){
return ctx.textAlign = text_align__$1;
});
cs_game.util.canvas.text_baseline = (function cs_game$util$canvas$text_baseline(ctx,text_baseline__$1){
return ctx.textBaseline = text_baseline__$1;
});
cs_game.util.canvas.font = (function cs_game$util$canvas$font(ctx,font__$1){
return ctx.font = font__$1;
});
cs_game.util.canvas.fill_text = (function cs_game$util$canvas$fill_text(ctx,text,x,y){
return ctx.fillText(text,x,y);
});

//# sourceMappingURL=canvas.js.map?rel=1492251107060
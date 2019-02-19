// Compiled by ClojureScript 1.9.225 {}
goog.provide('cs_game.util.keyboard');
goog.require('cljs.core');
cs_game.util.keyboard.held = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
cs_game.util.keyboard.prev_held = cljs.core.atom.call(null,cljs.core.deref.call(null,cs_game.util.keyboard.held));
cs_game.util.keyboard.held_QMARK_ = (function cs_game$util$keyboard$held_QMARK_(code){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cs_game.util.keyboard.held),code);
});
cs_game.util.keyboard.prev_held_QMARK_ = (function cs_game$util$keyboard$prev_held_QMARK_(code){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cs_game.util.keyboard.prev_held),code);
});
cs_game.util.keyboard.just_up_QMARK_ = (function cs_game$util$keyboard$just_up_QMARK_(code){
return (!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cs_game.util.keyboard.held),code))) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cs_game.util.keyboard.prev_held),code));
});
cs_game.util.keyboard.just_down_QMARK_ = (function cs_game$util$keyboard$just_down_QMARK_(code){
return (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cs_game.util.keyboard.held),code)) && (!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cs_game.util.keyboard.prev_held),code)));
});
cs_game.util.keyboard.handle_keydown = (function cs_game$util$keyboard$handle_keydown(e){
return cljs.core.swap_BANG_.call(null,cs_game.util.keyboard.held,cljs.core.conj,e.keyCode);
});
cs_game.util.keyboard.handle_keyup = (function cs_game$util$keyboard$handle_keyup(e){
return cljs.core.swap_BANG_.call(null,cs_game.util.keyboard.held,cljs.core.disj,e.keyCode);
});
cs_game.util.keyboard.add_listeners = (function cs_game$util$keyboard$add_listeners(){
window.addEventListener("keydown",cs_game.util.keyboard.handle_keydown);

return window.addEventListener("keyup",cs_game.util.keyboard.handle_keyup);
});
cs_game.util.keyboard.remove_listeners = (function cs_game$util$keyboard$remove_listeners(){
window.removeEventListener("keydown",cs_game.util.keyboard.handle_keydown);

return window.removeEventListener("keyup",cs_game.util.keyboard.handle_keyup);
});
cs_game.util.keyboard.tick = (function cs_game$util$keyboard$tick(){
return cljs.core.reset_BANG_.call(null,cs_game.util.keyboard.prev_held,cljs.core.deref.call(null,cs_game.util.keyboard.held));
});

//# sourceMappingURL=keyboard.js.map?rel=1493564070568
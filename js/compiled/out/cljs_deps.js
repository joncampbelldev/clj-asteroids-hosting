goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../devtools/version.js", ['devtools.version'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/pprint.js", ['cljs.pprint'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer', 'clojure.string']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../clojure/data.js", ['clojure.data'], ['cljs.core', 'clojure.set']);
goog.addDependency("../devtools/prefs.js", ['devtools.prefs'], ['cljs.core']);
goog.addDependency("../devtools/util.js", ['devtools.util'], ['cljs.core', 'devtools.version', 'goog.userAgent', 'cljs.pprint', 'clojure.data', 'devtools.prefs']);
goog.addDependency("../devtools/munging.js", ['devtools.munging'], ['devtools.util', 'cljs.core', 'clojure.string']);
goog.addDependency("../devtools/format.js", ['devtools.format'], ['cljs.core', 'devtools.prefs', 'devtools.munging']);
goog.addDependency("../devtools/custom_formatters.js", ['devtools.custom_formatters'], ['devtools.util', 'cljs.core', 'goog.labs.userAgent.browser', 'devtools.format', 'devtools.prefs']);
goog.addDependency("../cljs/stacktrace.js", ['cljs.stacktrace'], ['goog.string', 'cljs.core', 'clojure.string']);
goog.addDependency("../devtools/sanity_hints.js", ['devtools.sanity_hints'], ['cljs.stacktrace', 'cljs.core', 'goog.labs.userAgent.browser', 'devtools.prefs']);
goog.addDependency("../devtools/core.js", ['devtools.core'], ['devtools.sanity_hints', 'devtools.util', 'cljs.core', 'devtools.custom_formatters', 'devtools.prefs']);
goog.addDependency("../devtools/preload.js", ['devtools.preload'], ['cljs.core', 'devtools.core', 'devtools.prefs']);
goog.addDependency("../cs_game/util/maths.js", ['cs_game.util.maths'], ['cljs.core']);
goog.addDependency("../cs_game/util/shapes.js", ['cs_game.util.shapes'], ['cs_game.util.maths', 'cljs.core']);
goog.addDependency("../cs_game/util/expanded_lang.js", ['cs_game.util.expanded_lang'], ['cljs.core']);
goog.addDependency("../cs_game/util/keyboard.js", ['cs_game.util.keyboard'], ['cljs.core']);
goog.addDependency("../cs_game/spatial_hashing.js", ['cs_game.spatial_hashing'], ['cljs.core', 'clojure.set']);
goog.addDependency("../cs_game/util/easing.js", ['cs_game.util.easing'], ['cljs.core']);
goog.addDependency("../cs_game/util/canvas.js", ['cs_game.util.canvas'], ['cljs.core']);
goog.addDependency("../cs_game/util/sat.js", ['cs_game.util.sat'], ['cljs.core']);
goog.addDependency("../cs_game/collisions.js", ['cs_game.collisions'], ['cs_game.util.maths', 'cs_game.util.expanded_lang', 'cljs.core', 'cs_game.spatial_hashing', 'cs_game.util.sat']);
goog.addDependency("../cs_game/view.js", ['cs_game.view'], ['cs_game.util.maths', 'cs_game.util.expanded_lang', 'cljs.core', 'cs_game.spatial_hashing', 'cs_game.util.canvas']);
goog.addDependency("../cs_game/ces.js", ['cs_game.ces'], ['cs_game.util.expanded_lang', 'cljs.core']);
goog.addDependency("../cs_game/core.js", ['cs_game.core'], ['cs_game.util.shapes', 'cs_game.util.maths', 'cs_game.util.expanded_lang', 'cs_game.util.keyboard', 'cljs.core', 'cljs.pprint', 'cs_game.spatial_hashing', 'cs_game.util.easing', 'cs_game.util.canvas', 'cs_game.collisions', 'cs_game.view', 'cs_game.ces']);

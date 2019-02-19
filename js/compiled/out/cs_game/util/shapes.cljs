(ns cs-game.util.shapes
  (:require [cs-game.util.maths :as maths])
  (:require-macros [cs-game.util.expanded-lang :refer [defn-memo]]))

(defn-memo rectangle [width height]
  (let [half-width (/ width 2)
        half-height (/ height 2)]
    [[(- half-width) (- half-height)]
     [(+ half-width) (- half-height)]
     [(+ half-width) (+ half-height)]
     [(- half-width) (+ half-height)]]))

(defn-memo isoceles-triangle [circle-size]
  [[(* circle-size 0.5) 0]
   [(- (* circle-size 0.3)) (* circle-size 0.2)]
   [(- (* circle-size 0.3)) (- (* circle-size 0.2))]])

(defn random-sided-convex-polygon [radius]
  (let [full-circle (* maths/pi 2)]
    (loop [path []
           angle 0]
      (let [angle (+ angle (maths/rand-between 0.05 1.5))
            position [(* radius (maths/cos angle))
                      (* radius (maths/sin angle))]]
        (if (< angle full-circle)
          (recur (conj path position) angle)
          path)))))
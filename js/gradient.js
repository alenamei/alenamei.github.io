/**
 * Smooth Color Transition on Scroll
 *
 * This script creates a smooth color transition effect on the webpage background
 * based on the scrolling position. As the user scrolls, the background color
 * gradually changes from light turquoise to black.
 *
 * It calculates the scroll percentage and uses an easing function to adjust
 * the transition for a smoother effect. 
 *
 */

let scrollableHeight; 

(function() {
	const body = document.body;
	const scrollableHeight = body.scrollHeight - window.innerHeight;
	const colors = [
		[194, 232, 232], // #c2e8e8
		[194, 232, 232], // #c2e8e8
		[150, 217, 217], // #96d9d9
		[106, 202, 202], // #6acaca
		[66, 189, 189], // #42bdbd
		[2, 102, 102], // #026666
		[3, 95, 95], // #035f5f
		[24, 70, 74], // #18464a
		[1, 48, 48], // #013030
		[0, 32, 32], // #002020
		[0, 0, 0] // #000000
	  ];
  
	let ax, bx, cx; 
  
	window.addEventListener('scroll', function() {
		const scrollPercentage = window.scrollY / scrollableHeight;
		const easedScrollPercentage = easeInOutCubic(scrollPercentage);
		const colorIndex = Math.floor(easedScrollPercentage * (colors.length - 1));
		const startColor = colors[colorIndex];
		const endColor = colors[colorIndex + 1];
	
		const red = Math.round((1 - easedScrollPercentage) * startColor[0] + easedScrollPercentage * endColor[0]);
		const green = Math.round((1 - easedScrollPercentage) * startColor[1] + easedScrollPercentage * endColor[1]);
		const blue = Math.round((1 - easedScrollPercentage) * startColor[2] + easedScrollPercentage * endColor[2]);
	
		body.style.background = `linear-gradient(to bottom, rgb(${red}, ${green}, ${blue}), #000000)`;
	  });
	
	  function easeInOutCubic(t) {
		if (t < 0.5) {
		  return cubicBezier(t * 2, 0, 0, 0.3, 1);
		} else {
		  return cubicBezier((t - 0.5) * 2, 0.7, 0, 1, 0.7);
		}
	  }
  
	function cubicBezier(t, p1x, p1y, p2x, p2y) {
		let ax, bx, cx; 
		const cy = 3 * p1y;
		const by = 3 * (p2y - p1y) - cy;
		const ay = 1 - cy - by;
	  
		bx = 3 * (p2x - p1x);
		ax = 1 - bx - cx;
	  
		return sampleCurveY(solveCurveX(t), ay, by, cy);
	  }
  
	function sampleCurveX(t) {
	  return ((ax * t + bx) * t + cx) * t;
	}
  
	function sampleCurveY(t, ay, by, cy) {
	  return ((ay * t + by) * t + cy) * t;
	}
  
	function sampleCurveDerivativeX(t) {
	  return (3 * ax * t + 2 * bx) * t + cx;
	}
	console.log("Scroll position reached!");

	function solveCurveX(x) {
	  let t0;
	  let t1;
	  let t2;
	  let x2;
	  let d2;
	  let i;
  
	  for (t2 = x, i = 0; i < 8; i++) {
		x2 = sampleCurveX(t2) - x;
		if (Math.abs(x2) < 1e-3) return t2;
		d2 = sampleCurveDerivativeX(t2);
      if (Math.abs(d2) < 1e-3) break;
      t2 -= x2 / d2;
    }

    t0 = 0;
    t1 = 1;
    t2 = x;

    if (t2 < t0) return t0;
    if (t2 > t1) return t1;

    while (t0 < t1) {
      x2 = sampleCurveX(t2);
      if (Math.abs(x2 - x) < 1e-3) return t2;
      if (x > x2) t0 = t2;
      else t1 = t2;
      t2 = (t1 - t0) * 0.5 + t0;
    }

    return t2;
  }
});
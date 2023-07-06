/*
The script you provided uses the GSAP (GreenSock Animation Platform) 
library to animate the color of three elements with IDs "th1", "th2", and "th3". 
Each animation has a duration of 2 seconds and applies a color change to white 
with a power2 easing effect. The animations are triggered when the 
respective elements come into view, with the animation starting when the element 
reaches the left center of the viewport and ending when it reaches the right center. 
The "scrub" property enables smooth animation progress as the user scrolls. 
Overall, the script adds visual effects to the specified elements as they enter 
the visible area of the webpage.
*/

gsap.config({ trialWarn: false });

gsap.to("#th3", {
    duration: 2,
    color: "#ffffff",
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#th3",
      start: "left center",
      end: "right center",
      scrub: 1
    }
  });
  
gsap.to("#th1", {
    duration: 2,
    color: "#ffffff",
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#th1",
      start: "left center",
      end: "right center",
      scrub: 1
    }
  });

  gsap.to("#th2", {
    duration: 2,
    color: "#ffffff",
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#th2",
      start: "left center",
      end: "right center",
      scrub: 1
    }
  });
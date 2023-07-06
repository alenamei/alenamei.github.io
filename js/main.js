//Landing Page

const projectLinks = document.querySelectorAll('.project-link, .project-link2, .project-link3');
const learnMoreButtons = document.querySelectorAll('.learn-more, .learn-more2, .learn-more3');

learnMoreButtons.forEach(button => {
  button.style.display = 'none';
});

// Add event listeners and apply styles to each project link
projectLinks.forEach((projectLink, index) => {
  const learnMoreButton = learnMoreButtons[index];
  projectLink.addEventListener('mouseover', function() {
    projectLink.style.backgroundColor = '#333333';
    projectLink.querySelector('.project-content').style.display = 'none';
    learnMoreButton.style.borderRadius = '20px';
    learnMoreButton.style.backgroundColor = '#15222255';
    learnMoreButton.style.cursor = 'pointer';
    learnMoreButton.style.borderRadius = '20px';
    learnMoreButton.style.display = 'block';
    learnMoreButton.style.color = '#c2e8e8';
    learnMoreButton.style.border = '2px solid #c2e8e8';
    learnMoreButton.style.padding = '12px 24px';
  });

  projectLink.addEventListener('mouseout', function() {
    projectLink.style.backgroundColor = '#15222255';
    projectLink.querySelector('.project-content').style.display = 'block';
    learnMoreButton.style.borderRadius = '20px';
    learnMoreButton.style.display = 'none';
  });

  learnMoreButton.addEventListener('mouseover', function() {
    learnMoreButton.style.backgroundColor = '#00ced1';
    learnMoreButton.style.cursor = 'pointer';
    learnMoreButton.style.borderRadius = '20px';
  });

  learnMoreButton.addEventListener('mouseout', function() {
    learnMoreButton.style.backgroundColor = '#15222255';
  });

  learnMoreButton.addEventListener('mouseenter', function() {
    learnMoreButton.style.backgroundColor = '#c2e8e8';
    learnMoreButton.style.color = '#394e4e';
    learnMoreButton.style.border = '2px solid #c2e8e8';
    learnMoreButton.style.padding = '12px 24px';
  });

  learnMoreButton.addEventListener('mouseleave', function() {
    learnMoreButton.style.backgroundColor = '#394e4e';
    learnMoreButton.style.color = '#c2e8e8';
    learnMoreButton.style.border = '2px solid #c2e8e8';
    learnMoreButton.style.padding = '12px 24px';
  });
});

//-----------------------------------------------------------------------------------------------------
// Smooth scroll to id
function smoothScroll(target, duration) {
	var targetElement = document.querySelector(target);
	var targetPosition = targetElement.offsetTop;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;
  
	function animation(currentTime) {
	  if (startTime === null) startTime = currentTime;
	  var timeElapsed = currentTime - startTime;
	  var scrollY = ease(timeElapsed, startPosition, distance, duration);
	  window.scrollTo(0, scrollY);
	  if (timeElapsed < duration) requestAnimationFrame(animation);
	}
  
	// Easing function
	function ease(t, b, c, d) {
	  t /= d / 2;
	  if (t < 1) return (c / 2) * t * t + b;
	  t--;
	  return (-c / 2) * (t * (t - 2) - 1) + b;
	}
  
	requestAnimationFrame(animation);
  }
  
  var aboutMeLink = document.querySelector('#navbar ul li:nth-child(1) a');
  aboutMeLink.addEventListener('click', function (event) {
	event.preventDefault();
	smoothScroll('#divider-1', 1000);
  });

  var projectsLink = document.querySelector('#navbar ul li:nth-child(2) a');
  projectsLink.addEventListener('click', function (event) {
	event.preventDefault();
	smoothScroll('#divider-3', 1000);
  });
  
  var contactLink = document.querySelector('#navbar ul li:nth-child(3) a');
  contactLink.addEventListener('click', function (event) {
	event.preventDefault();
	smoothScroll('#divider-4', 1000);
  });

  var projectsButton = document.querySelector('.button2');
  projectsButton.addEventListener('click', function (event) {
    event.preventDefault();
	smoothScroll('#divider-3', 1000); 
  });

  var animatedButton = document.querySelector('.button');
  animatedButton.addEventListener('click', function (event) {
    event.preventDefault();
	smoothScroll('#divider-1', 1000); 
  });

  document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.querySelector('.learn-more');
    learnMoreButton.addEventListener('click', function() {
      window.location.href = 'Project1.html';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.querySelector('.learn-more2');
    learnMoreButton.addEventListener('click', function() {
      window.location.href = 'Project2.html';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.querySelector('.learn-more3');
    learnMoreButton.addEventListener('click', function() {
      window.location.href = 'Project3.html';
    });
  });

//------------------------------------------------------------------------------------------------------
// Function to fade the navbar based on scrolling
function fadeNavbar() {
	var navbar = document.getElementById('navbar');
	var targetElement = document.querySelector('#about_me');
  
	var targetElementPosition = targetElement.getBoundingClientRect().top;
	var windowHeight = window.innerHeight;
  
	if (targetElementPosition < windowHeight) {
	  navbar.classList.add('fade-out');
	  navbar.classList.remove('fade-in');
	} else {
	  navbar.classList.add('fade-in');
	  navbar.classList.remove('fade-out');
	}
  }
  
// Add scroll event listener to trigger fadeNavbar function
window.addEventListener('scroll', fadeNavbar);
  

// Add scroll event listener to toggle the visibility of the navbar and hamburger menu
window.addEventListener('scroll', function () {
	var navbar = document.getElementById('navbar');
	var hamburgerMenu = document.getElementById('hamburger-menu');
	
	if (window.pageYOffset > navbar.offsetHeight) {
	  navbar.style.display = 'none';
	  hamburgerMenu.style.display = 'block';
	} else {
	  navbar.style.display = 'block';
	  hamburgerMenu.style.display = 'none';
	}
  });
  
// Add click event listener to toggle the menu when the hamburger menu is clicked
var hamburgerMenu = document.getElementById('hamburger-menu');
var menuContainer = document.getElementById('menu-container');

function toggleMenu() {
  menuContainer.classList.toggle('open');
}

function closeMenu() {
  menuContainer.classList.remove('open');
}

hamburgerMenu.addEventListener('click', toggleMenu);

var closeButton = document.getElementById('close-menu');
if (closeButton) {
  closeButton.addEventListener('click', closeMenu);
}


function toggleMenu() {
	menuContainer.classList.toggle('open');
	toggleMenuLinks();
  }
  
  function toggleMenuLinks() {
	var menuLinks = document.querySelectorAll('.menu-link');
  
	menuLinks.forEach(function (link, index) {
	  if (menuContainer.classList.contains('open')) {
		setTimeout(function () {
		  link.style.transitionDelay = (index * 0.1) + 's';
		  link.classList.add('show');
		}, 300);
	  } else {
		link.style.transitionDelay = '';
		link.classList.remove('show');
	  }
	});
  }


// Function to check if an element is in the viewport
function isElementInViewport(element) {
	var rect = element.getBoundingClientRect();
	return (
	  rect.top >= 0 &&
	  rect.left >= 0 &&
	  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
  }
  
  // Function to handle the animation
  function handleAnimation1() {
	var typingText = document.getElementById('th1');
	if (isElementInViewport(typingText) && !typingText.classList.contains('animation-started')) {
	  typingText.classList.add('animation-started');
	  typingText.style.animation = 'typing 3s forwards';
	}
  }

  // Event listener to trigger the animation on scroll
  window.addEventListener('scroll', handleAnimation1);
  

document.addEventListener("DOMContentLoaded", function() {
	var triggerElement = document.getElementById("div1");
	var elements = document.querySelectorAll(' #fade-p, #fade-p2, #fade-p3');
	var observerOptions = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.5 // Adjust the threshold value as needed
	};
  
	var observer = new IntersectionObserver(function(entries, observer) {
	  entries.forEach(function(entry) {
		if (entry.isIntersecting) {
		  setTimeout(function() {
			elements.forEach(function(elem) {
			  elem.style.transition = "opacity 2s, transform 1s"; 
			  elem.style.opacity = "1";
			  elem.style.transform = "translateY(-50px)"; 
			});
		  }, 50); 
  
		  observer.disconnect();
		}
	  });
	}, observerOptions);
  
	observer.observe(triggerElement);
  });
  
//----------------------------------------------------------------------------------------------------
// Button fly in 

document.addEventListener("DOMContentLoaded", function() {
	var fadeP3 = document.getElementById("fade-p3");
	var button1 = document.querySelector(".button1");
	var button2 = document.querySelector(".button2");
  
	var observerOptions = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 1 
	};
  
	var observer1 = new IntersectionObserver(function(entries) {
	  entries.forEach(function(entry) {
		if (entry.target === fadeP3 && entry.isIntersecting && entry.intersectionRatio >= 1) {
		  setTimeout(function() {
			button1.style.transition = "transform 1s"; 
			button1.style.transform = "translateX(0)"; 
			button1.style.opacity = "1"; 
		  }, 900); 
		}
	  });
	}, observerOptions);
  
	var observer2 = new IntersectionObserver(function(entries) {
	  entries.forEach(function(entry) {
		if (entry.target === fadeP3 && entry.isIntersecting && entry.intersectionRatio >= 1) {
		  setTimeout(function() {
			button2.style.transition = "transform 1s"; 
			button2.style.transform = "translateX(0)"; 
			button2.style.opacity = "1"; 
		  }, 1200); 
		}
	  });
	}, observerOptions);
  
	observer1.observe(fadeP3);
	observer2.observe(fadeP3);
  });
  
//------------------------------------------------------------------
// rectangle fill 

document.addEventListener("DOMContentLoaded", function() {
	var rectangle = document.querySelector(".rectangle");
	var div1 = document.getElementById("divider2");
	var windowHeight = window.innerHeight;
	var initialColor = "rgba(128, 128, 128, 0.527)"; 
	var orangeColor = "rgba(42, 173, 136, 0.7)"; 
	var fillDuration = 10; 
  
	rectangle.style.backgroundColor = initialColor;
  
	// Delay the start of the animation
	setTimeout(function() {
	  window.addEventListener("scroll", function() {
		var rect = div1.getBoundingClientRect();
		var scrollDistance = Math.max(0, windowHeight - rect.top);
		var scrollPercentage = Math.min(1, scrollDistance / windowHeight);
		var fillAmount = Math.min(1, scrollPercentage * 2.5); 
  
		var fillHeight = (1 - fillAmount) * 100; 
		rectangle.style.background = `linear-gradient(to top, ${initialColor} ${fillHeight}%, ${orangeColor} ${fillHeight}%)`;
	  });
	}, 0); 
  });
  
  
  //----------------------------------------------------------------
  // rectangle fly in

  document.addEventListener("DOMContentLoaded", function() {
	var fadeP3 = document.getElementById("fade-p3");
	var element = document.getElementById("element");
  
	var observerOptions = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 1 
	}; // <-- Added closing curly brace
  
	var observer = new IntersectionObserver(function(entries) {
	  entries.forEach(function(entry) {
		if (entry.target === fadeP3 && entry.isIntersecting && entry.intersectionRatio >= 1) {
		  setTimeout(function() {
			rectangle.style.transition = "transform 1s"; 
			rectangle.style.transform = "translateX(0)";
			rectangle.style.opacity = "1"; 
		  }, 1000); 
  
		  setTimeout(function() {
			element.style.transition = "transform 1s"; 
			element.style.transform = "translateX(0)"; 
			element.style.opacity = "1";
		  }, 2000); 
		}
	  });
	}, observerOptions);
  
	observer.observe(fadeP3);
  
	// Apply initial transform properties to position the elements off-screen
	element.style.transform = "translateX(100%)";
  }); 
  
  //---------------------------------------------------------
  // blur grid item

  document.addEventListener("DOMContentLoaded", function() {
	var divider2 = document.getElementById("divider2");
	var project1 = document.querySelector(".grid-item.grid-item-project1");
  
	var observerOptions = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.5 
	};
  
	var observer = new IntersectionObserver(function(entries) {
	  entries.forEach(function(entry) {
		if (entry.target === divider2 && entry.isIntersecting && entry.intersectionRatio >= 0.5) {
		  setTimeout(function() {
			project1.classList.add("clear"); 
		  }, 1000); 
		}
	  });
	}, observerOptions);
  
	observer.observe(divider2);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
	var divider2 = document.getElementById("divider2");
	var project1 = document.querySelector(".grid-item.grid-item-project2");
  
	var observerOptions = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.5 
	};
  
	var observer = new IntersectionObserver(function(entries) {
	  entries.forEach(function(entry) {
		if (entry.target === divider2 && entry.isIntersecting && entry.intersectionRatio >= 0.5) {
		  setTimeout(function() {
			project1.classList.add("clear"); 
		  }, 1000); 
		}
	  });
	}, observerOptions);
  
	observer.observe(divider2);
  });

  document.addEventListener("DOMContentLoaded", function() {
	var divider2 = document.getElementById("divider2");
	var project1 = document.querySelector(".grid-item.grid-item-project3");
  
	var observerOptions = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.5 
	};
  
	var observer = new IntersectionObserver(function(entries) {
	  entries.forEach(function(entry) {
		if (entry.target === divider2 && entry.isIntersecting && entry.intersectionRatio >= 0.5) {
		  setTimeout(function() {
			project1.classList.add("clear"); 
		  }, 1000);  
		}
	  });
	}, observerOptions);
  
	observer.observe(divider2);
  });
//-----------------------------------------------------------------
// contact text fade in 

document.addEventListener("DOMContentLoaded", function() {
	var triggerElement = document.getElementById("th3");
	var elements = document.querySelectorAll('.split-item');
	var observerOptions = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.5 
	};
  
	var observer = new IntersectionObserver(function(entries, observer) {
	  entries.forEach(function(entry) {
		if (entry.isIntersecting) {
		  setTimeout(function() {
			elements.forEach(function(elem) {
			  elem.style.transition = "opacity 2s, transform 1s"; 
			  elem.style.opacity = "1";
			  elem.style.transform = "translateY(-50px)"; 
			});
		  }, 1000); 
  
		  
		  observer.disconnect();
		}
	  });
	}, observerOptions);
  
	observer.observe(triggerElement);
  });
  
//-------------------------------------------
//hamburger menu smooth scroll
document.addEventListener("DOMContentLoaded", function() {
    function scrollToElement(elementId) {
      const target = document.querySelector(elementId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    }

    const menuLink1 = document.getElementById("menu-link");
    const menuLink2 = document.getElementById("menu-link1");
    const menuLink3 = document.getElementById("menu-link2");

    if (menuLink1) {
      menuLink1.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement("#divider-1");
      });
    }

    if (menuLink2) {
      menuLink2.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement("#divider-3");
      });
    }

    if (menuLink3) {
      menuLink3.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement("#divider-4");
      });
    }
  });

// Open CV on click
  function openCV() {
    window.open('/images/CV.pdf', '_blank');
  }
  
  
  
  
  
  
  
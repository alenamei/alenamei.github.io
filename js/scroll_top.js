/*
  Scroll to Top JavaScript Code
*/

// Scroll to top on page unload
window.addEventListener('beforeunload', function () {
	window.scrollTo(0, 0);
  });
  
  // Scroll to top button functionality
  document.addEventListener('DOMContentLoaded', function() {
	const button = document.getElementById('scrollToTopButton');
  
	// Add click event listener to the scroll to top button
	button.addEventListener('click', function() {
	  scrollToTop(500); 
	});
  
	// Function to smoothly scroll to the top of the page
	function scrollToTop(duration) {
	  const scrollToTop = window.setInterval(function() {
		const currentPosition = window.pageYOffset;
		if (currentPosition > 0) {
		  window.scrollBy(0, -50); 
		} else {
		  window.clearInterval(scrollToTop); 
		}
	  }, 10);
	}
  });
  
// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Increment slide index
  slideIndex++;
  
  // Reset to first slide if at end
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Show current slide and activate corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

// Manual slide control with dots
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Add click event to dots
document.addEventListener('DOMContentLoaded', function() {
  let dots = document.getElementsByClassName('dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
      currentSlide(i + 1);
    });
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});
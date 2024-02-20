var slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
  showSlide((slideIndex -= 1));
}

function nextSlide() {
  showSlide((slideIndex += 1));
}

function showSlide(index) {
  var slides = document.getElementsByClassName("slideshow-image");
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Auto-advance slides every 2 seconds
setInterval(function () {
  nextSlide();
}, 2000);

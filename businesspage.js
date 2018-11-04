var slideIndex = 1;//index of slideshow
showSlideShow(slideIndex);
function plusSlides(n){
  showSlideShow(slideIndex +=n);
}
function currentSlide(n)
{
  showSlideShow(slideIndex = n);
}
function showSlideShow(n)
{
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1){
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

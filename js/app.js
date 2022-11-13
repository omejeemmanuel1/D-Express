var  slideIndex = 0;
showslides();

function showslides() {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("slider");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showslides, 2000); // Change image every 2 seconds
} 
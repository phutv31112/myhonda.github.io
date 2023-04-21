let mybutton = document.getElementById("btnBack");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    // document.getElementById("intro-left").style.animation="turn-left 2s";
    // document.getElementById("intro-right").style.animation="turn-right 2s";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 
function openSearch(){
  var search  = document.getElementById("search-area");
  search.classList.toggle('active');
}

function enterCar(id){
  document.getElementById(id).src=`./img/${id}-hover.png`
}
function leaveCar(id){
  document.getElementById(id).src=`./img/${id}.png`
}

document.getElementById("intro").onmouseenter=()=>{
    document.getElementById("intro-left").style.animation="turn-left 2s";
    document.getElementById("intro-right").style.animation="turn-right 2s";
}





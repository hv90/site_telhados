var slideIndex = 1;
var slideIndex2 = 1;

var myTimer;
var myTimer2;

const seconds = 2000;

var myThumbsContainer;

var movedownElement1, movedownElement2, movedownElement3;

window.addEventListener("load",function() {
    var i;

    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, seconds);

    showSlides2(slideIndex2);
    myTimer2 = setInterval(function(){plusSlides2(1)}, seconds);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    myThumbsContainer = document.getElementsByClassName('myThumbs');

    mySlides2Container = document.getElementsByClassName('mySlides2');

    movedownContainerA = document.getElementById('movedownA');
    movedownContainerA.addEventListener('mouseover', movedownA);
    movedownContainerA.addEventListener('mouseleave', moveupA);

    movedownContainerB = document.getElementById('movedownB');
    movedownContainerB.addEventListener('mouseover', movedownB);
    movedownContainerB.addEventListener('mouseleave', moveupB);
    
    movedownElement1 = document.getElementById('movedown1');
    movedownElement2 = document.getElementById('movedown2');
    movedownElement3 = document.getElementById('movedown3');
    movedownElement4 = document.getElementById('movedown4');
    movedownElement5 = document.getElementById('movedown5');
    movedownElement6 = document.getElementById('movedown6');
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    for(i = 0; i < myThumbsContainer.length; i++){
      myThumbsContainer[i].addEventListener('mouseenter', pause);
      myThumbsContainer[i].addEventListener('mouseleave', resume);
    }

    for(i = 0; i < mySlides2Container.length; i++){
      mySlides2Container[i].addEventListener('mouseenter', pause2);
      mySlides2Container[i].addEventListener('mouseleave', resume2);
    }
    
})

function movedownA(){
  movedownElement1.style.marginTop = '10%'
  movedownElement1.innerHTML = '<img src="images/services/1.jpg" alt="services 1" class="img-fluid">'+
                                '<br><img src="images/arabesco.png"  style=\'margin-left:40%\'><br><h3 style=\'text-align: center;\'>Descrição do serviço 1<h3>'
  movedownElement2.style.marginTop = '20%'
  movedownElement2.innerHTML = '<img src="images/services/2.jpg" alt="services 2" class="img-fluid">'+
                                '<br><img src="images/arabesco.png"  style=\'margin-left:40%\'><br><h3 style=\'text-align: center;\'>Descrição do serviço 2<h3>'
  movedownElement3.style.marginTop = '30%'
  movedownElement3.innerHTML = '<img src="images/services/3.jpg" alt="services 3" class="img-fluid">'+
                                '<br><img src="images/arabesco.png"  style=\'margin-left:40%\'><br><h3 style=\'text-align: center;\'>Descrição do serviço 3<h3>'
}

function movedownB(){
  movedownElement4.style.marginTop = '30%'
  movedownElement4.innerHTML = '<img src="images/services/4.jpg" alt="services 4" class="img-fluid">'+
                                '<br><img src="images/arabesco.png"  style=\'margin-left:40%\'><br><h3 style=\'text-align: center;\'>Descrição do serviço 4<h3>'
  movedownElement5.style.marginTop = '20%'
  movedownElement5.innerHTML = '<img src="images/services/5.jpg" alt="services 5" class="img-fluid">'+
                                '<br><img src="images/arabesco.png" style=\'margin-left:40%\'><br><h3 style=\'text-align: center;\'>Descrição do serviço 5<h3>'
  movedownElement6.style.marginTop = '10%'
  movedownElement6.innerHTML = '<img src="images/services/6.jpg" alt="services 6" class="img-fluid">'+
                              '<br><img src="images/arabesco.png"  style=\'margin-left:40%\'><br><h3 style=\'text-align: center;\'>Descrição do serviço 6<h3>'
}

function moveupA(){
  movedownElement1.style.marginTop = '0%'
  movedownElement1.innerHTML = '<img src="images/services/1.jpg" alt="services 1" class="img-fluid">'+
                               '<div id=\'services-content1\'></div>'
  movedownElement2.style.marginTop = '0%'
  movedownElement2.innerHTML = '<img src="images/services/2.jpg" alt="services 2" class="img-fluid">'+
                              '<div id=\'services-content2\'></div>'
  movedownElement3.style.marginTop = '0%'
  movedownElement3.innerHTML = '<img src="images/services/3.jpg" alt="services 3" class="img-fluid">'+
                              '<div id=\'services-content3\'></div>'
}

function moveupB(){
  movedownElement4.style.marginTop = '0%'
  movedownElement4.innerHTML = '<img src="images/services/4.jpg" alt="services 4" class="img-fluid">'+
                               '<div id=\'services-content4\'></div>'
  movedownElement5.style.marginTop = '0%'
  movedownElement5.innerHTML = '<img src="images/services/5.jpg" alt="services 5" class="img-fluid">'+
                              '<div id=\'services-content5\'></div>'
  movedownElement6.style.marginTop = '0%'
  movedownElement6.innerHTML = '<img src="images/services/6.jpg" alt="services 6" class="img-fluid">'+
                              '<div id=\'services-content6\'></div>'
}

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  //console.log('n = ' + n + ' si = ' + slideIndex);
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, seconds);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, seconds);
  }
}

function plusSlides2(n){
  //console.log('n2 = ' + n + ' si2 = ' + slideIndex2);
  clearInterval(myTimer2);
  if (n < 0){
    showSlides2(slideIndex2 -= 1);
  } else {
   showSlides2(slideIndex2 += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  if (n === -1){
    myTimer2 = setInterval(function(){plusSlides2(n + 2)}, seconds);
  } else {
    myTimer2 = setInterval(function(){plusSlides2(n + 1)}, seconds);
  }
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  //console.log('|slides| = ' + slides.length);

  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides2(n){
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");

  //console.log('|slides2| = ' + slides.length);

  if (n > slides.length) {slideIndex2 = 1;}
  if (n < 1) {slideIndex2 = slides.length;}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}

pause = () => {
 // console.log('opa, pausou');
  clearInterval(myTimer);
}

pause2 = () => {
 // console.log('opa, pausou2');
  clearInterval(myTimer2);
}

resume = () =>{
 // console.log('opa, soltou');
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, seconds);
}

resume2 = () =>{
 // console.log('opa, soltou2');
  clearInterval(myTimer2);
  myTimer2 = setInterval(function(){plusSlides2(slideIndex2)}, seconds);
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, seconds);
  showSlides(slideIndex = n);
}

function currentSlide2(n){
  clearInterval(myTimer);
  myTimer2 = setInterval(function(){plusSlides2(n + 1)}, seconds);
  showSlides(slideIndex2 = n);
}
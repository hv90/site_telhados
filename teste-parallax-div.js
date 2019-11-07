var movedown2, movedown3, content2, content3;
var i = 0;

window.addEventListener("load", function () {
    rows = document.getElementsByClassName('row')
    rows[1].addEventListener('mouseover',  helloworld);
    rows[1].addEventListener('mouseleave',  helloworld2);
    movedown2 = document.getElementById('movedown2');
    movedown3 = document.getElementById('movedown3');
    animation = document.getElementById('animation');
    content2 = document.getElementById('content2');
    content3 = document.getElementById('content3');
   
})

function helloworld(){
    movedown2.style.marginTop = "20%";
    content2.innerHTML = "<p>here is my content huh, motherfuckeeeer!</p>"
    movedown3.style.marginTop = "40%";    
}

function helloworld2(){
    movedown2.style.marginTop = "0%";
    content2.innerHTML = "";
    movedown3.style.marginTop = "0%";
}
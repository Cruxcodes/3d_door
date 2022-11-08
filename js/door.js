var door = document.querySelector('.doorOpen');
var open = document.querySelector('.openButton');
var close = document.querySelector('.closeButton');
var audio =  document.querySelector('.audio');

open.addEventListener('click',doorOpen);
close.addEventListener('click',doorClose);



function doorClose(){
    door.classList.add('close');
    door.classList.remove('open');
}
function doorOpen(){
    door.classList.remove('close');
    door.classList.add('open');
    audio.play();
}

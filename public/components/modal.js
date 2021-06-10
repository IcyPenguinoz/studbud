//code adapted from: https://www.youtube.com/watch?v=KjQ8uvAt9kQ&t=534s&ab_channel=DevEdDevEd

//Declaration of variables taken from html file
var modalBtn = document.querySelector('#modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('#modal-close');

var modalBtn2 = document.querySelector('#modal-btn2');
var modalBg2 = document.querySelector('.modal-bg2');
var modalClose2 = document.querySelector('#modal-close2');

var modalBtn3 = document.querySelector('#modal-btn3');
var modalBg3 = document.querySelector('.modal-bg3');
var modalClose3 = document.querySelector('#modal-close3');


//eventListener used to listen to when user has clicked plus button which pop ups modal box
modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
    console.log(modalBg);

});

//Closes modal box when the user clicks the "X" on the top right
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');

});

modalBtn2.addEventListener('click', function(){
    modalBg2.classList.add('bg-active2');
    console.log(modalBtn2);

});

modalClose2.addEventListener('click', function(){
    modalBg2.classList.remove('bg-active2');

});

modalBtn3.addEventListener('click', function(){
    modalBg3.classList.add('bg-active3');
    console.log(modalBtn3);

});

modalClose3.addEventListener('click', function(){
    modalBg3.classList.remove('bg-active3');

});
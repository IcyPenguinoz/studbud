var modalBtn = document.querySelector('#modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('#modal-close');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
    console.log(modalBg);

});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');

});
let btn = document.querySelector('button');
let modalBox = document.querySelector('.modal-parent');
let closeBtn = document.querySelector('span');
let section = document.querySelector('section');

console.log(closeBtn)

btn.addEventListener('click' , function(){
    modalBox.style.display = 'block';
    section.style.filter = 'blur(10px)'
});


closeBtn.addEventListener('click' , function(){
    modalBox.style.display = 'none';
    section.style.filter = 'blur(0px)';
});

window.addEventListener('keydown' , function(event){
    if(event.keyCode === 27){
        modalBox.style.display = 'none';
        section.style.filter = 'blur(0px)';
    }
    
});
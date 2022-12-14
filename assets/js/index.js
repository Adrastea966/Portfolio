// Active modal
const modalViews = document.querySelectorAll('.servicios-clic'),
      modalBtns = document.querySelectorAll('.btn-servicios'),
      modalClose = document.querySelectorAll('.close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv =>{
            mv.classList.remove('active-modal')
        }))
    })
})

//animacion - estrella

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('estrella');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/3.5;

    if(posicionObj1 <= tamañoDePantalla){
        animacion.style.animation = 'rotar 2s ease-in-out'
    }
})
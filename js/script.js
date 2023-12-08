const body = document.body;
const switchCircle = document.querySelector('.switch-circle');
const titulo = document.querySelector('.title-header');
const slider = document.querySelector('.slider');
const main = document.querySelector('.main');
const section = document.querySelector('.image-text-font');
const buttonslider = document.getElementById('slider-button');



const switchDark = () => {
    body.classList.toggle('dark-body');
    switchCircle.classList.toggle('dark-switch-circle');
    titulo.classList.toggle('dark-title-header');
    slider.classList.toggle('dark-slider');
    main.classList.toggle('dark-main');
    section.classList.toggle('dark-image-text-font');

}
buttonslider.addEventListener('click', switchDark);


/*
buttonslider.addEventListener('click', () => {
    switchCircle.classList.toggle('.dark-switch-circle');
})
*/
const switchCircle = document.querySelector('.switch-circle');
const titulo = document.querySelector('.title-header');
const slider = document.querySelector('.slider');
const main = document.querySelector('.main');
const section = document.querySelector('.image-text-font');
const buttonslider = document.getElementById('slider-button');

const switchDark = () => {
    switchCircle.classList('dark-switch-circle');
    titulo.classList('dark-title-header');
    slider.classList('dark-slider');
    main.classList('dark-main');
    section.classList('dark-image-text-font');

}
buttonslider.addEventListener('click', switchDark);
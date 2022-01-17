const showScrollMenu = () => {
    document.querySelector('.header__nav').classList.add('header__nav--white');
    document.querySelectorAll('.header__btn-chadge').forEach((el) => el.classList.add('header__top-link-color'));
    document.querySelectorAll('.header__slash').forEach((el) => el.classList.add('header__top-link-color'));
    document.querySelectorAll('.header__link').forEach((el) => el.classList.add('header__top-link-color'));
    document.querySelectorAll('.header__reg-link').forEach((el) => el.classList.add('header__top-link-color'));
    document.querySelector('.header__logo').classList.add('header__logo--close');
    document.querySelector('.header__logo-color').classList.remove('header__logo--close');
    document.querySelectorAll('.header__bottom-link').forEach((el) => el.classList.add('header__bottom-link-color'));
    document.querySelector('.header__burger-svg').classList.add('header__burger-svg--black');
}

const closeScrollMenu = () => {
    document.querySelector('.header__nav').classList.remove('header__nav--white');
    document.querySelectorAll('.header__btn-chadge').forEach((el) => el.classList.remove('header__top-link-color'));
    document.querySelector('.header__slash').classList.remove('header__top-link-color');
    document.querySelectorAll('.header__link').forEach((el) => el.classList.remove('header__top-link-color'));
    document.querySelectorAll('.header__reg-link').forEach((el) => el.classList.remove('header__top-link-color'));
    document.querySelector('.header__logo').classList.remove('header__logo--close');
    document.querySelector('.header__logo-color').classList.add('header__logo--close');
    document.querySelectorAll('.header__bottom-link').forEach((el) => el.classList.remove('header__bottom-link-color'));
    document.querySelector('.header__burger-svg').classList.remove('header__burger-svg--black');
}

const burgerBtn = document.querySelector('.header__burger');

burgerBtn.addEventListener('click', () => {
    document.querySelectorAll('.header__burger-svg').forEach((el) => el.classList.toggle('header__burger-svg--hide'));
    document.querySelector('.header__link-wrapper').classList.toggle('header__menu-toggle');
    document.querySelector('.header__top-item').classList.toggle('header__menu-toggle');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1 && window.screen.width >= 1024) {
        showScrollMenu();
    }
    else {
        closeScrollMenu();
    }
});
$(document).ready(function(){
    $('.slider__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        initialSlide: 0,
        infinite: true
    });
  });
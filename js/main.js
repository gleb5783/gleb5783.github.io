const cardTemplate = document.querySelector('#card').content.querySelector('.card__item');
const cardList = document.querySelector('.card__list');
const addBtn = document.querySelector('.card__load-more-btn');

const fragment = document.createDocumentFragment();

const number = () => {
    return Math.round(Math.random() * (101 - 0) + 0);
}

function addNewCard () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json()
    })
    .then((response) => {
        for (let i = 1; i < 6; i++) {
            const cardElement = cardTemplate.cloneNode(true);
            cardElement.querySelector('h4').textContent = response[number()].title;
            cardElement.querySelector('p').textContent = response[number()].body;
            fragment.appendChild(cardElement);
        }
    cardList.appendChild(fragment);
  });
}

addBtn.addEventListener('click', addNewCard);
$(document).ready(function(){
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };

    $("#tel").click(function(){
        $(this).setCursorPosition(3);
      }).mask("+7(999) 999-9999");
      $("#tel").mask("+7(999) 999-9999");
});
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__link-list');
const btnGroup = document.querySelector('.header__items--order-3');

let openMenu = () => {
    menu.classList.toggle('header__link-list--toggle');

    if (window.innerWidth <= 767) {
        btnGroup.classList.toggle('header__items--hidden');
    }
}

burger.addEventListener('click', openMenu);
const ESC_BUTTON = 'Esc';
const ESCAPE_BUTTON = 'Escape';
const popup = document.querySelector('.popup');
const body = document.querySelector('.body');
const closePopupBtn = document.querySelector('.popup__close-btn');
const applicationBtn = document.querySelectorAll('.btn-application');

function tabIndexOn () {
    document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', '-1'));
    popup.querySelectorAll('*').forEach((a) => a.setAttribute('tabindex', 'auto'));
  }
  
  function tabIndexOff () {
    document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', 'auto'));
  }

let isEscEvent = (evt) => {
    return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
}

let closeEscPopup = (evt) => {
    if(isEscEvent(evt)) {
        closePopup();
        tabIndexOff();
    }
}

let closeClickPopup = (evt) => {
    if (evt.target === popup) {
        closePopup();
        tabIndexOff();
    }
}

let openPopup = () => {
    popup.classList.remove('popup--hidden');
    body.classList.add('body--overflow');
    document.addEventListener('keydown', closeEscPopup);
    document.addEventListener('click', closeClickPopup);
    tabIndexOn();
}

let closePopup = () => {
    popup.classList.add('popup--hidden');
    body.classList.remove('body--overflow');
    document.removeEventListener('keydown', closeEscPopup);
    document.removeEventListener('click', closeClickPopup);
    tabIndexOff();
}

applicationBtn.forEach((el) => {
    el.addEventListener('click', openPopup);
});

closePopupBtn.addEventListener('click', closePopup);
$(document).ready(function(){
    $('.main-content__slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
    });
    
    document.querySelector('#slick-slide-control00').innerText = 'Dogie coin';
    document.querySelector('#slick-slide-control01').innerText = 'Падение';
    document.querySelector('#slick-slide-control02').innerText = 'Возвращение';
  });
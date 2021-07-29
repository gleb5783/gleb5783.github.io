let select = function () {
  let selectHeader = document.querySelectorAll('.main-form-order__select__select-header');
  let selectItem = document.querySelectorAll('.main-form-order__select-item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.main-form-order__select'),
          currentText = select.querySelector('.main-form-order__select-current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};


select();

let slider = document.querySelector('#range');
let sliderValue = document.querySelector('#value');

sliderValue.innerText = slider.value + " %";

slider.oninput = function() {
  sliderValue.innerText = this.value + " %";
}

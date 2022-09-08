const formElem = document.querySelector('.popup__form-profile');

const formInput = formElem.querySelector('.popup__input');

const formError = formElem.querySelector(`.${formInput.id}-error`);

const showError = (input, errorMessage) => {
    input.classList.add('popup__input_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__error_active');
  };
  
  const hideError = (input) => {
    input.classList.remove('popup__input_error');
    formError.classList.remove('popup__error_active');
    formError.textContent = '';
  };
  
  const checkInputValidity = () => {
    if (!formInput.validity.valid) {
      showError(formInput, formInput.validationMessage);
    } else {
      hideError(formInput);
    }
  };

  

formInput.addEventListener('input', function (evt) {
    checkInputValidity();
});

formElem.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  
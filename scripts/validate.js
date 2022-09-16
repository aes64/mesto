const initialConfig = {
  buttonElement:".popup__form-submit",
  popupForm:".popup__form",
  popupInput:".popup__input",
  popupFormSubmit:".popup__form-submit",
  popupButtonError:"popup__button-save_type_error",
  popupInputError:"popup__input_type_error",
  popupErrorActive:"popup__error_active",
}
const showInputError = (formElement, inputs, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputs.id}-error`);
  inputs.classList.add(config.popupInputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.popupErrorActive);
};

const hideInputError = (formElement, inputs, config) => {
  const errorElement = formElement.querySelector(`.${inputs.id}-error`);
  inputs.classList.remove(config.popupInputError);
  errorElement.classList.remove(config.popupErrorActive);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputs, config) => {
  if (!inputs.validity.valid) {
    showInputError(formElement, inputs, inputs.validationMessage, config);
  } else {
    hideInputError(formElement, inputs, config);
  }
};

const setEventListeners = (form,config) => {
  const inputList = Array.from(form.querySelectorAll(config.popupInput));
  const buttonElement = form.querySelector(config.popupFormSubmit);
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(form, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.popupForm));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement,config);
  });
};

enableValidation(initialConfig);

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputs, button, config) {
  if (hasInvalidInput(inputs)) {
    button.classList.add(config.popupButtonError);
    button.setAttribute("disabled", "true");
  } else {
    button.classList.remove(config.popupButtonError);
    button.removeAttribute("disabled", "true");
  }
}
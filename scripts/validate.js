const initialConfig = {
  buttonElement:".popup__form-submit",
  popupForm:".popup__form",
  popupInput:".popup__input",
  popupFormSubmit:".popup__form-submit",
}
const showInputError = (formElement, inputs, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputs.id}-error`);
  inputs.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_active");
};

const hideInputError = (formElement, inputs) => {
  const errorElement = formElement.querySelector(`.${inputs.id}-error`);
  inputs.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputs) => {
  if (!inputs.validity.valid) {
    showInputError(formElement, inputs, inputs.validationMessage);
  } else {
    hideInputError(formElement, inputs);
  }
};

const setEventListeners = (form,config) => {
  const inputList = Array.from(form.querySelectorAll(config.popupInput));
  const buttonElement = form.querySelector(config.popupFormSubmit);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(form, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.popupForm));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement,initialConfig);
  });
};

enableValidation(initialConfig);

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputs, button) {
  if (hasInvalidInput(inputs)) {
    button.classList.add("popup__button-save_type_error");
    button.setAttribute("disabled", "true");
  } else {
    button.classList.remove("popup__button-save_type_error");
    button.removeAttribute("disabled", "true");
  }
}


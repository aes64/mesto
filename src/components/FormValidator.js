export class FormValidator {
  constructor(validationConfig, formElement) {
    this._popupInput = validationConfig.popupInput;
    this._buttonElement = validationConfig.buttonElement;
    this._popupButtonError = validationConfig.popupButtonError;
    this._popupInputError = validationConfig.popupInputError;
    this._popupErrorActive = validationConfig.popupErrorActive;
    this._formElement = document.querySelector(formElement);
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._popupInput)
    );
    this._submitButtonElement = this._formElement.querySelector(
      this._buttonElement
    );
  }

  _showInputError = (input, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._popupInputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._popupErrorActive);
  };

  hideInputError = (input) => {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(this._popupInputError);
    errorElement.classList.remove(this._popupErrorActive);
    errorElement.textContent = "";
  };

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this.hideInputError(input);
    }
  };

  _setEventListeners = () => {
    this.toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this.toggleButtonState();
      });
    });
  };

  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  disablePopupSubmitButton = () => {
    this._submitButtonElement.classList.add(this._popupButtonError);
    this._submitButtonElement.disabled = true;
  };

  enablePopupSubmitButton = () => {
    this._submitButtonElement.classList.remove(this._popupButtonError);
    this._submitButtonElement.disabled = false;
  };

  toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disablePopupSubmitButton();
    } else {
      this.enablePopupSubmitButton();
    }
  };

  enableValidation = () => {
    this._setEventListeners();
  };
  resetValidation() {
    this._formElement.reset();
    this.toggleButtonState();
    this.hideInputError();
  }
}

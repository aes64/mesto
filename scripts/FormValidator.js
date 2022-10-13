class FormValidator {
  constructor(initialObj, formElement) {
    (this._popupForm = initialObj.popupForm),
      (this._popupInput = initialObj.popupInput),
      (this._buttonElement = initialObj.buttonElement),
      (this._popupButtonError = initialObj.popupButtonError),
      (this._popupInputError = initialObj.popupInputError),
      (this._popupErrorActive = initialObj.popupErrorActive);
    this._formElement = formElement;
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

  _hideInputError = (input) => {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(this._popupInputError);
    errorElement.classList.remove(this._popupErrorActive);
    errorElement.textContent = "";
  };

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
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

  toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this.disabledPopupSubmitButton();
    } else {
      this.enablePopupSubmitButton();
    }
  };

  disabledPopupSubmitButton = () => {
    this._submitButtonElement.classList.add(this._popupButtonError);
    this._submitButtonElement.disabled = true;
  };

  enablePopupSubmitButton = () => {
    this._submitButtonElement.classList.remove(this._popupButtonError);
    this._submitButtonElement.disabled = false;
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}
export { FormValidator };

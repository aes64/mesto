import Popup from "./popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
    });
  }
}

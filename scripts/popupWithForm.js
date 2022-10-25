import Popup from "./popup.js";

export class PopupWithForm extends Popup{
  constructor(popupSelector, {handleSubmitForm}) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = this._popup.querySelectorAll(".popup__input");
    this._handleSubmitForm = handleSubmitForm;
    this._inputsByName = this._getInputsByName;
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(input => {
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
  this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
  })
}

 _getInputsByName() {
  this._inputListByName = {};
  this._inputList.forEach(input => {
      this._inputListByName[input.name] = input;
  });
  return this._inputListByName;
}

setData(formData) {
  this._InputsByName;
  Object.keys(formData).forEach(key => { this._inputListByName[key] = formData[key] });
}
}
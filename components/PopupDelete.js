import Popup from "./Popup.js";
class popupDelete extends Popup{
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
  }

  deleteElement() {
    this.card.remove()
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.cardId);
      this.deleteElement()
    });
  }
}

export { popupDelete }
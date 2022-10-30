export default class Popup {
  constructor(popupSelector){
    this._popup = popupSelector;
  }

  _handleOverlayClose(evt){
    if (evt.target.classList.contains('popup_is-opened')) {
      this.close(evt.target)
    }
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }

  }
  open() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose.bind(this))
  }

  close() {
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  setEventListeners() {
    this._popup.addEventListener('click', this._handleOverlayClose.bind(this));
    this._popup
      .querySelector('.popup__button-close')
      .addEventListener('click', () => {
        this.close();
      });
    }
}
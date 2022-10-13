import {buttonClosePhoto, popupTitle, popupImg, popupPhoto} from "./index.js";
class Card {
  constructor(name, link, elemSelector, openPopup, closePopup) {
    this._name = name;
    this._link = link;
    this._elemSelector = elemSelector;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
  }

  _getTemplate() {
    const elem = document
      .querySelector(this._elemSelector)
      .content.querySelector(".gallery__element")
      .cloneNode(true);
    return elem;
  }

  generateElem() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const elemPhoto = this._element.querySelector(".gallery__photo");
    const elemName = this._element.querySelector(".gallery__element-title");
    elemName.textContent = this._name;
    elemPhoto.src = this._link;
    elemPhoto.alt = this._name;

    return this._element;
  }

  _setPopupPhoto() {
    this._openPopup(popupPhoto);
    popupTitle.textContent = this._name;
    popupImg.src = this._link;
    popupImg.alt = this._name;
  }

  _deleteElemHandler(evt) {
    evt.target.closest(".gallery__element").remove();
  }

  _addButtonsOnElem() {
    const deleteButton = this._element.querySelector(".gallery__button-delete");
    deleteButton.addEventListener("click", (evt) => {
      this._deleteElemHandler(evt);
    });

    const likeButton = this._element.querySelector(".gallery__button-like");
    likeButton.addEventListener("click", (evt) => {
      this._likeElemHandler(evt);
    });
  }

  _setEventListeners() {
    this._addButtonsOnElem();
    this._element
      .querySelector(".gallery__photo")
      .addEventListener("click", () => {
        this._setPopupPhoto();
      });
    buttonClosePhoto.addEventListener("click", () => {
      this._closePopup(popupPhoto);
    });
  }

  _likeElemHandler(evt) {
    evt.target.classList.toggle("gallery__button-like_active");
  }
}

export { Card };

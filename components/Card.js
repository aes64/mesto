class Card {
  constructor(name, link, handleCardClick, elemSelector) {
    this._name = name;
    this._link = link;
    this._elemSelector = elemSelector;
    this._handleCardClick = handleCardClick;
    
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
  _handleDeleteClick() {
    this._element.remove();
  }
  _setEventListeners() {
    const imgForClick = this._element.querySelector(".gallery__photo");

    imgForClick.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
    const deleteButton = this._element.querySelector(".gallery__button-delete");
    deleteButton.addEventListener("click", (evt) => {
      this._handleDeleteClick(evt);
    });
    const likeButton = this._element.querySelector(".gallery__button-like");
    likeButton.addEventListener("click", (evt) => {
      this._handleLikeClick(evt);
    });
  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle("gallery__button-like_active");
  }
}
export { Card };

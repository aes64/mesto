
class Card  {
  constructor(item, handleCardClick, handleCardLikeCounter,handleClickOpenPopupDelete, elemSelector) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes.length;
    this._elemSelector = elemSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardLikeCounter = handleCardLikeCounter;
    this.cardId = item._id;
    this._handleClickOpenPopupDelete = handleClickOpenPopupDelete;
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
    const counterLikes = this._element.querySelector(".gallery__counter-of-likes");
    counterLikes.textContent = this._likes;
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
      this._handleClickOpenPopupDelete(this.cardId, this._element);
    });
    const likeButton = this._element.querySelector(".gallery__button-like");
    likeButton.addEventListener("click", (evt) => {
      this._handleLikeClick(evt);
    });
  }

  _handleLikeClick(evt) {
      let operation = 'add';
      if (evt.target.classList.contains("gallery__button-like_active")) {
        operation = 'delete';   
      }
      this._handleCardLikeCounter(operation, this.cardId)
        .then((result) => {
          this._element.querySelector(".gallery__counter-of-likes").textContent = result.likes.length;
          evt.target.classList.toggle("gallery__button-like_active");
        });
    }

}
export { Card };

/* import { Section } from '../scripts/Section.js';
import { Card } from "../scripts/Card.js"; */
export {popupButtonEdit, buttonAddElem, initialCards, initialConfig}
const popupButtonEdit = document.querySelector(".profile__button-edit");
const buttonAddElem = document.querySelector(".profile__add-button");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const initialConfig = {
  buttonElement: ".popup__form-submit",
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  popupButtonError: "popup__button-save_type_error",
  popupInputError: "popup__input_type_error",
  popupErrorActive: "popup__error_active",
};



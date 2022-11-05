/* import { Section } from '../scripts/Section.js';
import { Card } from "../scripts/Card.js"; */
export {popupButtonEdit, buttonAddElem, initialConfig, gallery,nameProfile,descriptionProfile,avatarProfile}
const popupButtonEdit = document.querySelector(".profile__button-edit");
const buttonAddElem = document.querySelector(".profile__add-button");



const initialConfig = {
  buttonElement: ".popup__form-submit",
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  popupButtonError: "popup__button-save_type_error",
  popupInputError: "popup__input_type_error",
  popupErrorActive: "popup__error_active",
};

const gallery = document.querySelector('.gallery');

const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__caption');
const avatarProfile = document.querySelector('.profile__photo');



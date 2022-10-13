import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

export const buttonClosePhoto = document.querySelector(
  ".popup__button-close_type_photo-zoom"
);
export const popupPhoto = document.querySelector(".popup_photo-zoom");
export const popupImg = document.querySelector(".popup__img");
export const popupTitle = document.querySelector(".popup__title");
const buttonsClose = document.querySelectorAll(".popup__button-close");
const popupButtonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup_profile");
const formProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const captionInput = document.querySelector(".popup__input_type_caption");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");
const gallery = document.querySelector(".gallery");
const newElemName = document.querySelector(".popup__input_type_place-name");
const newElemLink = document.querySelector(".popup__input_type_link");
const formAddGalleryElem = document.querySelector(
  ".popup__form_gallery_change"
);
const popupGallery = document.querySelector(".popup_gallery");
const buttonAddElem = document.querySelector(".profile__add-button");
const popups = document.querySelectorAll(".popup");

const initialConfig = {
  buttonElement: ".popup__form-submit",
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  popupButtonError: "popup__button-save_type_error",
  popupInputError: "popup__input_type_error",
  popupErrorActive: "popup__error_active",
};

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupEsc);
}

function closePopupEsc(evt) {
  const popupOpened = document.querySelector(".popup_is-opened");
  if (evt.key === "Escape") {
    closePopup(popupOpened);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupEsc);
}

function addEventListenersForButtonsClose() {
  buttonsClose.forEach(function (el) {
    el.addEventListener("click", function (evt) {
      const eventTarget = evt.target.closest(".popup");
      closePopup(eventTarget);
    });
  });
}

addEventListenersForButtonsClose();

function openEditProfile() {
  nameInput.value = profileName.textContent;
  captionInput.value = profileCaption.textContent;
  openPopup(popupProfile);
}

function editProfileData(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCaption.textContent = captionInput.value;
  closePopup(popupProfile);
}

function createElement(name, link) {
  return new Card(
    name,
    link,
    "#template-form",
    openPopup,
    closePopup
  ).generateElem();
}

const renderElements = () => {
  initialCards.forEach((item) => {
    const newCard = createElement(item.name, item.link);
    gallery.prepend(newCard);
  });
};
renderElements();

popupButtonEdit.addEventListener("click", () => {
  openEditProfile();
  profileValidator.enableValidation();
  profileValidator.enablePopupSubmitButton();
  openPopup(popupProfile);
});
formProfile.addEventListener("submit", editProfileData);

formAddGalleryElem.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const newElem = createElement(newElemName.value, newElemLink.value);
  gallery.prepend(newElem);
  closePopup(popupGallery);
  evt.target.reset();
});
buttonAddElem.addEventListener("click", function () {
  openPopup(popupGallery);
  elemGalleryValidator.enableValidation();
  elemGalleryValidator.disabledPopupSubmitButton();
});
popups.forEach(function (elem) {
  elem.addEventListener("mousedown", function (evt) {
    if (
      evt.target === evt.currentTarget &&
      elem.classList.contains("popup_is-opened")
    ) {
      closePopup(elem);
    }
  });
});

const elemGalleryValidator = addFormValidation(popupGallery);
const profileValidator = addFormValidation(formProfile);

function addFormValidation(form) {
  return new FormValidator(initialConfig, form);
}

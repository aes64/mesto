export {
  popupButtonEdit,
  buttonAddElem,
  initialConfig,
  nameProfile,
  descriptionProfile,
  avatarProfile,
  buttonChangeAvatar,
  buttonSaveAvatar,
  buttonSaveProfile,
  buttonConfirm,
  gallerySaveButton,
};
const popupButtonEdit = document.querySelector(".profile__button-edit");
const buttonAddElem = document.querySelector(".profile__add-button");
const buttonChangeAvatar = document.querySelector(".profile__box-avatar");
const nameProfile = document.querySelector(".profile__name");
const descriptionProfile = document.querySelector(".profile__caption");
const avatarProfile = document.querySelector(".profile__photo");
const buttonSaveAvatar = document.querySelector(".popup__button-save-avatar");
const buttonSaveProfile = document.querySelector(".popup__button-save-profile");
const buttonConfirm = document.querySelector(".popup__button-delete-confirm");
const gallerySaveButton = document.querySelector(".popup__button-save-gallery");

const initialConfig = {
  buttonElement: ".popup__form-submit",
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  popupButtonError: "popup__button-save_type_error",
  popupInputError: "popup__input_type_error",
  popupErrorActive: "popup__error_active",
};



import "./index.css";
import {
  popupButtonEdit,
  buttonAddElem,
  buttonChangeAvatar,
} from "../utils/constants.js";
import {
  renderListCards,
  profileUserInfo,
  popupGallery,
  popupProfile,
  popupAvatar,
  popupAvatarValidator,
} from "../utils/utils.js";

popupButtonEdit.addEventListener("click", () => {
  const data = profileUserInfo.getUserInfo();
  document.querySelector(".popup__input_type_name").value = data.name;
  document.querySelector(".popup__input_type_caption").value = data.about;
  popupProfile.open();
});
popupGallery.setEventListeners();
buttonAddElem.addEventListener("click", () => {
  popupGallery.open();
});

popupProfile.setEventListeners();
renderListCards.renderItems();
buttonChangeAvatar.addEventListener("click", () => {
  popupAvatar.open();
  popupAvatar.setEventListeners();
  popupAvatarValidator.enableValidation();
});

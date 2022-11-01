import './index.css';
import { popupButtonEdit, buttonAddElem } from "../utils/constants.js";
import {
  renderListCards,
  profileUserInfo,
  galleryFormPopup,
  popupProfile,
} from "../utils/utils.js";

popupButtonEdit.addEventListener("click", () => {
  const data = profileUserInfo.getUserInfo();
  document.querySelector('.popup__input_type_name').value = data.name;
  document.querySelector('.popup__input_type_caption').value = data.description;
  popupProfile.open();
});
galleryFormPopup.setEventListeners();
buttonAddElem.addEventListener("click", () => {
  galleryFormPopup.open();
});

popupProfile.setEventListeners();
renderListCards.renderItems();


import './index.css';
import { popupButtonEdit, buttonAddElem } from "../utils/constants.js";
import {
  renderListCards,
  setValidationOnForms,
  profileUserInfo,
  galleryFormPopup,
  popupProfile,
  elemGalleryValidator,
} from "../utils/utils.js";

popupButtonEdit.addEventListener("click", () => {
  profileUserInfo.setFormUserInfo();
  popupProfile.open();
});
galleryFormPopup.setEventListeners();
buttonAddElem.addEventListener("click", () => {
  galleryFormPopup.open();
});

popupProfile.setEventListeners();
setValidationOnForms();
renderListCards.renderItems();

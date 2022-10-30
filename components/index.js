import {popupButtonEdit, buttonAddElem} from "../utils/constants.js"
import {renderListCards, profileValidator, profileUserInfo, galleryFormPopup, popupProfile, elemGalleryValidator} from '../utils/utils.js'
/* import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithForm } from "./popupWithForm.js";
import { PopupWithImage } from "./popupWithImage.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js"; */


/* function handleCardClick(name, link) {
  const popupPhotoZoom = new PopupWithImage(
    document.querySelector(".popup_photo-zoom")
  );
  popupPhotoZoom.open(name, link);
}  //utils 

const renderListCards = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.link,
        handleCardClick,
        "#template-form"
      );
      const cardElem = card.generateElem();
      renderListCards.addItem(cardElem);
    },
  },
  document.querySelector(".gallery")
);//utils
const profileValidator = new FormValidator(
  initialConfig,
  document.querySelector(".popup__form-profile")
);

const profileUserInfo = new UserInfo({
  userName: ".profile__name",
  userDescription: ".profile__caption",
});
const galleryFormPopup = new PopupWithForm(
  document.querySelector(".popup_gallery"),
  {
    handleFormSubmit: (inputCardsValues) => {
      const cardElement = createCard(inputCardsValues);
      renderListCards.addItem(cardElement);
      galleryFormPopup.close();
    },
  }
);

const createCard = (item) => {
  const addCardsList = new Card(
    item.name,
    item.link,
    handleCardClick,
    "#template-form"
  );
  const cardElement = addCardsList.generateElem();
  return cardElement;
};
const popupProfile = new PopupWithForm(
  document.querySelector(".popup_profile"),
  {
    handleFormSubmit: (inputs) => {
      profileUserInfo.setUserInfo(inputs.name, inputs.description);
      popupProfile.close(popupProfile.getInputValues());
      //profileValidator.removeValidation()
    },
  }
);


const elemGalleryValidator = new FormValidator(
  initialConfig,
  document.querySelector(".popup__form_gallery_change")
);//utils 
//utils  */

function setValidationOnForms(){
  profileValidator.enableValidation();
  profileValidator.enablePopupSubmitButton();
  elemGalleryValidator.enableValidation();
  elemGalleryValidator.disablePopupSubmitButton();
}//utils 

 //index.js
 popupButtonEdit.addEventListener("click", () => {
  profileUserInfo.setFormUserInfo();
  popupProfile.open();
  
});
galleryFormPopup.setEventListeners();
buttonAddElem.addEventListener("click", () => {
  galleryFormPopup.open();
});  //js

//utils 
popupProfile.setEventListeners();
setValidationOnForms()
renderListCards.renderItems();
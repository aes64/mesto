import { initialCards, initialConfig } from "../utils/constants.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
export {
  renderListCards,
  setValidationOnForms,
  profileValidator,
  profileUserInfo,
  galleryFormPopup,
  popupProfile,
  elemGalleryValidator,
};

function handleCardClick(name, link) {
  const popupPhotoZoom = new PopupWithImage(
    document.querySelector(".popup_photo-zoom")
  );
  popupPhotoZoom.open(name, link);
}

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
);
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
function setValidationOnForms() {
  profileValidator.enableValidation();
  profileValidator.enablePopupSubmitButton();
  elemGalleryValidator.enableValidation();
  elemGalleryValidator.disablePopupSubmitButton();
}

const elemGalleryValidator = new FormValidator(
  initialConfig,
  document.querySelector(".popup__form_gallery_change")
);

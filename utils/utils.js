import { initialConfig, gallery,nameProfile,descriptionProfile,avatarProfile } from "../utils/constants.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js"
export {
  renderListCards,
  profileValidator,
  profileUserInfo,
  galleryFormPopup,
  popupProfile,
  elemGalleryValidator,
};

function handleCardClick(name, link) {
  const popupPhotoZoom = new PopupWithImage(".popup_photo-zoom");
  popupPhotoZoom.open(name, link);
}
 

const api = new Api;
api.getInitialGallery().then((result) => {
 
  renderListCards.renderItems(result);
})
.catch((err) => {
  console.log(err);
});


const renderListCards = new Section(
  {
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
  ".gallery"
);
const profileValidator = new FormValidator(
  initialConfig, ".popup__form-profile"
);

  profileValidator.enableValidation()
profileValidator.enablePopupSubmitButton()

fetch('https://nomoreparties.co/v1/cohort-52/users/me',{
  headers: {
    authorization: '9fcfb2cc-6788-4de3-958e-87d26868b61e'
  }
})
.then(res => res.json())
.then((result) => {
  nameProfile.textContent = result.name;
  descriptionProfile.textContent = result.about;
  avatarProfile.src = result.avatar
});

const profileUserInfo = new UserInfo({
  userName: ".profile__name",
  userDescription: ".profile__caption",
});
const galleryFormPopup = new PopupWithForm(".popup_gallery",
  {
    handleFormSubmit: (inputCardsValues) => {
      const cardElement = createCard(inputCardsValues);
      renderListCards.addItem(cardElement);
      elemGalleryValidator.resetValidation();
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
const popupProfile = new PopupWithForm(".popup_profile",
  {
    handleFormSubmit: (inputs) => {
      profileUserInfo.setUserInfo(inputs.name, inputs.description);
      profileValidator.resetValidation();
      popupProfile.close();
    },
  }
);

const elemGalleryValidator = new FormValidator(
  initialConfig, ".popup__form_gallery_change"
);
elemGalleryValidator.enableValidation()

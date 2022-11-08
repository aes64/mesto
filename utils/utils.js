import { initialConfig,nameProfile,descriptionProfile,avatarProfile, buttonChangeAvatar, gallery } from "../utils/constants.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js"
import { popupDelete } from "../components/PopupDelete.js";
export {
  renderListCards,
  profileValidator,
  profileUserInfo,
  galleryFormPopup,
  popupProfile,
  elemGalleryValidator,
  popupAvatar
};

function handleCardClick(name, link) {
  const popupPhotoZoom = new PopupWithImage(".popup_photo-zoom");
  popupPhotoZoom.open(name, link);
}
 

const api = new Api;
api.getInitialGallery().then((result) => {
  renderListCards.renderItems(result);
  const cardList = document.querySelector('.gallery').querySelectorAll('.gallery__element');
  api.getInitialProfileData().then((profileData) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].owner._id !== profileData._id) {
        cardList[i].querySelector('.gallery__button-delete').remove();
      }
    }
  })
})
.catch((err) => {
  console.log(err);
});


const handleCardLikeCounter = api.setLikes.bind(api);


const renderListCards = new Section(
  {
    renderer: (item) => {
      const card = new Card(
        item,
        handleCardClick,
        handleCardLikeCounter,
        handleClickOpenPopupDelete,
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

/* const popupAvatarValidator = FormValidator(initialConfig, ".popup__change-avatar");
popupAvatarValidator.enableValidation() */

api.getInitialProfileData().
then((result) => {
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
    handleFormSubmit: () => {
      api.setNewCard(galleryFormPopup.getInputValues()).then((result) => {
      renderListCards.prependItem(createCard(result));
      elemGalleryValidator.resetValidation();
      galleryFormPopup.close();
    })
    .catch((err) => {
    console.log(err);
    });}
  }
); 

const popupAvatar = new PopupWithForm(".popup_avatar",
{handleFormSubmit:()=> {
  api.setNewAvatar(popupAvatar.getInputValues()).then((result) => {
    avatarProfile.src = result.avatar;
    popupAvatar.close()
  })
}})

buttonChangeAvatar.addEventListener('click', () => {
  popupAvatar.open()
  popupAvatar.setEventListeners();
})

const createCard = (item) => {
  const addCardsList = new Card(
    item,
    handleCardClick,
    handleCardLikeCounter,
    handleClickOpenPopupDelete,
    "#template-form"
  );
  const cardElement = addCardsList.generateElem();
  return cardElement;
};
const popupProfile = new PopupWithForm(".popup_profile",
  {
    handleFormSubmit: () => {
      api.setNewProfileData(popupProfile.getInputValues()).then((result) => {
      profileUserInfo.setUserInfo(result.name, result.about);
      profileValidator.resetValidation();
      popupProfile.close();})
    }
  });

const elemGalleryValidator = new FormValidator(
  initialConfig, ".popup__form_gallery_change"
);
elemGalleryValidator.enableValidation()

const popupDeleteConfirm = new popupDelete('.popup_delete-confirm',
{
  handleFormSubmit: (cardId) => {
    popupDeleteConfirm.close()
    return api.deleteCard(cardId);
}
})

function handleClickOpenPopupDelete(cardId, card) {
  popupDeleteConfirm.card = card;
  popupDeleteConfirm.cardId = cardId;
  popupDeleteConfirm.open();
  popupDeleteConfirm.setEventListeners()
}





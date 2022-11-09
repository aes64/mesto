import {
  initialConfig,
  nameProfile,
  descriptionProfile,
  avatarProfile,
  buttonSaveAvatar,
  buttonSaveProfile,
  buttonConfirm,
  gallerySaveButton
} from "./constants.js";
import { PopupWithImage } from "../components/popupWithImage.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { popupDelete } from "../components/PopupDelete.js";

export {
  renderListCards,
  profileValidator,
  profileUserInfo,
  popupGallery,
  popupProfile,
  elemGalleryValidator,
  popupAvatar,
  popupAvatarValidator,
};


const api = new Api();
api
  .getInitialGallery()
  .then((result) => {
    renderListCards.renderItems(result);
    const cardList = document
      .querySelector(".gallery")
      .querySelectorAll(".gallery__element");
    api.getInitialProfileData().then((profileData) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].owner._id !== profileData._id) {
          cardList[i].querySelector(".gallery__button-delete").remove();
        }
      }
    });
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

api.getInitialProfileData().then((result) => {
  nameProfile.textContent = result.name;
  descriptionProfile.textContent = result.about;
  avatarProfile.src = result.avatar;
});

const profileUserInfo = new UserInfo({
  userName: ".profile__name",
  userDescription: ".profile__caption",
});


const popupGallery = new PopupWithForm(".popup_gallery", {
  handleFormSubmit: () => {
    renderLoading(true, gallerySaveButton, "Сохранение...", "Сохранить");
    api
      .setNewCard(popupGallery.getInputValues())
      .then((result) => {
        renderListCards.prependItem(createCard(result));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, gallerySaveButton, "Сохранение...", "Сохранить");
        popupGallery.close();
      });
  },
});

const popupAvatar = new PopupWithForm(".popup_avatar", {
  handleFormSubmit: () => {
    renderLoading(true, buttonSaveAvatar, "Сохранение...", "Сохранить");
    api
      .setNewAvatar(popupAvatar.getInputValues())
      .then((result) => {
        avatarProfile.src = result.avatar;
      })
      .finally(() => {
        renderLoading(false, buttonSaveAvatar, "Сохранение...", "Сохранить");
        popupAvatar.close();
      });
  },
});


const popupProfile = new PopupWithForm(".popup_profile", {
  handleFormSubmit: () => {
    renderLoading(true, buttonSaveProfile, "Сохранение...", "Сохранить");
    api
      .setNewProfileData(popupProfile.getInputValues())
      .then((result) => {
        profileUserInfo.setUserInfo(result.name, result.about);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, buttonSaveProfile, "Сохранение...", "Сохранить");
        popupProfile.close();
      });
  },
});



const popupDeleteConfirm = new popupDelete(".popup_delete-confirm", {
  handleFormSubmit: (cardId) => {
    renderLoading(true, buttonConfirm, "Подождите...", "Да");

    return api
      .deleteCard(cardId)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, buttonConfirm, "Подождите...", "Да");
        popupDeleteConfirm.close();
      });
  },
});


const profileValidator = new FormValidator(
  initialConfig,
  ".popup__form-profile"
);
const popupAvatarValidator = new FormValidator(
  initialConfig,
  ".popup_avatar"
);

const elemGalleryValidator = new FormValidator(
  initialConfig,
  ".popup__form_gallery_change"
);

elemGalleryValidator.enableValidation();
profileValidator.enableValidation();
profileValidator.enablePopupSubmitButton();

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

function handleCardClick(name, link) {
  const popupPhotoZoom = new PopupWithImage(".popup_photo-zoom");
  popupPhotoZoom.open(name, link);
}

function handleClickOpenPopupDelete(cardId, card) {
  popupDeleteConfirm.card = card;
  popupDeleteConfirm.cardId = cardId;
  popupDeleteConfirm.open();
  popupDeleteConfirm.setEventListeners();
}

function renderLoading(isLoading, button, texting, text) {
  if (isLoading) {
    button.textContent = texting;
  } else {
    button.textContent = text;
  }
}
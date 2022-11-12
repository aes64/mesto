import "./index.css";
import {
  popupButtonEdit,
  buttonAddElem,
  buttonChangeAvatar,
  initialConfig,
  nameProfile,
  descriptionProfile,
  avatarProfile,
  buttonSaveAvatar,
  buttonSaveProfile,
  buttonConfirm,
  gallerySaveButton,
  inputName,
  inputCaption,
} from "../utils/constants.js";

import { renderLoading } from "../utils/utils.js";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupDelete } from "../components/PopupDelete.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-52",
  headers: {
    authorization: "9fcfb2cc-6788-4de3-958e-87d26868b61e",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getInitialGallery(), api.getInitialProfileData()])
  .then(([cardsData, profileData]) => {
    profileUserInfo.setUserInfo(profileData);
    for (let i = 0; i < cardsData.length; i++) {
      if (cardsData[i].owner._id !== profileData._id) {
        cardsData[i].isMy = false;
      }
      if (
        cardsData[i].likes
          .map((likeData) => likeData._id)
          .includes(profileData._id) === true
      ) {
        cardsData[i].isLiked = true;
      }
    }
    return cardsData;
  })
  .then((cardsData) => {
    renderListCards.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(err);
  });

const handleCardLikeCounter = api.setLikes.bind(api);

const renderListCards = new Section(
  {
    renderer: (item) => {
      const cardElem = createCard(item);
      renderListCards.addItem(cardElem);
    },
  },
  ".gallery"
);

const profileUserInfo = new UserInfo({
  userName: ".profile__name",
  userDescription: ".profile__caption",
  userAvatar: ".profile__photo",
});

const popupGallery = new PopupWithForm(".popup_gallery", {
  handleFormSubmit: () => {
    renderLoading(true, gallerySaveButton, "Сохранение...", "Сохранить");
    api
      .setNewCard(popupGallery.getInputValues())
      .then((result) => {
        renderListCards.prependItem(createCard(result));
      })
      .then(() => popupGallery.close())
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, gallerySaveButton, "Сохранение...", "Сохранить");
      });
  },
});

const popupAvatar = new PopupWithForm(".popup_avatar", {
  handleFormSubmit: () => {
    renderLoading(true, buttonSaveAvatar, "Сохранение...", "Сохранить");
    api
      .setNewAvatar(popupAvatar.getInputValues())
      .then((result) => {
        profileUserInfo.setUserInfo(result);
      })
      .then(() => popupAvatar.close())
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, buttonSaveAvatar, "Сохранение...", "Сохранить");
      });
  },
});

const popupProfile = new PopupWithForm(".popup_profile", {
  handleFormSubmit: () => {
    renderLoading(true, buttonSaveProfile, "Сохранение...", "Сохранить");
    api
      .setNewProfileData(popupProfile.getInputValues())
      .then((result) => {
        profileUserInfo.setUserInfo(result);
      })
      .then(() => popupProfile.close())
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, buttonSaveProfile, "Сохранение...", "Сохранить");
      });
  },
});

const popupDeleteConfirm = new PopupDelete(".popup_delete-confirm", {
  handleFormSubmit: (cardId, element) => {
    renderLoading(true, buttonConfirm, "Подождите...", "Да");

    return api
      .deleteCard(cardId)
      .then(() => element.remove())
      .then(() => popupDeleteConfirm.close())
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, buttonConfirm, "Подождите...", "Да");
      });
  },
});

const profileValidator = new FormValidator(
  initialConfig,
  ".popup__form-profile"
);
const popupAvatarValidator = new FormValidator(initialConfig, ".popup_avatar");

const elemGalleryValidator = new FormValidator(
  initialConfig,
  ".popup__form_gallery_change"
);

elemGalleryValidator.enableValidation();
profileValidator.enableValidation();
profileValidator.enablePopupSubmitButton();
popupAvatarValidator.enableValidation();

function createCard(item) {
  const addCardsList = new Card(
    item,
    handleCardClick,
    handleCardLikeCounter,
    handleClickOpenPopupDelete,
    "#template-form"
  );
  const cardElement = addCardsList.generateElem(item);
  return cardElement;
}
const popupPhotoZoom = new PopupWithImage(".popup_photo-zoom");

function handleCardClick(name, link) {
  popupPhotoZoom.open(name, link);
}

function handleClickOpenPopupDelete(cardId, card) {
  popupDeleteConfirm.card = card;
  popupDeleteConfirm.cardId = cardId;
  popupDeleteConfirm.open();
}

popupButtonEdit.addEventListener("click", () => {
  const data = profileUserInfo.getUserInfo();
  inputName.value = data.name;
  inputCaption.value = data.about;
  profileValidator.resetValidation();
  popupProfile.open();
});
popupGallery.setEventListeners();
popupDeleteConfirm.setEventListeners();
popupAvatar.setEventListeners();
popupProfile.setEventListeners();
popupPhotoZoom.setEventListeners();

buttonAddElem.addEventListener("click", () => {
  elemGalleryValidator.resetValidation();
  popupGallery.open();
});

buttonChangeAvatar.addEventListener("click", () => {
  popupAvatarValidator.resetValidation();
  popupAvatar.open();
});

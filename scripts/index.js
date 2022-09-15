const popupButtonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup_profile");
const formProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const captionInput = document.querySelector(".popup__input_type_caption");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");
const buttonsClose = document.querySelectorAll(".popup__button-close");
const gallery = document.querySelector(".gallery");
const buttonLike = document.querySelector(".gallery__button-like");
const popupPhoto = document.querySelector(".popup_photo-zoom");
const popupImg = document.querySelector(".popup__img");
const popupTitle = document.querySelector(".popup__title");
const newElemName = document.querySelector(".popup__input_type_place-name");
const newElemLink = document.querySelector(".popup__input_type_link");
const formAddGalleryElem = document.querySelector(".popup__form_gallery_change");
const popupGallery = document.querySelector(".popup_gallery");
const buttonAddElem = document.querySelector(".profile__add-button");
const templateElement = document.querySelector("#template-form").content.querySelector(".gallery__element");
const popups = document.querySelectorAll(".popup");
const profileButtonSave = document.querySelector(".popup__button-save-gallery");
const page = document.querySelector(".page");

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  page.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  })
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  page.removeEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
}

function addEventListenersForButtonsClose() {
  buttonsClose.forEach(function (el) {
    el.addEventListener("click", function (evt) {
      const eventTarget = evt.target.closest(".popup");
      closePopup(eventTarget);
    });
  });
}

addEventListenersForButtonsClose();

function openEditProfile() {
  nameInput.value = profileName.textContent;
  captionInput.value = profileCaption.textContent;
  openPopup(popupProfile);
}

function editProfileData(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCaption.textContent = captionInput.value;
  closePopup(popupProfile);
}

function createElement(name, link) {
  const template = templateElement.cloneNode(true);
  const imgElem = template.querySelector(".gallery__photo");
  const titleElem = template.querySelector(".gallery__element-title");
  const buttonLike = template.querySelector(".gallery__button-like");
  const deleteButton = template.querySelector(".gallery__button-delete");
  imgElem.setAttribute("src", link);
  imgElem.setAttribute("alt", name);
  titleElem.textContent = name;

  buttonLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("gallery__button-like_active");
  });

  deleteButton.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    const elem = eventTarget.closest(".gallery__element");
    elem.remove();
  });

  imgElem.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    popupImg.setAttribute("src", eventTarget.src);
    popupImg.setAttribute("alt", titleElem.textContent);
    popupTitle.textContent = titleElem.textContent;
    openPopup(popupPhoto);
  });

  return template;
}

function addNewElement(evt) {
  evt.preventDefault();
  gallery.prepend(createElement(newElemName.value, newElemLink.value));
  profileButtonSave.setAttribute("disabled", "true");
  profileButtonSave.classList.add("popup__button-save_type_error");
  closePopup(popupGallery);
  evt.target.reset();
}

function addInitialGallery() {
  initialCards.forEach(function (item) {
    const elemName = item.name;
    const elemLink = item.link;
    gallery.prepend(createElement(elemName, elemLink));
  });
}
addInitialGallery();

popupButtonEdit.addEventListener("click", openEditProfile);
formProfile.addEventListener("submit", editProfileData);
formAddGalleryElem.addEventListener("submit", addNewElement);

buttonAddElem.addEventListener("click", function () {
  openPopup(popupGallery);
});


popups.forEach(function (elem) {
  elem.addEventListener("mousedown", function (evt) {
    if (
      evt.target === evt.currentTarget &&
      elem.classList.contains("popup_is-opened")
    ) {
      closePopup(elem);
    }
  });
});

/* popups.forEach(function (el) {
  el.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape" && el.classList.contains("popup_is-opened")) {
      closePopup(el);
    }
  });
}); */

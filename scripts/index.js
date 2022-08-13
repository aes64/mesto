
const popupButtonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const captionInput = document.querySelector(".popup__input_type_caption");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");
const closeEditButton = document.querySelector(".popup__button-close");
const gallery = document.querySelector(".gallery");
const likeButton = document.querySelector(".gallery__button-like");
const popupPhoto = document.querySelector(".popup_photo-zoom");
const popupImg = document.querySelector(".popup__img");
const popupTitle = document.querySelector(".popup__title");
const closePopup = document.querySelector(".popup__button-close_type_photo-zoom");
const newElemName = document.querySelector(".popup__input_type_place-name");
const newElemLink = document.querySelector(".popup__input_type_link");
const addGalleryElemForm = document.querySelector(".popup__form_gallery_change");
const addElemButtonClose = document.querySelector(".popup__button-close-gallery");
const popupGallery = document.querySelector(".popup_gallery");
const addElemButton = document.querySelector(".profile__add-button");


function openEditProfile() {
    nameInput.value = profileName.textContent;
    captionInput.value = profileCaption.textContent;
    popupProfile.classList.add("popup_is-opened");
}


function closeEditProfile() {
    popupProfile.classList.remove("popup_is-opened");
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCaption.textContent = captionInput.value;
    closeEditProfile();
}

popupButtonEdit.addEventListener("click", openEditProfile)
closeEditButton.addEventListener("click", closeEditProfile)
formElement.addEventListener('submit', formSubmitHandler); 

function createElement(name, link) {
  const template = document.querySelector("#template-form").content.querySelector(".gallery__element").cloneNode(true);
  const imgElem = template.querySelector(".gallery__photo");
  const titleElem = template.querySelector(".gallery__element-title");
  const likeButton = template.querySelector(".gallery__button-like");
  const deleteButton = template.querySelector(".gallery__button-delete");
  imgElem.setAttribute("src",link);
  titleElem.textContent = name;
  
  

  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("gallery__button-like_active")
  })

  deleteButton.addEventListener("click", function(evt) {
    const eventTarget = evt.target;
    const elem = eventTarget.closest('.gallery__element');
    elem.remove();
  })

  imgElem.addEventListener("click", function(evt) {
    const eventTarget = evt.target;
    popupImg.setAttribute('src',eventTarget.src);
    popupImg.setAttribute('alt',eventTarget.src)
    popupTitle.textContent = titleElem.textContent;
    popupPhoto.classList.add("popup_is-opened");
  })

  closePopup.addEventListener("click", function() {
    popupPhoto.classList.remove("popup_is-opened");
  } )

  return template;
}

function addNewElement (evt) {
  evt.preventDefault();
  
  gallery.prepend(createElement(newElemName.value, newElemLink.value));
  evt.target.reset()
  popupGallery.classList.remove("popup_is-opened")
}

addGalleryElemForm.addEventListener("submit", addNewElement)

addElemButtonClose.addEventListener("click", function() {
  popupGallery.classList.remove("popup_is-opened");
})

addElemButton.addEventListener("click", function() {
  popupGallery.classList.add("popup_is-opened");
})

function addInitialGallery() {
  const initialCards = [
  {
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];  

  initialCards.forEach(function (item){
      const elemName = item.name;
      const elemLink = item.link;
      gallery.prepend(createElement(elemName, elemLink));
  })

}

addInitialGallery();




//всплытие поп-ап
const popupButtonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup");

function openEditProfile() {
    popupProfile.classList.add("popup__is-opened");
}

popupButtonEdit.addEventListener("click", openEditProfile)

//закрытие поп-ап
const closeEditButton = document.querySelector(".popup__button-close");

function closeEditProfile() {
    popupProfile.classList.remove("popup__is-opened");
}

closeEditButton.addEventListener("click", closeEditProfile)

//активный лайк

const likeButton = document.querySelector(".gallery__button-like")

function clickLikeButton() {
    likeButton.classList.toggle("gallery__button-like_active");
}

likeButton.addEventListener("click", clickLikeButton)

//смена данных профиля
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input-name");
const captionInput = document.querySelector(".popup__input-caption");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCaption.textContent = captionInput.value;
}


formElement.addEventListener('submit', formSubmitHandler); 



const popupButtonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const captionInput = document.querySelector(".popup__input_type_caption");
const profileName = document.querySelector(".profile__name");
const profileCaption = document.querySelector(".profile__caption");
const closeEditButton = document.querySelector(".popup__button-close");


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



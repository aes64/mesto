const popupButtonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup");

function openEditProfile() {
    popupProfile.classList.add("popup__is-opened");
}

popupButtonEdit.addEventListener("click", openEditProfile)


const closeEditButton = document.querySelector(".popup__button-close");

function closeEditProfile() {
    popupProfile.classList.remove("popup__is-opened");
}

closeEditButton.addEventListener("click", closeEditProfile)
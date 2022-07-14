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
const likeButton = document.querySelector(".gallery__button-like");

function clickLikeButton() {
    likeButton.classList.toggle("gallery__button-like_active");
}
likeButton.addEventListener("click", clickLikeButton);
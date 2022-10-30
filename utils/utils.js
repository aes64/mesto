
import { PopupWithImage } from "../scripts/popupWithImage.js";
export {handleCardClick}
function handleCardClick(name, link) {
  const popupPhotoZoom = new PopupWithImage(
    document.querySelector(".popup_photo-zoom")
  );
  popupPhotoZoom.open(name, link);
}
(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector(".profile__add-button"),n={buttonElement:".popup__form-submit",popupForm:".popup__form",popupInput:".popup__input",popupButtonError:"popup__button-save_type_error",popupInputError:"popup__input_type_error",popupErrorActive:"popup__error_active"};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".gallery");var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscCloseBinded=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_is-opened")&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscCloseBinded)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscCloseBinded)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",this._handleOverlayClose.bind(this)),this._popup.querySelector(".popup__button-close").addEventListener("click",(function(){e.close()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function c(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__img"),t._popupImgTitle=t._popup.querySelector(".popup__title"),t}return t=l,(n=[{key:"open",value:function(e,t){this._popupImg.src=t,this._popupImg.alt=e,this._popupImgTitle.textContent=e,p(s(l.prototype),"open",this).call(this),p(s(l.prototype),"setEventListeners",this).call(this)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._elemSelector=o,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._elemSelector).content.querySelector(".gallery__element").cloneNode(!0)}},{key:"generateElem",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".gallery__photo");return this._element.querySelector(".gallery__element-title").textContent=this._name,e.src=this._link,e.alt=this._name,this._element}},{key:"_handleDeleteClick",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".gallery__photo").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._element.querySelector(".gallery__button-delete").addEventListener("click",(function(t){e._handleDeleteClick(t)})),this._element.querySelector(".gallery__button-like").addEventListener("click",(function(t){e._handleLikeClick(t)}))}},{key:"_handleLikeClick",value:function(e){e.target.classList.toggle("gallery__button-like_active")}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._popupInputError),n.textContent=t,n.classList.add(r._popupErrorActive)})),h(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._popupInputError),t.classList.remove(r._popupErrorActive),t.textContent=""})),h(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),h(this,"_setEventListeners",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),h(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),h(this,"disablePopupSubmitButton",(function(){r._submitButtonElement.classList.add(r._popupButtonError),r._submitButtonElement.disabled=!0})),h(this,"enablePopupSubmitButton",(function(){r._submitButtonElement.classList.remove(r._popupButtonError),r._submitButtonElement.disabled=!1})),h(this,"toggleButtonState",(function(){r._hasInvalidInput()?r.disablePopupSubmitButton():r.enablePopupSubmitButton()})),h(this,"enableValidation",(function(){r._setEventListeners()})),this._popupInput=t.popupInput,this._buttonElement=t.buttonElement,this._popupButtonError=t.popupButtonError,this._popupInputError=t.popupInputError,this._popupErrorActive=t.popupErrorActive,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(this._popupInput)),this._submitButtonElement=this._formElement.querySelector(this._buttonElement)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){this._formElement.reset(),this.toggleButtonState()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._handleFormSubmit=r,n}return t=u,(n=[{key:"getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"close",value:function(){g(S(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;g(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e.getInputValues())}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._data.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.userName,r=t.userDescription;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userDescription=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,description:this._userDescription.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userDescription.textContent=t}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){new f(".popup_photo-zoom").open(e,t)}var q=new L({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=new d(e.name,e.link,C,"#template-form").generateElem();q.addItem(t)}},".gallery"),B=new m(n,".popup__form-profile");B.enableValidation(),B.enablePopupSubmitButton();var x=new I({userName:".profile__name",userDescription:".profile__caption"}),R=new O(".popup_gallery",{handleFormSubmit:function(e){var t=T(e);q.addItem(t),D.resetValidation(),R.close()}}),T=function(e){return new d(e.name,e.link,C,"#template-form").generateElem()},V=new O(".popup_profile",{handleFormSubmit:function(e){x.setUserInfo(e.name,e.description),B.resetValidation(),V.close()}}),D=new m(n,".popup__form_gallery_change");D.enableValidation(),e.addEventListener("click",(function(){var e=x.getUserInfo();document.querySelector(".popup__input_type_name").value=e.name,document.querySelector(".popup__input_type_caption").value=e.description,V.open()})),R.setEventListeners(),t.addEventListener("click",(function(){R.open()})),V.setEventListeners(),q.renderItems()})();
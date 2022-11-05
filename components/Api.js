export class Api {
  constructor() {
    this._link = 'https://mesto.nomoreparties.co/v1/cohort-52';
    this._token = '9fcfb2cc-6788-4de3-958e-87d26868b61e';
    
  }

  getInitialProfileData() {
    return fetch(`${this._link}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setNewProfileData() {
    
  }

  getInitialGallery() {
    return fetch(`${this._link}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}
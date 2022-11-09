export class Api {
  constructor() {
    this._link = 'https://mesto.nomoreparties.co/v1/cohort-52';
    this._token = '9fcfb2cc-6788-4de3-958e-87d26868b61e';
    
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);

  }

  getInitialProfileData() {
    return fetch(`${this._link}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkResponse);
  }

  setNewProfileData({ name, about }) {
    return fetch(`${this._link}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._checkResponse);
  }

  setNewAvatar(avatar) {
    return fetch(`${this._link}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(avatar)
    })
    .then(this._checkResponse);
  }


  getInitialGallery() {
    return fetch(`${this._link}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponse);
  }

  setNewCard({ name, link }) {
    return fetch(`${this._link}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(this._checkResponse);
  }

  setLikes(operation, cardId) {
    return fetch(`${this._link}/cards/${cardId}/likes`, {
      method: operation == 'add' ? "PUT" : "DELETE",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
    .then((res) => {
      return res.likes.length
    })
    .catch(e => {});
  }

  deleteCard(cardId) {
    return fetch(`${this._link}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)

  }
}
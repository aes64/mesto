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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        
      });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setLikes(operation, cardId) {
    return fetch(`${this._link}/cards/${cardId}/likes`, {
      method: operation == 'add' ? 'PUT' : "DELETE",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      return res.likes.length
    })
    .catch(e => {});
  }

  deleteCard(cardId) {

  }
}
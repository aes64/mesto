class UserInfo {
  constructor({userName, userDescription}) {
    this._userName = document.querySelector(userName);
    this._userDescription = document.querySelector(userDescription);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userDescription.textContent,
    }
  }

  setUserInfo(name, about) {
    this._userName.textContent = name;
    this._userDescription.textContent = about;
  }
}

export { UserInfo }
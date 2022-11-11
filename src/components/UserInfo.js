class UserInfo {
  constructor({userName, userDescription, userAvatar}) {
    this._userName = document.querySelector(userName);
    this._userDescription = document.querySelector(userDescription);
    this._userAvatar = document.querySelector(userAvatar)
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userDescription.textContent,
      avatar: this._userAvatar.src
    }
  }

setUserInfo(item) {
    this._userName.textContent = item.name;
    this._userDescription.textContent = item.about;
  }
}

export { UserInfo }
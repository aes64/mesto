class UserInfo {
  constructor({userName, userDescription}) {
    this._userName = document.querySelector(userName);
    this._userDecription = document.querySelector(userDescription);
    this._inputUserName = document.querySelector('.popup__input_type_name');
    this._inputUserDescription = document.querySelector('.popup__input_type_caption');
    this._userInfo = this.getUserInfo();
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      description: this._userDecription.textContent,
    }
  }

  setUserInfo(name, description) {
    this._userName = name;
    this._userDecription = description;
  }

  setFormUserInfo() {
    this._inputUserName.value = this._userInfo.name;
    this._inputUserDescription.value = this._userInfo.description;
  }
}

export { UserInfo }
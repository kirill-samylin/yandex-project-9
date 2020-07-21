export default class UserInfo {
  constructor(author, form) {
      this._name = author.name;
      this._info = author.info;
      this._avatar = author.ava;
      this._nameInput = form.name;
      this._infoInput = form.info;
      this._avatarInput = form.ava;
  }
  getUserInfo() {
    this._nameInput.value = this._name.textContent;
    this._infoInput.value = this._info.textContent;

  }
  setUserInfo(user) {
    this._name.textContent = user.name;
    this._info.textContent = user.about;
  }
  getAvatarLink() {
    this._avatarInput.value = this._avatar.src
  }
  setAvatarLink(user) {
    this._avatar.src = user.avatar;
  }
  setUser(user) {
    this._name.dataset.id = user._id;
    this._name.textContent = user.name;
    this._info.textContent = user.about;
    this._avatar.src = user.avatar;
  }
}

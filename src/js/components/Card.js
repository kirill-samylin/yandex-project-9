export default class Card {
  constructor({data}, handleCardClick, callbackLike, callbackDelete, cardSelector, userId) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._like = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._author = data.owner;
    this._handleCardClick = handleCardClick;
    this._callbackLike = callbackLike;
    this._callbackDelete = callbackDelete;
    this._clickLike = () => {
      this._callbackLike(this._element.querySelector('.button-like').classList.contains('button-like_active'));
    }
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.profile__photo')
      .cloneNode(true);

    return cardElement;
  }
  handleLike(amount) {
    this._element.querySelector('.button-like').classList.toggle('button-like_active');
    this._element.querySelector('.profile__span-like').textContent = amount;
  }
  handleDeleteElement()  {
    this._element.querySelector('.profile__photo-img').removeEventListener('click', this._handleCardClick);
    this._element.querySelector('.button-like').removeEventListener('click', this._clickLike);
    this._element.querySelector('.button-delete').removeEventListener('click', this._callbackDelete);
    this._element.remove();
  }
  _setEventListeners() {
    this._element.querySelector('.profile__photo-img').addEventListener('click', this._handleCardClick);
    this._element.querySelector('.button-like').addEventListener('click', this._clickLike);
    this._element.querySelector('.button-delete').addEventListener('click', this._callbackDelete);
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    if (this._author._id!==this._userId) {
      this._element.querySelector('.button-delete').remove();
    }

    if (this._like.some((user) => (user._id === this._userId))) {
      this._element.querySelector('.button-like').classList.add('button-like_active');
    }
    this._element.querySelector('.profile__photo-img').src = this._link;
    this._element.querySelector('.profile__photo-title').textContent = this._name;
    this._element.querySelector('.profile__photo-img').alt = this._name;
    this._element.querySelector('.profile__span-like').textContent = this._like.length;

    return this._element;
  }
}

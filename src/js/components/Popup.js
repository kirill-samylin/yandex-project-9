export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._setEventListeners();
    this._handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.close()
      }
    }
  }
  _closePopup(evt) {
    if (evt.target.classList.contains('popup')) {
      this.close()
    }
  }
  _setEventListeners() {
    this._popupSelector.querySelector('.button-close').addEventListener('click', () => this.close());
    this._popupSelector.addEventListener('click', (evt) => this._closePopup(evt));
  }
  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupSelector.classList.remove('popup_opened');
  }
  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popupSelector.classList.add('popup_opened');
  }
}

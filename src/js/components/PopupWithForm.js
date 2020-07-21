import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._submitEvent = evt => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    };
    this._popupSelector.querySelector('.popup__container').addEventListener('submit', this._submitEvent);
  }
  _getInputValues() {
    if (this._popupSelector.id === 'form_photo-add') {
      const item = {
        name: this._popupSelector.querySelector('.popup__name').value,
        link: this._popupSelector.querySelector('.popup__link').value
      };
      return item;
    }
  }
  reset() {
    this._popupSelector.querySelector('.popup__container').reset();
  }
}

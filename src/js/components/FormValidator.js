export default class FormValidator {
  constructor(formName, formElements, downloadText) {
    this._formName = formName;
    this._inactiveButtonClass = formElements.inactiveButtonClass;
    this._inputErrorClass = formElements.inputErrorClass;
    this._errorClass = formElements.errorClass;
    this._inputList = Array.from(formName.querySelectorAll(formElements.inputSelector));
    this._buttonElement = formName.querySelector(formElements.submitButtonSelector);
    this._downloadText = downloadText.load;
    this._openText = downloadText.open;
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formName.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formName.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };
  _showButtonError() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'true');
  };
  _hideButtonError() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  };
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _hasInvalidInput() {
    return this._inputList.every(inputElement => inputElement.validity.valid);
  }
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._hideButtonError();
    } else {
      this._showButtonError();
    }
  }
  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }
  clear() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
      if (!input.value) {
        this._showButtonError();
      } else {
        this._hideButtonError()
      }
    });
  }
  loading() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'true');
    this._buttonElement.textContent = this._downloadText;
  }
  enableButton() {
    this._buttonElement.textContent = this._openText;
    this._hideButtonError();
  }
}

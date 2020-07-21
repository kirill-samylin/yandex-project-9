/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_Section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _js_components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _js_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _js_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _js_components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _js_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _js_components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










 //функция добавления события

var addEventListener = function addEventListener(nameElement, nameFunction, event) {
  nameElement.addEventListener(event, nameFunction);
};
/*=======================Улучшенный UX всех форм================================*/
//delete msg


var clearMsgWindow = function clearMsgWindow() {
  _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["msgWindow"].classList.remove('msg_then');
  _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["msgWindow"].classList.remove('msg_error');
  _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["msgText"].textContent = '';
}; //вывод сообщения


var msgWindowOpen = function msgWindowOpen(color, msg) {
  _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["msgText"].textContent = msg;

  if (color) {
    _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["msgWindow"].classList.add('msg_then');
  } else {
    _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["msgWindow"].classList.add('msg_error');
  }

  setTimeout(function () {
    clearMsgWindow();
  }, 1500);
};
/*=======================Включаем валидацию форм================================*/
//валидация формы добавления карточки


var validatePhotoForm = new _js_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formAddPhoto"], _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formObject"], {
  load: 'Загрузка...',
  open: 'Создать'
});
validatePhotoForm.enableValidation(); //валидация формы редактирование информации об авторе

var validateAuthorForm = new _js_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formAuthorEdit"], _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formObject"], {
  load: 'Сохранение...',
  open: 'Сохранить'
});
validateAuthorForm.enableValidation(); //валидация формы редактирование аватарки автора

var validateAvatarForm = new _js_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formAvatarEdit"], _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formObject"], {
  load: 'Сохранение...',
  open: 'Сохранить'
});
validateAvatarForm.enableValidation(); //валидация формы редактирование аватарки автора

var validateConfirmForm = new _js_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formConfirmation"], _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formObject"], {
  load: 'Удаление...',
  open: 'Да'
});
validateConfirmForm.enableValidation(); //подключаем класс апи

var apiRequest = new _js_components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  url: "https://mesto.nomoreparties.co/v1/".concat(_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["myGroupId"]),
  token: _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["myToken"]
}); //добавляем класс открытия формы "фото" с фотографией

var openPhotoForm = new _js_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"](_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formOpenPhoto"]);
/*======================= Изменение информации пользователя================================*/
//добавляем класс изменения информации пользователя

var userInfo = new _js_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  name: _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["profileName"],
  info: _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["profileInfo"],
  ava: _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["profileAva"]
}, {
  name: _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["nameInput"],
  info: _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["jobInput"],
  ava: _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["linkAvatar"]
}); //добавляем класс для формы редактирования информации пользователя

var changeAuthorForm = new _js_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  submitForm: function submitForm() {
    validateAuthorForm.loading();
    apiRequest.patchProfileEdit(_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["nameInput"].value, _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["jobInput"].value).then(function (result) {
      userInfo.setUserInfo(result);
      msgWindowOpen(true, 'Сохранено');
      closeFormAuthor();
    }).catch(function (err) {
      msgWindowOpen(false, 'Ошибка: ' + err);
      console.log(err);
    }).finally(function () {
      validateAuthorForm.enableButton();
    });
  }
}, _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formAuthorEdit"]); //класс формы редактирования автора

var openFormAuthor = function openFormAuthor() {
  userInfo.getUserInfo();
  validateAuthorForm.clear();
  changeAuthorForm.open();
};

var closeFormAuthor = function closeFormAuthor() {
  changeAuthorForm.close();
};

addEventListener(_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["buttonProfileEdit"], openFormAuthor, 'click'); //открываем форму редактирования автора

/*=======================Изменение аватарки пользователя================================*/
//функция изменения аватарки пользователя

var changeAvatar = function changeAvatar(link) {
  apiRequest.changeAvatar(link).then(function (result) {
    userInfo.setAvatarLink(result);
    msgWindowOpen(true, 'Сохранено');
    closeFormAvatar();
  }).catch(function (err) {
    msgWindowOpen(false, 'Ошибка: ' + err);
    console.log(err);
  }).finally(function () {
    validateAvatarForm.enableButton();
  });
}; //добавляем класс формы изменения аватара


var changeAvatarForm = new _js_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  submitForm: function submitForm() {
    validateAvatarForm.loading();
    changeAvatar(_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["linkAvatar"].value);
  }
}, _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formAvatarEdit"]); //открытие формы изменения аватара

var openFormAvatar = function openFormAvatar() {
  userInfo.getAvatarLink();
  changeAvatarForm.open();
  validateAvatarForm.clear();
};

var closeFormAvatar = function closeFormAvatar() {
  changeAvatarForm.close();
};

addEventListener(_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["blockAvatar"], openFormAvatar, 'click'); //событие открытия формы редактирования аватара

/*=======================Создание карточки================================*/
//добавляем подтверждение

var itemDelete; // храним элемент который будет удалять

var openConfirmModal = function openConfirmModal(card, cardClass) {
  confirmationForm.setCard(card, cardClass);
  confirmationForm.open();
};

var confirmationForm = new _js_components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  onConfirm: function onConfirm(card, cardClass) {
    cardDelete(card, cardClass);
  }
}, _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formConfirmation"]);

var generateCard = function generateCard(item, userId) {
  var card = new _js_components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
    data: item
  }, function () {
    openPhotoForm.open(item);
  }, function (status) {
    if (status) {
      likeDeleteCard(item, card);
    } else {
      likeCard(item, card);
    }
  }, function () {
    openConfirmModal(item, card);
  }, _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["templatePhotoClass"], userId);
  var cardElement = card.generateCard();
  return cardElement;
};

var createCard = function createCard(item, position, userId) {
  var cardElement = generateCard(item, userId);

  if (position === 'append') {
    cardList.addAppendItem(cardElement);
  } else {
    cardList.addPrependItem(cardElement);
  }
};
/*=======================Добавление карточки================================*/
//функция для добавления карточки createCard(item, 'prepend');


var addCard = function addCard(item) {
  apiRequest.addCard(item).then(function (result) {
    createCard(result, 'prepend', result.owner._id);
    msgWindowOpen(true, 'Пост добавлен');
    closeFormAddPhoto();
  }).catch(function (err) {
    msgWindowOpen(false, 'Ошибка: ' + err);
    console.log(err);
  }).finally(function () {
    validatePhotoForm.enableButton();
  });
}; //добавляем класс формы добавления фотографии


var addPhotoForm = new _js_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  submitForm: function submitForm(item) {
    validatePhotoForm.loading();
    addCard(item);
  }
}, _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["formAddPhoto"]); //класс формы добавления фото

var openFormAddPhoto = function openFormAddPhoto() {
  addPhotoForm.reset();
  validatePhotoForm.clear();
  addPhotoForm.open();
};

var closeFormAddPhoto = function closeFormAddPhoto() {
  addPhotoForm.close();
};

addEventListener(_js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["buttonPhotoAdd"], openFormAddPhoto, 'click'); //открываем форму добавления мест

/*=======================Удаление карточки================================*/
//функция для удаления карточки

var cardDelete = function cardDelete(item, cardClass) {
  apiRequest.deleteCard(item._id).then(function (result) {
    cardClass.handleDeleteElement();
    msgWindowOpen(true, result.message);
  }).catch(function (err) {
    msgWindowOpen(false, 'Ошибка: ' + err);
  }).finally(function () {
    confirmationForm.close();
  });
};
/*=======================Добавление лайка карточке================================*/
//функция для лайка карточки


var likeCard = function likeCard(card, cardClass) {
  apiRequest.addLike(card._id).then(function (result) {
    cardClass.handleLike(result.likes.length);
    msgWindowOpen(true, 'Лайк поставлен');
  }).catch(function (err) {
    msgWindowOpen(false, 'Ошибка: ' + err);
    console.log(err);
  });
};
/*=======================Удаление лайка с карточки================================*/
//функция для удаления лайка карточки


var likeDeleteCard = function likeDeleteCard(card, cardClass) {
  apiRequest.deleteLike(card._id).then(function (result) {
    cardClass.handleLike(result.likes.length);
    msgWindowOpen(true, 'Лайк удален');
  }).catch(function (err) {
    msgWindowOpen(false, 'Ошибка: ' + err);
    console.log(err);
  });
};
/*=======================Создание карточек при старте страницы================================*/
//добавляем класс для создания карточек


var cardList = new _js_components_Section_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  renderer: function renderer(item, userId) {
    createCard(item, 'append', userId);
  }
}, _js_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__["cardListSelector"]); //понял, усвоил, спасибо
//запуск страницы

var startPage = function startPage() {
  Promise.all([apiRequest.getProfileInfo(), apiRequest.getInitialCards()]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        user = _ref2[0],
        cards = _ref2[1];

    userInfo.setUser(user);
    cardList.renderItems(cards, user._id);
  }).catch(function (err) {
    msgWindowOpen(false, 'Ошибка: ' + err);
    console.log(err);
  });
};

startPage();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addPrependItem",
    value: function addPrependItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "addAppendItem",
    value: function addAppendItem(element) {
      this._container.append(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(cards, userId) {
      var _this = this;

      this._container.innerHTML = '';
      cards.forEach(function (item) {
        _this._renderer(item, userId);
      });
    }
  }]);

  return Section;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormValidator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(formName, formElements, downloadText) {
    _classCallCheck(this, FormValidator);

    this._formName = formName;
    this._inactiveButtonClass = formElements.inactiveButtonClass;
    this._inputErrorClass = formElements.inputErrorClass;
    this._errorClass = formElements.errorClass;
    this._inputList = Array.from(formName.querySelectorAll(formElements.inputSelector));
    this._buttonElement = formName.querySelector(formElements.submitButtonSelector);
    this._downloadText = downloadText.load;
    this._openText = downloadText.open;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var errorElement = this._formName.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formName.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_showButtonError",
    value: function _showButtonError() {
      this._buttonElement.classList.add(this._inactiveButtonClass);

      this._buttonElement.setAttribute('disabled', 'true');
    }
  }, {
    key: "_hideButtonError",
    value: function _hideButtonError() {
      this._buttonElement.classList.remove(this._inactiveButtonClass);

      this._buttonElement.removeAttribute('disabled');
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.every(function (inputElement) {
        return inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        this._hideButtonError();
      } else {
        this._showButtonError();
      }
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      var _this = this;

      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._toggleButtonState();

          _this._checkInputValidity(inputElement);
        });
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      this._inputList.forEach(function (input) {
        _this2._hideInputError(input);

        if (!input.value) {
          _this2._showButtonError();
        } else {
          _this2._hideButtonError();
        }
      });
    }
  }, {
    key: "loading",
    value: function loading() {
      this._buttonElement.classList.add(this._inactiveButtonClass);

      this._buttonElement.setAttribute('disabled', 'true');

      this._buttonElement.textContent = this._downloadText;
    }
  }, {
    key: "enableButton",
    value: function enableButton() {
      this._buttonElement.textContent = this._openText;

      this._hideButtonError();
    }
  }]);

  return FormValidator;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, handleCardClick, callbackLike, callbackDelete, cardSelector, userId) {
    var _this = this;

    var data = _ref.data;

    _classCallCheck(this, Card);

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

    this._clickLike = function () {
      _this._callbackLike(_this._element.querySelector('.button-like').classList.contains('button-like_active'));
    };
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector('.profile__photo').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "handleLike",
    value: function handleLike(amount) {
      this._element.querySelector('.button-like').classList.toggle('button-like_active');

      this._element.querySelector('.profile__span-like').textContent = amount;
    }
  }, {
    key: "handleDeleteElement",
    value: function handleDeleteElement() {
      this._element.querySelector('.profile__photo-img').removeEventListener('click', this._handleCardClick);

      this._element.querySelector('.button-like').removeEventListener('click', this._clickLike);

      this._element.querySelector('.button-delete').removeEventListener('click', this._callbackDelete);

      this._element.remove();
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      this._element.querySelector('.profile__photo-img').addEventListener('click', this._handleCardClick);

      this._element.querySelector('.button-like').addEventListener('click', this._clickLike);

      this._element.querySelector('.button-delete').addEventListener('click', this._callbackDelete);
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      var _this2 = this;

      this._element = this._getTemplate();

      this._setEventListeners();

      if (this._author._id !== this._userId) {
        this._element.querySelector('.button-delete').remove();
      }

      if (this._like.some(function (user) {
        return user._id === _this2._userId;
      })) {
        this._element.querySelector('.button-like').classList.add('button-like_active');
      }

      this._element.querySelector('.profile__photo-img').src = this._link;
      this._element.querySelector('.profile__photo-title').textContent = this._name;
      this._element.querySelector('.profile__photo-img').alt = this._name;
      this._element.querySelector('.profile__span-like').textContent = this._like.length;
      return this._element;
    }
  }]);

  return Card;
}();



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupWithImage; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage() {
    _classCallCheck(this, PopupWithImage);

    return _super.apply(this, arguments);
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(item) {
      _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["popupImage"].src = item.link;
      _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["popupImage"].alt = item.name;
      _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["popupParagraph"].textContent = item.name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;

    _classCallCheck(this, Popup);

    this._popupSelector = popupSelector;

    this._setEventListeners();

    this._handleEscClose = function (evt) {
      if (evt.key === 'Escape') {
        _this.close();
      }
    };
  }

  _createClass(Popup, [{
    key: "_closePopup",
    value: function _closePopup(evt) {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      this._popupSelector.querySelector('.button-close').addEventListener('click', function () {
        return _this2.close();
      });

      this._popupSelector.addEventListener('click', function (evt) {
        return _this2._closePopup(evt);
      });
    }
  }, {
    key: "close",
    value: function close() {
      document.removeEventListener('keydown', this._handleEscClose);

      this._popupSelector.classList.remove('popup_opened');
    }
  }, {
    key: "open",
    value: function open() {
      document.addEventListener('keydown', this._handleEscClose);

      this._popupSelector.classList.add('popup_opened');
    }
  }]);

  return Popup;
}();



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formObject", function() { return formObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formAuthorEdit", function() { return formAuthorEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formAddPhoto", function() { return formAddPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonProfileEdit", function() { return buttonProfileEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileName", function() { return profileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileInfo", function() { return profileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonPhotoAdd", function() { return buttonPhotoAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formOpenPhoto", function() { return formOpenPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templatePhotoClass", function() { return templatePhotoClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardListSelector", function() { return cardListSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameInput", function() { return nameInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobInput", function() { return jobInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupImage", function() { return popupImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupParagraph", function() { return popupParagraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formInputName", function() { return formInputName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formInputLink", function() { return formInputLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileAva", function() { return profileAva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formAvatarEdit", function() { return formAvatarEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkAvatar", function() { return linkAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myToken", function() { return myToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myGroupId", function() { return myGroupId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formConfirmation", function() { return formConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgWindow", function() { return msgWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgText", function() { return msgText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockAvatar", function() { return blockAvatar; });
var formObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-add',
  inactiveButtonClass: 'popup__button-add_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__span-error_active'
};
var formAuthorEdit = document.querySelector('#form_author'); //форма редактирования автора

var formAddPhoto = document.querySelector('#form_photo-add'); //форма добавления места

var profiles = document.querySelector('.profiles'); //профили

var buttonProfileEdit = profiles.querySelector('.profile__button-edit'); //кнопка открытия формы автора

var profileName = profiles.querySelector('.profile__author'); //имя автора

var profileInfo = profiles.querySelector('.profile__activity'); //информация об авторе

var buttonPhotoAdd = profiles.querySelector('.profile__button-add'); //кнопка добавления места

var formOpenPhoto = document.querySelector('#form_photo-open');
var templatePhotoClass = '#profile-template';
var cardListSelector = '.profile__photos';
var nameInput = document.querySelector('.popup__author');
var jobInput = document.querySelector('.popup__activity');
var popupImage = document.querySelector('.popup__img');
var popupParagraph = document.querySelector('.popup__paragraph');
var formInputName = document.querySelector('.popup__name');
var formInputLink = document.querySelector('.popup__link'); // project 9

var profileAva = document.querySelector('.profile__face');
var formAvatarEdit = document.querySelector('#form_avatar');
var linkAvatar = document.querySelector('.popup__avatar');
var myToken = 'a7914201-0470-435f-a2e6-f9d3f2218cdd';
var myGroupId = 'cohort-12';
var formConfirmation = document.querySelector('#form_confirmation');
var msgWindow = document.querySelector('.msg');
var msgText = document.querySelector('.msg__span');
var blockAvatar = document.querySelector('.profile__avatar');

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupWithForm; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref, popupSelector) {
    var _this;

    var submitForm = _ref.submitForm;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._submitForm = submitForm;

    _this._submitEvent = function (evt) {
      evt.preventDefault();

      _this._submitForm(_this._getInputValues());
    };

    _this._popupSelector.querySelector('.popup__container').addEventListener('submit', _this._submitEvent);

    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      if (this._popupSelector.id === 'form_photo-add') {
        var item = {
          name: this._popupSelector.querySelector('.popup__name').value,
          link: this._popupSelector.querySelector('.popup__link').value
        };
        return item;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this._popupSelector.querySelector('.popup__container').reset();
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupWithConfirm; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirm, _Popup);

  var _super = _createSuper(PopupWithConfirm);

  function PopupWithConfirm(_ref, popupSelector) {
    var _this;

    var onConfirm = _ref.onConfirm;

    _classCallCheck(this, PopupWithConfirm);

    _this = _super.call(this, popupSelector);
    _this._onConfirm = onConfirm;

    _this._submitEvent = function (evt) {
      evt.preventDefault();

      _this._onConfirm(_this._card, _this._cardClass);
    };

    _this._popupSelector.querySelector('.popup__container').addEventListener('submit', _this._submitEvent);

    return _this;
  }

  _createClass(PopupWithConfirm, [{
    key: "setCard",
    value: function setCard(card, cardClass) {
      this._card = card;
      this._cardClass = cardClass;
    }
  }]);

  return PopupWithConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInfo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(author, form) {
    _classCallCheck(this, UserInfo);

    this._name = author.name;
    this._info = author.info;
    this._avatar = author.ava;
    this._nameInput = form.name;
    this._infoInput = form.info;
    this._avatarInput = form.ava;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this._nameInput.value = this._name.textContent;
      this._infoInput.value = this._info.textContent;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(user) {
      this._name.textContent = user.name;
      this._info.textContent = user.about;
    }
  }, {
    key: "getAvatarLink",
    value: function getAvatarLink() {
      this._avatarInput.value = this._avatar.src;
    }
  }, {
    key: "setAvatarLink",
    value: function setAvatarLink(user) {
      this._avatar.src = user.avatar;
    }
  }, {
    key: "setUser",
    value: function setUser(user) {
      this._name.dataset.id = user._id;
      this._name.textContent = user.name;
      this._info.textContent = user.about;
      this._avatar.src = user.avatar;
    }
  }]);

  return UserInfo;
}();



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);

    this._url = options.url;
    this._token = options.token;
  }

  _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._url, "/cards"), {
        method: 'GET',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }, {
    key: "addCard",
    value: function addCard(card) {
      return fetch("".concat(this._url, "/cards"), {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: card.name,
          link: card.link
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      return fetch("".concat(this._url, "/cards/").concat(id), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }, {
    key: "getProfileInfo",
    value: function getProfileInfo() {
      return fetch("".concat(this._url, "/users/me"), {
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }, {
    key: "patchProfileEdit",
    value: function patchProfileEdit(name, about) {
      return fetch("".concat(this._url, "/users/me"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }, {
    key: "addLike",
    value: function addLike(id) {
      return fetch("".concat(this._url, "/cards/likes/").concat(id), {
        method: 'PUT',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(id) {
      return fetch("".concat(this._url, "/cards/likes/").concat(id), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }, {
    key: "changeAvatar",
    value: function changeAvatar(link) {
      return fetch("".concat(this._url, "/users/me/avatar"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: link
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }]);

  return Api;
}();



/***/ })
/******/ ]);
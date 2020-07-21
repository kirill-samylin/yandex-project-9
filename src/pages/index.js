import './index.css';
import Section from '../js/components/Section.js';
import FormValidator from '../js/components/FormValidator.js';
import Card from '../js/components/Card.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import PopupWithConfirm from '../js/components/PopupWithConfirm.js';
import UserInfo from '../js/components/UserInfo.js';
import Api from '../js/components/Api.js';
import {
  formObject,
  formAuthorEdit,
  formAddPhoto,
  buttonProfileEdit,
  buttonPhotoAdd,
  formOpenPhoto,
  templatePhotoClass,
  cardListSelector,
  profileName,
  profileInfo,
  nameInput,
  jobInput,
  profileAva,
  formAvatarEdit,
  linkAvatar,
  myToken,
  myGroupId,
  formConfirmation,
  msgWindow,
  msgText,
  blockAvatar
} from '../js/utils/constants.js';

//функция добавления события
const addEventListener = function(nameElement, nameFunction, event) {
   nameElement.addEventListener(event, nameFunction);
}

/*=======================Улучшенный UX всех форм================================*/
//delete msg
const clearMsgWindow = function() {
  msgWindow.classList.remove('msg_then');
  msgWindow.classList.remove('msg_error');
  msgText.textContent = '';
}
//вывод сообщения
const msgWindowOpen = function(color, msg) {
  msgText.textContent = msg;
  if (color) {
    msgWindow.classList.add('msg_then');
  } else {
    msgWindow.classList.add('msg_error');
  }
  setTimeout(function () {
    clearMsgWindow();
  }, 1500);
}
/*=======================Включаем валидацию форм================================*/
//валидация формы добавления карточки
const validatePhotoForm = new FormValidator(formAddPhoto, formObject, {
  load: 'Загрузка...',
  open: 'Создать'
});
validatePhotoForm.enableValidation();
//валидация формы редактирование информации об авторе
const validateAuthorForm = new FormValidator(formAuthorEdit, formObject, {
  load: 'Сохранение...',
  open: 'Сохранить'
});
validateAuthorForm.enableValidation();
//валидация формы редактирование аватарки автора
const validateAvatarForm = new FormValidator(formAvatarEdit, formObject, {
  load: 'Сохранение...',
  open: 'Сохранить'
});
validateAvatarForm.enableValidation();
//валидация формы редактирование аватарки автора
const validateConfirmForm = new FormValidator(formConfirmation, formObject, {
  load: 'Удаление...',
  open: 'Да'
});
validateConfirmForm.enableValidation();

//подключаем класс апи
const apiRequest = new Api({
  url: `https://mesto.nomoreparties.co/v1/${myGroupId}`,
  token: myToken
});

//добавляем класс открытия формы "фото" с фотографией
const openPhotoForm = new PopupWithImage(formOpenPhoto);

/*======================= Изменение информации пользователя================================*/
//добавляем класс изменения информации пользователя
const userInfo = new UserInfo ({
  name: profileName,
  info: profileInfo,
  ava: profileAva
}, {
  name: nameInput,
  info: jobInput,
  ava: linkAvatar
});

//добавляем класс для формы редактирования информации пользователя
const changeAuthorForm = new PopupWithForm ({
  submitForm: () => {
    validateAuthorForm.loading();
    apiRequest.patchProfileEdit(nameInput.value, jobInput.value)
      .then((result) => {
        userInfo.setUserInfo(result);
        msgWindowOpen(true, 'Сохранено');
        closeFormAuthor();
      })
      .catch((err) => {
        msgWindowOpen(false, 'Ошибка: '+err);
        console.log(err);
      })
      .finally(() => {
        validateAuthorForm.enableButton();
      });
  }
}, formAuthorEdit);
//класс формы редактирования автора
const openFormAuthor = function() {
  userInfo.getUserInfo();
  validateAuthorForm.clear();
  changeAuthorForm.open();
}
const closeFormAuthor = function() {
  changeAuthorForm.close();
}
addEventListener(buttonProfileEdit, openFormAuthor, 'click'); //открываем форму редактирования автора

/*=======================Изменение аватарки пользователя================================*/
//функция изменения аватарки пользователя
const changeAvatar = function(link) {
  apiRequest.changeAvatar(link)
  .then((result) => {
    userInfo.setAvatarLink(result);
    msgWindowOpen(true, 'Сохранено');
    closeFormAvatar();
  })
  .catch((err) => {
    msgWindowOpen(false, 'Ошибка: '+err);
    console.log(err);
  })
  .finally(() => {
    validateAvatarForm.enableButton();
  });
}
//добавляем класс формы изменения аватара
const changeAvatarForm = new PopupWithForm ({
  submitForm: () => {
    validateAvatarForm.loading();
    changeAvatar(linkAvatar.value);
  }
}, formAvatarEdit);
//открытие формы изменения аватара
const openFormAvatar = function() {
  userInfo.getAvatarLink();
  changeAvatarForm.open();
  validateAvatarForm.clear();
}
const closeFormAvatar = function() {
  changeAvatarForm.close();
}
addEventListener(blockAvatar, openFormAvatar, 'click'); //событие открытия формы редактирования аватара

/*=======================Создание карточки================================*/


//добавляем подтверждение
let itemDelete;// храним элемент который будет удалять

const openConfirmModal = function(card, cardClass) {
  confirmationForm.setCard(card, cardClass);
  confirmationForm.open();
}
const confirmationForm = new PopupWithConfirm ({
  onConfirm: (card, cardClass) => {
    cardDelete(card, cardClass);
  }
}, formConfirmation);

const generateCard = function(item, userId) {
  const card = new Card({
    data: item},
    () => {
      openPhotoForm.open(item);
    },
    (status) => {
      if (status) {
        likeDeleteCard(item, card);
      } else {
        likeCard(item, card);
      }
    },
    () => {
      openConfirmModal(item, card)
    },
    templatePhotoClass, userId);
  const cardElement = card.generateCard();
  return cardElement
}

const createCard = function(item, position, userId) {
  const cardElement = generateCard(item, userId);
  if (position==='append') {
    cardList.addAppendItem(cardElement);
  } else {
    cardList.addPrependItem(cardElement);
  }
}

/*=======================Добавление карточки================================*/
//функция для добавления карточки createCard(item, 'prepend');
const addCard = function(item) {
  apiRequest.addCard(item)
  .then((result) => {
    createCard(result, 'prepend', result.owner._id);
    msgWindowOpen(true, 'Пост добавлен');
    closeFormAddPhoto();
  })
  .catch((err) => {
    msgWindowOpen(false, 'Ошибка: ' + err);
    console.log(err);
  })
  .finally(() => {
    validatePhotoForm.enableButton();
  });
}
//добавляем класс формы добавления фотографии
const addPhotoForm = new PopupWithForm({
  submitForm: (item) => {
    validatePhotoForm.loading();
    addCard(item);
  }
}, formAddPhoto);
//класс формы добавления фото
const openFormAddPhoto = function() {
  addPhotoForm.reset();
  validatePhotoForm.clear();
  addPhotoForm.open();
}
const closeFormAddPhoto = function() {
  addPhotoForm.close();
}
addEventListener(buttonPhotoAdd, openFormAddPhoto, 'click'); //открываем форму добавления мест

/*=======================Удаление карточки================================*/
//функция для удаления карточки

const cardDelete = function(item, cardClass) {
  apiRequest.deleteCard(item._id)
  .then((result) => {
    cardClass.handleDeleteElement();
    msgWindowOpen(true, result.message);
  })
  .catch((err) => {
    msgWindowOpen(false, 'Ошибка: '+ err);
  })
  .finally(() => {
    confirmationForm.close();
  });
}

/*=======================Добавление лайка карточке================================*/
//функция для лайка карточки
const likeCard = function(card, cardClass) {
  apiRequest.addLike(card._id)
  .then((result) => {
    cardClass.handleLike(result.likes.length);
    msgWindowOpen(true, 'Лайк поставлен');
  })
  .catch((err) => {
    msgWindowOpen(false, 'Ошибка: '+ err);
    console.log(err);
  });
}

/*=======================Удаление лайка с карточки================================*/
//функция для удаления лайка карточки
const likeDeleteCard = function(card, cardClass) {
  apiRequest.deleteLike(card._id)
  .then((result) => {
    cardClass.handleLike(result.likes.length);
    msgWindowOpen(true, 'Лайк удален');
  })
  .catch((err) => {
    msgWindowOpen(false, 'Ошибка: '+ err);
    console.log(err);
  });
}

/*=======================Создание карточек при старте страницы================================*/
//добавляем класс для создания карточек
const cardList = new Section({
  renderer: (item, userId) => {
    createCard(item, 'append', userId);
  }
}, cardListSelector);
//понял, усвоил, спасибо
//запуск страницы
const startPage = function() {
  Promise.all([apiRequest.getProfileInfo(), apiRequest.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUser(user);
    cardList.renderItems(cards, user._id);
  })
  .catch((err) => {
    msgWindowOpen(false, 'Ошибка: '+err);
    console.log(err);
  });
}
startPage();




export const formObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-add',
  inactiveButtonClass: 'popup__button-add_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__span-error_active'
};
export const formAuthorEdit = document.querySelector('#form_author'); //форма редактирования автора
export const formAddPhoto = document.querySelector('#form_photo-add'); //форма добавления места
const profiles = document.querySelector('.profiles'); //профили
export const buttonProfileEdit = profiles.querySelector('.profile__button-edit'); //кнопка открытия формы автора
export const profileName = profiles.querySelector('.profile__author'); //имя автора
export const profileInfo = profiles.querySelector('.profile__activity'); //информация об авторе
export const buttonPhotoAdd = profiles.querySelector('.profile__button-add'); //кнопка добавления места
export const formOpenPhoto = document.querySelector('#form_photo-open');
export const templatePhotoClass = '#profile-template';
export const cardListSelector = '.profile__photos';
export const nameInput = document.querySelector('.popup__author');
export const jobInput = document.querySelector('.popup__activity');
export const popupImage = document.querySelector('.popup__img');
export const popupParagraph = document.querySelector('.popup__paragraph');
export const formInputName = document.querySelector('.popup__name');
export const formInputLink = document.querySelector('.popup__link');

// project 9
export const profileAva = document.querySelector('.profile__face');
export const formAvatarEdit = document.querySelector('#form_avatar');
export const linkAvatar = document.querySelector('.popup__avatar');
export const myToken = 'a7914201-0470-435f-a2e6-f9d3f2218cdd';
export const myGroupId = 'cohort-12';
export const formConfirmation = document.querySelector('#form_confirmation');
export const msgWindow = document.querySelector('.msg');
export const msgText = document.querySelector('.msg__span');
export const blockAvatar = document.querySelector('.profile__avatar');

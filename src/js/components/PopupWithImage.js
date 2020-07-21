import Popup from './Popup.js';
import {
  popupImage,
  popupParagraph
} from '../utils/constants.js';
export default class PopupWithImage extends Popup {
  open(item) {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupParagraph.textContent = item.name;
    super.open(); 
  }
}

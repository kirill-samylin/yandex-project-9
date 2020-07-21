export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addPrependItem(element) {
    this._container.prepend(element);
  }
  addAppendItem(element) {
    this._container.append(element);
  }
  renderItems(cards, userId) {
    this._container.innerHTML = '';
    cards.forEach(item => {
      this._renderer(item, userId);
    });
  }
}

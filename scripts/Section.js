 class Section {
  constructor({data ,renderer}, containerSelector) {
    this._data = data; // array
    this._renderer = renderer; // func 
    this._container = containerSelector;
  }

  renderItems() {
    this._data.forEach((item) => {
      this._renderer(item);
      // this.addItem(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}

export { Section }
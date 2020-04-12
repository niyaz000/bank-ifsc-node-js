
class Entry {

  constructor(position, data) {
    this._position = position;
    this._data = data;
  }

  data() {
    return this._data;
  }

  position() {
    return this._position;
  }

};

module.exports = Entry


class Optional {

  constructor(data) {
    this._data = data || null;
    this._present = !(data == undefined) || false
  }

  isEmpty() {
    return !this._present;
  }

  isPresent() {
    return this._present;
  }

  data() {
    return this._data;
  }

};

module.exports = Optional;
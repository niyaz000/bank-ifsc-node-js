
class Optional {

  constructor(data) {
    this.data = data;
    this.present = !(data == undefined) || false
  }

  isEmpty() {
    return !this.present;
  }

  isPresent() {
    return this.present;
  }

  get() {
    this.data;
  }

};

class Branch {

  constructor(options) {
    this.address = options.address;
    this.branch = options.branch;
    this.city = options.city;
    this.code = options.code;
    this.contact = options.contact;
    this.district = options.district;
    this.ifsc = options.ifsc;
    this.micr = options.micr;
    this.name = options.name;
    this.state = options.state;
    this.id = options.id;
  }

  equals(branch) {
    return (JSON.stringify(this) == JSON.stringify(branch));
  }

  toJsonString() {
    return JSON.stringify(this);
  }

}

module.exports = Branch

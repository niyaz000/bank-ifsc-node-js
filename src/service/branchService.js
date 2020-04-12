const Branch = require('../model/branch');

class BranchService {

  constructor(dao) {
    this.dao = dao;
  }

  save(branch) {
    const b = new Branch(branch);
    b.id = branch.ifsc;
    return this.dao.add(b);
  }

  findById(id) {
    return this.dao.findById(id);
  }

  find(ifsc, micr) {

  }

  findAll(page, per_page) {

  }
}

module.exports = BranchService;
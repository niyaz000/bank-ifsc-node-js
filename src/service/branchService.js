
class BranchService {

  constructor(dao) {
    this.dao = dao;
  }

  findById(id) {
    return this.dao.findById(id);
  }

  find(ifsc, micr) {

  }

  findAll(page, per_page) {

  }
}
const Optional = require('../util/optional');
const Entry = require('../util/entry');
const DuplicateBranchException = require('../exception/duplicateBranch');

class BranchDao {

  constructor() {
    this.branches = [];
    this.ifscMap = new Map();
    this.micrMap = new Map();
    this.idMap = new Map();
    this.bankCodeMap = new Map();
  }

  add(branch) {
    this.checkIfNotExists(branch)
    const length = this.branches.length;
    const entry = new Entry(length, branch);
    this.branches.push(entry);
    this.updateMaps(branch, entry);
    return branch;
  }

  checkIfNotExists(branch) {
    if(this.ifscMap.get(branch.ifsc) != null) {
      throw DuplicateBranchException(`duplicate branch with same ifsc ${branch.ifsc}`)
    }
  }

  updateMaps(branch, entry) {
    this.ifscMap.set(branch.ifsc, entry);
    this.micrMap.set(branch.micr, entry);
    this.idMap.set(branch.id, entry);
    this.bankCodeMap.set(branch.ifsc, entry);
  }

  deleteById(id) {
    branch = this.findById(id);
    if(branch.isEmpty()) {
      return;
    }
    remove(branch);
  }

  remove(branch) {
    this.idMap.delete(branch.id);
    this.ifscMap.delete(branch.ifsc);
    this.micrMap.delete(branch.micr);
    this.bankCodeMap.delete(branch.bank_code);
  }

  findById(id) {
    return new Optional(this.idMap.get(id).data());
  }

  findByIfsc(ifsc) {
    return new Optional(this.ifscMap.get(ifsc).data());
  }

  findByMicr(micr) {
    return new Optional(this.micrMap.get(micr).data());
  }

  findByBankCode(bank_code) {
    return new Optional(this.bankCodeMap.get(bank_code).data());
  }

};

module.exports = BranchDao;

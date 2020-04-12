const BranchDao = require('../../src/dao/branchDao.js');

const data = {
  "address": "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
  "branch": "RTGS-HO",
  "city": "GREATER MUMBAI",
  "code": "ABHY",
  "contact": "25260173",
  "district": "MUMBAI",
  "id": "ABHY0065001",
  "ifsc": "ABHY0065001",
  "micr": null,
  "name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
  "state": "MAHARASHTRA"
};

describe('BranchDao', () => {

  test("add, should add the object in the map", () => {
    let dao = new BranchDao();
    dao.add(data);
    expect(dao.findById(data.id).isPresent()).toBeTruthy();
  })

})

const Branch = require('../../src/model/branch.js');

const data = {
  "address": "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
  "branch": "RTGS-HO",
  "city": "GREATER MUMBAI",
  "code": "ABHY",
  "contact": "25260173",
  "district": "MUMBAI",
  "ifsc": "ABHY0065001",
  "micr": null,
  "name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
  "state": "MAHARASHTRA"
};

describe('Branch', () => {

  test("equals, objects are not equal, should return false", () => {
    let branch1 = new Branch(data);
    data['micr'] = 123456;
    let branch2 = new Branch(data);
    expect(branch1.equals(branch2)).toBeFalsy();
  })

  test("equals, objects are equal, should return true", () => {
    let branch1 = new Branch(data);
    data['micr'] = 123456;
    let branch2 = new Branch(data);
    expect(branch1.equals(branch2)).toBeTruthy();
  })

  test("toJsonString, should convert object to json string", () => {
    let expected = "{\"address\":\"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024\",\"branch\":\"RTGS-HO\",\"city\":\"GREATER MUMBAI\",\"code\":\"ABHY\",\"contact\":\"25260173\",\"district\":\"MUMBAI\",\"ifsc\":\"ABHY0065001\",\"micr\":123456,\"name\":\"ABHYUDAYA COOPERATIVE BANK LIMITED\",\"state\":\"MAHARASHTRA\"}";

    let branch = new Branch(data);
    expect(branch.toJsonString()).toBe(expected);
  })

})

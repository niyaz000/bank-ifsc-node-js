const Optional = require('../../src/util/optional.js');

describe('isEmpty', () => {

  test("isEmpty, has no data should return true", () => {
    let optional = new Optional(null);
    expect(optional.isEmpty()).toBeTruthy();

    optional = new Optional(undefined);
    expect(optional.isEmpty()).toBeTruthy();
  })

  test("has data should return false", () => {
    let optional = new Optional(1);
    expect(optional.isEmpty()).toBeFalsy();
  })

})

describe('isPresent', () => {

  test("has no data should return false", () => {
    let optional = new Optional(null);
    expect(optional.isPresent()).toBeFalsy();

    optional = new Optional(undefined);
    expect(optional.isPresent()).toBeFalsy();
  })

  test("has data should return true", () => {
    let optional = new Optional(1);
    expect(optional.isPresent()).toBeTruthy();
  })

})

describe('data', () => {

  test("has no data should return null", () => {
    let optional = new Optional(null);
    expect(optional.data()).toBeNull();
  })

  test("has data should return data object", () => {
    let optional = new Optional(1);
    expect(optional.data()).toBe(1);
  })

})


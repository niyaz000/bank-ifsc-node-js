const Entry = require('../../src/util/entry.js');

describe('Entry', () => {

  test("data, should return the data object", () => {
    let entry = new Entry(1, "data object");
    expect(entry.data()).toBe("data object");
  })

  test("position, should return the position", () => {
    let entry = new Entry(1, "data object");
    expect(entry.position()).toBe(1);
  })

})

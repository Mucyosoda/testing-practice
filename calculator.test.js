const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const Calculator = require('./calculator');
let addnumber = new Calculator(20, 5);
let subtracts = new Calculator(20, 5);

describe('addition', () => {
  test('add num1 + num2 equal to 25 ', () => {
    expect(addnumber.add()).toBe(25);
  });

  test('subtract num1 - num2 equal to 25 ', () => {
    expect(subtracts.subtract()).toBe(15);
  });
});

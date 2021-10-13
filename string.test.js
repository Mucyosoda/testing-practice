const { expect } = require('@jest/globals');
const strings = require('./string');
test('count string rwanda equal to error', () => {
  //expect(strings('rwanda').toBe(6));
  //expect(strings('rwanda')).toBe(6);
  expect(strings('rwanda nziza')).toBe('error!!!');
});

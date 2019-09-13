const calculateBill = require('../calculateBill');

test('calculate bills when the number of hours and the hourly rate is provided.', () => {
  expect(calculateBill(10, 40)).toBe(400);
});

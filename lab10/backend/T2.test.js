
const naturalNumbers = require('./T2');
test('Sum of 10 natural numbers which are multiple of 3 or 5 equals to 23', () => {
    expect(naturalNumbers(10)).toBe(23);
});
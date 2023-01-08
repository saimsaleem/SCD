const calculator =require('./Calculator');

test('Testing', () => {
    expect(calculator.sum(5,5)).toBe(10);
});

test('6 / 3 = 2', () => {
    expect(calculator.divide(6,3)).toBe(2);
});
test('5 * 5 = 25', () => {
    expect(calculator.Multiply(5,5)).toBe(25);
});
test('5 - 5 = 0', () => {
    expect(calculator.subtract(5,5)).toBe(0);
});
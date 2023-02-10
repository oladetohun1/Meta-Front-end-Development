const addFives = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFives(1)).toBe(6);
});
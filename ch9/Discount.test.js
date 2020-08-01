const discount = require('./Discount');

test('Expect discount', () => {
    const discountData = discount(100,200);
    expect(discountData).toBe(97);
});
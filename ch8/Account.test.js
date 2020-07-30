const account = require('./Account');
test('Expect Account overdraftCharge', () => {
    const testData = new account({ isPremium: true }, 100);
    expect(testData.overdraftCharge).toBe(89.05);
});
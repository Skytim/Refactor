const account = require('./Account');
test('Expect Account overdraftCharge', () => {
    // const testData = new account.Account({ isPremium: true }, 100);
    const accountType = new account.AccountType('Premium');
    expect(accountType.overdraftCharge(100)).toBe(89.05);
    const accountData = new account.Account(accountType,10);
    expect(accountData.bankCharge).toBe(17.05);
});
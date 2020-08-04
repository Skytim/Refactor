const productionPlan = require('./ProductionPlan');

test('Expect productionPlan', () => {

    expect(productionPlan.production.amount).toBe(2468);
});
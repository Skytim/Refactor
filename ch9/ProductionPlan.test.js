const productionPlan = require('./ProductionPlan');

test('Expect productionPlan', () => {

    expect(productionPlan.production).toBe(2234);
});
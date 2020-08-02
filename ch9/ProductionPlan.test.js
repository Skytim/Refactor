const productionPlan = require('./ProductionPlan');

test('Expect productionPlan', () => {

    expect(productionPlan.production).toBe(productionPlan.calculatedProductionAccumulator);
});
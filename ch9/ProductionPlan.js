class ProductionPlan {
    constructor(production) {
        this._initialProduction = production;
        this._productionAccumulator = 0;
        this._adjustments = [];
    }
    get production() {
        return this._initialProduction + this._productionAccumulator;
    }

    get calculatedProductionAccumulator() {
        return this._adjustments.reduce((sum, adjustment) => sum + adjustment, 0);
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._productionAccumulator += anAdjustment;
    }
}
const productionPlan = new ProductionPlan(0);
productionPlan.applyAdjustment(1234);
module.exports = productionPlan;
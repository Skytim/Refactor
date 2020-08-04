class ProductionPlan {
    constructor(production) {
        this._initialProduction = production;
        this._productionAccumulator = 0;
        this._adjustments = [];
    }
    get production() {
        return this._initialProduction + this._productionAccumulator;
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
        }
    get calculatedProduction() {
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
}
const productionPlan = new ProductionPlan(1000);
productionPlan.applyAdjustment(1000);
module.exports = productionPlan;
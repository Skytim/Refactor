class ProductionPlan {
    constructor(production) {
        this._production = production;
        this._adjustments = [];
        this._adjustments.push(production);
    }
    get production() {
        return this._production;
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production.amount += anAdjustment.amount;
    }
    get calculatedProduction() {
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
}
const productionPlan = new ProductionPlan({ amount: 1234 });
productionPlan.applyAdjustment({ amount: 1234 });
module.exports = productionPlan;
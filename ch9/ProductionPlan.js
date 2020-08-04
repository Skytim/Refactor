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
        this._production += anAdjustment.amount;
    }
}
const productionPlan = new ProductionPlan(1000);
productionPlan.applyAdjustment({ data: 100, amount: 1234 });
module.exports = productionPlan;
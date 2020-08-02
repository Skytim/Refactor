class ProductionPlan {
    constructor(data) {
        this._adjustments = [];
        this._production = data.amount;
    }
    get production() { return this._production; }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}
const productionPlan = new ProductionPlan({ data: 888, amount: 1234 });
productionPlan.applyAdjustment({ data: 1234, amount: 5678 });
module.exports = productionPlan;
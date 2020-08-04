const changeReferenceToReference = require('./ChangeValueToReference');

test('Change Reference to Value', () => {
    const orderData = new changeReferenceToReference.Order({ number: 1234, customer: 1000 });
    expect(orderData.customer.id).toBe(1000);
});
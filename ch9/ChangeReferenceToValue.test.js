const changeReferenceToValue = require('./ChangeReferenceToValue');

test('Change Reference to Value', () => {
    const personData = new changeReferenceToValue.Person();
    personData.officeNumber = 100;
    expect(personData.officeNumber).toBe(100);
});
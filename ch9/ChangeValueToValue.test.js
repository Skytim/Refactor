const changeReferenceToValue = require('./ChangeReferenceToValue');

test('Change Reference to Value', () => {
    const personData = new changeReferenceToValue.Person();
    personData.officeNumber = 100;
    expect(personData.officeNumber).toBe(100);
    // expect(new changeReferenceToValue.TelephoneNumber("312", "555-0142")).toBe(new changeReferenceToValue.TelephoneNumber("312", "555-0142"));
    expect(new changeReferenceToValue.TelephoneNumber("312", "555-0142").equals((new changeReferenceToValue.TelephoneNumber("312", "555-0142")))).toBe(true);
});
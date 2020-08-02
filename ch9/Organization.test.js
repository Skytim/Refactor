const organization = require('./Organization');

test('Expect organization', () => {
    const organizationData = organization;
    expect(organization.country).toBe('GB');
});
const distanceTravelled = require('./DistanceTravelled');

test('Expect distanceTravelled', () => {
    const distanceTravelledData = distanceTravelled({ primaryForce: 100, secondaryForce: 200, mass: 100, delay: 200 }, 10000);
    expect(distanceTravelledData).toBe(146040000);
});
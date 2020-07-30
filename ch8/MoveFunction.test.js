const trackSummary = require('./MoveFunction');
test('Expect GPS trackSummary Distance', () => {
  const testData = trackSummary([{ lat: 10, lon: 20 }, { lat: 20, lon: 30 }, { lat: 30, lon: 40 }]);
  expect(testData.distance).toBe(1891.4815595645746);
  expect(testData.pace).toBe(10.573721905385145);
});
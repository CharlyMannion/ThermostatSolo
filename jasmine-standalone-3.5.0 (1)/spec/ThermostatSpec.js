describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a default temperature of 20°C", function() {
    expect(thermostat.DEFAULT_TEMPERATURE).toEqual(20);
  })
});

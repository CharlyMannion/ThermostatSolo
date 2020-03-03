describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a default temperature of 20°C", function() {
    expect(thermostat.DEFAULT_TEMPERATURE).toEqual(20);
  });

  it("should start at the default temperature", function() {
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });
});

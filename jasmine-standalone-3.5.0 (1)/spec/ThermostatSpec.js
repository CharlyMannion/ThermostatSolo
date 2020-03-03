describe("Thermostat", function() {
  var thermostat;
  INCREMENT_VALUE = 1

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("start temperature", function() {
    it("should have a default temperature of 20°C", function() {
      expect(thermostat.DEFAULT_TEMPERATURE).toEqual(20);
    });

    it("should start at the default temperature", function() {
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe("increase temperature", function() {
    it("increases the temperature by 1", function() {
      thermostat.increaseTemp();
      increasedTemp = thermostat.DEFAULT_TEMPERATURE + INCREMENT_VALUE;
      expect(thermostat.temperature).toEqual(increasedTemp);
    });
  });

  describe("decrease temperature", function() {
    it("decreases the temperature by 1", function() {
      thermostat.decreaseTemp();
      decreasedTemp = thermostat.DEFAULT_TEMPERATURE - INCREMENT_VALUE;
      expect(thermostat.temperature).toEqual(decreasedTemp);
    });
  });
});

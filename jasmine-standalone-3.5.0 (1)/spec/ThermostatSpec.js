describe("Thermostat", function() {
  var thermostat;
  INCREMENT_VALUE = 1

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("start temperatures", function() {
    it("should have a default temperature of 20°C", function() {
      expect(thermostat.DEFAULT_TEMPERATURE).toEqual(20);
    });

    it("should start at the default temperature", function() {
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });

    it("should have a max temp when power saving mode is on", function() {
      expect(thermostat.MAX_TEMP_PSM_ON).toEqual(25);
    });

    it("should have a higher max temp when power saving mode is off", function() {
      expect(thermostat.MAX_TEMP_PSM_OFF).toEqual(32);
    });
  });

  describe("increase temperature", function() {
    it("increases the temperature by 1", function() {
      thermostat.increaseTemp();
      increasedTemp = thermostat.DEFAULT_TEMPERATURE + INCREMENT_VALUE;
      expect(thermostat.temperature).toEqual(increasedTemp);
    });
    it("cannot excede the max temp when PSM mode is on", function() {
      thermostat.temperature = thermostat.MAX_TEMP_PSM_ON;
      expect(function() {
        thermostat.increaseTemp()
      }).toThrowError("Maximum temperature reached");
    });
    it("can excede the max temp for power saving mode when power saving mode is turned off", function() {
      thermostat.temperature = thermostat.MAX_TEMP_PSM_ON;
      thermostat.isPowerSaving = false;
      expect(function() {
        thermostat.increaseTemp()
      }).not.toThrowError("Maximum temperature reached");
    });
    it("cannot excede the max temp when PSM mode is on", function() {
      thermostat.temperature = thermostat.MAX_TEMP_PSM_OFF;
      expect(function() {
        thermostat.increaseTemp()
      }).toThrowError("Maximum temperature reached");
    });
  });

  describe("decrease temperature", function() {
    it("decreases the temperature by 1", function() {
      thermostat.decreaseTemp();
      decreasedTemp = thermostat.DEFAULT_TEMPERATURE - INCREMENT_VALUE;
      expect(thermostat.temperature).toEqual(decreasedTemp);
    });
  });

  describe("power saving mode", function() {
    it("power saving mode is on as default", function() {
      expect(thermostat.isPowerSaving).toBeTruthy();
    });
    it("sets the max temp to 25 when on"), function() {
      expect(thermostat._maximumTemperature()).toEqual(thermostat.MAX_TEMP_PSM_ON);
    };
    it("sets the max temp to 32 when off", function() {
      thermostat.togglePowerSaving();
      expect(thermostat._maximumTemperature()).toEqual(thermostat.MAX_TEMP_PSM_OFF);
    })
    it("can be switched off", function() {
      thermostat.togglePowerSaving();
      expect(thermostat.isPowerSaving).toBeFalsy();
    });
  });
});

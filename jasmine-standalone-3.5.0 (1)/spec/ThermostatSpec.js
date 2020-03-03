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

    it("has a minimum temp", function() {
      expect(thermostat.MINIMUM_TEMP).toEqual(10);
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
    it("cannot be turned down beyond the minimum temp", function() {
      thermostat.temperature = thermostat.MINIMUM_TEMP;
      expect(function() {
        thermostat.decreaseTemp();
      }).toThrowError("Minimum temperature reached");
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

  describe("reset temperature", function() {
    it("resets the temperature to the default temp", function() {
      thermostat.temperature = thermostat.MAX_TEMP_PSM_OFF;
      thermostat.resetToDefault();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe("energy usage", function() {
    it("is high if the temp is above 25", function() {
      thermostat.isPowerSaving = false;
      thermostat.temperature = 30;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
    it("has the limit of high usage set as a constant", function() {
      expect(thermostat.HIGH_USAGE_LIMIT).toEqual(25);
    });
    it("has the limit of high usage set as a constant", function() {
      expect(thermostat.HIGH_USAGE_LIMIT).toEqual(25);
    });
    it("has the limit of low usage set as a constant", function() {
      expect(thermostat.LOW_USAGE_LIMIT).toEqual(18);
    });
    it("is low if the temp is below 18", function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it("is medium if the temp is below 25 but above 18", function() {
      thermostat.temperature = 20;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
  });
});

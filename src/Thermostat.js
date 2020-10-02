function Thermostat() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.isPowerSaving = true;
    this.MINIMUM_TEMP = 10;
    this.HIGH_USAGE_LIMIT = 25;
    this.LOW_USAGE_LIMIT = 18;
};

Thermostat.prototype.increaseTemp = function() {
    if (this.temperature >= this._maximumTemperature()) {
        throw new Error("Maximum temperature reached")
    };

    this.temperature++
};

Thermostat.prototype.decreaseTemp = function() {
    if (this.temperature <= this.MINIMUM_TEMP) {
        throw new Error("Minimum temperature reached");
    }
    this.temperature--
};

Thermostat.prototype.togglePowerSaving = function() {
    this.isPowerSaving = !(this.isPowerSaving != false);
};

Thermostat.prototype._maximumTemperature = function() {
    return (this.isPowerSaving ? this.MAX_TEMP_PSM_ON : this.MAX_TEMP_PSM_OFF);
};

Thermostat.prototype.resetToDefault = function() {
    this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
    if (this.temperature < this.LOW_USAGE_LIMIT) {
        return "LOW";
    } else if (this.temperature < this.HIGH_USAGE_LIMIT) {
        return "MEDIUM";
    }
    return "HIGH";
};

Thermostat.prototype.powerSavingStatus = function() {
    return (this.isPowerSaving ? "ON" : "OFF");
};
function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.isPowerSaving = true;
  this.MINIMUM_TEMP = 10;
};

Thermostat.prototype.increaseTemp = function() {
  if(this.temperature >= this._maximumTemperature()) {
    throw new Error("Maximum temperature reached")
  };

  this.temperature ++
};

Thermostat.prototype.decreaseTemp = function() {
  if(this.temperature <= this.MINIMUM_TEMP) {
    throw new Error("Minimum temperature reached");
  }
  this.temperature --
};

Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSaving = !(this.isPowerSaving != false);
};

Thermostat.prototype._maximumTemperature = function() {
  return(this.isPowerSaving ? this.MAX_TEMP_PSM_ON : this.MAX_TEMP_PSM_OFF);
}

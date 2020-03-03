function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature ++
};

Thermostat.prototype.decreaseTemp = function() {
  this.temperature --
};

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature ++
};

Thermostat.prototype.decreaseTemp = function() {
  this.temperature --
};

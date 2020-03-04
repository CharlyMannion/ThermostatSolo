$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  $('#power-saving-status').text(thermostat.powerSavingStatus());

  $('#energy-usage-status').text(thermostat.energyUsage());


  $('#temperature-up').on('click', function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetToDefault();
    updateTemperature();
  });

  $('#toggle_power_saving').on('click', function() {
    thermostat.togglePowerSaving();
    $('#power-saving-status').text(thermostat.powerSavingStatus());
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + "°C");
  };
});

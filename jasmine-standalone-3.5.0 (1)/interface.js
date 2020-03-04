$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature + "°C");

  $('#power-saving-status').text(thermostat.powerSavingStatus());

  $('#energy-usage-status').text(thermostat.energyUsage());


  $('#temperature-up').on('click', function() {
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.temperature + "°C");
  });

  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.temperature + "°C");
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetToDefault();
    $('#temperature').text(thermostat.temperature + "°C");
  });

  $('#toggle_power_saving').on('click', function() {
    thermostat.togglePowerSaving();
    $('#power-saving-status').text(thermostat.powerSavingStatus());
  });
});

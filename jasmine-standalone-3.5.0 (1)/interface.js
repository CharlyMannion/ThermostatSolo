$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  updatePowerSaving();

  updateEnergyUsage();

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemp();
    updateTemperature();
    updateEnergyUsage();
  });

  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemp();
    updateTemperature();
    updateEnergyUsage();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetToDefault();
    updateTemperature();
    updateEnergyUsage();
  });

  $('#toggle_power_saving').on('click', function() {
    thermostat.togglePowerSaving();
    updatePowerSaving();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + "°C");
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updatePowerSaving() {
    $('#power-saving-status').text(thermostat.powerSavingStatus());
  };

  function updateEnergyUsage() {
    $('#energy-usage-status').text(thermostat.energyUsage());
    $('#energy-usage-status').attr('class', thermostat.energyUsage());
  };

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp + "°C");
    });
  });
});

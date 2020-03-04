$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature + "°C");

  $('#energy-usage-status').text(thermostat.energyUsage());


  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemp(); // update model
    $('#temperature').text(thermostat.temperature); // update view
  });

  $('#temperature-down').on('click', function() { // event listener
    thermostat.decreaseTemp(); // update model
    $('#temperature').text(thermostat.temperature); // update view
  });

  $('#temperature-reset').on('click', function() { // event listener
    thermostat.resetToDefault(); // update model
    $('#temperature').text(thermostat.temperature); // update view
  });
});

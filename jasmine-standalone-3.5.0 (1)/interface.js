$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature + "°C");

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemp(); // update model
    $('#temperature').text(thermostat.temperature); // update view
  });
});

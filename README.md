# Thermostat

## Business logic

A programme, written in Javascript, that models a simple thermostat.

### Using the app
* Fork this repo
* Clone to your local machine
`git clone https://github.com/CharlyMannion/ThermostatSolo`
* run the app locally
`ruby 'jasmine-standalone-3.5.0 (1)/server.rb'`
* visit http://localhost:4567/time

### Challenge setup

Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

### User Stories
```
As a Homeowner,
So I can control the temperature of my house,
I want a Thermostat.

As a Homeowner,
So that my house is warm,
I want the default temperature of my Thermostat to be 20°C.

As a Homeowner,
So that my house doesn't get too hot,
I want to be able to turn the temperature of my Thermostat down.

As a Homeowner,
So that my house doesn't get too cold,
I want to be able to turn the temperature of my Thermostat up.

As a conscious Homeowner,
In order to save money and/or protect the environment,
I want my Thermostat to have a power saving mode.

As a conscious Homeowner,
In order to save money and/or protect the environment,
I want my Thermostat to be in power saving mode as default.

As a conscious Homeowner,
In order to save money and/or protect the environment,
I want the maximum temperature of my Thermostat to be 25°C in power saving mode.

As a Homeowner,
So that I have full control of my Thermostat,
I want to turn Power Saving mode off.

As a Homeowner,
So that my house doesn't get too hot,
I want the maximum temperature when power saving mode is off to be 32°C.

As a Homeowner,
So that I can easily reset the temperature of my Thermostat to default,
I want a reset button.

As a Homeowner,
So I can easily see how much energy I am using,
I want the Thermostat to display the usage as either high, medium, or low (by colour).
```

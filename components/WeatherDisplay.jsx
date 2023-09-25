import React from 'react';

function WeatherDisplay({ weather }) {
  let weatherIcon;

  // Determine the weather icon based on temperature and humidity
  if (weather == 'Haze') {
    weatherIcon = './weather-icon-pack/sunny.png';
  } else if (weather == 'Clear') {
    weatherIcon = '/weather-icon-pack/sunny.png';
  } else if (weather == 'Rain') {
    weatherIcon = './weather-icon-pack/rain.png';
  } else if (weather == 'Snow') {
    weatherIcon = './weather-icon-pack/snow.png';
  } else if (weather == 'Dust') {
    weatherIcon = './weather-icon-pack/windy.png';
  } else if(weather == 'Clouds'){
    weatherIcon = './weather-icon-pack/cloud.png';
  }else {
    weatherIcon = '/unknown.png';
  }

  // Render the weather icon
  return (
    <div className="weather-icon">
      <img src={weatherIcon} alt="Weather Icon" />
    </div>
  );
}

export default WeatherDisplay;

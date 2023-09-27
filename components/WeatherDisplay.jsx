import React from 'react';

function WeatherDisplay({ weather }) {
  let weatherIcon;

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
  }else if(weather == 'Mist'){
    weatherIcon = './weather-icon-pack/mist.png'
  }else if(weather == 'Smoke' || weather == 'Fog'){
    weatherIcon = './weather-icon-pack/smoke.png'
  }else {
    weatherIcon = '/unknown.png';
  }

  return (
    <div className="weather-icon">
      <img src={weatherIcon} alt="Weather Icon" />
    </div>
  );
}

export default WeatherDisplay;

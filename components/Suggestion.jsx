import React from 'react'

const Suggestion = ({temperature}) => {

  let weatherMessage;

  if (temperature >= 253.15 && temperature < 273.15) {
    weatherMessage = "Brr! It's very cold!";
  } else if (temperature >= 273.15 && temperature < 283.15) {
    weatherMessage = "Chilly weather! Dress warmly!";
  } else if (temperature >= 283.15 && temperature < 293.15) {
    weatherMessage = "Cool and pleasant! Enjoy the day!";
  } else if (temperature >= 293.15 && temperature < 303.15) {
    weatherMessage = "Nice and warm! Perfect weather!";
  } else if (temperature >= 303.15 && temperature < 313.15) {
    weatherMessage = "It's a great day to have ice cream!";
  } else if (temperature >= 313.15 && temperature < 323.15) {
    weatherMessage = "Stay hydrated and cool!";
  } else if (temperature >= 323.15 && temperature < 333.15) {
    weatherMessage = "Extreme heat alert! Stay indoors!";
  } else if (temperature >= 333.15) {
    weatherMessage = "Dangerously hot! Avoid going outside!";
  } else {
    weatherMessage = 'Unknown Weather Condition';
  }

  return (
    <div>
        <p>{weatherMessage}</p>
    </div>
  )
}

export default Suggestion


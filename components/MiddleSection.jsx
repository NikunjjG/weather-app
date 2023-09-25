import React, { useState } from 'react'
import WeatherDisplay from "@/components/WeatherDisplay";


const MiddleSection = ({temperature, feelsLike, weather, humid}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const handleTemp = ()=>{
        setIsCelsius(!isCelsius)
    }
  return (
    <div className="middle flex justify-between my-8 ">
            <div className="temp cursor-pointer" onClick={handleTemp}>
                  <p className="text-3xl">{isCelsius && Math.round(temperature - 273) + '°C'}
                  {!isCelsius && Math.round(((temperature - 273) * 1.8) + 32) + '°F'}
                  </p>
                  <p>Feels like {isCelsius && Math.round(feelsLike - 273) + '°C'}
                  {!isCelsius && Math.round(((feelsLike - 273) * 1.8) + 32) + '°F'}
                  </p>
                  <p className="text-xl">{weather}</p>
            </div>
            <div className="icon">
              <WeatherDisplay humidity={humid} weather = {weather}/>
            </div>
          </div>
  )
}

export default MiddleSection

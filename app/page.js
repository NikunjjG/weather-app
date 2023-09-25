"use client"
import React, { useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from "axios";
import WeatherDisplay from "@/components/WeatherDisplay";
import Suggestion from "@/components/suggestion";

const page = () => {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true)
  const [location, setLocation] = useState('')
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

useEffect(() => {

  const fetchWeatherData = async () => {
    try {
      const city = 'New Delhi';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  fetchWeatherData();
}, []);

  const handleSearch = ()=>{
    setVisibleSearch(!visibleSearch)
  }

  const handleTemp = ()=>{
    setIsCelsius(!isCelsius)
    console.log(isCelsius)
  }

  const fetchLocationData = async () => {
    try{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch(err){
      setError(err.message);
    }
  };
  
  return (
    <div className="main bg-gray-200">
      <div className="content flex justify-center flex-col items-center">
        <div className="content-top p-8 rounded-lg bg-white">
          <div className="top flex justify-center" onDoubleClick={handleSearch}>
            {console.log(weatherData)}
            {!visibleSearch && (
              <>
              <LocationOnOutlinedIcon/>
              {weatherData && (
                <p className="font-semibold">{weatherData.name}</p>
              )}
              </>
            )}

            {visibleSearch && (
              <div className = "flex items-center">
              <input type="text" name="" id="" placeholder="Enter location name" className="focus: border-2 border-black p-1.5 rounded-3xl" onChange={(e) => {setLocation(e.target.value)
            }}
            />
              <SearchOutlinedIcon className="mx-2 border-2 border-black p-1.5 rounded-3xl search hover:bg-black hover:text-white" onClick = {fetchLocationData}/>
              </div>
            )}
            
          </div>
          <div className="middle flex justify-between my-8 ">
            <div className="temp cursor-pointer" onClick={handleTemp}>
              {weatherData && (
                <>
                  <p className="text-3xl">{isCelsius && Math.round(weatherData.main.temp - 273) + '°C'}
                  {!isCelsius && Math.round(((weatherData.main.temp - 273) * 1.8) + 32) + '°F'}
                  </p>
                  <p>Feels like {isCelsius && Math.round(weatherData.main.feels_like - 273) + '°C'}
                  {!isCelsius && Math.round(((weatherData.main.feels_like - 273) * 1.8) + 32) + '°F'}
                  </p>
                  <p className="text-xl">{weatherData.weather[0].main}</p>
                </>
              )}
            </div>
            <div className="icon">
              {weatherData && <WeatherDisplay humidity={weatherData.main.humidity} weather = {weatherData.weather[0].main}/>}
            </div>
          </div>
          <div className="bottom flex justify-center bg-slate-200 px-4 py-2 rounded-3xl my-6">
            {weatherData && <Suggestion temperature={weatherData.main.temp}/>}
          </div>
        </div>
        <div>
          <div className="lower-content">
            <div className="lower-content-container flex justify-around rounded-lg bg-white">
              {weatherData && (
                <>
                  <div className="element text-center p-2">
                    <AirOutlinedIcon />
                    <p>{weatherData.wind.speed} m/s</p>
                  </div>
                  <div className="element text-center p-2">
                    <WaterDropOutlinedIcon />
                    <p>{weatherData.main.humidity}%</p>
                  </div>
                  <div className="element text-center p-2">
                    <SpeedOutlinedIcon />
                    <p>{weatherData.main.pressure} hPa</p>
                  </div>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;



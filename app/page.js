"use client";
import React, { useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
import Suggestion from "@/components/suggestion";
import LowerSection from "@/components/LowerSection";
import MiddleSection from "@/components/MiddleSection";

const page = () => {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const city = "New Delhi";
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

  const handleSearch = () => {
    setVisibleSearch(!visibleSearch);
  };

  const fetchLocationData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="main bg-gray-200">
      <div className="content flex justify-center flex-col items-center">
        <div className="content-top p-8 rounded-lg bg-white">
          <div className="top flex justify-center" onDoubleClick={handleSearch}>
            {!visibleSearch && (
              <>
                <LocationOnOutlinedIcon />
                {weatherData && (
                  <p className="font-semibold">{weatherData.name}</p>
                )}
              </>
            )}

            {visibleSearch && (
              <div className="flex items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter location name"
                  className="focus: border-2 border-black p-1.5 rounded-3xl"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
                <SearchOutlinedIcon
                  className="mx-2 border-2 border-black p-1.5 rounded-3xl search hover:bg-black hover:text-white"
                  onClick={fetchLocationData}
                />
              </div>
            )}
          </div>

          {weatherData && (
            <MiddleSection
              temperature={weatherData.main.temp}
              feelsLike={weatherData.main.feels_like}
              weather={weatherData.weather[0].main}
              humid={weatherData.main.humidity}
            />
          )}

          <div className="bottom flex justify-center bg-slate-200 px-4 py-2 rounded-3xl my-6">
            {weatherData && <Suggestion temperature={weatherData.main.temp} />}
          </div>
        </div>

        <div>
          {weatherData && (
            <LowerSection
              wind={weatherData.wind.speed}
              humid={weatherData.main.humidity}
              pressure={weatherData.main.pressure}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;

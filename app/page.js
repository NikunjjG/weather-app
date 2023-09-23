"use client"
import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const page = () => {
  const [visibleSearch, setVisibleSearch] = useState(false)

  const handleSearch = ()=>{
    setVisibleSearch(!visibleSearch)
  }
  return (
    <div className="main bg-gray-200">
      <div className="content flex justify-center flex-col items-center">
        <div className="content-top p-8 rounded-lg bg-white">
          <div className="top flex justify-center" onDoubleClick={handleSearch}>
            {!visibleSearch && (
              <>
              <LocationOnOutlinedIcon/>
              <p className="font-semibold">New Delhi, National Capital Terri...</p>
              </>
            )}

            {visibleSearch && (
              <>
              <SearchOutlinedIcon className="mx-2"/>
              <input type="text" name="" id="" placeholder="Enter location name" className="px2 py2 focus: border-none"/>
              </>
            )}
            
          </div>
          <div className="middle flex justify-between my-8">
            <div className="temp">
              <p className="text-3xl">29&deg;C</p>
              <p>Feels like 31&deg;C</p>
              <p className="text-xl">Clouds</p>
            </div>
            <div className="icon">
              <img src="./weather-icon-pack/sunny.png" alt="" />
            </div>
          </div>
          <div className="bottom flex justify-center bg-slate-200 px-4 py-2 rounded-3xl my-6">
            <p>Its a great day to have ice-cream</p>
          </div>
        </div>
        <div>
          <div className="lower-content">
            <div className="lower-content-container flex justify-around rounded-lg bg-white">
              <div className="element text-center p-2">
                <AirOutlinedIcon />
                <p>8.37 m/s</p>
              </div>
              <div className="element text-center p-2">
                <WaterDropOutlinedIcon />
                <p>78%</p>
              </div>
              <div className="element text-center p-2">
                <SpeedOutlinedIcon />
                <p>1009 hPa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

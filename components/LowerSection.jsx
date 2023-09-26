import React from 'react'
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LowerSectionIcon from './LowerSectionIcon';

const LowerSection = ({wind, humid, pressure}) => {
  return (
    <div className="lower-content">
            <div className="lower-content-container flex justify-around rounded-lg bg-white">
                  <div className="element text-center p-2">
                    <LowerSectionIcon element = {wind} icon = {<AirOutlinedIcon/>} unit = {'m/s'}/>
                  </div>
                  <div className="element text-center p-2">
                    <LowerSectionIcon element = {humid} icon = {<WaterDropOutlinedIcon/>} unit = {'%'}/>
                  </div>
                  <div className="element text-center p-2">
                    <LowerSectionIcon element = {pressure} icon = {<SpeedOutlinedIcon/>} unit = {'hPa'}/>
                  </div>
            </div>
          </div>
  )
}

export default LowerSection

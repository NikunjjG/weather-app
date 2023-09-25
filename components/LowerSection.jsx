import React from 'react'
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";

const LowerSection = ({wind, humid, pressure}) => {
  return (
    <div className="lower-content">
            <div className="lower-content-container flex justify-around rounded-lg bg-white">
                  <div className="element text-center p-2">
                    <AirOutlinedIcon />
                    <p>{wind} m/s</p>
                  </div>
                  <div className="element text-center p-2">
                    <WaterDropOutlinedIcon />
                    <p>{humid}%</p>
                  </div>
                  <div className="element text-center p-2">
                    <SpeedOutlinedIcon />
                    <p>{pressure} hPa</p>
                  </div>
            </div>
          </div>
  )
}

export default LowerSection

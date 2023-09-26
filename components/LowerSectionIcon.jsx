import React from 'react'

const LowerSectionIcon = ({ element, icon, unit}) => {
  return (
    <div>
      {icon}
      <p>{element}{unit}</p>
    </div>
  )
}

export default LowerSectionIcon

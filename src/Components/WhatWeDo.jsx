import React from 'react'
import '../Styles/whatwedo.css'
import Corporate from './SubComponents/Corporate'
function WhatWeDo() {
  return (
    <div>
       <div className="Our-services-container">
      <h2 className="Our-services-title">Our Services</h2>
      <span className="Our-services-description">Our solutions are tailor made to specific requirements of Business & Corporate sectors.</span>
     
    </div>
    <Corporate/>
    </div>
  )
}

export default WhatWeDo

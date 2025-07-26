import React from 'react'
import Corporateoffsite from './SubComponents/Corporate-offsite'
import MyMeal from './SubComponents/MyMeal'
import Technology from './SubComponents/Technology'
import CorporateBanner from './SubComponents/CorporateBanner'
import VideoAmddas from './SubComponents/VideoAmdas'

function CorporateMain() {
  return (
    <div>
      <CorporateBanner/>
      <Technology/>
      <VideoAmddas/>
         <MyMeal/>
      
      <Corporateoffsite/>
   
    </div>
  )
}

export default CorporateMain

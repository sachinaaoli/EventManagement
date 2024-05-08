import React from 'react'
import Carousal from './Carousal'
import OurServices from './OurServices'
import Component from './Component'
import ChatBox from './ChatBox'
import EventPackages from '../EventPackages'

const Dashboard = () => {
  return (
    <div style={{backgroundColor:'#fefce8'}}>
      <Carousal/>
    <Component/>
    <OurServices/>
    <EventPackages/>
    <ChatBox/>
    </div>
  )
}

export default Dashboard;
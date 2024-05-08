import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Front = () => {
  return (
    <div>
      <video  autoPlay controls>
        <source src="front.mp4" type="video/mp4" />
      </video> 
      <Link to='/home'>
      <Button>Enter</Button>
      </Link>
    </div>
  )
}

export default Front

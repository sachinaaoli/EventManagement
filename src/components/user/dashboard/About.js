import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div style={{ width: '100px', height: '100px',  borderRadius: '50%', margin: '20px auto' }}> About us</div>
        <Link to="/aboutus">
          <Button>More Details</Button>
        </Link>
      </div>
  )
}

export default About

import React from 'react'
import { Button } from './Button'
import './Home.css';
import '../App.css'

function Home() {
  return (
    <div className='hero-container'>
      <video src='../video-1.mp4' autoPlay loop muted />
      <h1>WELCOME!</h1>
      <div className='hero-btns'>
        <Button>OUR EMPLOYEES</Button>
      </div>
    </div>
  )
}

export default Home;
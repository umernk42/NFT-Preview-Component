import { useState,useRef } from 'react'
import './App.css'
import cubeImage from './assets/images/image-equilibrium.jpg';
import iconClock from './assets/images/icon-clock.svg';
import iconEth from './assets/images/icon-ethereum.svg';
import authorImg from './assets/images/image-avatar.png';
import iconView from './assets/images/icon-view.svg';

function App() {




  
  return (
    <div className="App">
      <main>
        <div className="image">
          <img src = {cubeImage} alt = "cube-image" />
          <div className='eye-icon-container'>
            <img src={iconView} className="eye-icon" alt="eye icon"/>
          </div>
        </div>
        <h1>Equilibrium #3429</h1>
        <p className="statement">Our equilibrium collection promotes balance and calm.</p>
        <div className="eth-container">
          <p className="eth-value">
            <span className="eth-img">
              <img src = {iconEth} alt="ehtereum icon" />
              
            </span>
            &nbsp;&nbsp;0.041 ETH
          </p>
          <p className="eth-duration">
            <span className="clock-img">
              <img src = {iconClock} alt = "clock icon" />
            </span>
            &nbsp;&nbsp;3 days left
          </p>
        </div>
        <hr />
        <div className="author-info-container">
          <div className="author-img">
            <img src={authorImg} alt="author image" />
          </div>
          <p>Creation of &nbsp;<span className="author-name">Umer Zaheer</span></p>
        </div>
      </main>
    </div>
  )
}

export default App

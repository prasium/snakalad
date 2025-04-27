import React from 'react'
import './app-menu.css';
import Starfield from 'react-starfield';
import { APP_NAME } from '../constants/config';
import PlayerOption from './playerOption';
import { Toaster } from 'react-hot-toast';

export default function AppMenu() {
  return (
    <div className="App menu-box-container">
      <Starfield
    starCount={5000}
    starColor={[255, 255, 255]}
    speedFactor={0.08}
    backgroundColor="black"
  />
    <h1 className='header-title'>{APP_NAME}</h1>
    <div className='menu-box'>
    <p className='menu-title'>
        Number of players
    </p>
    <div> 
        <PlayerOption title='1' />
        <PlayerOption title='2' />
        <PlayerOption title='3' />
        <PlayerOption title='4' />
    </div>
  
    </div>
    <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  )
}

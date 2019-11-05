import React from 'react'
import { Link } from 'react-router-dom'

import Circle from '../components/Formas/Circle'
import Rectangle from '../components/Formas/Rectangle'
import Square from '../components/Formas/Square'
import { Animated } from '../components/Animated/Animated'

export const Standard = () => {
  return (

    <div className='container'>
      <Link to='/'>Come back to Home!</Link>
      <div className='perspective container'>
        <div className='container border-green hov'>
          <Circle className='scale'/>
        </div>
        <div className='container border-red hov'>
          <Rectangle className='translate'/>
        </div>
        <div className='container border-yellow hov'>
          <Square className='transform'/>
        </div>
        <div className='container border-lightblue hov'>
          <Square className='skew'/>
        </div>
        <Animated animated animation='disband'>
          <Square />
        </Animated>
        <div className='container big border-lightred'>
          <Animated animated animation='move'>
            <Circle />
          </Animated>
        </div>
      </div>
    </div>
  )
}

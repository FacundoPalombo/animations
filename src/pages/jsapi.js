import React from 'react'
import { Link } from 'react-router-dom'
import Circle from '../components/Formas/Circle'
import { AnimatedWithJs } from '../components/Animated/AnimatedWithJs'

export const JsApi = () => {
  return (
    <div className='container'>
      <Link to='/'>Come back to home! :3</Link>
      <AnimatedWithJs>
        <Circle />
      </AnimatedWithJs>
    </div>
  )
}

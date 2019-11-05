import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AnimatedWithJs.scss'

export const AnimatedWithJs = ({
  className,
  children
}) => {
  useEffect(() => {
    const $item = document.getElementById('jsAPI')
    const $btn__play = document.getElementById('btn__play')
    const $btn__pause = document.getElementById('btn__pause')
    const $btn__stop = document.getElementById('btn__stop')
    const $btn__reverse = document.getElementById('btn__reverse')
    const animation = $item.animate([
      {
        transform: 'translateX(0px)'
      },
      {
        transform: 'translateX(500px)'
      }
    ],
    {
      duration: 1000, // ms es la unidad de la api de js
      delay: 300,
      direction: 'alternate',
      iterations: Infinity,
      easing: 'cubic-bezier(1,1,1,1)',
      fill: 'forwards',
      iterationStart: 0.5,
      endDelay: 5000
    })
    $btn__play.addEventListener('click', e => {
      e.preventDefault()
      animation.play()
    })
    $btn__pause.addEventListener('click', e => {
      e.preventDefault()
      animation.pause()
    })
    $btn__stop.addEventListener('click', e => {
      e.preventDefault()
      animation.cancel()
    })
    $btn__reverse.addEventListener('click', e => {
      e.preventDefault()
      animation.reverse()
    })
  }, [])
  return (
    <div>
      <div id='jsAPI'>
        {children}
      </div>
      <div className='player__buttons'>
        <button className='btn' id='btn__play'>Play</button>
        <button className='btn' id='btn__pause'>Pause</button>
        <button className='btn' id='btn__stop'>Stop</button>
        <button className='btn' id='btn__reverse'>Reverse</button>
      </div>
    </div>
  )
}

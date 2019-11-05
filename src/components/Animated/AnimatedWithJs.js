import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const AnimatedWithJs = ({
  className,
  children
}) => {
  useEffect(() => {
    const $item = document.getElementById('jsAPI')
    $item.animate([
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
  }, [])
  return (
    <div id='jsAPI'>
      {children}
    </div>
  )
}

import React from 'react'
import './Rectangle.scss'

export default function Rectangle (props) {
  return (
    <div {...props} className={`rectangle ${props.className}`} >
      <div className='line a' >
        <div className='line b'/>
      </div>
    </div>
  )
}

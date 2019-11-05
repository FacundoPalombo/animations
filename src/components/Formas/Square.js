import React from 'react'
import './Square.scss'

export default function Square (props) {
  return (
    <div {...props} className={`square${props.className ? ' ' + props.className : ''}`}>
      <div className='line a' >
        <div className='line b'/>
      </div>
    </div>
  )
}

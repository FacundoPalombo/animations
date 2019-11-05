import React from 'react'
import './Circle.scss'
export default function Circle (props) {
  return (
    <div {...props} className={`circle ${props.className}`}>
      <div className='line a' >
        <div className='line b'/>
      </div>
    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.scss'
export const Navigation = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/standard'>Standard CSS animation section</NavLink>
        </li>
        <li>
          <NavLink to='/jsapi'>JS animations API section</NavLink>
        </li>
      </ul>
    </nav>
  )
}

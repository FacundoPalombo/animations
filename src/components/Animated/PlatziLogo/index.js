import React from 'react'
import { Link } from 'react-router-dom'
import './PlatziLogo.scss'

export const PlatziLogo = ({
  children,
  hide
}) => !hide ? (
  <div className='platzi'>
    <div className='platzi__left'></div>
    <div className='platzi__right'></div>
  </div>
) : ('')

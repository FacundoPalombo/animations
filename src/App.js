import React from 'react'
import './styles.css'
import Circle from './components/Formas/Circle'
import Rectangle from './components/Formas/Rectangle'
import Square from './components/Formas/Square'
import './App.scss'

export const App = () => {
  return (
    <section>
      <div className='container'>
        <div className='perspective container'>
          <div className='container border-green'>
            <Circle />
          </div>
          <div className='container border-red hov'>
            <Rectangle />
          </div>
          <div className='container border-yellow hov'>
            <Square />
          </div>
        </div>
      </div>
    </section>
  )
}

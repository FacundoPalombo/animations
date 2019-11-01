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
        <div className='margined container'>
          <div className='container green'>
            <Circle />
          </div>
          <div className='container red'>
            <Rectangle />
          </div>
          <div className='container yellow hov'>
            <Square />
          </div>
        </div>
      </div>
    </section>
  )
}

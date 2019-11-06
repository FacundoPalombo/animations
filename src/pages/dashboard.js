import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PlatziLogo } from '../components/Animated/PlatziLogo'
import { InOut } from '../components/Animated/InOut'

export const Dashboard = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  return (
    <div>
      <button onClick={handleShow}>Create Modal!</button>
      <PlatziLogo hide/>
      {
        show && <InOut handleShow ={handleShow}/>
      }
    </div>
  )
}

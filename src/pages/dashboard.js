import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PlatziLogo } from '../components/Animated/PlatziLogo'
import { InOut } from '../components/Animated/InOut'
import { TwitterLike } from '../components/Animated/TwitterLike'

export const Dashboard = () => {
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(false)
  const handleLiked = () => setLiked(!liked)
  const handleShow = () => setShow(!show)
  return (
    <div>
      <button onClick={handleShow}>Create Modal!</button>
      <PlatziLogo hide/>
      {
        show && <InOut handleShow ={handleShow}/>
      }
      <TwitterLike onClick={handleLiked} liked={liked}/>
    </div>
  )
}

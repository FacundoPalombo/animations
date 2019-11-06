import React from 'react'
import './TwitterLike.scss'

export const TwitterLike = ({
  liked,
  onClick
}) => {
  return (
    <div className={`twitterLike${liked ? ' liked' : ''}`} onClick={onClick}/>
  )
}

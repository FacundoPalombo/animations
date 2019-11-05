import React from 'react'
import './Animated.scss'

export const Animated = ({
  children,
  className,
  animation,
  animated
}) => {
  if (!animated) {
    animation = null
  }
  return (
    animated
      ? <div className={`animated${animation ? ` animated-${animation}` : ''}${className || ''}`}>
        {children}
      </div>
      : <>{children}</>
  )
}

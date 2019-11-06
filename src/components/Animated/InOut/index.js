import React from 'react'
import './InOut.scss'

export const InOut = ({
  children,
  handleShow,
  show
}) => (
  <>
    <div className='overlay'>
      <div className='modal'>
        <h2>Atención, estás a punto de crear un modal!</h2>
        <div className='modal__container'>
          <p>¿Te gustó? :B</p>
          <div className='modal__buttons'>
            <button className='modal__buttons-yes' onClick={handleShow}>Cy :3</button>
            <button className='modal__buttons-no' onClick={handleShow}>Ño :'v</button>
          </div>
        </div>
      </div>
    </div>
  </>
)

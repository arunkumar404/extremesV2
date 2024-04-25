import React, { useState, useEffect } from 'react'
import './SliderText.css'

const SliderText = () => {
  const offers = [
    { message: 'BUY 2 & GET 10% OFF', code: 'FESTIVE10' },
    { message: 'BUY 3 & GET 15% OFF', code: 'FESTIVE15' },
    { message: 'BUY 5 & GET 20% OFF', code: 'FESTIVE20' },
  ]
  const [ currentIndex, setCurrentIndex ] = useState( 0 )

  useEffect( () => {
    const timer = setInterval( () => {
      setCurrentIndex( ( prevIndex ) => ( prevIndex + 1 ) % offers.length )
    }, 3000 )

    return () => clearInterval( timer )
  }, [] )

  return (
    <div className='relative overflow-hidden min-w-[45rem] h-[40px] flex items-center justify-center'>
      <h6
        key={currentIndex}
        className='slide-text slide-out'
      >
        <span>{offers[ currentIndex ].message}</span>
        <span style={{ textDecoration: 'underline' }}>
          USE CODE: {offers[ currentIndex ].code}
        </span>
      </h6>
      <h6
        key={currentIndex + 1}
        className='slide-text slide-in'
      >
        <span>{offers[ ( currentIndex + 1 ) % offers.length ].message} </span>

        <span style={{ textDecoration: 'underline' }}>
          USE CODE: {offers[ ( currentIndex + 1 ) % offers.length ].code}
        </span>
      </h6>
    </div>
  )
}

export default SliderText
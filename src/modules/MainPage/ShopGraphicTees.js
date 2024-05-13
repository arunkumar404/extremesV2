import React, { useRef, useState, useEffect } from 'react';
import { shopGraphicTees } from '../../utils/constants';
import { LeftWithoutLineArrow, RightWithoutLineArrow } from '../../common/icons';

const ShopGraphicTees = () => {

  const scrollContainerRef = useRef( null );
  const [ isAtStart, setIsAtStart ] = useState( true );
  const [ isAtEnd, setIsAtEnd ] = useState( false );

  const handleScroll = ( direction ) => {
    if ( scrollContainerRef.current ) {
      const itemWidth = 200;
      const scrollAmount = itemWidth * 3;

      if ( direction === 'left' ) {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }

      updateButtonStates();
    }
  };

  const updateButtonStates = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;
    console.log( scrollLeft + 10, maxScrollLeft );
    setIsAtStart( scrollLeft <= 0 );
    setIsAtEnd( scrollLeft + 10 >= maxScrollLeft && maxScrollLeft !== 0 );
  };
  useEffect( () => {
    updateButtonStates();
    const handleScrollUpdate = () => updateButtonStates();
    const currentRef = scrollContainerRef.current;

    currentRef.addEventListener( 'scroll', handleScrollUpdate );
    return () => currentRef.removeEventListener( 'scroll', handleScrollUpdate );
  }, [] );
  return (
    <div className='w-[70%] mb-[4rem]'>
      <div className='flex items-center gap-2 w-[100%]'>
        <div className='flex items-center gap-[2rem] w-[100%]'>
          <div className='w-[100%] h-[2px] bg-slate-300' />
          <h2 className='min-w-[13rem] font-bold text-xl'>SHOP GRAPHIC TEES</h2>
          <div className='w-[100%] h-[2px] bg-slate-300' />
        </div>
        <div className='flex items-center'>
          <button onClick={() => handleScroll( 'left' )}>
            <LeftWithoutLineArrow color={isAtStart ? '#b5b5b5' : '#000'} />
          </button>
          <button onClick={() => handleScroll( 'right' )}>
            <RightWithoutLineArrow color={isAtEnd ? '#b5b5b5' : '#000'} />
          </button>
        </div>
      </div>
      <div ref={scrollContainerRef} className='flex items-center overflow-auto gap-[1.3rem] scroll-smooth mt-3'>
        {shopGraphicTees.map( ( item, i ) => {
          return (
            <div className='flex flex-col items-center'>
              <img key={i} src={item.img} alt={`latest${i}`
              } className='max-w-[225px] h-[280px]' />
              <img key={i+'small'} src={item.smallImg} alt={`latestsmall${i}`
              } className='max-w-[70px] my-3' />
              <p className='font-semibold truncate text-sm w-52'>{item.name}</p>
              <p className='mt-2 text-sm text-[#666666]'>{ item.price}</p>
            </div>
          )
        } )}
      </div>
    </div>
  )
}

export default ShopGraphicTees
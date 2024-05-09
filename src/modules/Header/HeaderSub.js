import React from 'react'
import SliderText from './SliderText'

const HeaderSub = () => {



  

  return (
    <div className='flex items-center min-h-[3rem] bg-slate-100 justify-around'>
     
      <button className=' px-4 py-1 text-sm'>
        SHOP MENS
      </button>
      <div>
        <SliderText />
      </div>
      <button className=' px-4 py-1 text-sm'>
        SHOP WOMENS
      </button>
        {/* <div className='flex items-center justify-center gap-6'>
          {socialItems.map( ( item, i ) => {
            return (
              <a
                style={{ height: '20px', width: '20px' }}
                key={i}
                href={item.link}
                target='blank'
              >
                {item.icon}
              </a>
            )
          } )}
        </div> */}
    </div>
  )
}

export default HeaderSub
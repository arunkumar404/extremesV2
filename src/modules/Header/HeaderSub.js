import { socialItems } from '../../utils/constants'
import React from 'react'
import SliderText from './SliderText'

const HeaderSub = () => {
  return (
    <div className='flex gap-[25rem] items-center min-h-[3rem] px-14 bg-slate-100'>
      <div className='flex items-center justify-center gap-6'>
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
      </div>
      <div>
        <SliderText/>
      </div>
    </div>
  )
}

export default HeaderSub
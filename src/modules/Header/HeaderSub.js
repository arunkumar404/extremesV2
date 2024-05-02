import { socialItems } from '../../utils/constants'
import React from 'react'
import SliderText from './SliderText'
import { HamburgerIcon } from '../../common/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenSidebarDrawer } from '../../store/main/slice'
import { selectOpenSidebarDrawer } from '../../store/main/selector'

const HeaderSub = () => {

  const openSidebarvalue = useSelector( selectOpenSidebarDrawer )

  const dispatch = useDispatch()

  const sidebarOpenHandler = () => {
    dispatch( setOpenSidebarDrawer( !openSidebarvalue ))
  }

  return (
    <div className='flex items-center min-h-[3rem] px-14 bg-slate-100 justify-between'>
      <div className='flex items-center gap-2 hover:gap-3 transition-all ease-in-out cursor-pointer' onClick={sidebarOpenHandler}>
        <span className='hover:rotate-90 transition-all hover:transition-all '>
          <HamburgerIcon />
        </span>
        <span className='font-semibold'>
          Shop Now
        </span>
      </div>
      <div>
        <SliderText />
      </div>
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
    </div>
  )
}

export default HeaderSub
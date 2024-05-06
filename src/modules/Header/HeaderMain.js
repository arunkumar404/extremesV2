import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../common/images/logoExtreme.png'
import { CartIcon, HamburgerIcon, ProfileIcon, SearchIcon } from '../../common/icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenSidebarDrawer } from '../../store/main/selector'
import { setOpenSidebarDrawer } from '../../store/main/slice'

const HeaderMain = () => {

  const navigate = useNavigate()

  const openSidebarvalue = useSelector( selectOpenSidebarDrawer )

  const dispatch = useDispatch()

  const sidebarOpenHandler = () => {
    dispatch( setOpenSidebarDrawer( !openSidebarvalue ) )
  }

  return (
    <div className='py-6 px-14 flex justify-between items-center bg-[#f24423]'>
      {/* <div className='flex items-center gap-12 text-[#003B5C] font-semibold'>
        {headerNavs.map( ( item, i ) => {
          return (
            <p key={i}>
              {item.title}
            </p>
          )
        } )}
      </div> */}
      <div className='flex items-center gap-2 hover:gap-3 transition-all ease-in-out cursor-pointer' onClick={sidebarOpenHandler}>
        <span className='hover:rotate-90 transition-all hover:transition-all '>
          <HamburgerIcon />
        </span>
        <span className='font-semibold'>
          Shop Now
        </span>
      </div>
      <img
        src={logo}
        alt='logo'
        className='cursor-pointer max-h-[35px] max-w-[200px] max-'
        onClick={() => {
          navigate( '/' )
        }}
      />
      <div className='flex items-center gap-10'>
        <div
          className='h-[23px] w-[23px]  cursor-pointer'
          onClick={() => {
            navigate( '/login' )
          }}
        >
          <ProfileIcon />
        </div>
        <div className='h-[23px] w-[23px] cursor-pointer'>
          <SearchIcon />
        </div>
        <div className='h-[23px] w-[23px]  cursor-pointer'>
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
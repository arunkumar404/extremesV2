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
    <div className='py-3 min-[650px]:px-14 min-[550px]:px-10 px-7 flex justify-between items-center bg-[#ff0000]'>
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
          <HamburgerIcon color='#ffffff' />
        </span>
        <span className='font-medium text-[#ffffff] max-[500px]:hidden'>
          SHOP NOW
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
      <div className='flex items-center gap-5 min-[600px]:gap-6 min-[850px]:gap-10'>
        <div
          className='h-[23px] w-[23px]  cursor-pointer'
          onClick={() => {
            navigate( '/login' )
          }}
        >
          <ProfileIcon color='#ffffff' />
        </div>
        <div className='h-[23px] w-[23px] cursor-pointer'>
          <SearchIcon color='#ffffff' />
        </div>
        <div className='h-[23px] w-[23px]  cursor-pointer'>
          <CartIcon color='#ffffff' />
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
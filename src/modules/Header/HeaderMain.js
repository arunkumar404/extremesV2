import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../common/images/logoExtreme.png'
import styles from './Header.module.css'
import { CartIcon, ProfileIcon, SearchIcon } from '../../common/icons'
import { headerNavs } from '../../utils/constants'

const HeaderMain = () => {

  const navigate = useNavigate()
  const location = useLocation()


  return (
    <div className='py-6 px-14 flex justify-between items-center'>
      <img
        src={logo}
        alt='logo'
        className='cursor-pointer max-h-[35px] max-w-[200px] max-'
        onClick={() => {
          navigate( '/' )
        }}
      />
      <div className='flex items-center gap-12 text-[#003B5C] font-semibold'>
        {headerNavs.map( (item,i) => {
          return (
            <p key={i}>
              {item.title}
            </p>
          )
        })}
      </div>
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
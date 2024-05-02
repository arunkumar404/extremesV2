import { setOpenSidebarDrawer } from '../../store/main/slice'
import { Drawer, DrawerContent } from '../../components/ui/drawer'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Separator } from '../../components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { SearchIcon } from '../../common/icons'

const SidebarContainer = ( { isDrawerOpen } ) => {
  const dispatch = useDispatch()
  console.log( "ffd", isDrawerOpen );

  return (
    <Drawer direction={'left'} open={isDrawerOpen || false} onOpenChange={( value ) => dispatch( setOpenSidebarDrawer( value ) )}>
      <DrawerContent className='removeAfter bg-slate-100 flex items-center'>
        <div className='items-center flex justify-center mt-[-20px] py-2 bg-white w-[100%] border-b border-[#e5e5e5]'>
          <Tabs defaultValue="account" className="flex items-center justify-between bg-grey-200">
            <TabsList className='bg-white'>
              <TabsTrigger value="mens" className='bg-white'>MENS</TabsTrigger>
              <Separator orientation="vertical" className='w-[2px] h-[20px]' />
              <TabsTrigger value="womens text-lg" className='bg-white'>WOMENS</TabsTrigger>
              <Separator orientation="vertical" className='w-[2px] h-[20px]' />
              <TabsTrigger value="sale text-lg  " className='bg-white'>SALE</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className='flex items-center bg-white w-[92%] mt-4 border border-[#e5e5e5] justify-between pl-4'>
          <div className='flex items-center bg-white'>
            <input type="text" className='border-none outline-none' />
          </div>
          <div className='bg-black p-3'>
           <SearchIcon /> 
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SidebarContainer
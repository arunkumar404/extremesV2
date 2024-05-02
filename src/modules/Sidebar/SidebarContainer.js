import { setOpenSidebarDrawer } from '../../store/main/slice'
import { Drawer, DrawerContent } from '../../components/ui/drawer'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Separator } from '../../components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs'

const SidebarContainer = ( { isDrawerOpen } ) => {
  const dispatch = useDispatch()
  console.log( "ffd", isDrawerOpen );

  return (
    <Drawer direction={'left'} open={isDrawerOpen || false} onOpenChange={( value ) => dispatch( setOpenSidebarDrawer( value ) )}>
      <DrawerContent className='removeAfter bg-slate-100'>
        <div className='items-center flex justify-center mt-[-20px] py-2 bg-white'>
          <Tabs defaultValue="account" className="flex items-center justify-between bg-slate-200">
            <TabsList className='bg-white'>
              <TabsTrigger value="mens" className='bg-white'>MENS</TabsTrigger>
              <Separator orientation="vertical" className='w-[2px] h-[20px]' />
              <TabsTrigger value="womens text-lg" className='bg-white'>WOMENS</TabsTrigger>
              <Separator orientation="vertical" className='w-[2px] h-[20px]' />
              <TabsTrigger value="sale text-lg  " className='bg-white'>SALE</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SidebarContainer
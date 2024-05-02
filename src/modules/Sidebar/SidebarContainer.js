import { setOpenSidebarDrawer } from '../../store/main/slice'
import { Drawer, DrawerContent } from '../../components/ui/drawer'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Separator } from '../../components/ui/separator'

const SidebarContainer = ( { isDrawerOpen } ) => {
  const dispatch = useDispatch()
  console.log("ffd",isDrawerOpen);

  return (
    <Drawer direction={'left'} open={isDrawerOpen || false} onOpenChange={( value ) => dispatch( setOpenSidebarDrawer( value ) )}>
      <DrawerContent className='removeAfter'>
        <div className='flex flex-col h-full'>
          <div className='flex justify-around px-3'>
            <p className='font-bold text-lg'>MENS</p>
            <Separator orientation="vertical" className='w-[2px]'/>
            <p className='font-bold text-lg'>WOMENS</p>
            <Separator orientation="vertical" className='w-[2px]' />
            <p className='font-bold text-lg'>SALE</p>
         </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SidebarContainer
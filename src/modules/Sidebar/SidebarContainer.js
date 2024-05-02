import { setOpenSidebarDrawer } from '../../store/main/slice'
import { Drawer, DrawerContent } from '../../components/ui/drawer'
import React from 'react'
import { useDispatch } from 'react-redux'

const SidebarContainer = ( { isDrawerOpen } ) => {
  const dispatch = useDispatch()
  console.log("ffd",isDrawerOpen);

  return (
    <Drawer direction={'left'} open={isDrawerOpen || false} onOpenChange={( value ) => dispatch( setOpenSidebarDrawer( value ) )}>
      <DrawerContent className='removeAfter'>
        <div className='flex flex-col h-full'>
          <div className='flex justify-around'>
            <p>MEN</p>
            <p>WOMEN</p>
            <p>SALE</p>
         </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SidebarContainer
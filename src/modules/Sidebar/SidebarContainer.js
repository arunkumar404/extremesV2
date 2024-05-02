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
      <DrawerContent className='removeAfter bg-slate-100 flex items-center max-h-[100vh] overflow-scroll'>
        <div className='items-center flex justify-center mt-[-20px] py-2 bg-white w-[100%] border-b border-[#e5e5e5] h-[58px]'>
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
        <div className='flex flex-col items-center max-h-[calc(100vh-58px)] overflow-scroll'>
          <div className='flex items-center bg-white w-[92%] mt-4 border border-[#e5e5e5] justify-between pl-4'>
            <div className='flex items-center bg-white'>
              <input type="text" className='border-none outline-none' />
            </div>
            <div className='bg-black p-3'>
              <SearchIcon />
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center w-[92%] py-4'>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>TRENDING: JACKETS</p>
              <img src='https://culture-kings-sanity.imgix.net/1075e08fcc7d3c626fccc73b88c59e1b680803b9-876x280.jpg?w=600&auto=compress,format' alt='image1' />
            </div>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>NEW ARRIVALS</p>
              <img src='https://culture-kings-sanity.imgix.net/3b5b3e6fdc4c4a5de77df4ded2097b335344bbb3-876x280.jpg?w=600&auto=compress,format' alt='image2' />
            </div>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>BEST SELLERS</p>
              <img src='https://culture-kings-sanity.imgix.net/0d0bf9825522ca947b7b7aa26372261dbc8fa58f-876x280.jpg?w=600&auto=compress,format' alt='image3' />
            </div>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>UPCOMING RELEASES</p>
              <img src='https://culture-kings-sanity.imgix.net/7d1913f0b3d9b4226b34fb1998c7160262f51ea6-876x280.jpg?w=600&auto=compress,format' alt='image4' />
            </div>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>TOPS</p>
              <img src='https://culture-kings-sanity.imgix.net/d9687bd1f3dd17182f7ddcc5a810de123e567a45-876x280.jpg?w=600&auto=compress,format' alt='image5' />
            </div>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>BOTTOMS</p>
              <img src='https://culture-kings-sanity.imgix.net/6a548c05854c25225e8b42e1d0b40f59305f0c81-876x280.jpg?w=600&auto=compress,format' alt='image6' />
            </div>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>FOOTWEAR</p>
              <img src='https://culture-kings-sanity.imgix.net/d1308323debaa0cd4eeafeb938671ddeea5c342f-876x280.jpg?w=600&auto=compress,format' alt='image7' />
            </div>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>HEADWEAR</p>
              <img src='https://culture-kings-sanity.imgix.net/973649bc1c73cd12245bab94e1c59c8aebff8735-876x280.jpg?w=600&auto=compress,format' alt='image8' />
            </div>
            <div className='shadow-sm relative'>
              <p className='absolute top-[50%] translate-y-[-50%] left-[1rem] text-lg font-bold'>JEWELLERY</p>
              <img src='https://culture-kings-sanity.imgix.net/9c35b188c47246ebbf9d55960fa4ae8ae8620a9c-876x280.jpg?w=600&auto=compress,format' alt='image9' />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SidebarContainer
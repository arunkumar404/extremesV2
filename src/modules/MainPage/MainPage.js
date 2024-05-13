import React from 'react';
import LatestReleases from './LatestReleases';
import ShopGraphicTees from './ShopGraphicTees';

const MainPage = () => {
  

  return (
    <div className='flex flex-col items-center'>
      <div className='w-screen flex flex-col'>
        <img src="//fuaark.com/cdn/shop/files/Fuaark_elite_compression_banner_new_arrival_1.jpg?v=1713504635" alt="" />
      </div>
      <LatestReleases />
      <ShopGraphicTees/>
    </div>
  );
};

export default MainPage;

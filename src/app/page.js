import React from 'react';

import Menu from './home/Menu';
import Card from './card/Card';
import Market from './market/Market';

const HomePage = () => {
  return (
    <div className='flex justify-between items-start'>
      <div >
      <Menu></Menu>
      </div>
     <div className='mx-auto'>
     <Card></Card>
     </div>
     <div className='mx-auto'>
     <Market></Market>
     </div>
    </div>
  );
};

export default HomePage;
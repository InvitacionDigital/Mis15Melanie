import React from 'react';
import { Carousel } from 'flowbite-react';
import foto3 from '/foto3.jpeg';
import foto4 from '/foto4.jpeg';
import foto5 from '/foto5.jpeg';
import foto6 from '/foto6.jpeg';
import foto7 from '/foto7.jpeg';
import foto8 from '/foto8.jpeg';
import foto9 from '/foto9.jpeg';
import foto10 from '/foto10.jpeg';

const Slider = () => {
  return (
    <div className="h-[400px] w-full">
      <Carousel leftControl=" " rightControl=" " slideInterval={1500}>
        <div className='w-[85%] rounded-lg'>
          <img src={foto3} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto4} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto5} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto6} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto7} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto8} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto9} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto10} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;

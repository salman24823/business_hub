import React from 'react'
import v1 from '../../../../public/v1.jpg';
import v2 from '../../../../public/v2.jpg';
import v3 from '../../../../public/v3.jpg';
import v4 from '../../../../public/v4.jpg';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <main className='p-[5%] w-full'>
      {/* main-div */}
      <div className='flex'>
        {/* left-div */}
        <div className='grid grid-cols-6 grid-rows-2 gap-5 w-[50%]'>
          <div className='col-span-3 row-span-1'>
            <Image src={v1} />
          </div>
          <div className='col-span-3 row-span-1'>
            <Image src={v2} className='' />
          </div>
          <div className='col-span-3 row-span-1'>
            <Image src={v3} />
          </div>
          <div className='col-span-3 row-span-2'>
            <Image src={v4} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default VisionSection

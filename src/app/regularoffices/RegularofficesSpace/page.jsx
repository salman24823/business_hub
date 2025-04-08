import { Button } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const RegularofficesSpace = () => {
  const P2Data = [
    {
     name:"One-Three Person Offices",
     discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
     source:"/vision4.JPG"
    },
    {
      name:"One-Three Person Offices",
      discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source:"/vision4.JPG"
     },
     {
      name:"One-Three Person Offices",
      discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source:"/vision4.JPG"
     },
     {
      name:"One-Three Person Offices",
      discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source:"/vision4.JPG"
     }
  ]
  return (
    <div className='w-full  gap-10 bg-white p-[5%] flex flex-col items-center bg-[url(/bg.png)] bg-cover bg-no-repeat'>
        <div className='sub_heading'>
            <span className='yellow'>P2</span> Offices
        </div>
      
        <div className='grid grid-cols-3 gap-6 '>
        {P2Data.map(data=>(
          <div className='col-span-1 flex flex-col items-center gap-3 bg-white rounded-sm overflow-hidden  p-4'>
            <div className=''>
              <img className='w-full h-auto rounded-sm' src={data.source} alt=''/>
            </div>
            <div className='flex flex-col  gap-3 rounded-sm shadow_d p-3'>
              <strong className='font-bold text-xl '>{data.name}</strong>
              <p className='para text-sm '>{data.discription}</p>
              <Button className='yellow-bg text-white p-3 px-6 font-bold w-full rounded-sm'>Book now</Button>
            </div>
          </div>
        ))}
          <div className='col-span-1'></div>
          <div className='col-span-1'></div>
        </div>
    </div>
  )
}

export default RegularofficesSpace
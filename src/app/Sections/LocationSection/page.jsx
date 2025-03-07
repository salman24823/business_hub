import React from 'react'

const LocationSection = () => {
  return (
    <div className='w-full'>
        <div className="flex flex-col gap-12 locationbox px-[5%] py-[10%]  md:p-[5%]">
            <div>
            <h2 className='sub_heading yellow'><span className='blue'>BusinessHub Workspace </span> <br /> Location.</h2>
            </div>
            <div className="locationgraph w-full h-[50vh] rounded-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.3149898288902!2d73.1080446!3d31.405446500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269002508696b%3A0x543a6df9f9c321c7!2sBusiness%20Hub%20(Workspace)!5e0!3m2!1sen!2s!4v1741245036630!5m2!1sen!2s"  className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        
    </div>
  )
}

export default LocationSection
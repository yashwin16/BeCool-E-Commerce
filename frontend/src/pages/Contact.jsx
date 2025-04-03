import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const Contact = () => {
return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font semi-bold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>473 Tilak Nagar <br /> MG Road, Delhi, India</p>
            <p className='text-gray-500'>Tel: (643) 333-0786 <br />Email: admin@becool.com</p>
            <p className='font semi-bold text-xl text-gray-600'>Careers at BeCool</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
    </div>
    </div>
)
}

export default Contact

import React from 'react'

const Footer = () => {
return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <p className='mb-5 w-32 text-2xl font-medium'>
            <span className='text-black'>BeCool</span>
            <span className='text-blue-500'>.</span>
            </p>
            <p className='w-full md:w-2/3 text-gray-600'>
            BeCool is your go-to destination for trendy and timeless fashion. Explore our latest collections and redefine your style with high-quality clothing designed for every occasion.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-222-789-4350</li>
                <li>contact@becool.com</li>
            </ul>
        </div>
    </div>

    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ becool.com - All Rights Reserved.</p>
    </div>
    </div>
)
}

export default Footer

import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const About = () => {
return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
    <Title text1={'ABOUT '} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At BeCool Clothing, we believe fashion is more than just clothing—it's an expression of who you are. Our mission is to bring you timeless, trendy, and high-quality apparel that fits seamlessly into your lifestyle.</p>
        <p>From everyday essentials to statement pieces, our collections are designed to keep you looking stylish and feeling confident. We are committed to providing premium fabrics, modern designs, and a seamless shopping experience to fashion enthusiasts worldwide.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At BeCool, our mission is to empower individuals with fashion that blends timeless elegance with modern trends. We strive to create high-quality, stylish, and comfortable apparel that allows everyone to express their unique personality with confidence.</p>
        </div>
    </div>

    <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At BeCool, quality is at the heart of everything we create. We are committed to delivering apparel that meets the highest standards of craftsmanship, durability, and comfort.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At BeCool,we make shopping effortless, so you can focus on looking and feeling your best. Our goal is to provide a seamless and enjoyable shopping experience, from browsing to checkout and beyond.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>At BeCool, our customers are at the heart of everything we do. We are dedicated to providing an outstanding shopping experience with prompt support, personalized assistance, and hassle-free solutions.</p>
        </div>
    </div>

    </div>
)
}

export default About

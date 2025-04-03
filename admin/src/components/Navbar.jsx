import React from 'react'

const Navbar = ({setToken}) => {
return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
    <p className='flex items-center w-36 text-3xl font-medium py-5'>
        <span className='text-black'>BeCool</span>
        <span className='text-blue-500'>.</span>
    </p>
    <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
)
}

export default Navbar

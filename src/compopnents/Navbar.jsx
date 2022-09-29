import React from 'react';

import Img from '../assets/Rectangle 6.png';

const Navbar = () => {
  return (
    <>
        <div className='bg-[#ffff] w-[100%] h-[100px]'>
            <div className='w-[80%] h-[100%] m-auto flex items-center justify-between relative'>
                <div className='w-[10%] h-[25%] flex items-center'>IniLabs</div>

                <div className='w-[77%] h-[25%] flex items-center gap-5 text-[#25201D] text-lg font-semibold'>
                    <a href='a'>Home</a>
                    <a href='b'>About</a>
                    <a href='c'>Teachers</a>
                    <a href='d'>Event</a>
                    <a href='e'>Gallery</a>
                    <a href='f'>Contact</a>
                    <a href='g'>Blog</a>
                    <a href='h'>Admission</a>
                </div> 

                <div className='absolute right-0'>
                    <div className='relative'>
                        <img src={Img} alt='img' />
                    </div>
                    <div className='absolute top-[50%] right-[20%] text-[#fff]'>
                        <p className='text-[#fff] text-2xl'>Log In</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}

export default Navbar;
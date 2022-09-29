import React from 'react';

import Img from '../assets/Rectangle 1.png';

const Home = () => {
  return (
    <>
    <div id='home'>

        <div className='relative'>
            <img src={Img} alt='img' />
        </div>

        <div className='absolute top-[100px] left-[10%] w-[80%] h-[70%]'>
            <div>
                <div className='w-[34px] border-2'></div>
                <p className='text-sm font-bold text-[#fff]'>A TRADITION SINCE 2002</p>
            </div>

            <div>

                <div>
                    <p>Offering Bright Futures</p>
                    <p>iNiLabs School gradutes are styding in the world’s most prestigious universities.</p>
                    <p>Apply Now</p>
                </div>
                
                <div>
                    <div>logo</div>
                    <div>
                        <p>iNiLabs School</p>
                        <p>CAMPUS TOUR</p>
                        <p>Watch Video (6 Min)</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </>
  );
}

export default Home;
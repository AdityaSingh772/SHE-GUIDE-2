import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { BackgroundBeams } from '../components/ui/BackgroundBeams';


function Hero() {


    return (


        <main className='bg-[#000] pt-8  relative' id=''>

            <div className="flex  h-[39rem] sm:h-[44rem] md:h-[39rem] lg:h-[36rem] xl:h-[38rem] justify-center   w-full bg-red flex-col md:flex-row">


                <div className="h-full w-full flex flex-col justify-center hero-txt  mt-[1rem] sm:mt-[2rem] md:mt-0 hero1">
                    <div className="flex flex-col w-[60%] m-auto gap-2  justify-center text-center ">
                        <div className=" text-[1.6rem] textJS sm:text-[2.8rem] poppins flex flex-col ">
                            <span
                                style={{
                                    textShadow:
                                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                }}
                            >
                                <span className='text-[#fff]'> Women Empowering Women :</span>
                            </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                                Bridging the gap Anonymously.
                            </span>

                        </div>
                        <div className="buttons flex flex-row gap-6 mb-[1rem] roboto text-[#FFD1E3]">
                            <p className="text-gray-400 text-lg mt-6 mb-6 lg:text-xl">
                                Come Girls joim our global community for women, offering support and inspiration on your tech journey as we shape an inclusive, forward-thinking industry together.
                            </p>

                        </div>
                    </div>
                </div>




            </div>

            <BackgroundBeams />
        </main>

    );
}

export default Hero;

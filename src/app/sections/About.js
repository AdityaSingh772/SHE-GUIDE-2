import React from 'react';
import Image from 'next/image';

import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "../components/ui/Glowing-Star";


function Aboutus() {
    return (
        <>

            <div className='aboutus-bg h-full pb-[4rem]  bg-black' id='aboutus'>

                <div className=" textJS  flex justify-center text-[3rem] text-transparent bg-clip-text bg-gradient-to-b from-[#fff] via-gray-300 to-[#000] poppins text-[#fff]" >About Us</div>

                <div className=" flex flex-col gap-8 mt-[3rem]  ">

                    <div className="flex  md:flex-row flex-col h-[15rem] w-[85%] mx-auto  justify-center">

                        <div className=' flex flex-col w-full justify-center z-10'>
                            <div className="div fontJS-subheading text-[#A962FF] poppins md:text-[3rem] text-[2rem]"><span className='text-[#9290C3]'>1. </span> Heading first</div>
                            <div className='roboto text-gray-400'>  At SheGuide, we empower women by providing a platform for
                                knowledge sharing, networking, and mentorship. Our mission is to
                                inspire and guide women in achieving their professional and
                                personal goals. Through our diverse range of resources, including
                                insightful articles, interactive workshops, and one-on-one
                                mentorship programs, we aim to cultivate a supportive community
                                that fosters growth, confidence, and success. Join us on this
                                journey of empowerment and discover your full potential with
                                SheGuide.
                            </div>
                        </div>

                        <div className=" h-full w-full align-center  flex justify-center ">

                            <div className="relative transform transition duration-300 hover:scale-110 hover:cursor-pointer  md:w-[60%] sm:w-[40%] w-[48%]    md:h-[90%] h-[65%] my-auto justify-center m-auto">
                                <Image
                                    src="/Assets/lab2.gif"
                                    alt="GIF"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="flex  md:flex-row flex-col-reverse h-[15rem] w-[85%] mx-auto  justify-center">
                        <div className=" h-full w-full align-center  flex justify-center ">

                            <div className="relative  transform transition duration-300 hover:scale-110 hover:cursor-pointer md:w-[60%] sm:w-[40%] w-[48%]    md:h-[90%] h-[65%] my-auto justify-center m-auto">
                                <Image
                                    src="/Assets/lab3.gif"
                                    alt="GIF"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        <div className=' flex flex-col w-full justify-center z-10'>
                            <div className="div fontJS-subheading text-[#A962FF] md:text-[3rem] poppins text-[2rem]"><span className='text-[#9290C3]'>2. </span> Heading second</div>
                            <div className='roboto text-gray-400'> At SheGuide, we believe in the power of women to change the world.
                                Our platform is a celebration of strength, resilience, and the
                                limitless potential of women everywhere. We're here to inspire you
                                to dream big, take risks, and embrace the journey ahead. Join us
                                as we share stories of courage, success, and empowerment.
                                Together, we can break barriers, shatter stereotypes, and create a
                                brighter future for all.
                            </div>
                        </div>


                    </div>



                    <div className="flex  md:flex-row flex-col h-[15rem] w-[85%] mx-auto  justify-center">

                        <div className=' flex flex-col w-full justify-center z-10'>
                            <div className="div fontJS-subheading text-[#A962FF] md:text-[3rem] poppins text-[2rem]"><span className='text-[#9290C3]'>3. </span> Heading third</div>
                            <div className='roboto text-gray-400'> At SheGuide, we believe in the power of women to change the world.
                                Our platform is a celebration of strength, resilience, and the
                                limitless potential of women everywhere. We're here to inspire you
                                to dream big, take risks, and embrace the journey ahead. Join us
                                as we share stories of courage, success, and empowerment.
                                Together, we can break barriers, shatter stereotypes, and create a
                                brighter future for all.
                            </div>
                        </div>

                        <div className=" h-full w-full align-center  flex justify-center ">

                            <div className="relative transform transition duration-300 hover:scale-110 hover:cursor-pointer md:w-[60%] sm:w-[40%] w-[48%]    md:h-[90%] h-[65%] my-auto justify-center m-auto">
                                <Image
                                    src="/Assets/lab1.gif"
                                    alt="GIF"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>



                </div>


            </div>

        </>
    );
}

export default Aboutus;
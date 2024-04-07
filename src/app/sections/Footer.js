"use client";
import React from "react";

import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-[#0D0D0D] w-full" id="/contact">
            <div className="md:h-[20rem] sm:h-[15rem] h-[10rem] bg-[#0D0D0D] flex flex-col w-[80%] m-auto pt-8">

                <div className="flex flex-row h-2/3 w-full bg-green border-b-[0.09rem] border-b-[#3f3f3f] ">
                    <div className="logo w-1/3 ">
                        <div className="relative  lg:w-[55%] md:w-[55%] sm:w-[40%] w-[48%]  lg:h-[80%]  h-[65%] my-auto justify-center m-auto mt-[1rem]">
                            <Image
                                src="/logo1.png"
                                alt="GIF"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="text w-2/3 bg-[#0D0D0D] flex flex-row text-[#A962FF] justify-between flex-wrap sm:gap-8 gap-3 text-[1rem] sm:font-bold font-semibold ">
                        <span className=" sm:translate-y-[40%]"><Link href={'/'}>Linkedin</Link></span>
                        <span className="sm:translate-y-[40%]"><Link href={'/terms'}>Instagram</Link></span>
                        <span className="sm:translate-y-[40%]"><Link href={'/'}>Github</Link></span>
                        <span className="sm:translate-y-[40%]">+91 9322576483</span>
                        <span className="sm:translate-y-[40%]"><Link href={'/terms'}>terms</Link></span>
                    </div>
                </div>

                <div className="h-1/3">
                    <div className="  flex flex-row justify-between  w-full h-full  ">
                        <span className="text-[#A962FF] font-extralight  md:text-[1rem] text-[0.8rem]   md:mt-[3rem] sm:mt-[2rem] mt-[1rem]"> <span className="text-[#fff]">SheGuide</span> &#169; Built at HackByte2.0.</span>




                    </div>
                </div>

            </div>
        </div>
    );
}

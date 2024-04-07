'use client';
import React from 'react';
import Footer from '../../sections/Footer'
import { LampContainer } from '../../components/ui/lamp'
import { useUser } from '@auth0/nextjs-auth0/client';

function Review() {
    return (
        <>

            <div className='h-[30rem] w-full bg-black flex justify-center text-center '>
                <LampContainer>
                    <h1 className='text-[3rem] translate-y-[50%] poppins text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-cyan-700 to-[#000]  '>Your Application is under review ...</h1>
                </LampContainer>         </div>

            <Footer />
        </>
    );
}

export default Review;

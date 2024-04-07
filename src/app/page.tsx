'use client';

import Image from "next/image";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Aboutus from './sections/About'
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileClient from '@/app/profile-client/page'
import Dashboard from '@/app/sections/Dashboard';
import Navbar1 from "./sections/Navbar-in";

export default function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return (
    <div>loading...</div>
  )


  if (user) return (
    <div>

      <Navbar1 />
      <Dashboard />
      <Aboutus />
      <Faq />
      <Footer />
    </div>
  )

  if (error) return (
    <div>{error.message}</div>
  )



  return (

    <div className="div">

      <Navbar />
      <Hero />
      <Aboutus />
      <Faq />
      <Footer />
    </div>
  );
}

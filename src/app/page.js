import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const page = () => {
  return (
    <div  className=' max-w-[1440px'>
      <Navbar />
     <Hero />
    </div>
  );
};

export default page;
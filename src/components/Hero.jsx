import React, { useState } from 'react';
import bggreen from '../assets/bg_green.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import Videoplayer from './Videoplayer';
import TalkButton from './TalkButton';
import Modal from './Modal';

const Hero = () => {
  const [showModal,setShowModal] = useState(false);

const handleOnClose = ()=>setShowModal(false);



  return (
    <section className="">
      <div className='hidden max-md:block  pt-[4rem]' onClick={()=>setShowModal(true)}>
        <TalkButton />
      </div>
      <div className={`flex items-center max-md:flex-col bg-cover bg-center bg-no-repeat  max-md:px-5 md:pr-[6rem] md:pt-[12.25rem] md:pb-7 md:flex md:px-[3rem]`} style={{ backgroundImage: `url(${bggreen})` }}>
        <div className="pt-2 md:w-[min(90%, 75rem)] md:px-2 mx-auto">
          <h1 className="mb-2 font-extrabold text-white lg:text-[2.7rem] lg:leading-[3.2rem] text-[1.7rem] leading-[1.9rem] uppercase">
            Own a <span className='text-deepGreen'>Canna</span>, <span className='text-deepGreen'>C*D</span> or 
            <span className='text-deepGreen'> Med Card Business</span>? Need More Customers?
          </h1>
          <p className="mb-2 lg:text-[1rem] text-white md:mb-5 break-words">
            Watch the video to see REAL client results & how we delivered 5x to 7x returns for every ad dollar.
          </p>
          <button type='' className='text-white bg-deepGreen hover:text-deepGreen hover:bg-white py-5 px-6 rounded-full flex items-center gap-2 mt-6 md:mx-2 uppercase max-md:w-full  w-[340px] justify-center md:text-[1rem] transition-colors duration-300' onClick={()=>setShowModal(true)}>
            <FaPhoneAlt />  Book a call
          </button>
        </div>
        <div className="pt-8 md:w-[min(90%, 75rem)] mx-auto mb-6 lg:max-w-screen-desktop max-lg:max-w-screen-desktop">
          <Videoplayer 
          />
        </div>

      

      </div>
      <Modal onClose={handleOnClose}  visible={showModal}/>
    </section>
  );
}

export default Hero;
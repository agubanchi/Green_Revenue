// TalkButton.jsx
import React, { useEffect, useState } from 'react';
import celphone from '../assets/celphone.svg'
import celphone_b from '../assets/celphone_b.svg'

const TalkButton = ({ handleOpenModal }) => { // Recibe handleOpenModal como prop
  const [sticky, setSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 


  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <button onClick={handleOpenModal}
        className={`text-gray-900 bg-white hover:text-deepGreen font-bold hover:bg-white py-5 px-8 w-[280px] md:rounded-full  flex items-center gap-2 mt-0 md:mx-2 mx-auto uppercase max-md:w-full  justify-center max-md:mx-auto max-md:bg-deepGreen max-md:hover:text-gray-900 max-md:hover:bg-darkGreen transition-colors duration-300 ${
          sticky ? "md:bg-deepGreen max-md:fixed z-[9999] mt-0  text-gray-900 hover:text-gray-900 hover:bg-darkGreen" : ""
        }`}
         // Llama a la función handleOpenModal cuando se hace clic en el botón
      >
        
          { sticky || isMobile ? (
            <img src={celphone_b} alt="celphone_icon"/>
          ) : (
            <img src={celphone} alt="celphone_icon" />
          ) }
          Let’s Talk

          
        
      </button>
    </>
  )
}

export default TalkButton;

import React, { useEffect, useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import Modal from "./Modal";
import logowhite from '../assets/logo_white.svg'
import logoblack from '../assets/logo_black.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import TalkButton from "./TalkButton";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showModal,setShowModal] = useState(false);
  const location = useLocation();
  const isPolicyPage = location.pathname === "/privacy-policy";
  
  
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    setSticky(window.scrollY > 0 || isPolicyPage);
  }, [isPolicyPage]);


  return (
    <nav
      className={`  fixed w-full  md:px-[5rem] top-0 z-[999] md:bg-transparent bg-white ${
        sticky ? "md:bg-white  text-gray-900" : ""
      }`}
    >
      <div className="flex items-center justify-between">
      <Link to="/">
      <div className="mx-7 z-[9999] flex gap-5 items-center" >
          {isMobile || sticky ||isPolicyPage ? (
            <img  src={logoblack} alt="logo" width={190} className={`md:text-4xl text-2xl uppercase font-bold dark:text-white ${sticky ? "text-white" : ""}`}  />
          ) : (
            <img src={logowhite} alt="logo" width={190} className={`md:text-4xl text-2xl uppercase font-bold dark:text-white ${sticky ? "text-white" : ""}`} />
          )}
          
        </div>
        </Link>
        <div
          className={` ${
            sticky ? " md:bg-gray-900/0 bg-gray-900 " : ""
          } text-white md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            
             <TalkButton handleOpenModal={handleOpenModal}/>
           
          </ul>
          
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[3] dark:text-white  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden m-5`}
        >
          { open?
          <GrClose/>
          :
          <GiHamburgerMenu />
        }
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-full h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            
              <li
                onClick={() => setOpen(false)}
               
                className="px-6 hover:text-green-600"
              >
                <a href=""></a>
              </li>
           
          </ul>
        </div>
      </div>
      <Modal onClose={handleCloseModal} visible={showModal}/>
    </nav>
    
  );
};

export default Navbar;
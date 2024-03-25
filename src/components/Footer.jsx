import React from 'react'
import logoUO from '../assets/logo_uo.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='py-3 px-4 '>
    <div className='justify-center   md:flex grid  items-center gap-1'>
    <p className='text-deepGray text-[.8rem] text-center flex'>Green Revenue Solutions is owned & operated by  </p> 
    <a href="https://www.uosolutions.com/" target='_blank' className='flex justify-center'><img src={logoUO} alt="" className='justify-center'/></a>
    </div>
    <p className='text-deepGray text-[.8rem] text-center'>
    © 2024 All Rights Reserved Green Revenue Solutions | <span className='font-bold underline'><Link to={"/privacy-policy"}>Privacy Policy</Link></span>
    </p>
    </div>
  )
}

export default Footer
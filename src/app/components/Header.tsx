import React from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import "../page.module.css";
import { FaRegHeart, FaRegEnvelope } from 'react-icons/fa';



const header = () => {
  return (
    <header>
      <nav id='navLeft'>
      <Link href='/'className='navTxt'>
        Accueil
      </Link>
      <Link href='/catalogue'className='navTxt'>
        Catalogue
      </Link>
      </nav>
      <Image src={logo} alt="logo" id='logo' />
      <nav id='navRight'>
      <Link href='/favlist' className='navIcon'>
        <FaRegHeart size={18}/>
      </Link>
      <Link href='/contact' className='navIcon'>
        <FaRegEnvelope size={18}/>   
      </Link>
      </nav>
    </header>

  )
}



export default header
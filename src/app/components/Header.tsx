import React from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import "../page.module.css";
import { FaRegHeart, FaRegEnvelope } from 'react-icons/fa';



const header = () => {
  return (
    <header>
      <nav className='navLeft'>
        <p>Accueil</p>
        <p>Catalogue</p>
      </nav>
      <Image src={logo} alt="logo" id='logo' />
      <nav className='navRight'>
        <FaRegHeart/>
        <FaRegEnvelope/>   
      </nav>
    </header>

  )
}



export default header
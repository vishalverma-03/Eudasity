import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import './Nav.css';
export default function () {
  const [sticky,setsticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>120 ?setsticky(true):setsticky(false);
    })
  },[])
  return (
    <nav className={`container ${sticky? 'dark-nav' :''}`}>
      <img src={logo} alt="" />
      <ul>
      <li> <Link to='Hero' offset={0} smooth={true} duration={500} >Home</Link></li>
      <li><Link to='Programs' offset={-230} smooth={true} duration={500}>Program</Link></li>
      <li><Link to='About' offset={-100} smooth={true} duration={500}>About Us</Link></li>
      <li><Link to='Campus' offset={-250} smooth={true} duration={500}>Campus</Link></li>
      <li><Link to='testimoinal' offset={-230} smooth={true} duration={500}>testimonials</Link></li>
      <li><Link className='btn' to='Contact' smooth={true} offset={-230} duration={500}>Contact Us</Link></li></ul>
    </nav>
  )
}

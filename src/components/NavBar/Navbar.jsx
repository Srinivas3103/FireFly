import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/aasets'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className='header-container'>
        <img src={assets.logo} alt="logo" className='logo'/>
      </div>
      <div className='text-container'>
        <h1 className='heading'>The choice is yours.<br/>Because they don't have one.</h1>
        <button className='button' onClick={()=>navigate('/products')}>QUICK VIEW</button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { NetflixLogo } from "./Constaints";

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black px-8 py-1'>
      <img src={NetflixLogo} alt="Netflix" className="w-44 h-22" />
      
    </div>
  );
}

export default Header

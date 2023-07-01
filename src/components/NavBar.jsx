import '../styles/navbar.css'
import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { IoIosMenu } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'

function Navbar() {
    const [MenuOpen, setMenuOpen] = useState(false);
    
    function handleClick(){
        setMenuOpen(!MenuOpen)
        console.log(MenuOpen)
    }

  return (
    <>
    <div className="desktop-nav-ctn">
        <img className='desktop-logo' src={logo} />
        <IoIosMenu className='hamburger-icon' onClick={() => handleClick()} />
        <nav className='desktop-nav'>
            <a>Home</a>
            <a>New</a>
            <a>Popular</a>
            <a>Trending</a>
            <a>Categories</a>
        </nav>
    </div>

<div className="mobile-nav-ctn">
    <img className='mobile-logo' src={logo} />
    <IoIosMenu className='hamburger-icon' onClick={() => handleClick()} />
    {MenuOpen && <div className='mobile-nav-links slide-in-right'>
    <nav>
    < RxCross1 onClick={() => handleClick()} className='cross'/>
        <a>Home</a>
        <a>New</a>
        <a>Popular</a>
        <a>Trending</a>
        <a>Categories</a>   
    </nav>
    </div>}
</div>
</>
  )
}

export default Navbar
import React, {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import {NavbarData} from './NavItems'
import {IconContext} from 'react-icons'
import './Navbar.scss'
import {FaTimes}  from "react-icons/fa";
import styled from 'styled-components';
import Logo from './cyber.png'


const NavLogoContent = styled.div`
display: flex;
width: 95%;
color: red;
align-items: center;
height: 100%;
justify-content: space-between;
padding: 0 30px;

@media (max-width: 575px) {
    width: 50%;
}
// Small devices (landscape phones, 576px and up 767)
@media (min-width: 568px) and (max-width: 767px) {
    width: 80%;   
}

`

const NavItems = styled.div`
display: flex;
align-items: center;

@media (max-width: 575px) {
    display: none;
}
`
const NavIcon = styled.div`
display: flex;
margin-left: auto;
padding-right: 50px;

@media (max-width: 575px) {
    padding-right: 15px;
}
@media (min-width: 568px) and (max-width: 767px) {
    padding-right: 10px;
}

`



const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);




const [sidebar, setSidebar] = useState(false) 
const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'#FFFF'}}>
        <div className={`navbar ${show ? 'active' : 'hidden'}`}>
            <NavLogoContent>
                <a href='/'>
                  <img src={Logo} alt="Liquid Crystal" className="cyberimagelogo" />
                </a>
               
            {/* <img src="../images/Vector.png" alt="cyber solutions" className='cyberimagevector'/> */}

            <NavItems>
                {NavbarData.map((item, i) =>{
                        return(
                            <li key={i} className={item.cName}>
                                <a href={item.path}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

            </NavItems>
            </NavLogoContent>
            <NavIcon className='d-block d-sm-none '>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </NavIcon>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                    <Link to="#" className="menu-bars menu-bars-hide">
                     <FaTimes onClick={showSidebar}/>
                    </Link>
             
                {NavbarData.map((item, i) =>{
                    return(
                        <li key={i} className={item.cName}>
                            <a href={item.path}>
                                    {item.title}
                                </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import {SidebarData} from './NavPages'
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

function Navbar() {

const [sidebar, setSidebar] = useState(false) 
const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'#FFFF'}}>
        <div className="navbar">
            <NavLogoContent>
            <img src={Logo} alt="Liquid Crystal" className="cyberimagelogo" />
            <img src="../images/Vector.png" alt="cyber solutions" className='cyberimagevector'/>

            <NavItems>
                {NavbarData.map((item, i) =>{
                        return(
                            <li key={i} className={item.cName}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
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
             
                {SidebarData.map((item, i) =>{
                    return(
                        <li key={i} className={item.cName}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
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
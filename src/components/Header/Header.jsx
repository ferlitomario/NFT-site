import React from 'react'
import { Container } from 'reactstrap';
import "./Header.css";

import { NavLink, Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';


const NAV_LINKS = [
    {
        display:'Home',
        url:'/home'
    },
    {
        display:'Mint',
        url:'/mintpages'
    },
    
    
]


const Header =() => {
    return (
        <header className = "header">
            <Container>
                <div className ="navigation">
                    <div className="logo">
                        <h2 className=" d-flex gap-2 align-items-center">
                            <span>
                                <i class="ri-fire-fill"></i>
                            </span>
                            NFT'S
                        </h2>
                    </div>

                    <div className="nav__menu">
                        <ul className="nav__list">

                            {
                                NAV_LINKS.map((item, index)=>(
                                    <li className="nav__item" key={index}>
                                        <NavLink to ={item.url} className={ navClass=> navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                            
                        </ul>
                        
                    </div>

                            <div className="nav__right d-flex align-items-center gap-5 ">

                                <button className="btn d-flex gap-2 align-items-center">
                                <span>
                                        <i class="ri-wallet-line"></i>
                                        </span>  
                                        
                                   
                                    <Link to='/mintpages' >
                                    Go to Mint!
                                    </Link>
                                    </button>
                                    
                            </div>
                </div>

            </Container>

        </header>
    )
}

export default Header

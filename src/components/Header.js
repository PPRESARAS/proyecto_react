import React from 'react';
import Navbarleft from "../components/NavbarLeft"
import Navbarright from "../components/NavbarRight"

function Header() {
    return(
        <header className='header'>

            <div className="topnavLeft">
                <a className='logolink' href="index.html"><img src="./images/logo.png" alt='logo' className="logo" /></a>
                <h1 className='titulo'>Contact cards</h1>
            </div>
        
            <Navbarright/>
        
        </header>
    );
}
export default Header
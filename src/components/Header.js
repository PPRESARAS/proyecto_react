import React from 'react';
import Navbarleft from "../components/NavbarLeft"
import Navbarright from "../components/NavbarRight"

function Header() {
    return(
        <header className='header'>

            <Navbarleft/>
        
            <Navbarright/>
        
        </header>
    )
}
export default Header
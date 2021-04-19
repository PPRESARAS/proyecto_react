import React from 'react';
import Navbarleft from "../components/NavbarLeft"
import Navbarright from "../components/NavbarRight"

function Header() {
    return(
        <header class='header'>

            <Navbarleft/>
        
            <Navbarright/>
        
        </header>
    )
}
export default Header
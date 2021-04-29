import React from 'react';

function Header() {
    return(
        <header className='header'>

            <div className="topnavLeft">
                <a className='logolink' href="index.html"><img src="./images/logo.png" alt='logo' className="logo" /></a>
                <h1 className='titulo'>TUS AMIGOS</h1>
            </div>
        
        </header>
    );
}
export default Header
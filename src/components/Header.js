import React from 'react';

function Header() {
    return(
        <header className='header'>

            <div className="topnavLeft">
                <a className='logolink' href="https://udesa.edu.ar/"><img src="./images/logo-bottom.png" alt='logo' className="logo" /></a>
                <h1 className='titulo'>Alumnos Posgrado</h1>
            </div>
        
        </header>
    );
}
export default Header
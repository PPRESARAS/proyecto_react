import React from 'react';

function Footer(){
    return(
        <footer className='footer'>
            <ul className='ulfooter'>
                <li className='footerli'><a className='footerlink' href='https://mail.google.com/mail/u/2/#inbox'>Webmail</a></li>
                <li className='footerli'><a className='footerlink' href='https://gestion.udesa.edu.ar/users/sign_in'>SIGEDU</a></li>
                <li className='footerli'><a className='footerlink' href='https://campusvirtual.udesa.edu.ar/login/index.php'>Campus Virtual</a></li>
                <li className='footerli'><a className='footerlink' href='https://udesa.edu.ar/como-llegar'>Como Llegar</a></li>
                <li className='footerli'><a className='footerlink' href='https://www.udesa.edu.ar/combis-san-andres'>Combi San Andres</a></li>
                <li className='footerli'><a className='footerlink' href='https://udesa.edu.ar/oficina-de-alumnos-de-posgrado'>Alumnos</a></li>
                <li className='footerli'><a className='footerlink' href='https://udesa.edu.ar/cuerpo-docente'>Profesores</a></li>
                <li className='footerli'><a className='footerlink' href='https://conectar.udesa.edu.ar/'>Graduados</a></li>

            </ul>
            <h1 className="autores">David Bastidas, Marcos Estrada, Pedro Presaras</h1>
        </footer>
    )
}

export default Footer
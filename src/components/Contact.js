import React from 'react';

function Contact() {
    return(
        <li class="tarjeta">
                <ul class="datos">
                    <li class="profile"><img src="./images/logo.png" alt='profile' class="profilefoto"></img></li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Email</li>
                    <li>Fecha de Nacimiento</li>
                    <li>(Edad)</li>
                    <button type="button" class="collapsible">Ver mas +</button>
                            <div class="content">
                                <ul>
                                  <li class="collapsibleLi">Calle y Número:</li>
                                  <li class="collapsibleLi">Ciudad/Estado:</li>
                                  <li class="collapsibleLi">País:</li>
                                  <li class="collapsibleLi">Código postal:</li>
                                  <li class="collapsibleLi">Fecha de Registro:</li>
                                  <li class="collapsibleLi">Teléfono:</li>
                                </ul>
                            </div>
                </ul>
        </li>
    )
}
export default Contact
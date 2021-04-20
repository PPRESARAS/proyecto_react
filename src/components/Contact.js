import React from 'react';

function Contact(props) {
    return(
        <li className="tarjeta">
                <ul className="datos">
                    <li className="profile"><img src={props.image} alt='profile' className="profilefoto"/></li>
                    <li>Nombre: {props.name}</li>
                    <li>Apellido: {props.surname}</li>
                    <li>Email:{props.email}</li>
                    <li>Fecha de Nacimiento: {props.birthday}</li>
                    <li>(Edad: {props.age})</li>
                    <button type="button" className="collapsible">Ver mas +</button>
                            <div className="content">
                                <ul>
                                  <li className="collapsibleLi">Calle y Número: {props.address}</li>
                                  <li className="collapsibleLi">Ciudad/Estado:{props.city}</li>
                                  <li className="collapsibleLi">País:{props.country}</li>
                                  <li className="collapsibleLi">Código postal:{props.postalCode}</li>
                                  <li className="collapsibleLi">Fecha de Registro:{props.registerDay}</li>
                                  <li className="collapsibleLi">Teléfono:{props.phone}</li>
                                </ul>
                            </div>
                    <button className="botonBorrar"><i className="fas fa-user-times"></i>Eliminar contacto</button>
                </ul>
        </li>
    )
}
export default Contact
import React from 'react';

function Contact(props) {
    return(
        <React.Fragment>

            <li className="profile"><img src={props.datosPersona.image} alt='profile' className="profilefoto"/></li>
            <li>Nombre: {props.datosPersona.name}</li>
            <li>Apellido: {props.datosPersona.surname}</li>
            <li>Email:{props.datosPersona.email}</li>
            <li>Fecha de Nacimiento: {props.datosPersona.birthday}</li>
            <li>(Edad: {props.datosPersona.age})</li>
                <button type="button" className="collapsible">Ver mas +</button>
                         <div className="content">
                             <ul>
                                <li className="collapsibleLi">Calle y Número: {props.datosPersona.address}</li>
                                <li className="collapsibleLi">Ciudad/Estado:{props.datosPersona.city}</li>
                                <li className="collapsibleLi">País:{props.datosPersona.country}</li>
                                <li className="collapsibleLi">Código postal:{props.datosPersona.postalCode}</li>
                                <li className="collapsibleLi">Fecha de Registro:{props.datosPersona.registerDay}</li>
                                <li className="collapsibleLi">Teléfono:{props.datosPersona.phone}</li>
                            </ul>
                         </div>
            <button className="botonBorrar"><i className="fas fa-user-times"></i>Eliminar contacto</button>
        </React.Fragment>
    )
}
export default Contact

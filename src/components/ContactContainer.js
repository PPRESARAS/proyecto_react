import React from 'react';
import fs from "fs";
import arrayPersonas from '../personas.json';
import Contact from './Contact.js';

function ContactContainer() {
    return(
        <React.Fragment>
            <div className="tarjeta">
                    <ul className="datos">
                        {
                            arrayPersonas.map(function (persona, idx){
                            return(
                                <Contact datosPersona={persona} key={idx}/>
                                );
                            })
                        }
                    </ul>
            </div>
        </React.Fragment>

    )
}
export default ContactContainer
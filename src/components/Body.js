import React from 'react';
import Contact from "../components/Contact";
import fs from "fs";
import arrayPersonas from '../personas.json'


function Body(){
    return(
        <div className='cuerpo'>
            <div className="tarjetas">
                {
                    arrayPersonas.map(function (persona, idx){
                    return(
                        <Contact datosPersona={persona} key={idx}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Body
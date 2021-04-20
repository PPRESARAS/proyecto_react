import React from 'react';
import Contact from "../components/Contact";
import fs from "fs";
const arrayPersonas = fs.readFileSync("../personas.json")


function Body(){
    return(
        <div className='cuerpo'>
            <ul className="tarjetas">
                {
                    arrayPersonas.map(function (persona, idx){
                    return(
                        <Contact datosPersona={persona} key={idx}/>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Body
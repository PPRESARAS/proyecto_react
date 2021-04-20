import React from 'react';
import Contact from "../components/Contact";
import fs from "fs";
const arrayPersonas = fs.readFileSync("../personas.json")


function Body(){
    return(
        <div className='cuerpo'>
            <ul className="tarjetas">
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
            </ul>
        </div>
    )
}

export default Body
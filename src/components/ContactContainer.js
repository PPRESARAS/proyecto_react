import React from 'react';
import {Component} from "react";
import fs from "fs";
import arrayPersonas from '../personas.json';
import Contact from './Contact.js';


export default class ContactContainer extends Component  {
    constructor(){
        super();
        this.state = {
            persona: [],
            display: 'none'
        }
    }

    componentDidMount(){
    fetch("https://randomuser.me/api/?results=10")
    .then(resource => resource.json())
    .then(data=> {
        this.setState({persona: data.results});
        console.log(this.state.persona)
    }) }
    
    render(){
    return(
        <React.Fragment>
            <div className="contenedorTarjetas">
                        {
                            this.state.persona.map(function (persona){
                                
                            return(
                                <Contact  name={persona.name.first} surname={persona.name.last} image={persona.picture.large} email={persona.email} age={persona.dob.age} birthday={persona.dob.date}/> 
                                );
                            })
                        }
                  
            </div>
        </React.Fragment>
    
    )
    }
}

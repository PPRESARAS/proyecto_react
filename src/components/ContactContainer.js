import React from 'react';
import {Component} from "react";
import fs from "fs";
import arrayPersonas from '../personas.json';
import Contact from './Contact.js';
import { disconnect } from 'process';

export default class ContactContainer extends Component  {
    constructor(props){
        super(props);
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
    
    AgregarTarjetas(){ 
     let cantidad = document.querySelector(".cantidadAgregar").value
     console.log(cantidad);
     
    fetch("https://randomuser.me/api/?results=10" + cantidad)
        .then(resource => resource.json())
        .then(data=> {
            let masData = this.state.items.push(data.results)
            this.setState({persona: masData});
            console.log(masData)
     })
    }
    
    FiltrarTarjetas(){
        let filtrarData = document.querySelector(".filtroData").value
        let filtrarPor = document.querySelector(".filtrarPor").value
        console.log(filtrarData)
        console.log(filtrarPor)

        if (filtrarPor === "edad"){
            let resultado = this.state.personas.filter( (persona) => {
                return persona.dob.age === filtrarData;
            })
            this.setState({personas: resultado});
        }
        else if (filtrarPor === "nombre"){
            let resultado = this.state.personas.filter( (persona) => {
                return persona.name.first.includes(filtrarData);
            })
            this.setState({personas: resultado})
        }
    }
    
    render(){
    return(
        <React.Fragment>
            <div className="BotonFiltrar" style={{textAlign: "center", padding:"20px"}}>
                <h4 className="Filtro"> FILTRAR POR: </h4>
                    <select className="filtrarPor" name="filtrarPor">
                        <option value="edad">Edad</option>
                        <option value="nombre">Nombre</option>
                    </select>

                <input className="filtroData" name="filtroData"/>
                <button logo="fas fa-filter" onClick={this.FiltrarTarjetas} className="botonFiltrar">Filtrar</button>
            </div>


            <div className="contenedorTarjetas">
                        {
                            this.state.persona.map(function (persona){
                                
                            return(
                                <Contact  name={persona.name.first} surname={persona.name.last} image={persona.picture.large} email={persona.email} age={persona.dob.age} birthday={persona.dob.date}/> 
                                );
                            })
                        }
                  
            </div>
            <div className="BotonAgregar" style={{textAlign: "center", padding:"20px"}}>
                <h3>¿Desea agregar mas tarjetas?</h3>
                <input className="cantidadAgregar" name="cantidad" />
                <button logo="fas fa-filter" onClick={this.AgregarTarjetas}>Agregar Tarjetas</button>
              
            </div>
        </React.Fragment>
     
    )
    }
}

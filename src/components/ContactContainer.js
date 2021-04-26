import React from 'react';
import {Component} from "react";
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
     
    fetch("https://randomuser.me/api/?results=" + cantidad)
        .then(resource => resource.json())
        .then(data=> {
            console.log(data)
            let masData = this.state.persona.concat(data.results)
            this.setState({persona: masData});
          
     })
    }
    
    FiltrarTarjetas(){
        let filtrarData = document.querySelector(".filtroData").value
        let filtrarPor = document.querySelector(".filtrarPor").value
        console.log(filtrarData)
        console.log(filtrarPor)

        if (filtrarPor === "edad"){
            let resultado = this.state.persona.filter( (persona) => {
                return persona.dob.age === filtrarData;
            })
            this.setState({persona: resultado});
        }
        else if (filtrarPor === "nombre"){
            let resultado = this.state.persona.filter( (persona) => {
                return persona.name.first.includes(filtrarData);
            })
            this.setState({persona: resultado})
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

                <input className="filtroData" name="filtroData" placeholder="Filtro..."/>
                <button logo="fas fa-filter" onClick={this.FiltrarTarjetas.bind(this)} className="botonFiltrar">Filtrar <i class="fas fa-filter"></i></button>
            </div>


            <div className="contenedorTarjetas" >
                        {
                            this.state.persona.map((persona) =>
                                
                            (
                            <Contact key={persona.login.uuid} name={persona.name.first} surname={persona.name.last} image={persona.picture.large} email={persona.email} age={persona.dob.age} birthday={persona.dob.date}/> 
                            )
                            
                            )
                        }
                  
            </div>
            <div className="BotonAgregar" style={{textAlign: "center", padding:"20px"}}>
                <h3>¿Desea agregar mas tarjetas?</h3>
                <input className="cantidadAgregar" name="cantidad" type="number" min="1" max="15" onChange={(event) => this.setState({numero: event.target.value})}></input>
                <button onClick={this.AgregarTarjetas.bind(this)}>Agregar Tarjetas <i class="fas fa-user-plus"></i></button>
              
            </div>
        </React.Fragment>
     
    )
    }
}

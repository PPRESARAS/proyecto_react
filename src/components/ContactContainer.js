import React from 'react';
import {Component} from "react";
import Contact from './Contact.js';
import { disconnect } from 'process';

export default class ContactContainer extends Component  {
    constructor(props){
        super(props);
        // this.OrdenarAscendente = this.OrdenarAscendente.bind(this);
        // this.OrdenarDescendente = this.OrdenarDescendente.bind(this);
        this.state = {
            persona: [],
            display: 'none',
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
        
        fetch("https://randomuser.me/api/?inc=name="+ this.state.name) 
        .then(resource => resource.json())
        .then(data => {
          console.log(data)
          let nombre = this.state.persona.push(data.results);
          this.setState({persona: nombre});
        })}
    

    // OrdenarAscendente(){
    //     this.setState(prevState => {
    //       this.state.persona.name.sort((a,b) => (a.first - b.first))
    //     });
    //   }
    
    // OrdenarDescendente(){
    //     this.setState(prevState => {
    //       this.state.persona.name.sort((a,b) => (b.first - a.first))
    //     });
    //   }
    
    
    render(){
    return(
        <React.Fragment>
            <div className="BotonFiltrar" style={{textAlign: "center", padding:"20px"}}>
                <h4 className="Filtro"> FILTRAR POR: </h4>
                    <select className="filtrarPor" name="filtrarPor">
                        <option value="edad">Edad</option>
                        <option value="nombre">Nombre</option>
                    </select>

                <input className="filtroData" name="filtroData" placeholder="Filtro..." onChange={(event) => this.setState({nombre: event.target.value})}/>
                <button logo="fas fa-filter" onClick={this.FiltrarTarjetas.bind(this)} className="botonFiltrar">Filtrar <i class="fas fa-filter"></i></button>
            

            </div>
            {/* <div  style={{textAlign: "center", padding:"20px"}}> Ordenar por: 
                    <button className="orden" onClick={this.OrdenarAscendente}> Ascendente </button>
                    <button className="orden" onClick={this.OrdenarDescendente}> Descendente </button>
            </div> */}


            <div className="contenedorTarjetas" >
                        {
                            this.state.persona.map((persona) =>
                                
                            (
                            <Contact  name={persona.name.first} surname={persona.name.last} image={persona.picture.large} email={persona.email} age={persona.dob.age} birthday={persona.dob.date} key={persona.login.uuid}/> 
                            )
                            
                            )
                        }
                  
            </div>
            <div className="BotonAgregar" style={{textAlign: "center", padding:"20px"}}>
                <h3>¿Desea agregar mas tarjetas?</h3>
                <input className="cantidadAgregar" name="cantidad" type="number" min="1" max="50"></input>
                <button onClick={this.AgregarTarjetas.bind(this)}>Agregar Tarjetas <i class="fas fa-user-plus"></i></button>
              
            </div>
        </React.Fragment>
     
    )
    }
}

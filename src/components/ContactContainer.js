import React from 'react';
import {Component} from "react";
import Contact from './Contact.js';
import { disconnect } from 'process';

export default class ContactContainer extends Component  {
    constructor(props){
        super(props);
        this.title = React.createRef()
        this.OrdenarAscendente = this.OrdenarAscendente.bind(this);
        this.OrdenarDescendente = this.OrdenarDescendente.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(
          (data) => {
              console.log(data)
              var resultadosBusqueda = data.results.length

              for (var i = 0; i < resultadosBusqueda.length; i++) {
                console.log(resultadosBusqueda[i]);
              }
            this.setState({
              isLoaded: true,
              items: data.results
            });
            
          },
          
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
          
      }
    
    AgregarTarjetas(){ 
     let cantidad = document.querySelector(".cantidadAgregar").value
     console.log(cantidad);
     
    fetch("https://randomuser.me/api/?results=" + cantidad)
        .then(resource => resource.json())
        .then(data=> {
            console.log(data)
            let masData = this.state.items.concat(data.results)
            this.setState({items: masData});     
     })
    }
    
    FiltrarTarjetasNombre(){
        let filtrarNombre = document.querySelector(".filtroNombre")
        console.log(filtrarNombre);
        
        fetch("https://randomuser.me/api/?inc=name="+ this.state.name) 
        .then(resource => resource.json())
        .then(data => {
          console.log(data)
          let name = this.state.items.push(data.results);
          this.setState({items: name});
    })}
    
    FiltrarTarjetasEdad(){         
        let filtrarEdad = document.querySelector(".filtrarEdad")
            console.log(filtrarEdad);
            
        fetch("https://randomuser.me/api/?inc=age="+ this.state.age) 
        .then(resource => resource.json())
        .then(data => {
            console.log(data)
            let age = this.state.items.push(data.results);
            this.setState({items: age});
    })}
        
    OrdenarAscendente(){
        this.setState(prevState => {
          this.state.items.name.sort((a,b) => (a.name - b.name))
        });
      }
    
    OrdenarDescendente(){
        this.setState(prevState => {
          this.state.items.name.sort((a,b) => (b.name - a.name))
        });
      }
    
    
    render(){
        const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return(
        <React.Fragment>
            <div className="BotonFiltrar" style={{textAlign: "center", padding:"20px"}}>
                <h4 className="Filtro"> FILTRAR POR: </h4>
                        <option value="nombre">NOMBRE</option>
                <input className="filtroData" name="filtroNombre" type="text" placeholder="Nombre..." onChange={(event) => this.setState({nombre: event.target.value})}/>
                <button logo="fas fa-filter" onClick={this.FiltrarTarjetasNombre.bind(this)} className="botonFiltrar">Filtrar <i class="fas fa-filter"></i></button>

                <option value="nombre">EDAD</option>
                <input className="filtroData" name="filtroEdad" type="number" min="1" max="99" placeholder="Edad..." onChange={(event) => this.setState({nombre: event.target.value})}/>
                <button logo="fas fa-filter" onClick={this.FiltrarTarjetasEdad.bind(this)} className="botonFiltrar">Filtrar <i class="fas fa-filter"></i></button>
            

            </div>
            <div  style={{textAlign: "center", padding:"20px"}}> Ordenar por: 
                    <button className="orden" onClick={this.OrdenarAscendente}> Ascendente </button>
                    <button className="orden" onClick={this.OrdenarDescendente}> Descendente </button>
            </div>


            <div className="contenedorTarjetas" >
            {this.state.items.map(items => (
                            <Contact  name={items.name.first} surname={items.name.last} image={items.picture.large} email={items.email} age={items.dob.age} birthday={items.dob.date}/> 
                            ))}
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
}
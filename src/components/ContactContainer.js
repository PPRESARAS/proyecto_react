import React from 'react';
import {Component} from "react";
import Contact from './Contact.js';
import Collapsible from './Collapsible.js';
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
            itemsNuevo: [],
            display: 'none',
            colorFondo: "white",
            name: "",
            age: "",
        };

    }

    componentDidMount(){ 
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
            items: data.results,
            itemsNuevo: data.results,
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
    
    MouseEnter = () => {
      if(this.state.colorFondo==="white")
          this.setState({colorFondo:"lightblue"})
  }

  MouseLeave = () => {
      if(this.state.colorFondo==="lightblue")
          this.setState({colorFondo:"white"})
  }

  // FiltrarTarjetasNombre(){
  //   let filtrarNombre = document.querySelector(".filtroNombre").value.toUpperCase()
  //   console.log(filtrarNombre)
  //   let filtro = this.state.items.filter((search)=>{
  //       let name = search.name.first.toUpperCase()
        
  //     return name.startsWith(filtrarNombre) //buscar si incluye el nombre y poner con el metodo include()
  //     })
  //   console.log(filtro)
  //     this.setState({items: filtro})
  // }
  
  // FiltrarTarjetasEdad(){
  //   let filtrarEdad = document.querySelector(".filtroEdad").value.toString()
  //   console.log(filtrarEdad)
  //   let filtro = this.state.items.filter((search)=>{
  //       let name = search.name.first
  //       let age = search.dob.age.toString()
        
  //     return name.startsWith(filtrarEdad) || lastname.startsWith(filtarEdad) || age.includes(filtrarEdad) //buscar si incluye el numero y poner con el metodo include()
  //     })
  //   console.log(filtro)
  //     this.setState({items: filtro})
  // }
  FiltrarTarjetasNombre(){
    let filtro = document.querySelector(".filtroNombre").value.toUpperCase()
    console.log(filtro)
    let filtrado = this.state.items.filter((search)=>{
        let name = search.name.first.toUpperCase()
        let lastname = search.name.last.toUpperCase()
        let age = search.dob.age.toString()
        
        
      return name.startsWith(filtro) || lastname.startsWith(filtro) ||  age.includes(filtro) //buscar si incluye el numero y pasar todo a tring y poner con el metodo include()
      })
    console.log(filtrado)
      this.setState({items: filtrado})
  }
  FiltrarTarjetasApellido(){
    let filtro = document.querySelector(".filtroApellido").value.toUpperCase()
    console.log(filtro)
    let filtrado = this.state.items.filter((search)=>{
        let name = search.name.first.toUpperCase()
        let lastname = search.name.last.toUpperCase()
        let age = search.dob.age.toString()
        
        
      return name.startsWith(filtro) || lastname.startsWith(filtro) ||  age.includes(filtro) //buscar si incluye el numero y pasar todo a tring y poner con el metodo include()
      })
    console.log(filtrado)
      this.setState({items: filtrado})
  }
  FiltrarTarjetasEdad(){
    let filtro = document.querySelector(".filtroEdad").value.toUpperCase()
    console.log(filtro)
    let filtrado = this.state.items.filter((search)=>{
        let name = search.name.first.toUpperCase()
        let lastname = search.name.last.toUpperCase()
        let age = search.dob.age.toString()
        
        
      return name.startsWith(filtro) || lastname.startsWith(filtro) ||  age.includes(filtro) //buscar si incluye el numero y pasar todo a tring y poner con el metodo include()
      })
    console.log(filtrado)
      this.setState({items: filtrado})
  }

    ResetFiltro(){
      this.setState({items: this.state.itemsNuevo})
    }
        
    OrdenarAscendente(){
        this.setState(event => {
          this.state.items.name.sort((a,b) => (a.name - b.name))
        });
      }
    
    OrdenarDescendente(){
        this.setState(event => {
          this.state.items.name.sort((a,b) => (b.name - a.name))
        });
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
    
    render(){
        const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return(
        <React.Fragment>
          <div style={{textAlign: "center", alignItems:"center"}}>
          <h4 className="Filtro"> FILTRAR POR: </h4>
            
            <a>NOMBRE: {this.state.name} </a>
              <input className="filtroNombre" name="filtroNombre" type="text"  onChange={this.FiltrarTarjetasNombre.bind(this)}/>
              <button logo="fas fa-filter" onClick={this.FiltrarTarjetasNombre.bind(this)} className="botonFiltrar">Filtrar <i class="fas fa-filter"></i></button>
            <br></br><br></br>
            <a>APELLIDO: {this.state.name} </a>
              <input className="filtroApellido" name="filtroNombre" type="text"  onChange={this.FiltrarTarjetasApellido.bind(this)}/>
              <button logo="fas fa-filter" onClick={this.FiltrarTarjetasApellido.bind(this)} className="botonFiltrar">Filtrar <i class="fas fa-filter"></i></button>
            <br></br><br></br>
            <a >EDAD: {this.state.age} </a>
              <input className="filtroEdad" name="filtroEdad" type="number" min="1" max="99"  onChange={this.FiltrarTarjetasEdad.bind(this)}/>
              <button logo="fas fa-filter" onClick={this.FiltrarTarjetasEdad.bind(this)} className="botonFiltrar">Filtrar <i class="fas fa-filter"></i></button>
            <br></br><br></br>
              <button className="resetFiltro" onClick={this.ResetFiltro.bind(this)} >RESETEAR  FILTRO</button>
              <br></br><br></br>
            <a> Ordenar por: 
              <button className="orden" onClick={this.OrdenarAscendente.bind(this)}> Ascendente </button>
              <button className="orden" onClick={this.OrdenarDescendente.bind(this)}> Descendente </button>
            </a>
          </div>

            <div className="contenedorTarjetas" >
            {items.map(items => (
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
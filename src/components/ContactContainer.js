import React from 'react';
import {Component} from "react";
import Contact from './Contact.js';
import Collapsible from './Collapsible.js';
import { disconnect } from 'process';


export default class ContactContainer extends Component  {
    constructor(props){
        super(props);
        this.title = React.createRef()
        this.desplegarInfo = this.desplegarInfo.bind(this)
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
      fetch("https://randomuser.me/api/?results=12")
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

  FiltrarTarjetasNombre(){
    let filtro = document.querySelector(".filtroNombre").value.toUpperCase()
    console.log(filtro)
    let filtrado = this.state.items.filter((search)=>{
        let name = search.name.first.toUpperCase()

      return name.startsWith(filtro) 
      })
      console.log(filtrado)
      this.setState({items: filtrado})
  }

  FiltrarTarjetasApellido(){
    let filtro = document.querySelector(".filtroApellido").value.toUpperCase()
    console.log(filtro)
    let filtrado = this.state.items.filter((search)=>{
        let lastname = search.name.last.toUpperCase()
      
      return  lastname.startsWith(filtro)  
      })
      console.log(filtrado)
      this.setState({items: filtrado})
  }

  FiltrarTarjetasEdad(){
    let filtro = document.querySelector(".filtroEdad").value.toUpperCase()
    console.log(filtro)
    let filtrado = this.state.items.filter((search)=>{
        let age = search.dob.age.toString()
        
      return  age.includes(filtro) 
      })
      console.log(filtrado)
      this.setState({items: filtrado})
  }

  ResetFiltro(){
    this.setState({items: this.state.itemsNuevo})
  }
          
  InvertirLista(){
    const {items} = this.state;
    items.sort((a,b) => b - a).reverse()
    this.setState({items})
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

  BorrarTarjeta(idCard){
    console.log(idCard);
    let persona = this.state.items.filter((item)=>{
      return item.id !== idCard
    })
    this.setState({items: persona})
  }
  
  desplegarInfo(){
    console.log(this.title)
    if(this.title.current.style.display === "none"){
        this.title.current.style.display = "block";
    } else{
        this.title.current.style.display = "none";
    }
  }
  render(){
        const { error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return(
        <React.Fragment>

          <div className="contenedorFiltros" >
          {/* <div className='tituloboton'> */}
          <h2 className='filtrostitulo'>Ordenar por filtros</h2>
          <button   className='botonfiltro' onClick={this.desplegarInfo}><i class="fas fa-filter"></i></button>
          {items.map(item => (
      
          
            <div className="filtros" ref={this.title} style={{display:'none'}}>
              
              <h4 className="Filtro"> FILTRAR POR: </h4>
                
                <a>NOMBRE:</a>
                  <input className="filtroNombre" name="filtroNombre" type="text"  onChange={this.FiltrarTarjetasNombre.bind(this)}/>
                <br></br><br></br>
                <a>APELLIDO: </a>
                  <input className="filtroApellido" name="filtroNombre" type="text"  onChange={this.FiltrarTarjetasApellido.bind(this)}/>
                <br></br><br></br>
                <a >EDAD:  </a>
                  <input className="filtroEdad" name="filtroEdad" type="number" min="1" max="99"  onChange={this.FiltrarTarjetasEdad.bind(this)}/>
                <br></br><br></br>
                  <button className="resetFiltro" onClick={this.ResetFiltro.bind(this)} >RESETEAR  FILTRO</button>
                <br></br><br></br>
                  <button className="orden" onClick={this.InvertirLista.bind(this)}> INVERTIR LISTA </button>
            </div>
          ))}
          </div>

            <div className="contenedorTarjetas" >
            {this.state.items.map((items, idx) => (
                            <Contact  key={idx} onDelete={this.BorrarTarjeta.bind(this)} name={items.name.first} surname={items.name.last} image={items.picture.large} email={items.email} age={items.dob.age} birthday={items.dob.date} id={items.id}/> 
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
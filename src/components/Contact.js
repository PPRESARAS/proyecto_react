import React from 'react';
import Collapsible from './Collapsible.js';
import {Component} from "react";
import { getByDisplayValue } from '@testing-library/dom';


export default class ContactContainer extends Component  {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            display: 'none',
            colorFondo: "white",
        }


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



    MouseEnter = () => {
        if(this.state.colorFondo==="white")
            this.setState({colorFondo:"lightblue"})
    }

    MouseLeave = () => {
        if(this.state.colorFondo==="lightblue")
            this.setState({colorFondo:"white"})
    }

    BorrarTarjeta(idItem) {
       console.log("Tarjeta a borrar:" + idItem);
        let resultado = this.state.items.filter((items)=>{
           return items.id !== items
       })
       this.setState({items: resultado});
    }

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
          return <div>Cargando...</div>;
        } else { 
    return(
        <React.Fragment>
            <div className='tarjeta'  style={{ backgroundColor: this.state.colorFondo }} onMouseEnter = {this.MouseEnter.bind(this, "grey")} onMouseLeave = {this.MouseLeave.bind(this, "white")} key={items.id}>
        
            <li className="profile"><img src={this.props.image} alt='profile' className="profilefoto"/></li>
            <li>Nombre: {this.props.name}</li>
            <li>Apellido: {this.props.surname}</li>
            <li>Email:{this.props.email}</li>
            <li>Fecha de Nacimiento: {this.props.birthday}</li>
            <li>(Edad: {this.props.age})</li>
        
            <div className='botones'>    
                <Collapsible className='content' style= {this.state.display} />
                <script src="./js/collapse.js"></script>   
                <button className="botonBorrar" onClick={this.BorrarTarjeta.bind(this, items.id)}><i class="fas fa-trash-alt"></i></button>
            </div>



            
            </div>
        
        </React.Fragment>
    )}
}

}

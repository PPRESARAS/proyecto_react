import React from 'react';
import {Component} from "react";

export default class Borrar extends Component {
   
constructor(props){
        super(props);
        this.state = {
            items:[],
        }
    }
    BorrarTarjeta(idTarjeta) {
        this.state.items.filter((item) => {
            return item.id !== idTarjeta;
        })
    }

    render() {
        return (
            <button className="botonBorrar"  onClick = {this.BorrarTarjeta}>Eliminar<i className="fas fa-trash"></i></button>
    );
  }
}

// this.setState((prevState) => ({
//     items: prevState.items.filter(item => item.idTarjeta !== idTarjeta),
//   }))
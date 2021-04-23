import React from 'react';
import {Component} from "react";

export default class Borrar extends Component {
   
constructor(props){
        super(props);
        this.state = {
         item: [],
        }
    }
    componentDidMount(){ 
        fetch("https://randomuser.me/api/?results=10")
        .then(resource => resource.json())
        .then(data=> {
            this.setState({item: data.results});
            console.log(this.state.item)
        }) }

    BorrarTarjeta(item) {
        this.state.filter(item) 
    }

    render() {
        return (
            <button className="botonBorrar"  onClick = {this.props.onDelete.bind(this, this.props.uuid)} > Eliminar <i className="fas fa-trash"></i></button>
    );
  }
}

// this.setState((prevState) => ({
//     items: prevState.items.filter(item => item.idTarjeta !== idTarjeta),
//   }))
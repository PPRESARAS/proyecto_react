import React from 'react';
import Colapsable from './Colapsable.js';
import {Component} from "react";
import { getByDisplayValue } from '@testing-library/dom';


export default class ContactContainer extends Component  {

    constructor(props){
        super(props);
        this.state = {
            item: [],
            display: 'none',
            colorFondo: "white",
        }
    }

    componentDidMount(){ 
        fetch("https://randomuser.me/api/?results=10")
        .then(resource => resource.json())
        .then(data=> {
            this.setState({item: data.results});
            console.log(this.state.item)
        }) }

    AbrirColapsible(item){ 
        this.state.items.push({})
    }

    MouseEnter = () => {
        if(this.state.colorFondo==="white")
            this.setState({colorFondo:"lightblue"})
    }

    MouseLeave = () => {
        if(this.state.colorFondo==="lightblue")
            this.setState({colorFondo:"white"})
    }

    BorrarTarjeta = (displayNuevo) => {
        this.setState({display: displayNuevo})
    }

    render(item){
    return(
        <React.Fragment>
            <div className='tarjeta' style = {{ backgroundColor: this.state.colorFondo }} 
            onMouseEnter = {this.MouseEnter.bind(this, "grey")} 
            onMouseLeave = {this.MouseLeave.bind(this, "white")}>

            <li className="profile"><img src={this.props.image} alt='profile' className="profilefoto"/></li>
            <li>Nombre: {this.props.name}</li>
            <li>Apellido: {this.props.surname}</li>
            <li>Email:{this.props.email}</li>
            <li>Fecha de Nacimiento: {this.props.birthday}</li>
            <li>(Edad: {this.props.age})</li>
            <div className='botones'> 
                <button type="button" className="collapsible">Ver mas +</button>
                <Colapsable className='content' style= {this.state.display} />
                <script src="./js/collapse.js"></script>   
                <button className="botonBorrar" onClick = {this.BorrarTarjeta.bind(this, 'none')}>Eliminar<i className="fas fa-trash"></i></button>
            </div>



            
            </div>
        
        </React.Fragment>
    )}
}


// adress={item.location.street.name + item.location.street.number} city={ item.location.city} country={ item.location.country}  postalCode={item.location.postcode} registerDay= {item.registered.date} phone={ item.phone}
import React from 'react';
import {Component} from "react";

export default class Collapsible extends Component  {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <div className="content">
            <ul>
                <li className="collapsibleLi">Calle y Número: madero, 1414</li>
                <li className="collapsibleLi">Ciudad/Estado: Martines</li>
                <li className="collapsibleLi">País: Argentina</li>
                <li className="collapsibleLi">Código postal:B14</li>
                <li className="collapsibleLi">Fecha de Registro: 20/10/2020</li>
                <li className="collapsibleLi">Teléfono:1150380636</li>
            </ul>
        </div>) 
    }}

    // <li className="collapsibleLi">Calle y Número: {this.props.address}</li>
    // <li className="collapsibleLi">Ciudad/Estado:{this.props.city}</li>
    // <li className="collapsibleLi">País:{this.props.country}</li>
    // <li className="collapsibleLi">Código postal:{this.props.postalCode}</li>
    // <li className="collapsibleLi">Fecha de Registro:{this.props.registerDay}</li>
    // <li className="collapsibleLi">Teléfono:{this.props.phone}</li>
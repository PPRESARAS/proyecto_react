import React from 'react';
import {Component} from "react";

export default class Collapsible extends Component  {

    constructor(){
        super();
        this.title = React.createRef()
        this.desplegarInfo = this.desplegarInfo.bind(this)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=2")
          .then(res => res.json())
          .then(
            (data) => {
                console.log(data)
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

      desplegarInfo(){
        console.log(this.title)
        if(this.title.current.style.display === "none"){
            this.title.current.style.display = "block";
        } else{
            this.title.current.style.display = "none";
        }
      }
    render(){
        const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return(
        <div  >
        <button type="button" className="collapsible" onClick={this.desplegarInfo}>Ver mas<i class="fas fa-plus"></i></button>
        {items.map(item => (
        <div className="content" ref={this.title} style={{display:'none'}}>
                <div><span className="collapsibleLi">Calle y Número: </span>{item.location.street.name  + ', ' + item.location.street.number}</div>
                <div><span className="collapsibleLi">Ciudad/Estado: </span>{item.location.city}</div>
                <div> <span className="collapsibleLi">País: </span>{item.location.country}</div>
                <div><span className="collapsibleLi">Código postal: </span>{item.location.postcode}</div>
                <div><span className="collapsibleLi">Fecha de Registro: </span>{item.registered.date}</div>
                <div><span className="collapsibleLi">Teléfono: </span>{item.phone}</div>
                
                
               
                
                
             
           
        </div>
          ))}
        </div>) 
    }}}

    // <li className="collapsibleLi">Calle y Número: {this.props.address}</li>
    // <li className="collapsibleLi">Ciudad/Estado:{this.props.city}</li>
    // <li className="collapsibleLi">País:{this.props.country}</li>
    // <li className="collapsibleLi">Código postal:{this.props.postalCode}</li>
    // <li className="collapsibleLi">Fecha de Registro:{this.props.registerDay}</li>
    // <li className="collapsibleLi">Teléfono:{this.props.phone}</li>
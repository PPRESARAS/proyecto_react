import React from 'react';
import Item from "./Item"

const datosItem = [
    {logo:"fas fa-filter" ,
    title:"Filtros",
    ref: "#about"
    },
    {logo:"fas fa-user-plus" ,
    title:"Agregar contactos",
    ref:"#contact"
    }
]

function NavbarRight(){
    return(
        <div className="topnavRight">
            <ul>
                {
                    datosItem.map(function(unDato, idx){
                        return(
                        <li className="navLi" key={ idx }>
                            <Item dato={unDato} />
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavbarRight
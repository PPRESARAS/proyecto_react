import React from 'react';
import Item from "./Item"

function NavbarRight(){
    return(
        <div className="topnavRight">
            <ul>
                <Item logo="fas fa-filter" title="Filtros"/>
                <Item logo="fas fa-user-plus" title="Agregar contactos"/>
            </ul>
        </div>
    )
}

export default NavbarRight
import React from 'react';

function ItemMenu(){
    return(
        <React.Fragment>
                <li class="navLi"><a href="#about"><i class="fas fa-filter"></i>Filtros</a></li>
                <li class="navLi"><a href="#contact"><i class="fas fa-user-plus"></i>Agregar contacto</a></li>
            </React.Fragment>
    )
}

export default ItemMenu
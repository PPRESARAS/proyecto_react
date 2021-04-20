import React from 'react';

function ItemMenu(props){
    return(
        <React.Fragment>
                <a href={props.dato.ref}><i className={props.dato.logo}></i>{props.dato.title}</a>
        </React.Fragment>
    )
}

export default ItemMenu
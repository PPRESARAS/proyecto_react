import React from 'react';

function ItemMenu(props){
    return(
        <React.Fragment>
                <li className="navLi"><a href="#about"><i className={props.logo}></i>{props.title}</a></li>
                <li className="navLi"><a href="#contact"><i className={props.logo}></i>{props.title}</a></li>
        </React.Fragment>
    )
}

export default ItemMenu
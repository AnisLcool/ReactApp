import React from 'react';
import 'tachyons';
import './Card.css'


const searchBox = ({searchChange}) => {
    return (
        // style the div : style={{ width: "100%",background: "#6D62E3",margin:"auto" , position: "fixed" , "z-index": "99"}}
        <div className="pa2 tc">
        <input 
        className="pa3 ba b--green"
        style={{background:"#86C1ED", "borderRadius":"20px"}}
        type="search" 
        placeholder="search Champions..."
        onChange={searchChange}/>
        </div>);
}


export default searchBox;
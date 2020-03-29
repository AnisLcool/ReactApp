import React from 'react';

import Card from './Card.js';

const CardList = ({ champs }) => {
    // if(true){
    //     throw new Error('alert, there is an error')
    // }

    const cardCollection = champs.map((champ, index) => {
        return (
            <Card 
            key={index} 
            name={champ.name} 
            origin={champ.origin}
            classs={champ.class} 
            tier={champ.tier}
             />
        )
    })
    return (
        <div>
         {cardCollection}
        </div>);

}

export default CardList;
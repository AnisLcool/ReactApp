import React from 'react';
import './Card.css';
import 'tachyons';

const Card_Component = ({name, origin, classs, tier}) => {
    return (
        <div className="galactic dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={require(`/${name.toLowerCase()}.jpg`)} alt="lol_champ" width="200px" height="340px"/>

            <div>
                <h2>{name}</h2>
                <p className="origin">Origin ~ {origin}</p>
                <p className="class">Class ~ {classs}</p>
                <p className="tier">Tier ~ {tier}</p>
            </div>
        </div>
    );
}
export default Card_Component;
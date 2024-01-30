import React from 'react';

function Featurebox(props) { 
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.img} alt={props.altText || 'Feature image'} />
            </div>
            <div className="a-b-text">
                <h2>{props.title}</h2>
                <p>{props.description || 'Lorem ipsum dolor sit amet consectetur adipisicing.'}</p>
            </div>
        </div>
    );
}

export default Featurebox;

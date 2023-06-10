import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img className='card--img' src={props.image} alt="Card" />
            <div className="card-content">
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
            </div>
        </div>
    );
}
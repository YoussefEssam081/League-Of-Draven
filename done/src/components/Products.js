

import React from "react";

export default function Product(props) {
    return (
      <div className="mani-AllText">
        <img className="main--img" src={props.img} />
        <h1 className="main--name">{props.name}</h1>
        <h3 className="main--title">{props.title}</h3>
        <h4 className="main-advaice">{props.advice}</h4>
        <h4 className="main-role">{props.role}</h4>
        <h4 className="main--regoin">{props.region}</h4>
        <img className="first-letter-large" src={props.icon} />
        <p className="main--stpory">{props.story}</p>
      </div>
    );
  }















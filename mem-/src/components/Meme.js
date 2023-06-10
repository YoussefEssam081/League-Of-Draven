
import React from "react";

export default function Meme() {
  return (
    <div className="main-meme">
      <div className="form">
        <input type="text" placeholder="top text" className="form--inputs" />
        <input type="text" placeholder="bottom text" className="form--inputs" />
        <button className="fomr--botton">Get a new meme image</button>
      </div>
    </div>
  );
}

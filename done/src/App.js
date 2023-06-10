import React from 'react';
import './App.css';
import JokeDate from './components/JokeDate';
import Product from './components/Products';
import NavBar from './components/NavBar'
import NOTMAIN from './components/NotMain';
import AfterMain from './components/AfterMain0';



export default function App() {
  const JokeElments = JokeDate.map(data => (
    <Product  {...data} />
  ));

  return (
    <div>
      <NavBar />
      <NOTMAIN/>
      <div className="main--body">{JokeElments}</div>
      <AfterMain/>
    </div>
  );
}



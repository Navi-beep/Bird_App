import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Birddata from './components/birddata'
import Spacefacts from './components/space';
import {useState} from 'react'



function App(props) {
  return (
    <>
    <Navbar/>
    <div className="row">
    <img src={logo} className="App-logo" alt="logo" />
    </div>
    <Birddata/>
    <Spacefacts/>
    </>
  );
}

export default App;

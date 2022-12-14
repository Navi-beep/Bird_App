import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Birddata from './components/birddata'
import Spacefacts from './components/space';
import Cat from './components/cat';
import {Routes, Route} from 'react-router-dom'



function App(props) {
  return (
    <>
    <Navbar/>
    <div className="row">
    <img src={logo} className="App-logo" alt="logo" />
    <Routes>
    <Route path='/birddata' element={<Birddata/>} /> 
    <Route path='/cat' element={<Cat/>} />
    <Route path='/space' element={<Spacefacts/>} />
     
    
    </Routes>


    </div>

    
    
    </>
  );
}

export default App;

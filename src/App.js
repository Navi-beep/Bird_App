import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Birddata from './components/birddata'



function App(props) {
  return (
    <>
    <Navbar/>
    <div className="row">
    <img src={logo} className="App-logo" alt="logo" />
    </div>
    <Birddata/>
    </>
  );
}

export default App;

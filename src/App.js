import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'


function App(props) {
  return (
    <>
    <Navbar/>
    <div className="row">
    <img src={logo} className="App-logo" alt="logo" />
    </div>
    </>
  );
}

export default App;

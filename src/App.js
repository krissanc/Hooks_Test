import './App.css';
import image from './NewYork.png';
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="City">

      <Navbar className="Navbar" />

      <div> <img src={image} alt="" /> </div>

    </div>
  );
}

export default App;

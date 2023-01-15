import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
        </Navbar>
        <Routes>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Summary from './Summary';
import Notfound from './Notfound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/:x' element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;

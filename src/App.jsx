import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { AddCity } from './components/AddCity';
import { AddCountry } from './components/AddCountry';
import { Home } from './components/Home';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div>
        <button onClick={()=>{navigate('/')}}>Home</button>
        <button onClick={()=>{navigate('/add-country')}}>add country</button>
        <button onClick={()=>{navigate('/add-city')}}>add city</button>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-country' element={<AddCountry/>}/>
        <Route path='/add-city' element={<AddCity/>} />
      </Routes>
    </div>
  );
}

export default App;

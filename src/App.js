import './App.css';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Home from './componets/home';
import Celsius from './componets/celsius';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/celsius' element={<Celsius/>}/>


        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;

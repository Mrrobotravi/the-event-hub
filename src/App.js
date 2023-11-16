import './App.css';
import Appbar from './Components/Appbar/Appbar';
import Login from './Components/Registration/Login';
import Signup from './Components/Registration/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Appbar/> 
      <Routes>
   <Route  path='/' element={ <Home/> }/>
   <Route  path='/login' element={ <Login/>}/>
   <Route  path='/signup' element={<Signup/>}/>
 </Routes>
    </>
  );
}

export default App;

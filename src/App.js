import './App.css';
import Appbar from './Components/Appbar/Appbar';
import Login from './Components/Registration/Login';
import Signup from './Components/Registration/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Update from './Components/CreateEvent/Update';
import EventHost from './Components/CreateEvent/EventHost';
import EventWall from './Components/EventWall/EventWall';
import Interested from './Components/Interested/Interested';
import Demoin from './Components/Interested/Demoin';
import Footer from './Components/Appbar/Footer';


function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/eventhost' element={<EventHost />} />
        <Route path='/interested' element={<Interested />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/eventwall' element={<EventWall />} />
        <Route path='/demoin' element={<Demoin/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

// Run jshon server with is code => npx json-server --watch db.json --port 3004
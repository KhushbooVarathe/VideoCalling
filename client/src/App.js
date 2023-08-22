import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './authentication/Login';
import Register from './authentication/Register';
import Privatecomp from './authentication/Privatecomp';
function App() {
  return (
    <div className="App">
     <h1>WELCOME TO OUR VIDEO CHAT WEBSITE</h1>
     <Routes>
      <Route element={<Privatecomp/>} >

     
      {/* <Route path='/' element={<Home/>}/> */}
      </Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
    </div>
  );
}

export default App;

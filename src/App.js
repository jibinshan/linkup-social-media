import Login from './login&signup/Login';
import Signup from './login&signup/Signup';
import Home from './Home/Home';
import Search from './Search/Search';
import Add from './Add-post/Add';
import Profile from './profile/Profile';
import Islogin from './islogin/Islogin';
import { Route,Routes } from 'react-router';
import Profilephoto from './profile/Profilephoto';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Islogin/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profilephoto' element={<Profilephoto/>}/>
        </Routes>
      
    </div>
  );
}

export default App;

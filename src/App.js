import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Recordvideo from './Compontents/Recordvideo/Recordvideo';
import Login from './Compontents/Login/Login';
import Dashboard from './Compontents/Dashboard/Dashboard';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  // const signUserOut = () => {
  //   signOut(auth).then(() => {
  //     localStorage.clear();
  //     setIsAuth(false);
  //     window.location.pathname = "/";
  //   });
  // };


  return (

    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/Recordvideo' element={<Recordvideo/>} />
          <Route path='/Dashboard' element={<Dashboard setIsAuth={setIsAuth} isAuth={isAuth} />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
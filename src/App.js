import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Recordvideo from './Compontents/Recordvideo/Recordvideo';
import Login from './Compontents/Login/Login';
import Dashboard from './Compontents/Dashboard/Dashboard';
import UploadImage from './Compontents/UploadImage/UploadImage';
import Sample from './Compontents/sample/Sample';
import Newtest from './Compontents/Newtest';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  // const signUserOut = () => {
  //   signOut(auth).then(() => {
  //     localStorage.clear();
  //     setIsAuth(false);
  //     window.location.pathname = "/Dashboard";
  //   });
  // };


  return (

    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/Recordvideo' element={<Recordvideo/>} />
          <Route path='/Dashboard' element={<Dashboard setIsAuth={setIsAuth} isAuth={isAuth} />} />
          <Route path='/UploadImage' element={<UploadImage/>}/>
          <Route path= '/Sale' element={<Sample/>}/>
          <Route path= '/Newtest' element={<Newtest/>}/>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
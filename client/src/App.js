
import './App.css';
import Homepage from './component/homepage/homepage';
import Login from './component/login/Login';
import Register from './component/register/Register';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({})
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'> 
            {
              user && user._id ? <Homepage/> : <Login/>
            }
          </Route>
          <Route  path='/login'>
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route  path='/register'>
            <Register/>
          </Route>
        </Routes>
      </Router>
     {/* <Homepage/> */}
      
      {/* <Register/> */}
    </div>
  );
}

export default App;

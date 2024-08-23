import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Auth/Login';
import Verifyemail from './components/Auth/Verifyemail';
import EditProfile from './components/EditProfile';
import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import axios from 'axios';
import Home from './components/Home/Home'
import Wallet from './components/wallet/Wallet';
import Friends from './components/Friends/Friends';
import Tasks from './components/Tasks/Tasks';
import News from './components/News/News'

function App() {
  // Loader state
  const [loading, setLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 5000);
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    async function load() {
      const response = await axios.get(`${process.env.REACT_APP_API}`);
      console.log(response);
    }
    load();
  }, [])

  return (
    <>
      <Router>
        <div className="App">
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route key="Login" path='/' exact element={<Login />} />
              <Route path="/verify/:email" element={<Verifyemail />} />
              <Route path='/editprofile' exact element={<EditProfile />} />
              <Route path='/home' exact element={<Home></Home>} />
              <Route path="/wallet" element={<Wallet></Wallet>} />
              <Route path='/friends' exact element={<Friends></Friends>} />
              <Route path='/tasks' exact element={<Tasks></Tasks>} />
              <Route path='/news' exact element={<News></News>} />
            </Routes>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;

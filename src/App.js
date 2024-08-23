import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Verifyemail from './components/Verifyemail';
import EditProfile from './components/EditProfile';
import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';

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

  return (
    <>
      <Router>
        <div className="App">
          {/* Show loader if loading is true */}
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route key="Home" path='/' exact element={<Home />} />
              <Route path="/verify/:email" element={<Verifyemail />} />
              <Route path='/editprofile' exact element={<EditProfile />} />
            </Routes>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;


import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Verifyemail from './components/Verifyemail';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <>
    <Router>
      <div className="App">

        <Routes>
          <Route key="Home" path='/' exact element={<Home></Home>} />
          <Route path="/verify/:email" element={<Verifyemail />} />
          <Route path='/editprofile' exact element={<EditProfile></EditProfile>}></Route>
          {/* <Route></Route> */}
        </Routes>
      </div>
    </Router>
  </>
   
  );
}

export default App;

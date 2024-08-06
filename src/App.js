
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Verifyemail from './components/Verifyemail';

function App() {
  return (
    <>
    <Router>
      <div className="App">

        <Routes>
          <Route key="Home" path='/' exact element={<Home></Home>} />
          <Route path='/verify' exact element={<Verifyemail></Verifyemail>}></Route>
          {/* <Route path='/sample' exact element={<Sample></Sample>}></Route> */}
          {/* <Route></Route> */}
        </Routes>
      </div>
    </Router>
  </>
   
  );
}

export default App;

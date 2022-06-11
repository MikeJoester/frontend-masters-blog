import './App.css';
import {Navbar} from './components';

import {
  Home, 
  Login, 
  Register, 
  UserHome,
  SearchPage,
} from './pages';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/UserHome" element={<UserHome/>}/>
        <Route path="/SearchPage" element={<SearchPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

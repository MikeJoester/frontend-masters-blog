import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;

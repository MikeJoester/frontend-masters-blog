import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Login/> */}
      {/* <Register/> */}
      <Footer/>
    </div>
  );
}

export default App;

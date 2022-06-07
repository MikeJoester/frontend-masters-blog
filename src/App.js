import './App.css';
import {Navbar} from './components';
import {Home, Login, Register, UserHome} from './pages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserHome/>
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;

import './App.css';
import {Navbar} from './components';

import {
  Home,
  Login,
  Register,
  UserHome,
  SearchPage,
  CategoryPage,
  CSSPage,
  JSPage,
  ReactPage,
  WritingPage,
  UserProfile,
  EditPage,
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
        <Route path="/CategoryPage" element={<CategoryPage/>}/>
        <Route path="/CSSPage" element={<CSSPage/>}/>
        <Route path="/JSPage" element={<JSPage/>}/>
        <Route path="/ReactPage" element={<ReactPage/>}/>
        <Route path="/WritingPage" element={<WritingPage/>}/>
        <Route path="/UserProfile" element={<UserProfile/>}/>
        <Route path="/EditPage" element={<EditPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

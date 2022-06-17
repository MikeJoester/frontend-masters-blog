import './App.css';
import {useContext} from 'react';
import {Navbar} from './components';
import {Context} from './context/Context';

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
  Post,
} from './pages';

import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const user = useContext(Context);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
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
        <Route path="/post/:postId" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;

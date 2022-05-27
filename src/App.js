
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Media from './components/Media';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React , {useState} from 'react';
import Search from './components/Search';

function App() {
  const [searchtext, setsearchtext] = useState('')
  const [searchstate, setsearchstate] = useState(false)
  const appCallback= (navSearchData) => {
    setsearchtext(navSearchData) ;
    setsearchstate(true) ;
  }
  const resetSearchState = () => {
    setsearchstate(false) ;
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<><Navbar/> <Carousel/> <Media key="all" resetSearchState={resetSearchState} searchstate={searchstate} searchtext={searchtext} type="all"/></>}/>
          <Route path="/movies"  element={<><Navbar/> <Carousel/><Media key="movies" resetSearchState={resetSearchState} searchstate={searchstate} searchtext={searchtext} type="movie"/></>}/>
          <Route path="/tv"  element={<><Navbar/> <Carousel/><Media key="tv" resetSearchState={resetSearchState} searchstate={searchstate} searchtext={searchtext} type="tv"/></>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;

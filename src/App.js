import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { 
  Navbar, 
  Toast,
  Home,
  Login,
  Signup,
  VideoListingPage,
  WatchLater,
  AllPlaylistPage,
  History
} from "./index"

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"         exact element={<Home/>} />
          <Route path="/login"          element={<Login/>} />
          <Route path="/signup"         element={<Signup/>} />
          <Route path="/explore"        element={<VideoListingPage/>} />
          <Route path="/watch-later"    element={<WatchLater/>} />
          <Route path="/playlist"       element={<AllPlaylistPage/>} />
          <Route path="/history"        element={<History/>} />
        </Routes>
        <Toast position="bottom-right"/>
      </div>
    </Router>
  );
}

export default App;
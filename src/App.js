import './App.css';
import Navbar from './components/navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile />}  />
      </Routes>
    </>
  );
}

export default App;

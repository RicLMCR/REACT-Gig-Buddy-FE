import './App.css';

import Navbar from './components/navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import {useState, useEffect} from "react"
import {fetchEvents, fetchArtist} from "./utils"

import {EventList} from "./components/eventList/eventList"
function App() {


  const [value, setValue] = useState("");
  const [apiData, setApiData] = useState([])
const [artists, setArtists] =useState([])
const [displayEvent, setDisplayEvent] =useState ([])


  useEffect (() => {
    fetchEvents(setApiData)
    // fetchArtist(setArtists)
  }, [])

  return (

    <>
      <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} />
  
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile />}  />
        <Route path="/event" element={ <EventList  displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} />}  />
      </Routes>
    </>
  );
}

export default App;

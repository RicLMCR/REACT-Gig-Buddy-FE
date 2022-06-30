import './App.css';
import { useEffect, useState} from 'react';
import BuddySwipe from './components/buddySwipe';
import { logInUser } from './utils/fetchReq';
import TestFunc from './components/test';

import Navbar from './components/navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import {fetchEvents, fetchArtist} from "./utils/fetchReq"
import {SearchBar} from "./components/search/search" 
import {EventList} from "./components/eventList/eventList"
import { LogorSign } from './components/LogorSign/LogorSign';


function App() {

 const [value, setValue] = useState("");
 const [apiData, setApiData] = useState([])
const [artists, setArtists] =useState([])
const [displayEvent, setDisplayEvent] =useState ([])

  useEffect (() => {
    fetchEvents(setApiData)
  }, [])

  try {

  return (
    <div className="App">
      <LogorSign/>
    <>
      <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile />}  />
      </Routes>
    </>

  
        <h1>Gig Buddy</h1>
        <BuddySwipe/>
        <TestFunc/>
        <button onClick={logInUser}>Log In</button>
      </div>

  );
  } catch (error) {
    console.log(error);
  }
}


export default App;

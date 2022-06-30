import './App.css';
import { useEffect, useState} from 'react';
import { logInUser } from './utils/fetchReq';
import { Routes, Route } from 'react-router-dom';

import TestFunc from './components/test';
import BuddySwipe from './components/buddySwipe';
import Navbar from './components/navbar/NavBar';
import {SearchBar} from "./components/search/search" ;
import {EventList} from "./components/eventList/eventList";

import {fetchEvents, fetchArtist} from "./utils/fetchReq"

import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

import { LogorSign } from './components/LogorSign/LogorSign';


function App() {

 const [value, setValue] = useState("");
 const [apiData, setApiData] = useState([])

const [displayEvent, setDisplayEvent] =useState ([])

  useEffect (() => {
    fetchEvents(setApiData)
  }, [])

  try {

  return (
    <div className="App">
      
    <>
      <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile />}  />
        <Route path="/login" element={ <LogorSign />}  />
        <Route path="/event" element={ <EventList displayEvent={displayEvent} />}  />
       </Routes>
    </>

        {/* <h1>Gig Buddy</h1>
        <BuddySwipe/>
        <TestFunc/>
        <button onClick={logInUser}>Log In</button> */}
      </div>

  );
  } catch (error) {
    console.log(error);
  }
}


export default App;

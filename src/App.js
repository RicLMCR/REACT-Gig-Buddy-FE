import './App.css';
import { useEffect, useState} from 'react';
import BuddySwipe from './components/buddySwipe';

import Navbar from './components/navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import {useState, useEffect} from "react"
import {fetchEvents, fetchArtist} from "./utils"
import {SearchBar} from "./components/search/search" 
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
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile />}  />
      </Routes>
    </>

    <div className="App">
      <h1>Gig Buddy</h1>
      <div className=''>
      <SearchBar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} ></SearchBar>
      <EventList   displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} ></EventList>
    </div>
    </div>
  );

  try {
    return (
      <div className="App">
        <h1>Gig Buddy</h1>
        <BuddySwipe/>
      </div>
    );
  } catch (error) 
  }
}

export default App;

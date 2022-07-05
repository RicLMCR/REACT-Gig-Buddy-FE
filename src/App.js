import './App.css';
import { useEffect, useState} from 'react';
import { logInUser } from './utils/fetchReq';
import { Routes, Route } from 'react-router-dom';


import BuddySwipe from './pages/buddySwipe/buddySwipe';
import Navbar from './components/navbar/NavBar';
import {SearchBar} from "./components/search/search" ;
import {EventList} from "./components/eventList/eventList";

import {fetchEvents, fetchArtist, trendingEvent, fetchAttendees} from "./utils/fetchReq"

import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile/Profile';
import { PopularEvents } from './components/popularEvents/popularEvents';
import { LogOrSign, LogOut, DeleteUser } from './components/LogorSign/LogorSign';

function App() {
  
 const [value, setValue] = useState("");
 const [apiData, setApiData] = useState([])
 const [trendingEvents, setTrendingEvents] = useState([])
const [displayEvent, setDisplayEvent] =useState ([])

const [user, setUser]=useState();


  useEffect (() => {
    fetchEvents(setApiData)
    trendingEvent(setTrendingEvents)
  }, [])

  try {

  return (
    <div className="App">
    <>
      {/* <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} /> */}
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile />}  />
        {/* <Route path="/login" element={ <LogOrSign />}  /> */}
        <Route path="/event" element={ <EventList displayEvent={displayEvent} />}  />
        <Route path="/buddySwipe" element={ <BuddySwipe />} />
        <Route path="/popular" element={ <PopularEvents setDisplayEvent={setDisplayEvent} setValue={setValue} trendingEvents={trendingEvents}/>} />
       </Routes>
       
    </>



  
      </div>

  );
  } catch (error) {
    console.log(error);
  }
}


export default App;



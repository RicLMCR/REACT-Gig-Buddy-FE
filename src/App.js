import './App.css';
import { useEffect, useState} from 'react';
import { logInUser } from './utils/fetchReq';
import { Routes, Route } from 'react-router-dom';
import { LogOrSign } from './pages/LogorSign/LogorSign';

import BuddySwipe from './pages/buddySwipe/buddySwipe';
import Navbar from './components/navbar/NavBar';
import {SearchBar} from "./components/search/search" ;
import {EventList} from "./components/eventList/eventList";

import {fetchEvents, fetchArtist, trendingEvent, fetchAttendees, createUser} from "./utils/fetchReq"


import Messages from './pages/Messages';
import Profile from './pages/Profile/Profile';
import { PopularEvents } from './components/popularEvents/popularEvents';
import { findAllUsers } from './utils/fetchReq';
import ReactDOM from "react-dom/client";
import {EventIdPass} from './utils/EventIDPass';

function App() {
  
 const [value, setValue] = useState("");
 const [apiData, setApiData] = useState([])
 const [trendingEvents, setTrendingEvents] = useState([])
const [displayEvent, setDisplayEvent] =useState ([])
const [allUsers, setAllUsers] = useState([])
const [user, setUser]=useState({
  username:"",
  token:"",
  imageUrl:"",
  eventsAttending:[],
  buddyRequests: []
});

const [imageUrl, setImageUrl] = useState("");

const [eventId, setEventId] = useState ("")

// const [eventIdPass, setEventIdPass]=useState()


  useEffect (() => {
    fetchEvents(setApiData)
    trendingEvent(setTrendingEvents)
    findAllUsers(setAllUsers)
   console.log("all users", trendingEvents)

//    setEventIdPass(eventId)
// console.log("App: EventIdPass is:", eventIdPass)

    
  }, [])

  try {
  
  return (
    
    <div className="App">

    <EventIdPass.Provider value={eventId}>
   {user.token ?
   <>
   <Navbar imageUrl={imageUrl} displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData}  user={user} setUser={setUser} />
    <Routes>
        <Route path="/" element={<PopularEvents setDisplayEvent={setDisplayEvent} setValue={setValue} trendingEvents={trendingEvents}/>} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile imageUrl={imageUrl} setImageUrl={setImageUrl} user={user} trendingEvents={trendingEvents} apiData={apiData}/>}  />

        <Route path="/event" element={ <EventList setEventId={setEventId} eventId={eventId} displayEvent={displayEvent} user={user} />}  />
        <Route path="/buddySwipe" element={ <BuddySwipe user={user}  imageUrl= {imageUrl} allUsers={allUsers} trendingEvents={trendingEvents}/>} />
        {/* setEventId={setEventId} eventId={eventId} */}
        <Route path="/popular" element={ <PopularEvents setDisplayEvent={setDisplayEvent} setValue={setValue} trendingEvents={trendingEvents}/>} />
      
       </Routes>
   </>
  
   :
   <LogOrSign user={user} setUser={setUser} />
     
       }
    </EventIdPass.Provider>


      </div>

  );
  } catch (error) {
    console.log(error);
  }
}


export default App;



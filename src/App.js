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

import ReactDOM from "react-dom/client";
import {EventIdPass} from './utils/EventIDPass';
import { BuddyList } from './components/buddyList/BuddyList';

function App() {
  
 const [value, setValue] = useState("");
 const [apiData, setApiData] = useState([])
 const [trendingEvents, setTrendingEvents] = useState([])
const [displayEvent, setDisplayEvent] =useState ([])

const [user, setUser]=useState({
  username:"",
  token:"",
  imageUrl:"",
  eventsAttending:[],
  buddyRequests: []
});
console.log("App: user is:", user)

const [eventId, setEventId] = useState ("")
console.log("App: EventId is:", eventId)
// const [eventIdPass, setEventIdPass]=useState()


  useEffect (() => {
    fetchEvents(setApiData)
    trendingEvent(setTrendingEvents)

   console.log("eventai", apiData.id)

//    setEventIdPass(eventId)
// console.log("App: EventIdPass is:", eventIdPass)

    
  }, [])

  try {
  
  return (
    
    <div className="App">

    <EventIdPass.Provider value={eventId}>
      <BuddyList user={user} setUser={setUser} />
   {user.token ?<>
   <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData}  user={user} />
    <Routes>
        <Route path="/" element={<PopularEvents setDisplayEvent={setDisplayEvent} setValue={setValue} trendingEvents={trendingEvents}/>} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile user={user} trendingEvents={trendingEvents} apiData={apiData}/>}  />

        <Route path="/event" element={ <EventList setEventId={setEventId} eventId={eventId} displayEvent={displayEvent} user={user} />}  />
        <Route path="/buddySwipe" element={ <BuddySwipe user={user}  />} />
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



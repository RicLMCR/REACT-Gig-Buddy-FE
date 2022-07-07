import './App.css';
import { useEffect, useState} from 'react';
import { logInUser } from './utils/fetchReq';
import { Routes, Route } from 'react-router-dom';
import { LogOrSign } from './pages/LogorSign/LogorSign';

import BuddySwipe from './pages/buddySwipe/buddySwipe';
import Navbar from './components/navbar/NavBar';
import {SearchBar} from "./components/search/search" ;
import {EventList} from "./components/eventList/eventList";

import {fetchEvents, fetchArtist, trendingEvent, fetchAttendees} from "./utils/fetchReq"


import Messages from './pages/Messages';
import Profile from './pages/Profile/Profile';
import { PopularEvents } from './components/popularEvents/popularEvents';

import ReactDOM from "react-dom/client";

function App() {
  
 const [value, setValue] = useState("");
 const [apiData, setApiData] = useState([])
 const [trendingEvents, setTrendingEvents] = useState([])
const [displayEvent, setDisplayEvent] =useState ([])
const [user, setUser]=useState({
  username:"",
  token:"",
  imageUrl:"",
  eventsAttending:[]
});
console.log(user)



  useEffect (() => {
    fetchEvents(setApiData)
    trendingEvent(setTrendingEvents)
   console.log("eventai", apiData.id)
    
  }, [])

  try {
  
  return (
    
    <div className="App">

    <>
   {user.token ?<>
   <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData}  user={user} />
    <Routes>
        <Route path="/" element={<PopularEvents setDisplayEvent={setDisplayEvent} setValue={setValue} trendingEvents={trendingEvents}/>} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile user={user} />}  />

        <Route path="/event" element={ <EventList displayEvent={displayEvent} user={user}/>}  />
        <Route path="/buddySwipe" element={ <BuddySwipe />} />
        <Route path="/popular" element={ <PopularEvents setDisplayEvent={setDisplayEvent} setValue={setValue} trendingEvents={trendingEvents}/>} />
      
       </Routes>
   </>
  
   :
   <LogOrSign user={user} setUser={setUser} />
     
       }
    </>


      </div>

  );
  } catch (error) {
    console.log(error);
  }
}


export default App;



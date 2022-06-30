import './App.css';
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
    // fetchEvents(setApiData)
    fetchArtist(setArtists)
  }, [])

  return (
    <div className="App">
      <h1>Gig Buddy</h1>
      <div className=''>
      <SearchBar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} ></SearchBar>
      <EventList   displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} ></EventList>
  
    </div>
    </div>
  );
}

export default App;

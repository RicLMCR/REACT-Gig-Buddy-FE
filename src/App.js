import './App.css';
import {useState, useEffect} from "react"
import {fetchEvents} from "./utils"
import {SearchBar} from "./components/search/search" 
function App() {

  const [value, setValue] = useState("");
  const [apiData, setApiData] = useState([])




  useEffect (() => {
    fetchEvents(setApiData)
    
  }, [])

  return (
    <div className="App">
      <h1>Gig Buddy</h1>
      <div className=''>
      <SearchBar value={value} setValue={setValue} apiData={apiData}></SearchBar>
    </div>
    </div>
  );
}

export default App;

import { SearchBar } from "../search/search"
import "./eventList.css"

export const EventList = ({value, setValue, apiData, setDisplayEvent, displayEvent}) => {

return ( 
<div className="event-list">
      {/* <SearchBar value={value} setValue={setValue} apiData={apiData} setDisplayEvent={setDisplayEvent} displayEvent={displayEvent}/> */}
    <div className="eventlist-container">

        {displayEvent.map((item, index) => {
return(
     <div key={index}>
 <h1>{item.name}</h1>
     </div>
)
        })}
        <img src="" alt="image" />
       
        <p>Listen Up Music proudly presents The Institutes with support from Anhedonia and Segarra at The Castle Hotel Manchester on Fri 16th September 2022</p>
        <p>2022-09-16</p>
        <p>"The Castle Hotel"</p>
        <div>Addres:66 Oldham Street</div>
        <div>Postcode:M4 1LE</div>
        <div>Town: Manchester</div>
  
   </div>
</div>
)
}
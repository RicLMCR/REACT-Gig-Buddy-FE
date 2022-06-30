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
 <h1>{item.eventname}</h1>
 <img src={item.largeimageurl} alt="image" />
 <p>{item.description}</p>
 <p>{item.date}</p>
 <p>{item.venuename}</p>
 <div>{item.address}</div>
        <div>{item.postcode}</div>
        <div>{item.town}</div>
     </div>
)
        })}
       
       
       
     
    

  
   </div>
</div>
)
}
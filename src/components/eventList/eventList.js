import { SearchBar } from "../search/search"
import "./eventList.css"
import { GoLocation } from "react-icons/go";
import { TbCalendarEvent } from "react-icons/tb";
import { createEvent, fetchAttendees } from "../../utils/fetchReq";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const EventList = ({value, setValue, apiData, setDisplayEvent, displayEvent}) => {
const user = {
    user: "sdsdsds"
}
const [attendees, setAttendees] = useState([])
const navigate = useNavigate()

const addEvent = async (item) => {
    createEvent(item, "Deivydas");
    const data = await fetchAttendees(item , setAttendees );
    
    const newArray = [...attendees, ...data.attendees]
    console.log("newArr", newArray)
    // setAttendees(newArray)
    setAttendees((attendees) => [...attendees, ...newArray])
    console.log( "attendees",attendees)
    navigate("/buddySwipe")
}

return ( 
<div className="event-list">
      {/* <SearchBar value={value} setValue={setValue} apiData={apiData} setDisplayEvent={setDisplayEvent} displayEvent={displayEvent}/> */}
    <div >

        {displayEvent.map((item, index) => {
return(
     <div className="eventlist-container" key={index}>
 <h1 className="event-title">{item.eventname}</h1>
 <img className="event-image" src={item.largeimageurl} alt="image" />
 <div className="event-description">{item.description}</div>
 <div className="event-date"><TbCalendarEvent color='red'/>{item.date}</div>
 <div className="event-location">
 <div>{item.venuename}</div>
 <div><GoLocation color='red'/>{item.address}</div>
        <div>{item.postcode}</div>
        <div> {item.town}</div>
        <button  onClick={()=>{addEvent(item.id)} }value={item.id}>{item.id} </button>
     </div></div>
)
        })}
       
       
       
     
    

  
   </div>
</div>
)
}
       
     
    

  

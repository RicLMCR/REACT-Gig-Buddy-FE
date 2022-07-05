import "./popularEvents.css"
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiFirstPage } from "react-icons/bi";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import Navbar from "../navbar/NavBar";


export const PopularEvents = ({trendingEvents, setDisplayEvent, setValue}) => {


const [pageNumbers,setPagenumbers]= useState(0)
const [listNumbers, setListNumbers] = useState ({
    larger: 4,
    less: 0,
})
// function to change pages for trending event on button click 
const pageChange= ( big, small, bigPage) => {
    setListNumbers( {...listNumbers, larger:big ,less:small}) 
    setPagenumbers(bigPage)
}
// on click event to navigate to event description page
const navigate = useNavigate()
const onSearch = (searchTerm, item) => {
  setDisplayEvent([item]);
  setValue(searchTerm);
  navigate("/event")
  setValue("")
};
return( 

<div className="pop-container">
        <h2>Popular events</h2>
    <h1>Live Events in Manchester</h1>
  
    <div className="pop-events">

{trendingEvents.map((item , index) => {

    return( 
    <div className="pop-events-big-image" key= {index}>
        
        <img  src={item.largeimageurl}  alt="" height={250}  />
      
 <div className="pop-events-big-image-description"> 
 
 <div>
    <div className="date-time"> {`${item.date} Doors open: ${item.openingtimes.doorsopen}`}</div>
    <div className="big-image-event-name">{item.eventname}</div>
</div>
<button  onClick={() => onSearch(item.eventname, item)} className="pop-events-btn"><AiOutlineArrowRight size={20} color="white"/></button>
 </div>
 {/* <div className="heart-icon-big"><IoHeartOutline size={25} color="white"/></div>  */}
    </div>
    )
   
})[`${pageNumbers}`]}
<div className="small-image-list-flex" >
{trendingEvents.filter((item, index) => index < `${listNumbers.larger}` && index  >`${listNumbers.less}`).map((item , index) => {

return( 
<div className="pop-events-small-image"  key= {index}>
    <img className="pop-events-small-image" src={item.largeimageurl}  alt=" image" />
    <button  onClick={() => onSearch(item.eventname, item)} className="pop-events-btn-small"><AiOutlineArrowRight size={20} color="white"/></button>

    <div className="date-name-flex">
    <div className="pop-event-time">{`${item.date} Doors open: ${item.openingtimes.doorsopen}`}</div>
<h1 className="pop-event-title">{item.eventname}</h1>


</div>
</div>
)
})
}

</div>

    </div><div className="event-buttons">
    <button onClick={()=> pageChange (4, 0, 0) }className="next-btn">1</button>
<button onClick={()=> pageChange (8, 4, 4)} className="next-btn">2</button>
<button onClick={()=> pageChange (12, 8, 8)} className="next-btn">3</button>
<button onClick={()=> pageChange (16, 12, 12)} className="next-btn">4</button>
<button onClick={()=> pageChange (20, 16, 16)} className="next-btn">5</button></div>
</div>

)
}
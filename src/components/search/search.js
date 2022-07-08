
import "./search.css"
import {useState, useEffect} from "react"
import{BiSearchAlt} from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { TbCalendarEvent } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import  {InfoBox} from "../InfoBox/InfoBoxFunctional"
export const SearchBar = ({apiData, setValue, value, setDisplayEvent}) => {
  let [showInfo1, setShowInfo1] = useState(false);
        const onChange = (event) => {
          setValue(event.target.value);
          setShowInfo1(true)
        };
      const navigate = useNavigate()
        const onSearch = (searchTerm, item) => {
          setDisplayEvent([item]);
          setValue(searchTerm);
          navigate("/event")
          setValue("")
        
        };
      
        return (
          <div className="search">
            <div className="search-container">
              <div className="search-inner">
             
              <InfoBox show={showInfo1} onClickOutside={() => {setShowInfo1(false)}} />
              <BiSearchAlt size={25} className='search-icon' />
                <input className="search-input" type="text"  placeholder="Search for events"value={value} onChange={onChange} />
                {/* <button onClick={() => onSearch(value)}> Search </button> */}
              </div>
             {showInfo1 ?
                          <div className="dropdown"> {apiData.filter((item) => {
                            const searchTerm = value.toLowerCase();
                             const fullName = item.eventname.toLowerCase();

       return (
         searchTerm &&
         fullName.startsWith(searchTerm) &&
         fullName !== searchTerm
       );
     })
     .slice(0, 10)
     .map((item, index) => (
       <div 
         onClick={() => onSearch(item.eventname, item)}
         className="dropdown-row"
         key={index}
       >
        <img  className="dropdown-logo" src={item.largeimageurl} alt="logo"  />
        <div className="dropdown-text-flex">
         <h1 className="dropdown-title">{item.eventname}</h1>  
         <div className="search-date"><TbCalendarEvent/>{item.date}</div> 
         <div className="search-date"><GoLocation></GoLocation> {item.venuename}</div> 
         {/* <div className="search-venue">{item.venue.name}</div>  */}
         </div>
       </div>
     ))}
 </div> : "" } 
             

            </div>
          </div>
          
        );
      }
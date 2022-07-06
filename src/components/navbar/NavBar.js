//Importing the CSS-file, with the react icons
import './navbar.css';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';

import { useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { TbCalendarEvent } from "react-icons/tb";

export const Navbar = ({setDisplayEvent, value, setValue, apiData}) => {

    const onChange = (event) => {
        setValue(event.target.value);
      };
    const navigate = useNavigate()
      const onSearch = (searchTerm, item) => {
        setDisplayEvent([item]);
        setValue(searchTerm);
        navigate("/event")
        setValue("")
      };





    return (
    <header className='navbar-header'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/"><h1 className='gigbuddy-title'>Gig Buddy</h1></Link>



            {/* Basic input bar */}
            <div className="search">
            <div className="search-container">
              <div className="search-inner">
              <BiSearchAlt size={25} className='search-icon' />
                <input className="search-input" type="text"  placeholder="Search for events"value={value} onChange={onChange} />
                {/* <button onClick={() => onSearch(value)}> Search </button> */}
              </div>
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
              </div>
            </div>
          </div>
        <nav className='navbar'>
            <ul className='navbar-links'>
                {/* Calling the message icon from React icons */}
                <li><Link to="/messages"><MdMessage size={40} className='message-icon' color='white' /></Link></li>
                {/* Placeholder image that will be the user profile picture */}
                <li><Link to="/profile"><img src='https://www.fillmurray.com/40/40' className='nav-profile-pic' alt='Murray' /></Link></li>
            </ul>
            <button className='logout-btn'>Log Out</button>
        </nav>
    </header>
    );
}

export default Navbar;
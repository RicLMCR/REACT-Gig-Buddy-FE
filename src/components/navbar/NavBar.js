//Importing the CSS-file, with the react icons
import './navbar.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import { SearchBar } from '../search/search';

const Navbar = ({displayEvent, setDisplayEvent, value, setValue, apiData}) => {

    useEffect(() => {
        // checkSwipes();
    },[])


    return (
    <header className='navbar-header'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/"><h1 className='gigbuddy-title'>Gig Buddy</h1></Link>




            {/* Basic input bar */}
            <SearchBar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData}/>
        <nav className='navbar'>
            <ul className='navbar-links'>
                {/* Calling the message icon from React icons */}
                <li><Link to="/messages"><MdMessage size={40} className='message-icon' color='white' /></Link></li>
                {/* Placeholder image that will be the user profile picture */}
                <li><Link to="/profile"><img src='https://www.fillmurray.com/40/40' className='nav-profile-pic' alt='Murray' /></Link></li>
                <li>Link to drop down list showing people who like you</li>
            </ul>
            <button className='logout-btn'>Log Out</button>
        </nav>
    </header>
    );
}

export default Navbar;
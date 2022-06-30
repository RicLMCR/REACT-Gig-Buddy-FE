//Importing the CSS-file, with the react icons
import './navbar.css';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import { SearchBar } from '../search/search';

const Navbar = ({displayEvent, setDisplayEvent, value, setValue, apiData}) => {
    return (
    <header className='Navbar-header'>
            <h1><Link style={{textDecoration: 'none', color: 'white'}} to="/">Gig Buddy</Link></h1>



            {/* Basic input bar */}
            <SearchBar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData}/>
        <nav>
            <ul>
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
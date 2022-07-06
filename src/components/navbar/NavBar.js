//Importing the CSS-file, with the react icons
import './navbar.css';
import { Link , Outlet} from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import { SearchBar } from '../search/search';

export const Navbar = ({displayEvent, setDisplayEvent, value, setValue, apiData, setUser}) => {

    const submitHandler = (e)=>{
        e.preventDefault();
        setUser({
            username:"",
            token:"",
    });
    }

    return (<section>
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
            </ul>
            <button className='logout-btn' onClick={(e)=>submitHandler(e)}>Log Out</button>
        </nav>
    </header>
    <Outlet/>
    </section>
    );
}

// export default Navbar;
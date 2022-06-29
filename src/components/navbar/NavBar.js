import './navbar.css'
import { BiSearchAlt } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';


const Navbar = () => {
    return (
    <header>
            <h1>Gig Buddy</h1>
            <BiSearchAlt size={25} className='search-icon' />
            <input type='text' placeholder="Search" />
        <nav>
            <ul>
                <li><MdMessage className='message-icon' color='white' /></li>
                <li></li>
                <li><img src='https://www.fillmurray.com/40/40' className='nav-profile-pic' alt='Murray' /></li>
            </ul>
            <button className='logout-btn'>Log Out</button>
        </nav>
    </header>
    );
}

export default Navbar;
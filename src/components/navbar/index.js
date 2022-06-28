import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-flex'>
                <section className='nav-left'>
                    <h1><span>Gig Buddy</span></h1>
                    <input type='text' placeholder="Search" />
                </section>
                <div className='nav-right'>
                    <ul>
                        <li>Messages</li>
                        <li>Profile</li>
                        <li><img src='https://www.fillmurray.com/40/40' className='nav-profile-pic' alt='Murray' /></li>
                    </ul>
                    <button className='logout-btn'>Log Out</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
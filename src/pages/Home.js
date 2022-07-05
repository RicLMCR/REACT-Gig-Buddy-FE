import React from 'react';
import { useState } from 'react';
import './index.css'
import { LogOrSign, LogOut, DeleteUser } from './LogorSign/LogorSign';
// import Navbar from '../components/navbar/NavBar';

const Home = ({imageUrl, setImageUrl}) => {

    const [value, setValue] = useState("");
    const [displayEvent, setDisplayEvent] =useState ([])
    const [apiData, setApiData] = useState([])
    const [user, setUser]=useState();
    
return (
    <>
    {/* <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} /> */}
    <h1>Home Page</h1>
    <img src = {imageUrl} alt="" width="400px" height="250px"/> {/* test - imageurl from db works */}

    {user ? <div>
                <h1>Gig Buddy</h1>
                <h1>{user}</h1>
                <DeleteUser user={user} setUser={setUser}/>
                <LogOut user={user} setUser={setUser}/>
                {/* <BuddySwipe/> */}
            </div>
            :
                <LogOrSign imageUrl={imageUrl} setImageUrl={setImageUrl}  user={user} setUser={setUser}/>
        }
    </>
)
}

export default Home;
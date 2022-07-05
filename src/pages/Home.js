import React from 'react';
import { useState } from 'react';
import './index.css'
import { LogOrSign, LogOut, DeleteUser } from './LogorSign/LogorSign';
import { TestFetch } from './TestFetch/TestFetch';
// import Navbar from '../components/navbar/NavBar';


const Home = () => {

    const [user, setUser]=useState();

return (
    <>
   
    <h1>Home Page</h1>

    {user ? <div>
                <h1>Gig Buddy</h1>
                <h1>{user}</h1>
                <DeleteUser user={user} setUser={setUser}/>
                <LogOut user={user} setUser={setUser}/>
             
            
            </div>
            :
                <LogOrSign user={user} setUser={setUser}/>
        }
    </>
)
}

export default Home;
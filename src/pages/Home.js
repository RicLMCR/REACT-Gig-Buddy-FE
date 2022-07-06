import React from 'react';
import { useState } from 'react';

import './index.css'
import { LogInPanel, LogOut, DeleteUser } from './LogorSign/LogorSign';
// import Navbar from '../components/navbar/NavBar';


const Home = () => {

    const [value, setValue] = useState("");
    const [displayEvent, setDisplayEvent] =useState ([])
    const [apiData, setApiData] = useState([])
    const [user, setUser]=useState();
    const [imageUrl, setImageUrl] = useState("steve");
return (
    <>
    {/* <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} /> */}
    <h1>Home Page Section</h1>
    <LogInPanel />


    </>
)
}

export default Home;
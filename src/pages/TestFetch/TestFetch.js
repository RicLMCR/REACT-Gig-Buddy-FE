import React from 'react';
import { useState } from 'react';
import { fetchAttendees } from '../utils/fetchReq';
import './index.css'
// import Navbar from '../components/navbar/NavBar';


export const TestFetch = ()=>{
    e.preventDefault();
    fetchAttendees();

    return (

        <div>
            <button onClick={()=>fetchAttendees()}
        </div>
    )
    
}
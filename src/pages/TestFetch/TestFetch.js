import React from 'react';
import { useState } from 'react';
import { fetchAttendees } from '../../utils/fetchReq';
// import './index.css'
// import Navbar from '../components/navbar/NavBar';


export const TestFetch = ()=>{

    const triggerFetch = (e)=>{
    console.log("testFetch hit");
    e.preventDefault();
    fetchAttendees(12123); // test - change to an eventID in database
}
    return (

        <div>
            <button onClick={(e)=>triggerFetch(e)} >test fetch</button>
        </div>
    )
    
}
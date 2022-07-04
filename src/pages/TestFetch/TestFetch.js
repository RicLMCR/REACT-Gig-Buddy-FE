import React from 'react';
import { useState } from 'react';
import { fetchAttendees } from '../../utils/fetchReq';
// import './index.css'
// import Navbar from '../components/navbar/NavBar';


export const TestFetch = ()=>{

    const triggerFetch = (e)=>{
    console.log("testFetch hit");
    e.preventDefault();
    fetchAttendees(36029864);
}
    return (

        <div>
            <button onClick={(e)=>triggerFetch(e)} >test fetch</button>
        </div>
    )
    
}
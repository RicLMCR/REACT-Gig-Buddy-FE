import { useEffect, useState } from "react";
import React from 'react';
import './buddySwipe.css';
import { fetchAttendees } from '../../utils/fetchReq';


export const TestSwipe = ()=>{

//fetch list of event attendees from events table

    const [attendees, setAttendees]=useState([])

    useEffect (() => {
        fetchAttendees(36029864, setAttendees);
        console.log("Buddy Swipe attendees ar:", attendees)
      }, [])


return(

    <div>
        <h1>Test Swipe</h1>T
    </div>
)

}
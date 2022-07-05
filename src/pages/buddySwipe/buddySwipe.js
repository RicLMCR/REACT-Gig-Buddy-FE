import { useEffect, useState } from "react";
import React from 'react';
import './buddySwipe.css';
import { fetchAttendeeProfile, fetchAttendees } from '../../utils/fetchReq';
// import img1 from './img1.jpg';

export const BuddySwipe=()=> {

    const [attendees, setAttendees]=useState([]);


     useEffect (() => {
        (async()=>{
            const userArray = ["magnus1", "mike", "ric"];
           const data = await fetchAttendees(36029864, setAttendees);
           setAttendees((attendees)=>[...attendees,...data.event.attendees]);
            console.log("ddddddddddddd", attendees)
           const attendeeProfilesArr = [];
           for (let i =0; i < userArray.length; i++){
            console.log("inside for lop !!!!!!!!!!!!!!!!!")
            const profile = await fetchAttendeeProfile(userArray[i]);
            attendeeProfilesArr.push(profile);
           }
           console.log("attendee profiles arry is:", attendeeProfilesArr)
        })();

      }, [])




    try {

return (
    <div className="buddySwipeWrap">
        <h1>Attendees Are</h1>
        <h1>{attendees}</h1>
        <h1>The attendee is: {attendees[0]}</h1>

        {/* <h1>1st profile is:{attendeeProfilesArr[0]}</h1> */}


    </div>
);
    
} catch (error) {
    console.log(error);
}
}

export default BuddySwipe;

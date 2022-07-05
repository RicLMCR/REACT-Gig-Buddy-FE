import { useEffect, useState } from "react";
import React from 'react';
import './buddySwipe.css';
import { fetchAttendeeProfile, fetchAttendees } from '../../utils/fetchReq';
// import img1 from './img1.jpg';

export const BuddySwipe=()=> {

    const [attendees, setAttendees]=useState([]);

    const [attendeeProfile, setAttendeeProfile]=useState([]);

     //increment value for counter
    //  const [numCount, setNumCount]=useState(0);

     useEffect (() => {
        (async()=>{
           const data = await fetchAttendees(123456, setAttendees);
           console.log("!!!!!", data)
           setAttendees(()=>[...data.event.attendees]);
        //     // console.log("ddddddddddddd", attendees)
            
           const attendeeProfilesArr = [];
        //     // console.log("length is:", data.event.attendees.length)

           for (let i =0; i < data.event.attendees.length; i++){
            // console.log("inside for loop !!!!!!!!!!!!!!!!!")
            const profile = await fetchAttendeeProfile(data.event.attendees[i]);
            attendeeProfilesArr.push(profile);
            setAttendeeProfile((prev)=>[...prev, profile])
           }
           setAttendeeProfile([...attendeeProfilesArr])
        //    console.log(attendeeProfile)
        //    console.log("attendee profiles arry is:", attendeeProfilesArr)
        })();

      }, [])


    //   //on swipe right, displayed person is added to potential buddy list and increment counter increases by one
    // const swipeRightOnBuddy = (attendee)=>{
    //     setNumCount(numCount+1);
    // }

    //     //on swipe left, displayed person is removed from temporary attendees list and incerement counter increases by one
    //     const swipeLeftOnBuddy = ()=>{
    //         setNumCount(numCount+1);
    //     }



    try {

return (
    <div className="buddySwipeWrap">
        <h1>Attendees Are</h1>
        {/* <h1>{attendees}</h1> */}
        {/* <h1>The attendee is: {attendees[0]}</h1> */}
        {/* {attendeeProfile.map ((item,index) => (<p key={index}>{item.profile.username}</p>))} */}
        {/* <button className="swipeButton" onClick={swipeLeftOnBuddy}>No</button> */}
        <h1>{attendeeProfile[0].profile.username}</h1>
        {/* <button className="swipeButton" onClick={(e)=>{swipeRightOnBuddy([attendees[numCount]])}}>Yes</button> */}



    </div>
);
    
} catch (error) {
    console.log(error);
}
}

export default BuddySwipe;

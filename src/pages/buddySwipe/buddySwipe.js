import { useEffect, useState } from "react";
import React from 'react';
import './buddySwipe.css';
import { fetchAttendeeProfile, fetchAttendees } from '../../utils/fetchReq';

export const BuddySwipe=()=> {

    const [attendees, setAttendees]=useState([]);

    const [attendeeProfile, setAttendeeProfile]=useState([]);

     //increment value for counter
     const [numCount, setNumCount]=useState(0);

     useEffect (() => {
        (async()=>{
           const data = await fetchAttendees(123456, setAttendees);
           console.log("!!!!!", data)
           setAttendees(()=>[...data.event.attendees]);

           const attendeeProfilesArr = [];

           for (let i =0; i < data.event.attendees.length; i++){
            const profile = await fetchAttendeeProfile(data.event.attendees[i]);
            attendeeProfilesArr.push(profile);
            setAttendeeProfile((prev)=>[...prev, profile])
           }
           setAttendeeProfile([...attendeeProfilesArr])
           console.log("attendee profile is;", attendeeProfile)
        })();

      },[])


      //on swipe right, displayed person is added to potential buddy list and increment counter increases by one
    const swipeRightOnBuddy = (attendee)=>{
        
        setNumCount(numCount+1);
        console.log("Add to potential likes")
        if (numCount => attendees.length+1){
            console.log("No more attendees")
            return 
                }
    }

        //on swipe left, displayed person is removed from attendeeProfile list and incerement counter increases by one
        const swipeLeftOnBuddy = (e)=>{
            e.preventDefault()
            setNumCount(numCount+1);
            if (numCount => attendees.length+1){
            console.log("No more attendees")
                
            }
        }

        try {
            return (
                <div className="buddySwipeWrap">
                    <button className="swipeButton" onClick={(e)=>swipeLeftOnBuddy(e)}>No</button>
                    {attendeeProfile[numCount] ? 
                    <div className="buddyProfile">
                        <h1>{attendeeProfile[numCount].profile.username}</h1>
                    </div> : 
                    <div className="buddyProfile">
                        <h1>No More Profiles!</h1>
                    </div>}
                    <button className="swipeButton" onClick={(e)=>{swipeRightOnBuddy([attendeeProfile[numCount]])}}>Yes</button>
                </div>
            );
                
            } catch (error) {
                console.log(error);
            }
        }
export default BuddySwipe;

import { useContext, useEffect, useState } from "react";
import React from 'react';
import './buddySwipe.css';
import { fetchAttendeeProfile, fetchAttendees, fetchSwipeRight } from '../../utils/fetchReq';

import { EventIdPass } from "../../utils/EventIDPass";

export const BuddySwipe=({user})=> {
    const eventIdGen = useContext(EventIdPass);
    console.log(eventIdGen);

    const [attendees, setAttendees]=useState([]);
    const [attendeeProfile, setAttendeeProfile]=useState([]);

     //increment value for counter
     const [numCount, setNumCount]=useState(0);

    //load attendee array and trigger fetch requests to pull back user profiles
     useEffect (() => {
        (async()=>{
           const data = await fetchAttendees(eventIdGen, setAttendees);
           console.log("!!!!!", data);
           console.log("buddySwipe: eventId is",eventIdGen);
           if (data.event.attendees == ""){
            data.event.attendees = ["0"];
            console.log("buddyswipe: returned data is null");
           } else {
           setAttendees(()=>[...data.event.attendees]);
        }
           const attendeeProfilesArr = [];

           for (let i =0; i < data.event.attendees.length; i++){
            const profile = await fetchAttendeeProfile(data.event.attendees[i]);
            attendeeProfilesArr.push(profile);
            setAttendeeProfile((prev)=>[...prev, profile]);
           }
           setAttendeeProfile([...attendeeProfilesArr]);
           console.log("buddy swipe: attendee profile is;", attendeeProfile);
        })();
      },[])

    //on swipe right, displayed person is added to potential buddy list and increment counter increases by one
    const swipeRightOnBuddy = (attendee)=>{
        setNumCount(numCount+1);
        console.log ("buddy Swipe right attendee you like is:", attendeeProfile[numCount].profile.username)//, {user}

        fetchSwipeRight(attendeeProfile[numCount].profile.username, user.username, user.imageUrl)//*********** */
        // console.log("Add to potential likes")
        if (numCount => attendees.length+1){
            console.log("No more attendees");
            return 
                }
    }

    //OPTIONAL: trigger another fetchRequest to user table's 'liked counter' (PUT)
    //OPTIONAL: add the value '1' to the value existing already
    //send an array object with my user profile details to another column in table called 'users who liked me'(image, name, link to profile)


    //fetch request on load of page (useEffect) to show counter of how many likes OR unread alerts that user has
    //dropdown list showing profiles of users who have swiped right
    //OPTIONAL: when one profile is selected further fetch request to 'liked counter' to remove '1' from the value and update the onscreen counter on return
    //when a profile is selected, take the user back to the swipe buddy screen and load that profile up immediately - before any others are loaded OR load a new version of the swipe buddy screen that only shows users who have swiped right on you
    //if the user swipes right then you are a match - how to do this?
    //
    //add 'buddy' to profile screen list

    //fetch request 

    //on swipe left, displayed person is removed from attendeeProfile list and incerement counter increases by one
    const swipeLeftOnBuddy = (e)=>{
        e.preventDefault()
        setNumCount(numCount+1);
        if (numCount => attendees.length+1){
        console.log("No more attendees")   
        }
        const myProfileObject = {username:"richard", imageUrl:"notsureyet"}
        
    }



    try {
        return (
            <div className="buddySwipeWrap">
                {/* <EventList eventId={eventId} /> */}
                <h1>Event Id Pass is: {eventIdGen}</h1>
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
import { useState } from "react";
import React from 'react';
import './buddySwipe.css';
// import img1 from './img1.jpg';

const BuddySwipe=()=> {

//temporary hook to contain user profiles loaded from 'attendees' 
//add images -- img: img1,
//add got ticket 
    const [attendees, setattendees]=useState([
        { username: "Luka",  liked: false, key:1},
        { username: "Deivydas", liked: false,  key:2},
        { username: "Markus", liked: false,  key:3},
        { username: "Jessica", liked: false,  key:4},
      ]);

    //we need to ensure that, once user swipes on a potential buddy, the buddy's profile does not appear again - should the user return in another session 
    //this list should be logged in the DB and ensure that any 'swiped' users do not appear in the 'attendees' list above
    //users in this list should also receive a notification requesting a buddy up (this should be triggered in the 'swipeRightOn...' function below)
     const [reviewedAttendee, setReviewedAttendee] = useState ([]);
     
    try {
    //increment value for counter
    const [num, setNum]=useState(0);
    
    //on swipe right, displayed person is added to potential buddy list and increment counter increases by one
    const swipeRightOnBuddy = (attendee)=>{
        setNum(num+1);
        console.log("attendess is: ", attendee, "List of potential buddies so far is:", reviewedAttendee);
        //change attendee liked status to true
        // function required to send notification to the other user at this point
        attendee.liked = true;
        //add to reviewedAttendee list - use spread operator
        let newReviewedAttendee = [...reviewedAttendee, ...[attendee]];
        setReviewedAttendee(newReviewedAttendee); 
    }

    //on swipe left, displayed person is removed from temporary attendees list and incerement counter increases by one
    const swipeLeftOnBuddy = ()=>{
        setNum(num+1);
        //remove from attendees list 
    }

    if (attendees[num].username === false){
        console.log("No more users");
    }

return (
    <div className="buddySwipeWrap">
        <button className="swipeButton" onClick={swipeLeftOnBuddy}>No</button>
        <div className="buddyProfile">
            <h1>{num}</h1>
            <h1>{attendees[num].username}</h1>
            <img src={attendees[num].img} alt="buddy"/>
        </div>
        <button className="swipeButton" onClick={(e)=>{swipeRightOnBuddy([attendees[num]])}}>Yes</button>
    </div>
);
    
} catch (error) {
    console.log(error);
}
}

export default BuddySwipe;

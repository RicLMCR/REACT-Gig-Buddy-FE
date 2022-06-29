import { useState } from "react";
import React from 'react';
import './buddySwipe.css';
// import img1 from './img1.jpg';

const BuddySwipe=()=> {

//temporary hook to contain user profiles loaded from 'attendees' 
//add images -- img: img1,
//add got ticket 
    const [attendees, setattendees]=useState([
        { username: "Luka",  buddy: false, key:1},
        { username: "Deivydas", buddy: false, key:2},
        { username: "Markus", buddy: false, key:3},
        { username: "Jessica", buddy: false, key:4},
      ]);

    //contains potential buddies flagged when swiping right
     const [potentialBuddy, setPotentialBuddy] = useState ([]);
     
    try {
    //increment value for counter
    const [num, setNum]=useState(0);
    
    //on swipe right, displayed person is added to potential buddy list and increment counter increases by one
    const swipeRightOnBuddy = (attendee)=>{
        console.log("attendee", attendee);
        setNum(num+1);
        //add to potentialBuddy list - use spread operator
        console.log("List of potential buddies so far:", potentialBuddy);
        potentialBuddy = [...potentialBuddy, ...attendee];
        setPotentialBuddy(potentialBuddy);
        console.log("updated list of potential buddies:", potentialBuddy);      
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
        <button className="swipeButton" onClick={()=>{swipeRightOnBuddy(attendees[num])}}>Yes</button>
    </div>
);
    
} catch (error) {
    console.log(error);
}
}

export default BuddySwipe;

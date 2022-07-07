import React from 'react';
import { ProfileImageUploader } from '../../components/profileImageUploader/profileImageUploader';
// import '../index.css'
import './profile.css'
import { useState } from 'react';
import { Avatar } from '@mui/material';
import { addPicture } from '../../utils/fetchReq';
import { AiOutlineArrowRight } from "react-icons/ai";
import { style } from '@mui/system';

const Profile = ({ user, apiData, trendingEvents}) => {
const [imageUrl, setImageUrl]= useState ("")


const sameGig = () => {

}



    const submitHandlerLogin = (e)=>{
        e.preventDefault();
       addPicture(user.username, imageUrl, setImageUrl);}
return (




    <>
   
    <div className='profile-page-container'>
        <div></div>
        <section className='profile-page-top'>
            <div className='profile-picture-div'>
            <Avatar className="avatar-box" alt="Profile" src={user.imageUrl} sx={{ width: 250, height: 250 }} />
            <form onSubmit={submitHandlerLogin}>
    <input className="image-upload-box" type="text" placeholder="Upload image url" onChange={(e)=>setImageUrl(e.target.value)} name='profileImage' />
    <button   className="submit-btn"type="Submit"  >Submit</button>
  
    </form>
            </div>
            <div className='profile-buddies'>
              
                <div className='buddy-images'>
                <h2 className='buddies-header'>Buddies</h2>
                    <img className='buddy-image' src='https://www.fillmurray.com/136/136' alt='buddy1' />
                    <img className='buddy-image' src='https://www.fillmurray.com/136/136' alt='buddy2' />
                    <img className='buddy-image' src='https://www.fillmurray.com/136/136' alt='buddy3' />
                    <img className='buddy-image' src='https://www.fillmurray.com/136/136' alt='buddy4' />
                    <p className='see-more-text'>See more...</p>
                </div>
            </div>
        </section>
        <section className="profile-page-bottom">
            <div className='profile-bio'>

                <div className='bio-container'>
                    <h2>Profile</h2>
                    <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est dolor temporibus quos minima, sed consequatur! Accusantium facere, labore ipsam, quas voluptates sit provident minima expedita sapiente hic consequuntur voluptatem.</p>
                </div>
            </div>
            <div className='mygigs-div'>

                <h2 className='mygigs-header'>My Gigs</h2>
                <div className="my-gigs-images">
                {trendingEvents.map((item, index) => {
                    // for (let i = 0; i < user.eventsAttending.length; i++){
                    if(item.id === user.eventsAttending[0] || item.id === user.eventsAttending[1] || item.id === user.eventsAttending[2] || item.id === user.eventsAttending[3] || item.id === user.eventsAttending[4] || item.id === user.eventsAttending[5] ){  
                        return( 
                             <div className="pop-events-big-image" style={{transform:"scale(0.7)"}} key= {index}>
        
                        <img  src={item.largeimageurl}  alt="" height={250}  />
                      
                 <div className="pop-events-big-image-description"> 
                 
                 <div>
                    <div className="date-time"> {`${item.date} Doors open: ${item.openingtimes.doorsopen}`}</div>
                    <div className="big-image-event-name">{item.eventname}</div>
                </div>
                <button   className="pop-events-btn"><AiOutlineArrowRight size={20} color="white"/></button>
                 </div>
                 {/* <div className="heart-icon-big"><IoHeartOutline size={25} color="white"/></div>  */}
                    </div>  )}
                })}


           
                </div>
            </div>
        </section>
        </div>
</>
)
}

export default Profile;
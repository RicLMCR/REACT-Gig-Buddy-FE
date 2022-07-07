import React from 'react';
import { ProfileImageUploader } from '../../components/profileImageUploader/profileImageUploader';
// import '../index.css'
import './profile.css'
import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { addPicture } from '../../utils/fetchReq';
import { fetchSingleEvent } from '../../utils/fetchReq';



const Profile = ({ user}) => {
const [imageUrl, setImageUrl]= useState ("")
const [userEvents, setUserEvents] = useState([]);

useEffect(() => {
    (async() => { 
        for(let eventId in user.eventsAttending) {
            await fetchSingleEvent(eventId, setUserEvents)
        }
    })()
},[])

console.log(user)





    const submitHandlerLogin = (e)=>{
        e.preventDefault();
       addPicture(user.username, imageUrl, setImageUrl);}
return (




    <>
    <div className='profile-page-container'>

        <section className='profile-page-top'>
            <div className='profile-picture-div'>
            <Avatar alt="Profile" src={user.imageUrl} sx={{ width: 338, height: 338 }} />
            <form onSubmit={submitHandlerLogin}>
    <input type="text" placeholder="Upload image url" onChange={(e)=>setImageUrl(e.target.value)} name='profileImage' />
    <button type="Submit"  >Submit</button>
    </form>
            </div>
            <div className='profile-buddies'>
                <h2 className='buddies-header'>Buddies</h2>
                <div className='buddy-images'>
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
                <h2 className='bio-header'>Profile</h2>
                <div className='bio-container'>
                    <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est dolor temporibus quos minima, sed consequatur! Accusantium facere, labore ipsam, quas voluptates sit provident minima expedita sapiente hic consequuntur voluptatem.</p>
                </div>
            </div>
            <div className='mygigs-div'>
                <h2 className='mygigs-header'>My Gigs</h2>
                <div className="gig-images">
                {/* <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" /> */}
                {user.eventsAttending.map((item,index) => (<p key={index}>{item}</p>))}
                {/* <div className='gig-friend-image-group'>
                <img className='gig-friend-image' src="https://www.fillmurray.com/36/36" alt="friend" />
                <img className='gig-friend-image' src="https://www.fillmurray.com/36/36" alt="friend" />
                <img className='gig-friend-image' src="https://www.fillmurray.com/36/36" alt="friend" />
                <img className='gig-friend-image' src="https://www.fillmurray.com/36/36" alt="friend" />
                </div> */}
                <p className='see-more-text'>See more...</p>
                </div>
            </div>
        </section>
        </div>
</>
)
}

export default Profile;
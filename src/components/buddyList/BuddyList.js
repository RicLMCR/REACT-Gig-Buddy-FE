import { useState, useEffect } from "react";
import React from 'react';
import { fetchCheckLikes, fetchSingleUser, fetchConfirmBuddy } from '../../utils/fetchReq';
import { display } from "@mui/system";

export const BuddyList = ({user})=>{
    const [profileThumbs, setProfileThumbs] = useState([]);

    const [switchTrue, setSwitchTrue]= useState(false);

    const notificationSwitch = (e)=>{
        setSwitchTrue(true);
    };



    useEffect(() => {
        (async()=>{
        const profileInfo = await fetchSingleUser(user.username);
        const profiles = profileInfo.buddyRequests
        const profileArray = []
        for (let i=0; i < profileInfo.profile.buddyRequests.length; i++){
            const singleProfile = await fetchSingleUser(profileInfo.profile.buddyRequests[i].username)
            profileArray.push(singleProfile)
        }
        console.log(profileArray)
        setProfileThumbs(()=>[ ...profileArray])
        console.log("dhdhdhddh", profileThumbs)
        })()
    },[])

    const checkLikes = async ()=>{
    const profileInfo = await fetchCheckLikes(user.username, setProfileThumbs);
    // console.log("BuddyList profile info is:", profileInfo);
    return profileInfo;
    }
    const handshake = (username, buddyname)=>{
        console.log("handshake", username)
        //fetch request to both users to confirm they are buddies
        const confirmedBuddy = fetchConfirmBuddy(username, buddyname)
        console.log(`Congrats  ${buddyname}  and you are now Gig Buddies!`)
    }


    try {
        return(<div>
            
            <div>
                { switchTrue ?
                    <div>
                    {profileThumbs.map ((profile,index)=>(
                        <>
                        {profile.profile.imageUrl==="Not specified" ? <p onClick={()=>handshake(user.username, profile.profile.username)} value={profile.profile.username} key={index}>{profile.profile.username}</p> 
                        :
                        <img onClick={()=>handshake(user.username, profile.profile.username)} value={profile.profile.username}  src={profile.profile.imageUrl} alt="alt text" key={index} width="40px" height="40px"/>
                        }
                        </>
                    ))}
                    </div>
                :
                <button onClick={((e)=>notificationSwitch(true))}>Notifications</button>
                
                }
                
                
           



            </div>
                </div>
        )
        
    } catch (error) {
        console.log(error);
    }
}

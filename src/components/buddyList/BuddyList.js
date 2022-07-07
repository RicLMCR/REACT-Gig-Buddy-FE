import { useState, useEffect } from "react";
import React from 'react';
import { fetchCheckLikes } from '../../utils/fetchReq';
import { display } from "@mui/system";

export const BuddyList = ({user})=>{

    const [profileThumbs, setProfileThumbs] = useState([]);

    useEffect(() => {
        (async()=>{
        const profileInfo = await checkLikes();
        console.log("Buddy List profile info:", profileInfo.profile.buddyRequests);
        setProfileThumbs(()=>[...profileInfo.profile.buddyRequests])
        console.log(profileThumbs)
        })()
    },[])

    const checkLikes = async ()=>{
    const profileInfo = await fetchCheckLikes(user.username, setProfileThumbs);
    // console.log("BuddyList profile info is:", profileInfo);
    return profileInfo;
    }




    try {
        return(<div>
            <div>
                {profileThumbs.map ((profile,index)=>(
                    <p key={index}>{profile.username}</p>
                    
                ))}



            </div>
    
                </div>
        )
        
    } catch (error) {
        console.log(error);
    }
}

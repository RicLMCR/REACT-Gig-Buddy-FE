import React from 'react';
import { useState } from 'react';
import { Avatar } from '@mui/material';





export const ProfileImageUploader = ({imageUrl}) => {
    console.log("you are nearly there:", imageUrl)


    




return (
    <>
    <Avatar alt="Profile" src={imageUrl} sx={{ width: 338, height: 338 }} />
    <input type="url" placeholder="Upload image url" name='profileImage' />
    <button type="button" >Submit</button>
    </>
)
}


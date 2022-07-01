import React from 'react';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; 

export const ProfileImageUploader = () => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const handleImageChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    console.log(image);

    const handleImageSubmit = () => {
        const imageRef = ref(storage, Date());
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setUrl(url);
            })
            .catch(error => {
                console.log(error.message, "Error getting the image url");
            });
            setImage(null);
        }).catch(error => {
            console.log(error.message);
        });
    };
return (
    <>
    <Avatar alt="Profile" src={url} sx={{ width: 338, height: 338 }} />
    <input type="file" name='profileImage' onChange={handleImageChange} accept="image/png, image/gif, image/jpeg" />
    <button onClick={handleImageSubmit}>Submit</button>
    </>
)
}

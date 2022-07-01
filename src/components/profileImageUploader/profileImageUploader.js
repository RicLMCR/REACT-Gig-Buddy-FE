import React from 'react'
import { Avatar } from '@mui/material'

export const ProfileImageUploader = () => {
return (
    <>
    <input type="file" name='profileImage' accept="image/png, image/gif, image/jpeg" />
    <button>Submit</button>
    </>
)
}

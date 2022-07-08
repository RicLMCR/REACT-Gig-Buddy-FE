import React from "react";
import { ProfileImageUploader } from "../../components/profileImageUploader/profileImageUploader";
// import '../index.css'
import "./profile.css";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { addPicture } from "../../utils/fetchReq";
import { AiOutlineArrowRight } from "react-icons/ai";
import { style } from "@mui/system";

const Profile = ({ user, trendingEvents, imageUrl, setImageUrl }) => {
  console.log("user", user);
  console.log("user image", user.imageUrl);

  const submitHandlerLogin = (e) => {
    e.preventDefault();
    addPicture(user.username, imageUrl, setImageUrl);
  };
  return (
    <div className="profile-page-container">
      <div className="profile-picture-container">
        <Avatar
          className="avatar-box"
          alt="Profile"
          src={user.imageUrl}
          sx={{ width: 175, height: 175 }}
        />
        <form className="profile-form" onSubmit={submitHandlerLogin}>
          <input
            className="image-upload-box"
            type="text"
            placeholder="Upload image url"
            onChange={(e) => setImageUrl(e.target.value)}
            name="profileImage"
          />
          <button className="submit-btn" type="Submit">
            Submit
          </button>
        </form>
        <div className="line"> </div>
        <h2 className="bio-title">{user.username}</h2>

        <p className="bio-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est
          dolor temporibus quos minima, sed consequatur! Accusantium facere,
          labore ipsam, quas voluptates sit provident minima expedita sapiente
          hic consequuntur voluptatem.
        </p>
      </div>

      <div className="profile-buddies">
        <h2 className="buddies-header">Buddies</h2>
        <div className="buddy-images">
          <img
            className="buddy-image"
            src="https://www.fillmurray.com/136/136"
            alt="buddy1"
          />
          <img
            className="buddy-image"
            src="https://www.fillmurray.com/136/136"
            alt="buddy2"
          />
          <img
            className="buddy-image"
            src="https://www.fillmurray.com/136/136"
            alt="buddy3"
          />
          <img
            className="buddy-image"
            src="https://www.fillmurray.com/136/136"
            alt="buddy4"
          />
          <p className="see-more-text">See more...</p>
        </div>
      </div>

      <div className="my-gigs-container">
        <h2 className="mygigs-header"> My gigs</h2>

        {trendingEvents.map((item, index) => {
          if (
            item.id === user.eventsAttending[0] ||
            item.id === user.eventsAttending[1] ||
            item.id === user.eventsAttending[2] ||
            item.id === user.eventsAttending[3] ||
            item.id === user.eventsAttending[4] ||
            item.id === user.eventsAttending[5]
          ) {
            return (
              <div key={index}>
                <img
                  className="pop-big-image"
                  src={item.largeimageurl}
                  alt="gigs image"
                />

                {/* <div className="pop-events-big-image-description">
                  <div>
                    <div className="date-time">
                      {`${item.date} Doors open: ${item.openingtimes.doorsopen}`}
                    </div>
                    <div className="big-image-event-name">{item.eventname}</div>
                  </div>
                  <button className="pop-events-btn">
                    <AiOutlineArrowRight size={20} color="white" />
                  </button>
                </div> */}
                {/* <div className="heart-icon-big"><IoHeartOutline size={25} color="white"/></div>  */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Profile;

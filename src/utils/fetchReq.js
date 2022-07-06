

//create user fetch request 
export const createUser = async (username, email, password, setUser, user )=>{//setImageUrl, urlInput, imageUrl

    console.log("fetch hit", username);
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                // imageUrl: urlInput,
            }),
        });
        const data = await res.json();
        // console.log(data)
        console.log("setuser trigger", username)
        console.log("data is", data)
        await setUser({
            ...user,
            username: data.newUser.username,
            token:data.token,
            // imageUrl:data.user.imageUrl
        });
        // console.log("image url before set", imageUrl)
        // await setImageUrl(data.newUser.username)
        // console.log("the string image url after set", imageUrl)  
        // console.log("succesfully created:", data.newUser.imageUrl);
        // imageUrl = data.newUser.imageUrl;

    
        
    } catch (error) {
        console.log(error);
    }
};

//login fetch request
export const logInUser = async (username, password, setUser, user)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
                
            }),
        });
        const data = await res.json();
        console.log("user", username, "logged in", data.user.username);
        console.log( "user da",data)
        await setUser({
            ...user,
            username: data.user.username,
            token:data.token,
            imageUrl:data.user.imageUrl,
        });
    } catch (error) {
        console.log(error);
    }
};

//delete user fetch request
export const deleteUser = async (username, setUser)=>{
    console.log("fetch", username)
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}${username}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username
            }),
        })
        const data = await res.json();
        // setUser("deleted");
        console.log(username, "has been deleted");
        } catch (error) {
        console.log(error);
    }
}



   export const fetchEvents = async (setApiData) => {
    try {
        const offsetArr = [1, 101, 201];
        const eventArr = [];

        offsetArr.forEach(async(item, index) => {
                    const res = await fetch(`https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_API_KEY}&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1&limit=100&offset=${item}`);

                const data = await res.json();
            data.results.forEach(async(item, index) => {

                const eventObj = {
                    id: item.id,
                    eventname: item.eventname,
                    artists: item.artists,
                    date: item.date,
                    description: item.description,
                    largeimageurl: item.largeimageurl,
                    venuename: item.venue.name,
                    address:item.venue.address,
                    postcode: item.venue.postcode,
                    town: item.venue.town
                    
                };
                
                eventArr.push(eventObj);
            });
        });

        setApiData(eventArr);
    } catch (error) {
        console.log(error);
    }
};






export const createEvent = async (eventId, username)=>{
 
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}event/create`, {//Note: 'user' might not be needed
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                eventId: eventId,
                username: username
            }),
        });
        const data = await res.json();
        // setUser(data.newUser.username);   
        console.log("succesfully created:", data);
    } catch (error) {
        console.log(error);
    }
};


export const trendingEvent = async (setTrendingEvents) => {

    try {

     const res = await fetch("https://www.skiddle.com/api/v1/events/search/?api_key=9eca984fc063066727406327c285fb75&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=trending&description=1&limit=100");
     const data = await res.json();
        setTrendingEvents(data.results)
    } catch (error) {
        console.log(error)
    }
}

   // fetch attendees for gig
   export const fetchAttendees = async (event_id, setAttendees)=>{
    console.log("Fetch Req.js event ID is:", event_id)
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}event/${event_id}`,{
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json();
        console.log("Fetch request data is:",data);
        setAttendees(data.attendees);//
        console.log("fetch req, attendees are:", data.event.attendees)
        return data;
    } catch (error) {
        console.log(error);
    }
  }

export const fetchAttendeeProfile = async (username)=>{
    //username, image, bio
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", username)
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}profile/${username}`,{
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json();
        // console.log("fetch attendees ffffff", data)
        return data;
    } catch (error){
        console.log(error);
    }
}


//log 'like' in selected user's table 
export const fetchSwipeRight = async (theirUserProfile, username, myimageurl) => {
    console.log("fetchSwipeRight hit VVVVVVVVVVV", theirUserProfile, username, myimageurl)
    try {
const response = await fetch(`${process.env.REACT_APP_REST_API}buddy/request`,{

    method: "PUT",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                imageUrl: myimageurl,
                potentialBuddy: theirUserProfile,

            }),
        })
        const data = await response.json();
    } catch (error) {
        console.log(error)
    }

}

//fetch list iof people that have liked you
export const fetchCheckLikes = async (username)=>{
    const response = await fetch(`${process.env.REACT_APP_REST_API}profile/${username}`,{
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    const data = await response.json();
    console.log("fetchCheckLikes:", data)
    return data;
    
    try {
        
    } catch (error) {
        console.log(error)
    }

}



//fetch list iof people that have liked you
// export const fetchCheckLikes = async (username)=>{
//     const response = await fetch(`${process.env.REACT_APP_REST_API}profile/${username}`,{
//         method: 'GET',
//         headers: {"Content-Type": "application/json"}
//     })
//     const data = await response.json();
//     console.log("fetch req check like", data)
//     return data;
    
//     try {
        
//     } catch (error) {
//         console.log(error)
//     }

// }


export const addPicture = async ( username, picture, setImageUrl) => {
console.log("update image hit")
    try {
const response = await fetch(`${process.env.REACT_APP_REST_API}picture`,{

    method: "PUT",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                imageUrl:picture,
            

            }),
        })
        const data = await response.json();
        console.log( "message", data.user.imageUrl)
setImageUrl(data.user.imageUrl)
    } catch (error) {
        console.log(error)
    }

}




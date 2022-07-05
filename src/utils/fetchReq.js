//create user fetch request
export const createUser = async (username, email, password, setUser)=>{
    console.log("fetch hit", username, email, password);
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {//Note: 'user' might not be needed
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        });
        const data = await res.json();
        setUser(data.newUser.username);   
        console.log("succesfully created:", data.newUser.user);
    } catch (error) {
        console.log(error);
    }
};

//login fetch request
export const logInUser = async (username, password, setUser)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const data = await res.json();
        console.log("user", username, "logged in", data.user.username);
        setUser(data.user.username);
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
        const res = await fetch(`${process.env.REACT_APP_REST_API}create/create`, {//Note: 'user' might not be needed
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
    //  console.log(data, "trend")
        setTrendingEvents(data.results)
    } catch (error) {
        console.log(error)
    }
}


// fetch attendees for gig. NOTE: Need the gigname - speak to Deivydas 
export const fetchAttendees = async (eventId, setAttendees)=>{

    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}event`,{
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
            eventId: eventId,
            }),
            })
            console.log(response,"rer")
        const data = await response.json();
        // setAttendees(data);
        // console.log("Fetch request:",data)
        return data
    } catch (error) {
        console.log(error);
    }
  }
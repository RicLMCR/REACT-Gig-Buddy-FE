


//create user fetch request
export const createUser = async (username, email, password, setUser)=>{
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
        setUser(data.user.username);
    } catch (error) {
        console.log(error);
    }
};

//delete user fetch request
export const deleteUser = async (username)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}${username}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}
        })
        const data = await res.json();
        // setUser(data.user.username);
        console.log(username, "has been deleted");
        } catch (error) {
        console.log(error);
    }
}


// export const fetchEvents =  async (setApiData) => {
//     try {
        
//     const response = await fetch("https://www.skiddle.com/api/v1/events/search/?api_key=9eca984fc063066727406327c285fb75&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1&limit=100")
    

//     const data = await response.json()
//     if (!response.ok){
//       throw new Error(response.statusText)
//     }
//     console.log(data, "data")
//     setApiData(data.results)
//     console.log(data.results)

//     } catch (err) {
//       console.log(err)
//     }
//   }

   export const fetchEvents = async (setApiData) => {
    try {
        const offsetArr = [1, 101, 201];
        const eventArr = [];

        offsetArr.forEach(async(item, index) => {
                    const res = await fetch(`https://www.skiddle.com/api/v1/events/search/?api_key=9eca984fc063066727406327c285fb75&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1&limit=100&offset=${item}`);

                const data = await res.json();
console.log(data)
            data.results.forEach(async(item, index) => {

                const eventObj = {
                    testKey: "test test test",
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





export const fetchArtist =  async (setArtists) => {
    try {

    const response = await fetch("https://www.skiddle.com/api/v1/artist/search/?api_key=9eca984fc063066727406327c285fb75")
    
 
console.log(response)
    
    if (!response.ok){
      throw new Error(response.statusText)
    }
    const data = await response.json()
    console.log(data, "data")
    setArtists(data.results)
    console.log(data.results)

    } catch (err) {
      console.log(err)
    }
  }

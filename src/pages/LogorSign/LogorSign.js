import { useState } from "react";
import './LogorSign.css'
import { useNavigate } from "react-router-dom";
import { createUser, logInUser, deleteUser} from '../../utils/fetchReq'

//login or sign up user
export const LogOrSign = ({user, setUser}) => {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [imageUrl, setImageUrl] = useState("steve");

    const submitHandlerCreate=(e)=>{
        console.log("submit handler", username)
        e.preventDefault();
        createUser(username, email, password, setUser, user);
    };
    const navigate =  useNavigate()

    const submitHandlerLogin = (e)=>{
        e.preventDefault();
       logInUser(username, password, setUser, user);
    //    if(user){
    //     navigate("/popular")
    //    }
       
        
    };

    try { 
        // switch between log in page and sign up page
        const [logSwitch, setlogSwitch] = useState(true);
        return(
        <>
            
                { logSwitch ?
        <div className="bg-image">
            <h1 className="gigbuddy-logorsign-title">Gig Buddy</h1>
            <section className="description-container top-container-left">
                <h2 className="page-description">People going to gigs, but do not have friends with similar music taste and therefore have to go alone,</h2>
                </section>
                <section className="description-container bottom-container-right">
                <h2 className="page-description">or people who were planning on going with someone else to a gig, but dropped out at the last minute.</h2>
                </section>
            <div className="formContainer">
                <form className="login-form" onSubmit={submitHandlerLogin}>
                    <h1 className="text">Log In</h1>
                    <input type="text" className="logorsign-input" placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>
                    <input type="password" className = "logorsign-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>                  
                    <button className="form-btn">Submit</button>
                    <h3 className="smallText">Don't have an account?</h3>
                    <button className = "form-btn" onClick={(e)=>{setlogSwitch()}}>Sign Up</button>
                </form>
                </div>
            </div>
                :
            <div className="bg-image">
                <h1 className="gigbuddy-logorsign-title">Gig Buddy</h1>
                <section className="description-container">
                    <h2 className="page-description">People going to gigs, but do not have friends with similar music taste and therefore have to go alone,</h2>
                </section>
                <section className="description-container bottom-container-right">
                    <h2 className="page-description">or people who were planning on going with someone else to a gig, but dropped out at the last minute.</h2>
                </section>
                <div className="formContainer">
                <h3 className="find-buddy-text">Find your Gig Buddy</h3>
                <form className="login-form" onSubmit={submitHandlerCreate}>
                    <h1 className="text">Create Profile</h1>
                    <input type="text" className="logorsign-input" placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>
                    <input type="email" className="logorsign-input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" className="logorsign-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="form-btn" type="submit">Submit</button>
                
                        <h3 className="smallText">Already have an account?</h3>                
                        <button className = "form-btn"onClick={(e)=>{setlogSwitch(true)}}>Log In</button>
                </form>
                </div>
            </div>
                } 
                </>
        )
    } catch (error){ 
        console.log (error)
    }
};


//logout user function
export const LogOut = ({user, setUser})=>{
    try {
    // set's user value to Null to remove all user data
    const submitHandler = (e)=>{
        e.preventDefault();
        setUser();
    }
    return(
        <button className="headerButton" onClick={(e)=>submitHandler(e)} >Log Out</button>
    )
} catch (error){
    console.log(error);
};
} 

//delete user profile and logout
export const DeleteUser = ({user, setUser})=>{
    try {
        const submitHandler = (e)=>{
            e.preventDefault();
            deleteUser(user);
            setUser()
        }
        return (
            <button className="headerButton" onClick={(e)=>submitHandler(e)}>Delete Your Account</button>
        )
    } catch (error) {
        console.log(error);
    }


}
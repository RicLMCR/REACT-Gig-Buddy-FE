import { useState } from "react";
import './LogorSign.css'
import { useNavigate } from "react-router-dom";
import { createUser, logInUser, deleteUser} from '../../utils/fetchReq'

//import react-icons 
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

//login or sign up user
export const LogOrSign = ({user, setUser}) => {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [imageUrl, setImageUrl] = useState("steve");

    const submitHandlerCreate=(e)=>{
        console.log("submit handler", username)
        e.preventDefault();
        createUser(username, email, password, setUser, user);//
    };
    const navigate =  useNavigate()

    const submitHandlerLogin = (e)=>{
        e.preventDefault();
       logInUser(username, password, setUser, user);
       if(user){
        navigate("/popular")
       }
       
        
    };

    try { 
        // switch between log in page and sign up page
        const [logSwitch, setlogSwitch] = useState(true);
        return(
        <>
            
                { logSwitch ?
        <div className="bg-image">
            {/* <h1 className="gigbuddy-logorsign-title">Gig Buddy</h1> */}
            <div className="content-flex">
            <div className="form-container">
            <h1 className="gigbuddy-logorsign-title">Gig Buddy</h1>
                <form className="login-form" onSubmit={submitHandlerLogin}>
                    <h1 className="text">Log In</h1>
                    <FaUser className="signlog-icons"/>
                    <input type="text" className="logorsign-input" placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>
                    <RiLockPasswordFill className="signlog-icons" />
                    <input type="password" className = "logorsign-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>                  
                    <button className="form-btn">Submit</button>
                    <h3 className="small-text">Don't have an account?</h3>
                    <button className = "form-btn" onClick={(e)=>{setlogSwitch()}}>Sign Up</button>
                </form>
                </div>
                    <div className="description-container">
                        <h2 className="page-description">People going to gigs, but do not have friends with similar music taste and therefore have to go alone</h2>
                    </div>
                </div>
            </div>
                :
            <div className="bg-image">
                {/* <h1 className="gigbuddy-logorsign-title">Gig Buddy</h1> */}
                <div className="content-flex">
                <section className="form-container">
                <h1 className="gigbuddy-logorsign-title">Gig Buddy</h1>
                <form className="login-form" onSubmit={submitHandlerCreate}>
                    <h1 className="find-buddy-text">Find your Gig Buddy</h1>
                    <h1 className="text">Create Account</h1>
                    <FaUser className="signlog-icons"/>
                    <input type="text" className="logorsign-input" placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>
                    <MdEmail className="signlog-icons"/>
                    <input type="email" className = "logorsign-input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <RiLockPasswordFill className="signlog-icons"/>
                    <input type="password" className = "logorsign-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>                  
                    <button className="form-btn">Submit</button>
                    <h3 className="small-text">Already have an account?</h3>
                    <button className = "form-btn" onClick={(e)=>{setlogSwitch(true)}}>Log in</button>
                </form>
                </section>

                    <div className="description-container">
                        <h2 className="page-description">People going to gigs, but do not have friends with similar music taste and therefore have to go alone</h2>
                    </div>
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
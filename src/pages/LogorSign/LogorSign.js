import { useState } from "react";
import './LogorSign.css'
import { useNavigate } from "react-router-dom";
import { createUser, logInUser, deleteUser} from '../../utils/fetchReq'

//login or sign up user
export const LogOrSign = ({setDisplayEvent, setValue, trendingEvents}) => {
    const [user, setUser]=useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [imageUrl, setImageUrl] = useState("steve");
    const submitHandlerCreate=(e)=>{
        e.preventDefault();
        createUser(username, email, password, setUser);
    };
    const navigate =  useNavigate()
    const submitHandlerLogin = (e)=>{
        e.preventDefault();
       logInUser(username, password, setUser);
       if(user){
        navigate("/popular")
       }
       
        
    };

    try { 
        // switch between log in page and sign up page
        const [logSwitch, setlogSwitch] = useState(true);
        return(<>
           
            <div className="body">
                { logSwitch ? 
                <div className="formContainer">
               <form className="login-form" onSubmit={submitHandlerLogin}>
                    <h1 className="text">Log In</h1>
                    <input placeholder="Username" className="logorsign-input" onChange={(e)=>setUserName(e.target.value)}/>
                    <input className = "logorsign-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>                  
                    <button className="loginButton">Submit</button>
                    <h3 className="smallText">Don't have an account?</h3>
                    <button className = "loginButton" onClick={(e)=>{setlogSwitch()}}>Sign Up</button>
                   
                </form>
                </div>
                :
                <div className="formContainer">
                <form className="login-form" onSubmit={submitHandlerCreate}>
                    <h1 className="text">Create Profile</h1>
                    <input placeholder="Username" className="logorsign-input" onChange={(e)=>setUserName(e.target.value)}/>
                    <input className="logorsign-input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="logorsign-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="loginButton" type="submit">Submit</button>
                   
                        <h3 className="smallText">Already have an account?</h3>                
                        <button className = "switchButton"onClick={(e)=>{setlogSwitch(true)}}>Log In</button>
                       
                  
                </form>
                </div>
                }
            </div> </>
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
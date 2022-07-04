import { useState } from "react";
import './LogorSign.css'
import { createUser, logInUser, deleteUser} from '../../utils/fetchReq'

//login or sign up user
export const LogOrSign = ({setUser}) => {

    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const submitHandlerCreate=(e)=>{
        e.preventDefault();
        createUser(username, email, password, setUser);
    };

    const submitHandlerLogin = (e)=>{
        e.preventDefault();
        logInUser(username, password, setUser);
    };

    try { 
        // switch between log in page and sign up page
        const [logSwitch, setlogSwitch] = useState(true);
        return(
            <div className="formContainer">
                { logSwitch ? 
               <form className="logIn form" onSubmit={submitHandlerLogin}>
                    <h1 className="login-title">Log In</h1>
                        <input placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>
                        <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        <div className="btnContainer">
                            <button className="loginButton" type="submit">Log In</button>
                            <button className="switchButton" onClick={(e)=>{setlogSwitch()}}>Sign Up Here</button>
                    </div>
                </form>
                :
                <form className="signUp form" onSubmit={submitHandlerCreate}>
                    <h1>Create Profile</h1>
                    
                        <input placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>
                        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        <div className="btnContainer">
                            <button className="loginButton" type="submit">Create Account</button>
                            <button className="switchButton" onClick={(e)=>{setlogSwitch(true)}}>Log In Here</button>
                        </div>
                </form>
                }
            </div> 
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
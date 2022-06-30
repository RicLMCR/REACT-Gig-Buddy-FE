import { useState } from "react";
import './LogorSign.css'
// import { createUser, logInUser, } from "../../utils";

export const LogorSign = () => { 
    // switch between log in page and sign up page 
    try { 
        const [logSwitch, setlogSwitch] = useState(true);
        return(
            <div>
                { logSwitch ? 
               <form className="createUser">
                    <h1>Create user</h1>
                        <input placeholder="Username"/>
                        <input placeholder="Password"/>
                    <button onClick={(e)=>{setlogSwitch()}}>Log in</button>
                    <button>Submit</button>
                </form>
                :
                <form className="login">
                <h1>Log in</h1>
                <input placeholder="Username"/>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                
                <button onClick={(e)=>{setlogSwitch(true)}}>Create profile</button>
                <button>Submit</button>
                </form>
                }
            </div> 
        )
    } catch (error){ 
        console.log (error)
    }
}
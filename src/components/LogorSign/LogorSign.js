import { useState } from "react";
// import './LogorSign.css'
import { createUser} from '../../utils/fetchReq'

export const LogorSign = () => { 
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // switch between log in page and sign up page 

    const submitHandlerCreate=(e)=>{
        e.preventDefault();
        createUser(username, email, password);
    };

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
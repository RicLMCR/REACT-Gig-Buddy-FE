import './App.css';
import { useEffect, useState} from 'react';
import BuddySwipe from './components/buddySwipe';
import { logInUser } from './utils/fetchReq';
import TestFunc from './components/test';


function App() {
  try {
    return (
      <div className="App">
        <h1>Gig Buddy</h1>
        <BuddySwipe/>
        <TestFunc/>
        <button onClick={logInUser}>Log In</button>
      </div>
    );
  } catch (error) {
    
  }
}

export default App;

import './App.css';
import { useEffect, useState} from 'react';
import BuddySwipe from './components/buddySwipe';


function App() {
  try {
    return (
      <div className="App">
        <h1>Gig Buddy</h1>
        <BuddySwipe/>
      </div>
    );
  } catch (error) {
    
  }
}

export default App;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcQmBIXvoHKWaB7VOOU4ZxUdR0LvC2Yd8",
    authDomain: "gig-buddy.firebaseapp.com",
    projectId: "gig-buddy",
    storageBucket: "gig-buddy.appspot.com",
    messagingSenderId: "823542419306",
    appId: "1:823542419306:web:9ac54483501c0633071f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
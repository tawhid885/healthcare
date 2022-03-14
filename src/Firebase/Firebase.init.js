// firebase project name : you-heal 
// link : https://dribbble.com/shots/7347477-Doctor-Search?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=Doctor%20Search&utm_medium=Social_Share
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


// Initialize Firebase
const FirebaseInit=()=>{
    initializeApp(firebaseConfig);
}

export default FirebaseInit;
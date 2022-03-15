import { useEffect, useState } from "react"
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import FirebaseInit from "./../Firebase/Firebase.init";


FirebaseInit();
const useFirebase=()=>{
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              // User is signed out
              // ...
            }
          });
    },[]);

    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithEmail=()=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createNewUser=()=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateProfileInfo=()=>{
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }

    const logOut=()=>{
        return signOut(auth)
    }

    return {
        email, 
        password,
        name, 
        setUser,
        setName,
        setEmail,
        setPassword,
        user,   
        error, 
        setError,
        createNewUser,
        updateProfileInfo,
        signInWithGoogle,
        signInWithEmail,
        logOut
    }
}

export default useFirebase;
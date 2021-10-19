import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
        });
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleRegistrantion = e =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
        })
        e.preventDefault();
    }

    

    

   

    return{
        user,
        logOut,
        signInUsingGoogle,
        handleRegistrantion,
        handleEmailChange,
        handlePasswordChange
    }
}

export default useFirebase;

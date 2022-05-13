import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        e.preventDefault();
        if(password.length < 6){
            setError('Password should be at least 6 characters.')
            return
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            setError('');
            alert('Successfully registration completed.')
            e.target.reset();
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const handleLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    alert('Successfully logged in')
            e.target.reset();
  })
  .catch(error=>{
    setError(error.message);
})


    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        });
        return ()=> unsubscribed;
    },[auth])

    

    return{
        user,
        logOut,
        signInUsingGoogle,
        handleRegistrantion,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        error
    }
}

export default useFirebase;

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInAnonymously } from "@firebase/auth";
import { auth, provider } from "../firebase";
import { useState } from "react";
import "../styles/logIn.css";

export default function LogIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logOrSignButton, setlogOrSignButton] = useState("Sign Up?");

    function logIn(){
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                window.location.href = "/card";
            }).catch((error) => {
                console.log(error)
            });
    }
    function createAccount(){
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                window.location.href = "/card";
            }).catch((error) => {
                console.log(error)
            });
    }
    function signInWithGoogle(){
        signInWithPopup(auth, provider)
            .catch((error)=>{
                console.log(error);
            })
    }
    function signInAnonymous(){
        signInAnonymously(auth)
            .then(()=>{
                window.location.href = "/card";
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return (
        <div className="form">
            <h1>Log In or Sign Up</h1>
            <br/>
            <input placeholder="Username" type="Username" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <input placeholder="Password" type="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <br/>
            {logOrSignButton === "Sign Up?"? <button className="credSubmit" onClick={logIn}>Log In</button> : <button className="credSubmit" onClick={createAccount}>Create Account</button>}
            <h4>or</h4>
            <button className="logOrSign" onClick={()=>{
                if (logOrSignButton === "Log In?"){
                    setlogOrSignButton("Sign Up?")
                } else {
                    setlogOrSignButton("Log In?")
                }
            }}>{logOrSignButton}</button>
            <button className="signInWithGoogle" onClick={signInWithGoogle}>Sign in with Google?</button>
            <button className="anonSignIn" onClick={signInAnonymous}>Anonymous Sign In?</button>
        </div>
    )
}
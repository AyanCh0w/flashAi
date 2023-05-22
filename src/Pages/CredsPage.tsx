import { useEffect, useState } from "react"
import LogIn from "../components/LogIn"
import SignUp from "../components/SignUp"
import { signInWithPopup } from "firebase/auth"
import { provider, auth } from "../firebase"
import { sign } from "crypto"

export default function LoginPage(){
    const [LS, setLS] = useState(true)
    const [LSC, setLSC] = useState(<LogIn/>)
    const [btn, setBtn] = useState("Sign Up?")
    useEffect(()=>{
        switch(LS){
            case true:
                setLSC(<LogIn/>);
                break;
            case false:
                setLSC(<SignUp/>);
                break;
        };
    })
    function signInWithGoogle(){
        signInWithPopup(auth, provider)
            .catch((error)=>{
                console.log(error);
            })
    }
    return (
        <div>
            <div><button onClick={signInWithGoogle}>Sign in with Google</button></div>
            <div>{LSC}</div>
            <button onClick={()=>{
                if (LS) {
                    setLS(false);
                    setBtn("Log In?");
                } else {
                    setLS(true);
                    setBtn("Sign Up?");
                }}}>{btn}</button>
        </div>
    )
}
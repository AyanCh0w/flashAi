import { signInWithEmailAndPassword } from "@firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"

export default function LogIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function logIn(){
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>
            <h3>Log in</h3>
            <input placeholder="Username" type="Username" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br />
            <input placeholder="Password" type="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br />
            <button onClick={logIn}>LogIn</button>
        </div>
    )
}
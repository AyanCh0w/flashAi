import { createUserWithEmailAndPassword } from "@firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"

export default function SignUp(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function signIn(){
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <input placeholder="Username" type="Username" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input placeholder="Password" type="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={signIn}>Create</button>
        </div>
    )
}
import { useEffect, useState } from "react"
import { signOut } from "firebase/auth";
import { auth } from "../firebase"

export default function NavBar(){
    const [loggedIn, setLoggedIn] = useState(false);

    function CustomLink({ href, children, ...props}:any){
        const path = window.location.pathname
        return (
            <li className={path === href ? "active" : ""}>
                <a href={href} {...props}>
                    {children}
                </a>
            </li>
        )
    }

    useEffect(auth.onAuthStateChanged((user)=>{
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }))

    return(
        <div>
            <ul>
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                {loggedIn ? <CustomLink href="/card">Cards</CustomLink> : <CustomLink href="/login">Login</CustomLink>}
                {loggedIn ? <button onClick={()=>{signOut(auth)}}>Sign Out</button> : ""}
            </ul>
        </div>
    )
}
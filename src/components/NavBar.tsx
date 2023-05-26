import { useEffect, useState } from "react"
import { signOut } from "firebase/auth";
import { auth } from "../firebase"
import "../styles/navBar.css"

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
            <ul className="navbar">
                <li className="Logo"><p>FlashAI</p></li>
                <li><i className="gg-ratio"></i></li>
                <CustomLink href="/">Home</CustomLink>
                {loggedIn ? <CustomLink href="/card">Flash Cards</CustomLink> : <CustomLink href="/login">Login</CustomLink>}
                <li>{loggedIn ? <button className="signOut" onClick={()=>{signOut(auth)}}>Sign Out</button> : ""}</li>
            </ul>
        </div>
    )
}
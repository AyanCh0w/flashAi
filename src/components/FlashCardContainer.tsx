import { useState, useEffect } from "react";
import Flashcard from "../components/FlashCard";
import { auth } from "../firebase";

export default function FlashCardContainer(){
    const [query, setQuery] = useState("");

    const [loggedIn, setLoggedIn] = useState(true);
    useEffect(auth.onAuthStateChanged((user)=>{
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }))

    const jsonData = [
        {
            question:"whats 9 plus 10",
            answer:"21",
            hint:"dumbo"
        },
        {
            question:"whats19 plus 10213",
            answer:"2421",
            hint:"dum1`331bo"
        }
    ]

    if (loggedIn){
        return (
            <div>
                <div>
                    <textarea/>
                    <button onClick={()=>{console.log(query)}}>Generate</button>
                </div>
                <div>
                    <ul>{jsonData.map((card) => <li key={card.hint}><Flashcard question={card.question} answer={card.answer} hint={card.hint}/></li>)}</ul>
                </div>
            </div>
            
        )
    } else (
        window.location.pathname = "/login"
    )
    return (
        <p>Log in first</p>
    )
}
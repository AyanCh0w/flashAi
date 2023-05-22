import { useState, useEffect } from "react";
import Flashcard from "../components/FlashCard";
import { auth } from "../firebase";

export default function FlashCardContainer(){
    const [query, setQuery] = useState("");
    const [loggedIn, setLoggedIn] = useState(true);
    const [car, setCar] = useState(JSON.parse('[{"question":"Whats 9 + 10", "answer":"idk", "hint":"bruh"}, {"question":"Whats 9 +s 10", "answer":"isdk", "hint":"brsuh"}]'));

    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
    }, []);

    async function data(){
        let newCar = JSON.parse('[{"question":"Whats axad9ss + 10", "answer":"idk", "hint":"bruh"}, {"question":"Whats 9 +s 10", "answer":"issdk", "hint":"brsuh"}]');
        setCar(newCar);
    }

    if (loggedIn){
        return (
            <div>
                <div>
                    <textarea/>
                    <button onClick={data}>Generate</button>
                </div>
                <div>
                    <ul>{car.map((card:any) => <li key={card.hint}><Flashcard question={card.question} answer={card.answer} hint={card.hint}/></li>)}</ul>
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

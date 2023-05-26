import { useState, useEffect } from "react";
import Flashcard from "./FlashCard";
import { auth } from "../firebase";
import "../styles/cardCenter.css";
import { Configuration, OpenAIApi } from "openai";


export default function FlashCardContainer(){
    const [loggedIn, setLoggedIn] = useState(true);
    const [cardSetData, setCardSetData] = useState(JSON.parse('[{"question":"Why is there only one card?", "answer":"Because you havent generated them", "hint":"Click generate"}]'));
    const [input, setInput] = useState("");
    const [currentCard, setCurrentCard] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
    }, []);

    async function getCardData(){
        setLoading(true);
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ""
                },
                body: JSON.stringify({
                'prompt': 'write a list of 10 questions, answers, and hints on ' + input + ' questions. Format in JSON as [{question, answer, hint}]. ONLY RETURN CODE, NO APOSTROPHES. use "" for strings and property names.',
                'temperature': 0.1,
                'max_tokens': 1024,
                'top_p': 1,
                'frequency_penalty': 0,
                'presence_penalty': 0.5,
                'stop': ["\"\"\""],
                })
            };
            fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(JSON.parse(data["choices"][0]["text"]));
                    setCardSetData(JSON.parse(data["choices"][0]["text"]));
                    setLoading(false);
        })
        } catch {
            let newCard = JSON.parse('[{"question":"Why didnt it work?", "answer":"An error occured, try again! This will not charge you", "hint":"🤷"}]');
            setCardSetData(newCard);
            setLoading(false);
        }
        setCurrentCard(0);
    }

    if (loggedIn){
        return (
            <div className="cardPage">
                <div className="cards">
                    <div className="cardInput">
                        <input className="cardQuery" onChange={(e)=>{setInput(e.target.value)}} placeholder="topic here"/>
                        <button onClick={()=>{getCardData()}} className="generateButton">Generate</button>
                    </div>
                    <br/>
                    {loading === true ? 
                    <div>
                        <i className="gg-loadbar-alt"></i> 
                    </div>
                    : 
                    <div className="cardSelector">
                        <button className="left" onClick={()=>{if (currentCard > 0){setCurrentCard(currentCard - 1)}}}><i className="gg-arrow-left-r"></i></button>
                        <p>{currentCard + 1}/{cardSetData.length}</p>
                        <button className="right" onClick={()=>{if (currentCard + 1 < cardSetData.length){setCurrentCard(currentCard + 1)}}}><i className="gg-arrow-right-r"></i></button>
                    </div> 
                    }
                    <div>
                    <ul><li><Flashcard question={cardSetData[currentCard].question} answer={cardSetData[currentCard].answer} hint={cardSetData[currentCard].hint}/></li></ul>
                    </div>
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
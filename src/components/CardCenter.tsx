import { useState, useEffect } from "react";
import Flashcard from "./FlashCard";
import { auth } from "../firebase";
import "../styles/cardCenter.css";

export default function FlashCardContainer(){
    //const [query, setQuery] = useState("");
    const [loggedIn, setLoggedIn] = useState(true);
    const [cardSetData, setCardSetData] = useState(JSON.parse('[{"question":"Why is there only one card?", "answer":"Because you havent generated them", "hint":"Click generate"}]'));
    const [input, setInput] = useState("");
    const [currentCard, setCurrentCard] = useState(0);
    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
    }, []);

    async function getCardData({prompt}:any){
        let newCard = JSON.parse('[{"question": "What did Charles Darwin call his theory of natural selection?","answer": "The Origin of Species","hint": "The title of Darwins book that introduced the theory"},{"question": "What is the name of the people who believed that organisms did not alter with time and remained in its original form?","answer": "Lamarckians","hint": "They are named after their primary advocate"}, {"question": "What is the specialisation of a population of an organism known as?","answer": "Adaptation","hint": "It is the process by which an organism can better adjust to its environment"}, {"question": "What are offsprings with particular characteristics, depending on the prevalence of such characteristics in the population, called?","answer": "Selective Breeding","hint": "The process which is used to determine which parent organism will pass on its genes to the next generation"}, {"question": "What is the mechanism of evolution known as?","answer": "Natural Selection","hint": "The primary process which causes changes in the genetic makeup of an organism or population over time"}]');
        setCardSetData(newCard);
        console.log(prompt);
    }

    if (loggedIn){
        return (
            <div className="cardPage">
                <div className="cards">
                    <div className="cardInput">
                        <input className="cardQuery" onChange={(e)=>{setInput(e.target.value)}} placeholder="topic here"/>
                        <button onClick={()=>{getCardData(input)}} className="generateButton">Generate</button>
                    </div>
                    <br/>
                    <div className="cardSelector">
                        <button className="left" onClick={()=>{if (currentCard > 0){setCurrentCard(currentCard - 1)}}}><i className="gg-arrow-left-r"></i></button>
                        <p>{currentCard + 1}/{cardSetData.length}</p>
                        <button className="right" onClick={()=>{if (currentCard + 1 < cardSetData.length){setCurrentCard(currentCard + 1)}}}><i className="gg-arrow-right-r"></i></button>
                    </div> 
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

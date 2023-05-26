import "../styles/flashCard.css"

export default function Flashcard({question, answer, hint}:any){
  return (
    <div className="cardContainer">
        <div className="flashcard">
          <div className="question">
            <h4>Question: {question}</h4>
          </div>
          <div className="answer">
            <h4>Answer: {answer}</h4>
          </div>
        </div>
    </div>
  )
}
//<div className="hint">
//  <h4>Hint: {hint}</h4>
//</div>
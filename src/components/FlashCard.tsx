export default function Flashcard({question, answer, hint}:any){
  return (
    <div>
        <div className="card">
          <h4>Question: {question}</h4>
          <h4>Answer: {answer}</h4>
          <h4>Hint: {hint}</h4>
        </div>
    </div>
  )
}
import "../styles/home.css"

export default function HomePage(){
    return(
        <div className="body">
            <h1>Welcome to Flash AI!</h1>
            <p>Flash AI is here to revolutionize the way you study. With our powerful app, you can instantly generate and customize your own flashcard set off of a topic you input with just a few taps. Say goodbye to hours of manual work creating your own flashcards on paper — Flash AI does the work for you.</p>
            <h3>Features:</h3>
            <ol>
                <li>Instant flashcard set generation off of topics you input</li>
                <li>Customizable to your exact needs</li>
                <li>Make as many flashcards and sets as you want</li>
            </ol>
            <a href="/login">Try It Today!</a>
            <p>Create an account with Flash AI and start revolutionizing the way you study today. Getting started is easy, and you can start taking advantage of its powerful features in no time. Whether it’s for school or just personal study, Flash AI has you covered.</p>
        </div>
    )
}
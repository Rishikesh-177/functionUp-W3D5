import React, { useState } from "react" ;

function GuessingGame() {
    //state variables
    
   const [luckyNumber] = useState(42);
    const [Guess, setGuess] = useState("");
    const [Result, setResult] = useState('');
    const [numAttempts, setNumAttempts] = useState(0);


// Event handler for guess button
const handleGuess = () => {
    
  const numGuess = parseInt(Guess);

    if (numGuess < luckyNumber) {
        setResult("You guessed a samller number. Try again");
         } else if (numGuess > luckyNumber) {
            setResult("You guessed a bigger number. Try again");
         } else {
            const attempts = numAttempts + 1;
            setNumAttempts(attempts);
            setResult(`congratulations! You guessed the right number in ${attempts} attempts.`);
         }
         setGuess("");
};

//render UI
return (
<div className="guess-game-container">
    <h1 className= "guess-game-title" >Guess the Lucky Number</h1>
    <p className="guess-game-instructions"> Guess a Number between 1 and 100: </p>
    <input className="guess-game-input"
    type="number"
    
     value={Guess} 
    onChange={( event ) => setGuess(event.target.value)} 
     />
     <br />
    <button className = "guess-game-button" onClick={handleGuess}> Guess </button>
    <p className="guess-game-result" > {Result}</p>
</div>
);
}

export default GuessingGame

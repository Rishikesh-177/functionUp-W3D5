import React, { useState } from 'react';

function QuestionForm () {
    const [question, setQuestion] = useState("");
const [ setOptions] = useState([]);
const [correctAnswer, setCorrectAnswer] = useState("");
const [ setAttachments] = useState([]);
const [ setEquation] = useState("");

const handleQuestionSubmit = (e) => {
    e.preventDefault();

//Perform logic to handle question submission
// Gather question, options, correct answer, attachments, equations
    
    // Reset form fields
    setQuestion("");
    setOptions("");
    setCorrectAnswer("");
    setAttachments([]);
    setEquation("");
};

  return (
    <div>
      <h2>Create Question</h2>
      <form onSubmit={handleQuestionSubmit}>
 <label>
        Question:
        <input
        type='text'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        />
    </label>
    <br />


    <label>
        Correct Answer:
        <input
        type='text'
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        />
    </label>
    <br />

    <button  type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default QuestionForm;

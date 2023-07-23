import Link from 'next/link';
import { quiz } from "../../data.js";
import { useEffect, useState } from "react";

export default function FirstQuestions() {

const [activeQuestion, setActiveQuestion] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [checked, setChecked] = useState(false);

const { questions } = quiz;


  // Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === checked) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

    // Increment to next question
    const nextQuestion = () => {
      setSelectedAnswerIndex(null)
      if (activeQuestion !== question.length - 1) {
          setActiveQuestion((prev) => prev + 1)
      } else {
          setActiveQuestion(0)
      }
      setChecked(false);
    }

  return (
    <>
      <h1>Survey page!</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <form>
        <label for="first-question">{questions[activeQuestion].question}</label>
        <input type="number" id="first-question"></input>

        {checked ? (

              <button onClick={nextQuestion} className="btn">
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} className="btn-disabled">
                {' '}
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}

        <label for="second-question">{questions[activeQuestion + 1].question}</label>
        <input type="date" id="second-question"></input>
      </form>
    </>
  );
}

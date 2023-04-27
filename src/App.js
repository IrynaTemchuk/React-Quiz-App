import './App.css';
import React, { useState } from 'react';


const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const [questions, setQuestions] = useState([
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]);

	const [bgStyleCorrect, setBgStyleCorrect] = useState("");
	const [bgStyleIncorrect, setBgStyleIncorrect] = useState("");

	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect === true) {
			setScore(score + 1);
			alert("This answer is correct!");			
		} else {
					
			alert("This answer is false!");
		}

		setBgStyleCorrect("correct")
		setBgStyleIncorrect("incorrect")
	}

	const next = () => {
		setBgStyleCorrect("")
		setBgStyleIncorrect("")
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true)
		}
	}

	const resetQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false)
	}


	return (
		<div className='app'>
			<h1>Quiz App</h1>
			<div className='container'>
				{showScore ? (
					<>
						<div className='score'>
							<div className='score-section'>You scored {score} out of {questions.length}</div>
							<button class="play-again-button" onClick={() => resetQuiz()}>Play Again</button>
						</div>
					</>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOptions) => (
								<button
									className={answerOptions.isCorrect === true ? bgStyleCorrect : bgStyleIncorrect}
									onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>))}
						</div>
						<div>
								<button onClick={() => next()}>Next</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default App;

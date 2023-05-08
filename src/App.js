import './App.css';
import React, { useState } from 'react';


// ALL CONST/FUNCTIONS
const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const [questions, setQuestions] = useState([
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ id: 1, answerText: 'New York', isCorrect: false },
				{ id: 2, answerText: 'London', isCorrect: false },
				{ id: 3, answerText: 'Paris', isCorrect: true },
				{ id: 4, answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ id: 1, answerText: 'Jeff Bezos', isCorrect: false },
				{ id: 2, answerText: 'Elon Musk', isCorrect: true },
				{ id: 3, answerText: 'Bill Gates', isCorrect: false },
				{ id: 4, answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ id: 1, answerText: 'Apple', isCorrect: true },
				{ id: 2, answerText: 'Intel', isCorrect: false },
				{ id: 3, answerText: 'Amazon', isCorrect: false },
				{ id: 4, answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ id: 1, answerText: '1', isCorrect: false },
				{ id: 2, answerText: '4', isCorrect: false },
				{ id: 3, answerText: '6', isCorrect: false },
				{ id: 4, answerText: '7', isCorrect: true },
			],
		},
	]);

	const handleAnswerButtonClick = (id, isCorrect) => {
		if (isCorrect === true) {
			document.getElementById(id).style.backgroundColor = "green"
			setScore(score + 1);
		} else {
			document.getElementById(id).style.backgroundColor = "red"
		}

		var collection = document.getElementsByClassName('button-answer')
		for (let i = 0; i < collection.length; i++) {
			collection[i].disabled = true;
		}
	}

	const resetBtnAnswer = () => {
		var collection = document.getElementsByClassName('button-answer')
		for (let i = 0; i < collection.length; i++) {
			collection[i].style.backgroundColor = "";
			collection[i].disabled = false;
		}
	}

	const next = () => {
		resetBtnAnswer("")
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

// APP STRUCTURE 
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
						<div className='progress-bar'>
							<span className='timer'></span>
						</div>
						<div className='question'>
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {currentQuestion + 1}</span>/{questions.length}
								</div>
								<div className='question-text'>{questions[currentQuestion].questionText}</div>
							</div>
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOptions) => (
									<button
										id={answerOptions.id}
										className='button-answer'
										onClick={() => handleAnswerButtonClick(answerOptions.id, answerOptions.isCorrect)}>{answerOptions.answerText}</button>))}
							</div>
						</div>
						<div className='nextbtn-section'>
							<button className='nextbtn' onClick={() => next()}>Next</button>
						</div>

					</>
				)}
			</div>
		</div>
	);
}

export default App;

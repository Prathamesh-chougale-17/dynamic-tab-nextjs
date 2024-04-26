"use client";

import { useState, useEffect } from "react";

interface QuestionData {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: QuestionData[] = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  // Add more questions here
  {
    question: "What is the capital of Germany?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Berlin",
  },
  {
    question: "What is the capital of Spain?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Madrid",
  },
  {
    question: "What is the capital of the United Kingdom?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "London",
  },
  {
    question: "What is the capital of Italy?",
    options: ["London", "Paris", "Rome", "Madrid"],
    correctAnswer: "Rome",
  },
  {
    question: "What is the capital of the United States?",
    options: ["Washington D.C.", "New York", "Los Angeles", "Chicago"],
    correctAnswer: "Washington D.C.",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    correctAnswer: "Ottawa",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correctAnswer: "Canberra",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    correctAnswer: "Tokyo",
  },
  {
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    correctAnswer: "Beijing",
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "St. Petersburg", "Novosibirsk", "Yekaterinburg"],
    correctAnswer: "Moscow",
  },
  {
    question: "What is the capital of Brazil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correctAnswer: "Brasília",
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
    correctAnswer: "Delhi",
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [tabChangeCount, setTabChangeCount] = useState(0);

  const handleAnswerChange = (answer: string) => {
    setUserAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer === currentQuestion.correctAnswer) {
      if (currentQuestionIndex === 13) {
        setScore(score + 1);
      }
    }
    setUserAnswer("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setTabChangeCount(tabChangeCount + 1);
        if (tabChangeCount >= 2) {
          setScore(-1);
          alert(
            "You have switched tabs or left the website too many times. You have failed the quiz."
          );
        } else {
          alert(
            "You have switched tabs or left the website. Please stay on this page to continue the quiz."
          );
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [tabChangeCount]);

  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestionIndex >= questions.length || score === -1) {
    return (
      <div>
        Quiz completed! Your score is {score} out of {questions.length}
      </div>
    );
  }

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            name="answer"
            value={option}
            checked={userAnswer === option}
            onChange={() => handleAnswerChange(option)}
          />
          {option}
        </div>
      ))}
      <button onClick={handleNextQuestion} disabled={!userAnswer}>
        Next Question
      </button>
    </div>
  );
};

export default QuizPage;

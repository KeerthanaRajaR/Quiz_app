"use client";

import { useCallback, useEffect, useState } from "react";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";

function shuffleQuestions(questionList: typeof questions) {
  const shuffled = [...questionList];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

const QUESTION_TIME_LIMIT = 15;

const ALL_CATEGORIES = "All categories";

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [quizQuestions, setQuizQuestions] = useState<typeof questions>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);

  const categories = [
    ALL_CATEGORIES,
    ...new Set(questions.map((question) => question.category).filter(Boolean) as string[]),
  ];

  const getQuizPool = useCallback(() => {
    const filteredQuestions =
      selectedCategory === ALL_CATEGORIES
        ? questions
        : questions.filter((question) => question.category === selectedCategory);

    return shuffleQuestions(filteredQuestions);
  }, [selectedCategory]);

  const currentQuestion = quizQuestions[currentIndex];
  const progress = quizQuestions.length
    ? Math.round(((currentIndex + 1) / quizQuestions.length) * 100)
    : 0;

  const handleStartQuiz = () => {
    const nextQuizQuestions = getQuizPool();

    setQuizQuestions(nextQuizQuestions);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizComplete(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setQuizStarted(true);
  };

  const handleNext = useCallback(() => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(QUESTION_TIME_LIMIT);
    } else {
      setQuizComplete(true);
    }
  }, [currentIndex, quizQuestions.length]);

  useEffect(() => {
    if (!quizStarted || quizComplete || isAnswered || quizQuestions.length === 0) {
      return;
    }

    const timerId = window.setTimeout(() => {
      if (timeLeft <= 1) {
        handleNext();
        return;
      }

      setTimeLeft((currentTime) => currentTime - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [timeLeft, isAnswered, quizComplete, handleNext, quizStarted, quizQuestions.length]);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === currentQuestion.answer) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const handleRetake = () => {
    setQuizQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizComplete(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setQuizStarted(false);
  };

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <ResultCard
          score={score}
          totalQuestions={quizQuestions.length}
          onRetake={handleRetake}
        />
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Quiz App</h1>
            <p className="text-gray-600 text-lg">
              Pick a category, then start a fresh shuffled quiz.
            </p>
          </div>

          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">
            Choose a category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <div className="mt-8 flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-800">
            <span>{selectedCategory === ALL_CATEGORIES ? "All questions" : selectedCategory}</span>
            <span>{questions.filter((question) => selectedCategory === ALL_CATEGORIES || question.category === selectedCategory).length} questions</span>
          </div>

          <button
            onClick={handleStartQuiz}
            className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-700"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Quiz App</h1>
          <p className="text-gray-600 text-lg">
            Question {currentIndex + 1} of {quizQuestions.length}
          </p>
          {currentQuestion.category ? (
            <span className="inline-flex items-center mt-3 rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
              {currentQuestion.category}
            </span>
          ) : null}
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-gray-300 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-right text-sm text-gray-600 mt-2">{progress}% Complete</p>
        </div>

        <div className="mb-6 flex items-center justify-between rounded-lg bg-white px-5 py-4 shadow-sm">
          <p className="text-sm font-medium text-gray-600">Time left</p>
          <p className={`text-2xl font-bold ${timeLeft <= 5 ? "text-red-600" : "text-blue-600"}`}>
            {timeLeft}s
          </p>
        </div>

        {/* Question Card */}
        <div className="mb-8">
          <QuestionCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer || ""}
            isAnswered={isAnswered}
            correctAnswer={currentQuestion.answer}
          />
        </div>

        {/* Score Display */}
        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-gray-700">
            Current Score: <span className="text-green-600">{score}</span>
          </p>
        </div>

        {/* Next Button */}
        {isAnswered && (
          <div className="text-center">
            <button
              onClick={handleNext}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              {currentIndex + 1 === quizQuestions.length ? "See Results" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

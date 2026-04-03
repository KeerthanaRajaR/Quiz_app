interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
}

export default function ResultCard({
  score,
  totalQuestions,
  onRetake,
}: ResultCardProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let resultMessage = "";
  let resultColor = "";
  
  if (percentage === 100) {
    resultMessage = "🎉 Perfect Score! You're a quiz master!";
    resultColor = "text-green-600";
  } else if (percentage >= 80) {
    resultMessage = "🌟 Excellent! You did great!";
    resultColor = "text-blue-600";
  } else if (percentage >= 60) {
    resultMessage = "👍 Good job! Keep practicing!";
    resultColor = "text-yellow-600";
  } else {
    resultMessage = "💪 Nice try! Learn more and try again!";
    resultColor = "text-orange-600";
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <h1 className={`text-5xl font-bold mb-4 ${resultColor}`}>
          {score}/{totalQuestions}
        </h1>
        <p className={`text-2xl font-semibold ${resultColor}`}>{percentage}%</p>
      </div>
      
      <p className="text-3xl font-bold text-gray-800 mb-8">{resultMessage}</p>
      
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <p className="text-gray-700 text-lg mb-4">
          You answered <span className="font-bold text-green-600">{score}</span> out of{" "}
          <span className="font-bold">{totalQuestions}</span> questions correctly.
        </p>
      </div>
      
      <button
        onClick={onRetake}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
      >
        Retake Quiz
      </button>
    </div>
  );
}

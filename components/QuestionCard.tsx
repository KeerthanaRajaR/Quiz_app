interface QuestionCardProps {
  question: string;
  options: string[];
  onAnswer: (option: string) => void;
  selectedAnswer?: string;
  isAnswered: boolean;
  correctAnswer: string;
}

export default function QuestionCard({
  question,
  options,
  onAnswer,
  selectedAnswer,
  isAnswered,
  correctAnswer,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">{question}</h2>
      
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === correctAnswer;
          
          let buttonClass = "w-full p-4 text-left text-lg font-semibold rounded-lg transition-all border-2 ";
          
          if (!isAnswered) {
            buttonClass += "bg-gray-100 border-gray-200 hover:bg-blue-50 hover:border-blue-500 cursor-pointer";
          } else if (isCorrect) {
            buttonClass += "bg-green-100 border-green-500 text-green-800";
          } else if (isSelected && !isCorrect) {
            buttonClass += "bg-red-100 border-red-500 text-red-800";
          } else {
            buttonClass += "bg-gray-100 border-gray-200 text-gray-500";
          }
          
          return (
            <button
              key={option}
              onClick={() => !isAnswered && onAnswer(option)}
              disabled={isAnswered}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

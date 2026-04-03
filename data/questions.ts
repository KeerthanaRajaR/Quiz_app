export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  category?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Chennai", "Delhi", "Mumbai", "Kolkata"],
    answer: "Delhi",
    category: "Geography",
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4",
    category: "Math",
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    category: "Science",
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
    category: "Geography",
  },
  {
    id: 5,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Jane Austen", "William Shakespeare", "Mark Twain", "Charles Dickens"],
    answer: "William Shakespeare",
    category: "Literature",
  },
  {
    id: 6,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    answer: "Au",
    category: "Science",
  },
  {
    id: 7,
    question: "In what year did the Titanic sink?",
    options: ["1912", "1920", "1905", "1915"],
    answer: "1912",
    category: "History",
  },
  {
    id: 8,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
    category: "Math",
  },
];

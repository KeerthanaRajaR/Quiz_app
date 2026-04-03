"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <main className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">Welcome to Quiz App</h1>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Test your knowledge across various topics! Answer multiple-choice questions,
            track your progress, and see your final score.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-auto">
          <div className="mb-8">
            <p className="text-gray-600 mb-4">Ready to challenge yourself?</p>
          </div>
          <Link
            href="/quiz"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Start Quiz
          </Link>
        </div>
      </main>
    </div>
  );
}

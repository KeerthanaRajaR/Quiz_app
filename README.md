# Quiz App

A dynamic quiz application built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Features

- Category selection before starting quiz
- Shuffled question order for each run
- Retake flow that returns to category selection page
- Question timer (15s per question)
- Progress bar and live score tracking
- Answer feedback (correct/incorrect highlighting)
- Final score/result screen

## Project Structure

- app/page.tsx - Home screen
- app/quiz/page.tsx - Quiz flow and state logic
- components/QuestionCard.tsx - Question and options UI
- components/ResultCard.tsx - Result screen UI
- data/questions.ts - Question data

## Run Locally

1. Install dependencies:

	npm install

2. Start dev server:

	npm run dev -- --hostname 127.0.0.1 --port 3000

3. Open in browser:

	http://127.0.0.1:3000

## Quiz Flow

1. Open /quiz
2. Select category (or "All categories")
3. Start quiz
4. Answer questions before timer ends
5. See results
6. Click "Retake Quiz" to return to category selection
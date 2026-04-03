## Quiz App

A dynamic quiz application built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Features

- Category selection before starting a quiz
- Shuffled question order on every run
- Retake flow that returns to category selection
- 15-second timer per question
- Progress bar and live score tracking
- Correct/incorrect answer feedback
- Final score and result screen

## Project Structure

- app/page.tsx - Home screen
- app/quiz/page.tsx - Quiz flow and state management
- components/QuestionCard.tsx - Question and answer options UI
- components/ResultCard.tsx - Final score UI
- data/questions.ts - Quiz question data

## Run Locally

1. Install dependencies:

	npm install

2. Start the development server:

	npm run dev -- --hostname 127.0.0.1 --port 3000

3. Open the app:

	http://127.0.0.1:3000

## Quiz Flow

1. Open `/quiz`
2. Choose a category or keep `All categories`
3. Start the quiz
4. Answer questions before the timer ends
5. View your result screen
6. Click `Retake Quiz` to go back to category selection

## Demo Video
[Screencast from 2026-04-03 12-56-20.webm](https://github.com/user-attachments/assets/49fb98e4-1170-4812-a2c0-0eb966711b1b)

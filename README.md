Enaa Quizizz
A dynamic quiz application built with Angular 19, using the Open Trivia Database API to fetch trivia questions. Users can select quiz categories and difficulty levels, answer questions with instant validation, view their final score, save scores with a username, and see past scores in a history page. The app also supports light/dark theme switching.
Features

Homepage: Choose a quiz category (e.g., General Knowledge, Science) and difficulty (Easy, Medium, Hard) to start a quiz.
Quiz: Answer 5 multiple-choice questions one at a time, with instant feedback (green for correct, red for wrong).
Result: View your final score, get feedback (e.g., "Awesome job!"), save your score with a username, and play again.
History: See a table of past scores (username, score, date) stored in the browser's local storage.
Navigation: A navbar links to Home, History, and Settings pages.

Technologies

Angular 19: Frontend framework for building the app with standalone components.
Open Trivia Database API: Provides quiz questions and categories.
Local Storage: Saves scores and theme preferences in the browser.
Lodash: Used to shuffle quiz answers for randomization.
CSS: Custom styles with CSS variables for light/dark themes.

Prerequisites
To run this app, you need:

Node.js (version 18 or higher)
Angular CLI (install globally with npm install -g @angular/cli)

Setup
Follow these steps to set up and run the app locally:

Clone the Repository (if you have it on GitHub, or skip if local):
git clone <https://github.com/majdeddine-oumanni/ENAA-Quizizz.git>
cd ENAA-Quizizz


Install Dependencies:Run this command to install required libraries (e.g., Angular, Lodash):
npm install


Run the App:Start the development server:
ng serve

Open your browser and go to http://localhost:4200.


Usage

Start a Quiz:

On the homepage, select a category (e.g., "Science") and difficulty (e.g., "Easy") from the dropdowns.
Click "Start Quiz" to begin.


Answer Questions:

Answer each question by clicking one of the four answer buttons.
See instant feedback: correct answers turn green, wrong answers turn red.
Click "Next Question" to continue, or "See Results" on the last question.


View Results:

See your final score (e.g., "30 / 50") and feedback (e.g., "Nice try!").
Enter a username and click "Save Score" to store it.
Click "Play Again" to return to the homepage.


Check History:

Click "History" in the navbar to see a table of saved scores (username, score, date).




Project Structure
quiz-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/          # Homepage for category/difficulty selection
│   │   │   ├── quiz/          # Quiz with questions and instant validation
│   │   │   ├── result/        # Final score, feedback, and save score
│   │   │   ├── history/       # Table of past scores
│   │   │   ├── navbar/        # Navigation bar
│   │   ├── services/
│   │   │   ├── trivia.service.ts  # Handles API calls
│   │   │   ├── theme.service.ts   # Manages theme state
│   │   ├── app.component.ts       # Root component
│   │   ├── app.routes.ts          # Routing configuration
│   ├── styles.css                 # Global styles with theme variables
├── README.md                      # This file
├── package.json                   # Project dependencies and scripts

Contributing
Want to improve the app? Feel free to:

Fork the repository (if on GitHub).
Create a new branch (git checkout -b feature/your-feature).
Make changes and commit (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a pull request.

Suggestions for improvements:

Add a timer for each question.
Support more question types (e.g., true/false).
Add error handling for API failures.


Open Trivia Database for providing free quiz data.
Angular for a powerful frontend framework.

author: MajdEddine oumanni
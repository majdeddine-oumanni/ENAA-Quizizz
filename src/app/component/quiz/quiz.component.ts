import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TriviaService } from '../../services/trivia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { shuffle } from 'lodash-es';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  answers: string[] = [];
  selectedAnswer: string | null = null;
  isAnswered: boolean = false;

  constructor(
    private triviaService: TriviaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const category = this.route.snapshot.queryParamMap.get('category') || '';
    const difficulty = this.route.snapshot.queryParamMap.get('difficulty') || '';
    this.triviaService.getQuestions(category, difficulty).subscribe(data => {
      this.questions = data.results;
      this.loadQuestion();
    });
  }

  loadQuestion() {
    if (this.questions.length > 0) {
      const question = this.questions[this.currentQuestionIndex];
      this.answers = shuffle([
        ...question.incorrect_answers,
        question.correct_answer
      ]);
      this.selectedAnswer = null;
      this.isAnswered = false;
    }
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
    this.isAnswered = true;
    if (answer === this.questions[this.currentQuestionIndex].correct_answer) {
      this.score += 10;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.loadQuestion();
    } else {
      this.router.navigate(['/result'], {
        queryParams: { score: this.score }
      });
    }
  }
}

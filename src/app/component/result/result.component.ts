import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Score {
  username: string;
  score: number;
  date: string;
}

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  score: number = 0;
  feedback: string = '';
  username: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.score = Number(this.route.snapshot.queryParamMap.get('score')) || 0;
    this.setFeedback();
  }

  setFeedback() {
    if (this.score >= 40) {
      this.feedback = 'Awesome job! You’re a quiz master!';
    } else if (this.score >= 20) {
      this.feedback = 'Nice try! Keep practicing!';
    } else {
      this.feedback = 'Don’t worry, try again to improve!';
    }
  }

  saveScore() {
    if (this.username.trim()) {
      const newScore: Score = {
        username: this.username,
        score: this.score,
        date: new Date().toISOString().split('T')[0] // e.g., "2025-04-20"
      };
      const savedScores = localStorage.getItem('quiz-scores');
      const scores: Score[] = savedScores ? JSON.parse(savedScores) : [];
      scores.push(newScore);
      localStorage.setItem('quiz-scores', JSON.stringify(scores));
      this.username = ''; // Clear input
    }
  }

  playAgain() {
    this.router.navigate(['/home']);
  }
}

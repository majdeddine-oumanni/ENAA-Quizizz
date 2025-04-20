import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Score {
  username: string;
  score: number;
  date: string;
}

@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  scores: Score[] = [];

  ngOnInit() {
    const savedScores = localStorage.getItem('quiz-scores');
    if (savedScores) {
      this.scores = JSON.parse(savedScores);
    }
  }
}

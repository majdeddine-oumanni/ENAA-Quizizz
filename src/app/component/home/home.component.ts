import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TriviaService } from '../../services/trivia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: { id: number; name: string }[] = [];
  selectedCategory: string = '';
  selectedDifficulty: string = '';

  constructor(private triviaService: TriviaService, private router: Router) {}

  ngOnInit() {
    this.triviaService.getCategories().subscribe(data => {
      this.categories = data.trivia_categories;
    });
  }

  startQuiz() {
    this.router.navigate(['/quiz'], {
      queryParams: {
        category: this.selectedCategory || undefined,
        difficulty: this.selectedDifficulty || undefined
      }
    });
  }
}
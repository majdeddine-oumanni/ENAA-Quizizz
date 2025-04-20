import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TriviaResponse {
  response_code: number;
  results: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private baseUrl = 'https://opentdb.com';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<{ trivia_categories: { id: number; name: string }[] }> {
    return this.http.get<{ trivia_categories: { id: number; name: string }[] }>(`${this.baseUrl}/api_category.php`);
  }

  getQuestions(category: string, difficulty: string): Observable<TriviaResponse> {
    let url = `${this.baseUrl}/api.php?amount=5&type=multiple`;
    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    return this.http.get<TriviaResponse>(url);
  }
}
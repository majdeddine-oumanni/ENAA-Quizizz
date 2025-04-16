import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Quiz {
  question: string;
  correct_answer: string;
  category: string;
  incorrect_answers: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  quizes: any[] = []; // A place to store our quiz data

  constructor(private http: HttpClient) {} // Get the phone (HttpClient)

  ngOnInit(): void {
    // When the page loads, call the API
    this.http.get('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean').subscribe(data => {
      this.quizes = (data as any).results; // Save the data to our quizes list
      console.log('quizes:', this.quizes); // Check what we got
    });
  }
}
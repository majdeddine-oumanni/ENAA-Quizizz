import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { QuizComponent } from './component/quiz/quiz.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ENAA-Quizizz';
}

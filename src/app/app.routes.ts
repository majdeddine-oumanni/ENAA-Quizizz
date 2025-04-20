import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { HistoryComponent } from './component/history/history.component';
import { ResultComponent } from './component/result/result.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'result', component: ResultComponent}
];

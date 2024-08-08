import { style } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { QuestionHeaderFormComponent } from '../question-header-form/question-header-form.component';
import { QuestionHeaderService } from '../../services/QuestionHeader/question-header.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { HomeService } from '../../services/home/home.service';
import { Questionaires } from '../../Models/questionaires.model';
import { Questions } from '../../Models/questions.model';

declare function addQuestion(): void;
declare function GetUserHeading(userID: number): NewQuestionaire
declare function getAllUserQuestions(questionaireID: number) : []

interface question {
  questionnaireID: number;
  questionText: string;
  questionType: string;
  isRequired: string;
}

interface NewQuestionaire{
  userID: number;
  title: string;
  description: string;
  published: string
}



@Component({
  selector: 'app-new-form',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class NewFormComponent {

  newQuesionaireID = 0

  constructor(private home: HomeService){}
  http = inject(HttpClient);
 
  addNewQuestion(){
    addQuestion()
  }

  postNewQuestion(data: question){
    return this.http.post<Questions>('https://localhost:7098/api/Questions', data)
  }

  saveNewData(){
    return this.http.post<Questionaires>('https://localhost:7098/api/Questionnaires',GetUserHeading(this.home.getUserID())).subscribe(data => {
      console.log(getAllUserQuestions(data.questionnaireID))
      getAllUserQuestions(data.questionnaireID).forEach(element => {
        this.http.post<Questions>('https://localhost:7098/api/Questions', element).subscribe(post => {
          alert('Questions posted')
        })
      });
    })
  }
}

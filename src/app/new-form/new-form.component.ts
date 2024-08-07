import { style } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { QuestionHeaderFormComponent } from '../question-header-form/question-header-form.component';
import { QuestionHeaderService } from '../../services/QuestionHeader/question-header.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { HomeService } from '../../services/home/home.service';

declare function addQuestion(): void;
declare function addHeading(userID: number): void

@Component({
  selector: 'app-new-form',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class NewFormComponent {

  constructor(private home: HomeService){}
  http = inject(HttpClient);

  addHeading(userID: number){
    addHeading(this.home.getUserID())
  }

  
  addNewQuestion(){
    addQuestion()
  }


  saveChanges(){
    //return this.http.post('',addHeading(this.home.getUserID()))
  }
}


//make a list of objects containing the titles then post request each time. 

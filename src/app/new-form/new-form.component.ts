import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { QuestionHeaderFormComponent } from '../question-header-form/question-header-form.component';
import { QuestionHeaderService } from '../../services/QuestionHeader/question-header.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

declare function addQuestion(): void;

@Component({
  selector: 'app-new-form',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class NewFormComponent {
  questions = {
    "title": '',
    "description": ''
  }
  
  addNewQuestion(){
    addQuestion()
  }
}

//make a list of objects containing the titles then post request each time. 

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
  questionCount: number = 0
  
  addNewQuestion(){
    addQuestion()
  }
}

import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { QuestionHeaderFormComponent } from '../../app/question-header-form/question-header-form.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class QuestionHeaderService {
  private question = ''
  constructor(private dialog: MatDialog) { }

  setQuestion(text: string){
    this.question = text
  }

  getQuestion(): string{
    return this.question
  }

  openPopup(){
    this.dialog.open(QuestionHeaderFormComponent)
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuestionHeaderService } from '../../services/QuestionHeader/question-header.service';

@Component({
  selector: 'app-question-header-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './question-header-form.component.html',
  styleUrl: './question-header-form.component.css'
})
export class QuestionHeaderFormComponent {


  text: string = ''
  
  constructor(private question: QuestionHeaderService) {}

  submit(){
    this.question.setQuestion(this.text)
  }

}

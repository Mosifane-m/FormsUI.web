import { Component, inject, OnInit, NgModule } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
import { Route, Router, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Questions } from '../../Models/questions.model';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule ,AsyncPipe, HttpClientModule, RouterOutlet, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  questions: Questions[] | undefined

  constructor(public homeInfo: HomeService, private router: Router) {}

  http = inject(HttpClient)


  ngOnInit(): void {
    this.http.get<Questions[]>(`https://localhost:7098/api/Questions/${this.homeInfo.getQuestionaireID()}`).subscribe((data: Questions[]) =>{
      this.questions = data
      this.homeInfo.setQuestions(this.questions)
    })
  }
}

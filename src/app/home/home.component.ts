import { ChangeDetectorRef, Component, inject, NgModule, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { UserInfo } from '../../Models/userInfo.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home/home.service';
import { Questionaires } from '../../Models/questionaires.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,AsyncPipe, HttpClientModule, RouterOutlet, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit { 

  userInfo: UserInfo[] | undefined
  questionaires: Questionaires[] | undefined;

  constructor(private router: Router, public loginService: LoginService, public _home: HomeService, private cd: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.getInitData()
  }

  http = inject(HttpClient)

  navigateTo(page: string){
    this.router.navigate([page])
  }

  navigateToForm(questionaireID: number, title: string, description: string){
    this._home.setQuestionaireID(questionaireID)
    this._home.setTitle(title)
    this._home.setDescription(description)
    this.router.navigate(["Form"])
  }

  getInitData(){
    this.http.get<UserInfo[]>(`https://localhost:7098/api/UserInfo/${this.loginService.getLogin()}`).subscribe((data: UserInfo[]) => {
      this.userInfo = data
      this._home.setLoginID(this.userInfo[0].userID)
      this._home.setUserID(this.userInfo[0].userID)
      this._home.setName(this.userInfo[0].fullName)
      this._home.setSurname(this.userInfo[0].lastName)
      this._home.setRegistrationDate(this.userInfo[0].registrationDate)

      this.http.get<Questionaires[]>(`https://localhost:7098/api/Questionnaires/${this._home.getUserID()}`).subscribe((forms: Questionaires[]) => {
        this.questionaires = forms
        this._home.setQuestionaire(this.questionaires)
      })
    })
  }

}

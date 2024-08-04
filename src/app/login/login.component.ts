import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../../Models/logins.model';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginID: number | undefined;
  email: string | undefined 
  password: string | undefined;

  constructor(private router: Router, private loginService: LoginService) {}

  http = inject(HttpClient);

  logins$ = this.getLogins();
  
  private getLogins(): Observable<Login[]> {
    return this.http.get<Login[]>('https://localhost:7098/api/Login', )
  }

  navigateTo(page: string){
    this.router.navigate([page])
  }

  verifyUser(page: string){
    var answer: Boolean;
    this.logins$.forEach(login => {
      for (let index = 0; index < login.length; index++) {
        if (login[index].email == this.email){
          if (login[index].passwordHash == this.password){
            //this.LoginID = login[index].loginID;
            this.loginService.setLogin(login[index].loginID)
            this.loginService.setEmail(login[index].email)
            answer = true   
            this.navigateTo('Home')      
          }
        } else{
           answer = false
        }       
      }
      return answer;
    })
  }

}

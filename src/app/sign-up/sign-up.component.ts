import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { newLogin } from '../../Models/signUp.model';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, HttpClientModule , AsyncPipe, RouterOutlet],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  name: string | undefined
  surname: string | undefined
  email: string | undefined
  password: string | undefined
  gender: string | undefined
  handleError: any;

  postLogin = {
    'email':'',
    'password': ''
  }

  postUserInfo = {
    'fullName': '',
    'lastName': '',
    'gender': ''
  }



  constructor(private router: Router){}
  http = inject(HttpClient);

  navigateTo(page: string){
    this.router.navigate([page])
  }

  newUserLogin(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('https://localhost:7098/api/Login', this.postLogin, { headers}).subscribe(response => {
      this.http.post('https://localhost:7098/api/UserInfo', this.postUserInfo, { headers }).subscribe(res => {
        console.log('Post created successfully: ', response)
        alert('Post created successfully')
      })

      this.navigateTo('Login')
    }, error => {
      console.error('Error creating post: ', error)
    }
    )
  }
}

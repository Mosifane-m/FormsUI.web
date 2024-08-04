import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

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

  constructor(private router: Router){}
  http = inject(HttpClient);

  navigateTo(page: string){
    this.router.navigate([page])
  }

  postUser(){
    var body = {
      'email': this.email,
      'password': this.password
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('https://localhost:7098/api/Login', body, { headers })

    this.navigateTo('Home')
  }


}

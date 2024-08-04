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

      this.navigateTo('')
    }, error => {
      console.error('Error creating post: ', error)
    }
    )
  }
}

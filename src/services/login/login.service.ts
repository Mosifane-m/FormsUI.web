import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static getLogin(): number {
    throw new Error('Method not implemented.');
  }
  private LoginID: number = 0
  private Email: string = ''

  constructor() { }

  setLogin(id: number){
    this.LoginID = id
  }
  getLogin(): number {
    return this.LoginID
  }

  setEmail(email: string){
    this.Email = email
  }
  getEmail(){
    return this.Email
  }
}

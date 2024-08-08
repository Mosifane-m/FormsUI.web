import { Injectable } from '@angular/core';
import { Questionaires } from '../../Models/questionaires.model';
import { Questions } from '../../Models/questions.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private UserID: number = 0;
  private LoginID: number = 0;
  private QuestionaireID: number = 0;

  private fullName: string = '';
  private lastName: string ='';
  private title: string = '';
  private description: string = ''

  private registrationDate: Date = new Date("")

  private titles: string[] = []
  private descriptions: string[] = []

  private userQuestionaires: Questionaires[] = []
  private questions: Questions[] = []

  constructor() { }

  setRegistrationDate(date: Date){
    this.registrationDate = date
  }
  getRegistrationDate(){
    return this.registrationDate
  }

  setQuestionaire(questionaire: Questionaires[]){
    this.userQuestionaires = questionaire
  }

  getQuestionaire(){
    return this.userQuestionaires
  }

  setUserID(id: number){
    this.UserID = id
  }
  getUserID(){
    return this.UserID
  }

  setLoginID(id: number){
    this.LoginID = id
  }
  getLoginID(){
    return this.LoginID
  }

  setName(name: string){
    this.fullName = name
  }
  getName(){
    return this.fullName
  }

  setSurname(surname: string){
    this.lastName = surname
  }
  getSurname(){
    return this.lastName
  }

  addTitle(title: string){
    this.titles.push(title)
  }
  getTitles(){
    return this.titles
  }

  addDescription(description: string){
    this.descriptions.push(description)
  }
  getDescriptions(){
    return this.descriptions
  }

  setQuestionaireID(id: number){
    this.QuestionaireID = id;
  }
  getQuestionaireID(){
    return this.QuestionaireID
  }

  setTitle(title: string){
    this.title = title
  }
  getTitle(){
    return this.title
  }

  setDescription(description: string){
    this.description = description
  }
  getDescription(){
    return this.description
  }

  setQuestions(questions: Questions[]){
    this.questions = questions
  }
  getQuestions(){
    return this.questions
  }

}


import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ModelsCheck} from './models/models.check';
import Klic from '../Klic';
import {LoginComponent} from '../login/login.component';
import {Users} from './models/users.models';


@Injectable({
  providedIn: 'root'
})
export class ServiceCheck {


  public static token: ModelsCheck = new ModelsCheck('');

  constructor(private http: HttpClient) {

  }

  getLogin(email: string, password: string) {
    return this.http.post<ModelsCheck>('http://85.160.64.233:3000/session/login', {email, password});
  }

  getRegistration(username: string, email: string, password: string, passwordcontrol: string) {
    return this.http.post<ModelsCheck>('http://85.160.64.233:3000/session/register', {username, email, password, passwordcontrol});
  }

  setToken(token: ModelsCheck) {
    localStorage.setItem("access-token", token.access_token);
    console.log(token);
    ServiceCheck.token = token;
  }
}
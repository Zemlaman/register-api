import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Users} from '../models/users.models';
import {ModelsCheck} from '../models/models.check';
import {ServiceCheck} from './services.check';
import Klic from '../Klic';

@Injectable({
  providedIn: "root"
})
export class UsersService {

  private info: Users = new Users("","","");

  constructor(private http: HttpClient, private check: ServiceCheck) { }

  getUser() {
    const headers = new HttpHeaders()
      .set("User-Token", ServiceCheck.token.access_token);

    console.log(ServiceCheck.token.access_token);

    return this.http.get<Users>('http://85.160.64.233:3000/user', {headers});
  }


}
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Klic from '../Klic';
import { ReturnedData } from '../return-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://85.160.64.233:3000/user';
  accessToken: string;
  

  constructor(
    private httpClient: HttpClient
  ) { }
}

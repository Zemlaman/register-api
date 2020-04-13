import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Klic from '../Klic';
import { ServiceCheck } from '../services/services.check';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

private url ="http://85.160.64.233:3000/session/login";
private email = "";
private password = "";

myStorage = window.localStorage;
dataSource: any;
  ServiceCheck: any;

  constructor (private http: HttpClient, private router: Router, private userService: UserService){

  }

  clickedButton() {
    console.log(Klic.access);
    this.http.post(this.url, {email: this.email, password: this.password }).subscribe(
      (data: any) => {
        Klic.access = data.access_token;
        this.router.navigate(["/active"])
      }, (error) =>{
  
    }
    );
  }

  ngOnInit() {
    if (localStorage.getItem("access-token")) {

      this.ServiceCheck.setToken(localStorage.getItem("access-token"))

      this.router.navigate(["/users"])

    } else {
      this.router.navigate(["/login"])
    }
  }

  localStorage() {

    localStorage.setItem('dataSource', this.dataSource.length);

    console.log(localStorage.getItem('dataSource'));
  }

}
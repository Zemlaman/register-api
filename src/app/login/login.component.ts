import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Klic from '../Klic';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

private url ="http://85.160.64.233:3000/session/login";
private email = "";
private password = "";


  constructor (private http: HttpClient, private router: Router){

  }

  clickedButton() {
    this.http.post(this.url, {email: this.email, password: this.password }).subscribe(
      (data: any) => {
        Klic.access = data.access_token;
        this.router.navigate(["/user"])
      }, (error) =>{
  
    }
    );
  }

  ngOnInit() {
  }

}
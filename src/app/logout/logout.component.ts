import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Klic from '../Klic';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  private url=" http://85.160.64.233:3000/session/logout";
 

  constructor (private http: HttpClient, private router: Router){

  }

  clickedButton() {
    const headers = new HttpHeaders().set('User-Token', Klic.access);
    this.http.delete(this.url, {headers}).subscribe(
      (data: any) => {
      Klic.access = "";
        this.router.navigate(["/home"])
      }, (error) =>{
  
    }
    );
  }

  ngOnInit() {
  }

}
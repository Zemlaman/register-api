import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Klic from '../Klic';

@Component({
  selector: 'app-user',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

private url=" http://85.160.64.233:3000/user";
private email = '';
private username = '';
private id = '';

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders().set('User-Token', Klic.access);
    this.http.get(this.url, {headers}).subscribe(
      (data: any) => {
        this.email = data.email;
        this.username = data.username;
        this.id = data.id;
      }, (error) =>{
  
    }
    );
   }

  ngOnInit() {
  }

}
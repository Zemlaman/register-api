import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Kod from '../Klic';

@Component({
  selector: 'app-user',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss']
})
export class CommentTableComponent implements OnInit {

private url="http://85.160.64.233:3000/comments";
private body;

constructor(private http: HttpClient) {

 }

  ngOnInit() {
    const headers = new HttpHeaders().set('User-Token', Kod.access);
    this.http.get(this.url, {body: this.body, headers: this.headers}).subscribe(
      (data: any) => {
      }, (error) =>{
  
    }
    );
  }

}
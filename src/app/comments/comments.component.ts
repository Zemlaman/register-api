import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Klic from '../Klic';

@Component({
  selector: 'app-register',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
private url = "http://85.160.64.233:3000/comments";
private comment = "";
private header = new HttpHeaders().set("User_token", Klic.access)

  constructor (private http: HttpClient, private router: Router){

  }
  clickedButton() {
    this.http.post(this.url, {comment: this.comment,  headers: this.header,}).subscribe(
      (data: any) => {
        this.router.navigate(["/comment-table"]);
        }, (error) =>{

        }
      );
  }

  ngOnInit() {
  }
}
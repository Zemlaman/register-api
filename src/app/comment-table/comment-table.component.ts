import {Component, OnInit, ɵɵresolveBody} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import { ReturnedData } from '../return-data';
import Klic from '../Klic';
@Component({
  selector: 'app-user-info',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss']
})
export class CommentTableComponent implements OnInit {

  private username;
  private email;

  constructor(private router: Router, private userService: UserService, private httpClient: HttpClient) {
  }

  clickedButton() {
    let header = new HttpHeaders().set('User-Token', this.userService.accessToken);
    let tempUsersArray = [];
    let url = this.userService.url + "users";
    let usersArray = [];
    console.log(this.userService.accessToken);
    
    this.httpClient.get<ReturnedData>(url, {headers: header}).subscribe(
      (data) => {
        for (let i = 0; i < data.page_count +4; i++) {
          this.httpClient.get<ReturnedData>(url + '?page=' + i, {headers: header})
          .subscribe(
            (data) => {
              tempUsersArray = data.users.concat(tempUsersArray);
              usersArray = data.users.concat(tempUsersArray);
              console.log(usersArray);
            },
            error => {
              console.log(error);
            }
          );
        }
      },
      error => {
        if (error.status === 401) {
          this.router.navigate(["/login"]);
        }
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}

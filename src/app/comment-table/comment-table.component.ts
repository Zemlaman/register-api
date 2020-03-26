import { Component, OnInit } from '@angular/core';
import {User} from '../services/models/user.interface';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss']
})
export class CommentTableComponent implements OnInit {

  private users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(i => this.users = i.users);
  }

}
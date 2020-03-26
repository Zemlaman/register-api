import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActiveComponent } from './active/active.component';
import { CommentsComponent } from './comments/comments.component';
import { LogoutComponent } from './logout/logout.component';
import { CommentTableComponent } from './comment-table/comment-table.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent}, {path: 'login', component: LoginComponent}, {path: 'active', component: ActiveComponent}, {path: 'logout', component: LogoutComponent}, {path: 'comments', component: CommentsComponent}, {path: 'comment-table', component: CommentTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './providers/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '' , redirectTo: '/login' , pathMatch: 'full' },
  { path: 'login' , component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'user', component: UsersComponent , canActivate: [AuthGuardService] },
  { path: 'user/:id' , component : UsersComponent , canActivate: [AuthGuardService]},
  { path: 'course', component: CourseComponent , canActivate: [AuthGuardService]},
  { path: 'users', component: UserListComponent , canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

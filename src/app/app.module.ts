import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { Ng2OrderModule } from 'ng2-order-pipe';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { AppService } from './providers/app.service';
import { AuthService } from './providers/auth.service';
import { AuthGuardService } from './providers/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { FirebaseProviderService } from './providers/firebase-provider.service';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AppNavbarComponent,
    CoursesListComponent,
    DashboardComponent,
    CourseComponent,
    UserListComponent,
    LoginComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar : true,
      progressAnimation : 'increasing'
    }),
    MatTableModule,
    Ng2OrderModule
  ],
  providers: [AppService, AuthService , AuthGuardService, FirebaseProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

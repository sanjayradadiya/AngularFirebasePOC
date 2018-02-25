import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { FirebaseProviderService } from '../providers/firebase-provider.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  notificationCount: Number = 0;

  constructor(public auth: AuthService, private fire: FirebaseProviderService) { }

  ngOnInit() {
    this.fire.getNotification('/notification', false).subscribe( (value) => {
      this.notificationCount = value.length;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AppService } from './providers/app.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'my app';

  constructor(
    private appService: AppService,
    private toast: ToastrService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.appService.getOnlineStatus().subscribe(
        value => {
          if (value) {
            setTimeout(() => this.toast.success('App is online', 'Online'));
          } else {
             setTimeout( () => this.toast.warning('App is offline', 'Offline'));
          }
        }
    );
  }
}

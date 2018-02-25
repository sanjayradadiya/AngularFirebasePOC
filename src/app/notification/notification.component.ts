import { Component, OnInit } from '@angular/core';
import { FirebaseProviderService } from '../providers/firebase-provider.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { AngularFireDatabase } from 'angularfire2/database';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('notification', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notificationData: any[];

  constructor(
    private fire: FirebaseProviderService,
    private db: AngularFireDatabase,
    private toast: ToastrService
  ) { }

  ngOnInit() {

    this.db.app.database().ref('/notification').orderByChild('timestamp').startAt(Date.now()).on('child_added', listSnap => {
      const newRec = listSnap.val();
      this.toast.info(newRec.id + ' is ' + newRec.state, 'New Record Found');
    });

    this.fire.getNotification('/notification', false).subscribe( (value) => {
      this.notificationData = _.orderBy(value, ['timestamp'], ['desc']);
    });
  }

  markAsRead(notification: any) {
    const notificationTable = this.db.object('notification/' + notification.$key + '/isRead');
    notificationTable.set(true);
  }

}

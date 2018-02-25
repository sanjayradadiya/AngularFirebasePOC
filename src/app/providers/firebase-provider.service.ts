import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database';
import { UserModel } from '../model/userModel';

@Injectable()
export class FirebaseProviderService {

  constructor(private db: AngularFireDatabase) { }

  getData(listPath): FirebaseListObservable<any[]> {
    return this.db.list(listPath);
  }

  getNotification(listPath, isRead: boolean): FirebaseListObservable<any[]>  {
    return this.db.list(listPath, {
      query: {
        orderByChild : 'isRead',
        equalTo: isRead
      }
    });
  }
}

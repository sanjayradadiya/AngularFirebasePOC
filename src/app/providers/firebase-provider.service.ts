import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserModel } from '../model/userModel';

@Injectable()
export class FirebaseProviderService {

  constructor(private db: AngularFireDatabase) { }

  getData(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}

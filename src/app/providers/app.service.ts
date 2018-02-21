import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AppService {

  private isConnected: Observable<boolean>;

  constructor() { }

  getOnlineStatus() {
    const self = this;
    self.isConnected = Observable.merge(
        Observable.of(navigator.onLine),
        Observable.fromEvent(window, 'online').map(() => true),
        Observable.fromEvent(window, 'offline').map(() => false)
    );
    return self.isConnected;
  }

}

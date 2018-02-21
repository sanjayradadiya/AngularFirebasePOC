import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private auth: AngularFireAuth) { }

  canActivate(): Observable<boolean> {
    return Observable.from(this.auth.authState)
    .take(1)
    .map(state => !!state)
    .do(authenticate => {
      if (!authenticate) { this.router.navigate(['/login']); }
    });
  }

}

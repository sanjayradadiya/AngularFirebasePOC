import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/userModel';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = new UserModel('test', 5 , 'test@gmail.com');

  constructor(
    private db: AngularFireDatabase,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.routes.snapshot.paramMap.get('id');
    if (id) {
      this.user = new UserModel('sanjay', 25 , 'sanjay@gmail.com');
    }
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  onSubmit() {
    const userTable = this.db.object('users/1');
    userTable.set(this.user).then(function() {
      console.info('inserted');
    }).catch(function(err) {
      console.info(err);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/userModel';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = new UserModel('test', 5 , 'test@gmail.com');

  constructor(
    private db: AngularFireDatabase,
    private routes: ActivatedRoute,
    private toast: ToastrService
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
    const self = this;
    const userTable = this.db.object('users/2');
    userTable.set(this.user).then(function() {
      self.toast.success('inserted', 'Success');
    }).catch(function(err) {
      self.toast.error('inserted', 'Error');
    });
  }

}

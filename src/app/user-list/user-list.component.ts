import { Component, OnInit } from '@angular/core';
import { FirebaseProviderService } from '../providers/firebase-provider.service';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: Observable<any[]>;
  displayedColumns = ['Name', 'Age', 'Email'];
  dataSource;

  constructor(private fire: FirebaseProviderService) { }

  ngOnInit() {
    this.userList = this.fire.getData('/users');

    this.userList.subscribe( (value) => {
      this.dataSource = new MatTableDataSource(value);
    });
  }

}

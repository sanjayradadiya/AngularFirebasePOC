import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseProviderService } from '../providers/firebase-provider.service';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  coursesObservable: Observable<any[]>;

  constructor(private fire: FirebaseProviderService) {}

  ngOnInit() {
    this.coursesObservable = this.fire.getData('/courses');
  }
}

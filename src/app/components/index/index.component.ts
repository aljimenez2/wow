import {Component, OnInit} from '@angular/core';
import {OAuthService} from '../../services/o-auth.service';
import {ClassesService} from '../../services/classes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private Classes: ClassesService) {
    this.Classes.getClassesIndex().then(res => console.log(res));
  }

  ngOnInit() {
  }

}

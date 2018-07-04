import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = 'home component';

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.message = 'home component: star action clicked';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  message = 'Person component';

  constructor() { }

  ngOnInit() {
  }

  action(type = 'favourite') {
    this.message = `home component: ${type} action clicked`;
  }

}

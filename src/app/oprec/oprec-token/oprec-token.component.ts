import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oprec-token',
  templateUrl: './oprec-token.component.html',
  styleUrls: ['./oprec-token.component.css']
})
export class OprecTokenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('token').innerHTML =`${sessionStorage.getItem('token')}`;
  }

}

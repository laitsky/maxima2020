import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-oprec-token',
  templateUrl: './oprec-token.component.html',
  styleUrls: ['./oprec-token.component.css']
})
export class OprecTokenComponent implements OnInit {
  oprecToken: string = sessionStorage.getItem('token');
  constructor() { }

  ngOnInit() {
    particlesJS.load("particles-js", "assets/token_particles.json", null);
    //sessionStorage.clear();
  }

}

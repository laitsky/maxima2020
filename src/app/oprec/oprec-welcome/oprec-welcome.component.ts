import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oprec-welcome',
  templateUrl: './oprec-welcome.component.html',
  styleUrls: ['./oprec-welcome.component.css']
})
export class OprecWelcomeComponent implements OnInit {

  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  lanjut() {
    this.router.navigate(['oprec/penilaian-kepribadian']);
  }

}

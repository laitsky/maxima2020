import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-oprec-welcome',
  templateUrl: './oprec-welcome.component.html',
  styleUrls: ['./oprec-welcome.component.css']
})
export class OprecWelcomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    $('#start-button').hover(function() {
      $('#mxm20-logo').removeClass('filter-bnw');
      $('#mxm20-logo').addClass('transitionOnHover');
      document.getElementById('start-btn-text').innerHTML = 'Saya Siap!';
    }, function() {
      $('#mxm20-logo').addClass('filter-bnw');
      document.getElementById('start-btn-text').innerHTML = '';
    });

  }

  lanjut() {
    this.router.navigate(['oprec/penilaian-kepribadian']);
  }

}

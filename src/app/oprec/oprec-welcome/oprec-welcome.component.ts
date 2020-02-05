import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-oprec-welcome',
  templateUrl: './oprec-welcome.component.html',
  styleUrls: ['./oprec-welcome.component.css']
})
export class OprecWelcomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.tombol_mulai();
    $('#start-button').hover(function() {
      $('#mxm20-logo').removeClass('filter-bnw');
      $('#mxm20-logo').addClass('transitionOnHover');
      document.getElementById('start-btn-text').innerHTML = 'Saya Siap!';
    }, function() {
      $('#mxm20-logo').addClass('filter-bnw');
      document.getElementById('start-btn-text').innerHTML = '';
    });
  }

  tombol_mulai() {
    if (moment().isBefore('2020 02 5, 0:00:00 am')) { //sebelom wktu ini ditutup
      (<HTMLInputElement> document.getElementById('start-button')).disabled = true;
      var countDownDate = new Date("Feb 10, 2020 00:00:00").getTime();
      var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("status_regis").innerHTML = `
        <i class="las la-clock"></i> <br>
        Pendaftaran akan dibuka dalam <br>
        ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
      }, 1000); 
    }
    else if (moment().isAfter('2020 02 14, 6:52:00 pm')) { //setelah wktu ini ditutup
      
      (<HTMLInputElement> document.getElementById('start-button')).disabled = true;
      document.getElementById('status_regis').innerHTML = `
      <i class="las la-clock"></i> 
      <p> Pendaftaran sudah ditutup! </p>`;
    } 
    else {
      var countDownDate = new Date("Feb 14, 2020 00:00:00").getTime();
      var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("status_regis").innerHTML = `
        <i class="las la-clock"></i> <br>
        Pendaftaran akan ditutup dalam <br>
        ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
      }, 1000); 
    }
  }
}

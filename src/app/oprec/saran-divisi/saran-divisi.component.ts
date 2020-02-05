import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-saran-divisi',
  templateUrl: './saran-divisi.component.html',
  styleUrls: ['./saran-divisi.component.css']
})
export class SaranDivisiComponent implements OnInit {
  eScore: string = sessionStorage.getItem('eScore');
  aScore: string = sessionStorage.getItem('aScore');
  cScore: string = sessionStorage.getItem('cScore');
  nScore: string = sessionStorage.getItem('nScore');
  oScore: string = sessionStorage.getItem('oScore');

  constructor(private router: Router) {
  }

  ngOnInit() {
    document.getElementById('aScore').innerHTML = `<i>Agreeableness</i>:<br> <b> ${sessionStorage.getItem('aScore')} </b>`;
    document.getElementById('cScore').innerHTML = `<i>Conscientious</i>:<br> <b> ${sessionStorage.getItem('cScore')}</b>`;
    document.getElementById('eScore').innerHTML = `<i>Extraversion</i>:<br> <b> ${sessionStorage.getItem('eScore')}</b>`;
    document.getElementById('nScore').innerHTML = `<i>Neuroticism</i>:<br> <b> ${sessionStorage.getItem('nScore')}</b>`;
    document.getElementById('oScore').innerHTML = `<i>Openness</i>:<br> <b> ${sessionStorage.getItem('oScore')}</b>`;
  }

}

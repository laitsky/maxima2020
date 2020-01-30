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
    document.getElementById('aScore').innerHTML = `Agreeableness: <b> ${sessionStorage.getItem('aScore')} </b>`;
    document.getElementById('cScore').innerHTML = `Conscientious: <b> ${sessionStorage.getItem('cScore')}</b>`;
    document.getElementById('eScore').innerHTML = `Extraversion: <b> ${sessionStorage.getItem('eScore')}</b>`;
    document.getElementById('nScore').innerHTML = `Neuroticism: <b> ${sessionStorage.getItem('nScore')}</b>`;
    document.getElementById('oScore').innerHTML = `Openness: <b> ${sessionStorage.getItem('oScore')}</b>`;
  }

  nextCmp(): void {
    this.router.navigate(['/oprec/form-oprec']);
  }
}

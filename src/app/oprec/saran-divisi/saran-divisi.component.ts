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
  }

  nextCmp(): void {
    this.router.navigate(['/oprec/form-oprec']);
  }
}

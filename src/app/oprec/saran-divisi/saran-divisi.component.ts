import {Component, OnInit} from '@angular/core';
import {OprecApiService} from '../../_shared/services/oprec-api.service';
import {SaranDivisi} from "../../_shared/models/oprec/saran_divisi";

@Component({
  selector: 'app-saran-divisi',
  templateUrl: './saran-divisi.component.html',
  styleUrls: ['./saran-divisi.component.css']
})
export class SaranDivisiComponent implements OnInit {
  public data: SaranDivisi; //semua data tentang saran divisi akan disimpan ke variabel data.
  eScore: string = sessionStorage.getItem('eScore');
  aScore: string = sessionStorage.getItem('aScore');
  cScore: string = sessionStorage.getItem('cScore');
  nScore: string = sessionStorage.getItem('nScore');
  oScore: string = sessionStorage.getItem('oScore');

  constructor(private oprecApiService: OprecApiService) {
  }

  ngOnInit() {
    document.getElementById('aScore').innerHTML = `<i>Agreeableness</i>:<br> <b> ${sessionStorage.getItem('aScore')} </b>`;
    document.getElementById('cScore').innerHTML = `<i>Conscientious</i>:<br> <b> ${sessionStorage.getItem('cScore')}</b>`;
    document.getElementById('eScore').innerHTML = `<i>Extraversion</i>:<br> <b> ${sessionStorage.getItem('eScore')}</b>`;
    document.getElementById('nScore').innerHTML = `<i>Neuroticism</i>:<br> <b> ${sessionStorage.getItem('nScore')}</b>`;
    document.getElementById('oScore').innerHTML = `<i>Openness</i>:<br> <b> ${sessionStorage.getItem('oScore')}</b>`;
    this.oprecApiService.getSaranDivisi().subscribe(result => {
      this.data = result;
    });
  }

}

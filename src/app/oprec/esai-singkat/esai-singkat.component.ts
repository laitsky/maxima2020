import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OprecApiService} from '../../_shared/services/oprec-api.service';
import {PertanyaanDivisi} from '../../_shared/models/oprec/pertanyaan_divisi';

@Component({
  selector: 'app-esai-singkat',
  templateUrl: './esai-singkat.component.html',
  styleUrls: ['./esai-singkat.component.css']
})
export class EsaiSingkatComponent implements OnInit {
  public divQuestions: PertanyaanDivisi[];
  division: any = sessionStorage.getItem('divisi');

  constructor(private router: Router, private oprecApiService: OprecApiService) {
  }

  ngOnInit() {
    this.oprecApiService.getDivQueList().subscribe(result => {
      this.divQuestions = result;
      for (let i = 0; i < this.divQuestions.length; i++) {
        if (this.divQuestions[i].Divisi == this.division) {
          document.getElementById('selected-division').innerHTML = this.division;
          document.getElementById('sd-question').innerHTML = this.divQuestions[i].Pertanyaan;
        }
      }
    });
  }

}

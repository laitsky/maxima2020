import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {OprecApiService} from '../../_shared/services/oprec-api.service';
import {PertanyaanDivisi} from '../../_shared/models/oprec/pertanyaan_divisi';

@Component({
  selector: 'app-esai-singkat',
  templateUrl: './esai-singkat.component.html',
  styleUrls: ['./esai-singkat.component.css']
})
export class EsaiSingkatComponent implements OnInit {
  esaiForm: FormGroup;
  isSubmitted = false;
  public divQuestions: PertanyaanDivisi[];
  division: any = sessionStorage.getItem('divisi');

  constructor(private router: Router,
              private oprecApiService: OprecApiService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.esaiForm = this.formBuilder.group({
      odyssey: ['', Validators.required],
      improvement_mxm: ['', Validators.required],
      pertanyaan_divisi: ['', Validators.required]
    });

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

  esaiFormSave(): any {
    this.isSubmitted = true;
    if (!this.esaiForm.valid) {
      window.alert('Isi semua esai kamu!');
    } else {
      sessionStorage.setItem('odyssey', (document.getElementById('odyssey') as HTMLTextAreaElement).value);
      sessionStorage.setItem('improvement_mxm', (document.getElementById('improvement_mxm') as HTMLTextAreaElement).value);
      sessionStorage.setItem('pertanyaan_divisi', (document.getElementById('pertanyaan_divisi') as HTMLTextAreaElement).value);
      this.router.navigate(['oprec/finalisasi-data']);
    }
  }

  get fd() {
    return this.esaiForm.controls;
  }
}

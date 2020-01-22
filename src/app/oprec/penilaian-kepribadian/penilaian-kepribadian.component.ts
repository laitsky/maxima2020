import { Component, OnInit } from '@angular/core';
import { OprecApiService } from '../../_shared/services/oprec-api.service';
import * as $ from "jquery";

@Component({
  selector: 'app-penilaian-kepribadian',
  templateUrl: './penilaian-kepribadian.component.html',
  styleUrls: ['./penilaian-kepribadian.component.css']
})
export class PenilaianKepribadianComponent implements OnInit {
  public questions;
  constructor(
    private oprecApiService: OprecApiService,
  ) { }

  ngOnInit() {
    this.questions = this.oprecApiService.getBigFiveQ();
  }

  consoles(){
    let eScore = 20+
    parseInt($('input[name="radio1"]:checked').val())-
    parseInt($('input[name="radio6"]:checked').val())+
    parseInt($('input[name="radio11"]:checked').val())-
    parseInt($('input[name="radio16"]:checked').val())+
    parseInt($('input[name="radio21"]:checked').val())-
    parseInt($('input[name="radio26"]:checked').val())+
    parseInt($('input[name="radio31"]:checked').val())-
    parseInt($('input[name="radio36"]:checked').val())+
    parseInt($('input[name="radio41"]:checked').val())-
    parseInt($('input[name="radio46"]:checked').val());
    console.log('E = ' + eScore);

    let aScore = 14-
    parseInt($('input[name="radio2"]:checked').val())+
    parseInt($('input[name="radio7"]:checked').val())-
    parseInt($('input[name="radio12"]:checked').val())+
    parseInt($('input[name="radio17"]:checked').val())-
    parseInt($('input[name="radio22"]:checked').val())+
    parseInt($('input[name="radio27"]:checked').val())-
    parseInt($('input[name="radio32"]:checked').val())+
    parseInt($('input[name="radio37"]:checked').val())+
    parseInt($('input[name="radio42"]:checked').val())+
    parseInt($('input[name="radio47"]:checked').val());
    console.log('A = ' + aScore);

    let cScore = 14+
    parseInt($('input[name="radio3"]:checked').val())-
    parseInt($('input[name="radio8"]:checked').val())+
    parseInt($('input[name="radio13"]:checked').val())-
    parseInt($('input[name="radio18"]:checked').val())+
    parseInt($('input[name="radio23"]:checked').val())-
    parseInt($('input[name="radio28"]:checked').val())+
    parseInt($('input[name="radio33"]:checked').val())-
    parseInt($('input[name="radio38"]:checked').val())+
    parseInt($('input[name="radio43"]:checked').val())+
    parseInt($('input[name="radio48"]:checked').val());
    console.log('C = ' + cScore);

    let nScore = 38-
    parseInt($('input[name="radio4"]:checked').val())+
    parseInt($('input[name="radio9"]:checked').val())-
    parseInt($('input[name="radio14"]:checked').val())+
    parseInt($('input[name="radio19"]:checked').val())-
    parseInt($('input[name="radio24"]:checked').val())-
    parseInt($('input[name="radio29"]:checked').val())-
    parseInt($('input[name="radio34"]:checked').val())-
    parseInt($('input[name="radio39"]:checked').val())-
    parseInt($('input[name="radio44"]:checked').val())-
    parseInt($('input[name="radio49"]:checked').val());
    console.log('N = ' + nScore);

    let oScore = 8+
    parseInt($('input[name="radio5"]:checked').val())-
    parseInt($('input[name="radio10"]:checked').val())+
    parseInt($('input[name="radio15"]:checked').val())-
    parseInt($('input[name="radio20"]:checked').val())+
    parseInt($('input[name="radio25"]:checked').val())-
    parseInt($('input[name="radio30"]:checked').val())+
    parseInt($('input[name="radio35"]:checked').val())+
    parseInt($('input[name="radio40"]:checked').val())+
    parseInt($('input[name="radio45"]:checked').val())+
    parseInt($('input[name="radio50"]:checked').val());
    console.log('O = ' + oScore);
  }
}

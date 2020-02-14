import {Component, OnInit} from '@angular/core';
import {OprecApiService} from "../../_shared/services/oprec-api.service";
import {NextStage} from "../../_shared/models/oprec/next_stage";

@Component({
  selector: 'app-next-stage',
  templateUrl: './next-stage.component.html',
  styleUrls: ['./next-stage.component.css']
})
export class NextStageComponent implements OnInit {
  public dataOprec: NextStage[];
  nimInput: number;
  isExist = false;
  nimNotFound = false;
  codeZero = false;

  constructor(private oprecApiService: OprecApiService) {
  }

  ngOnInit() {

  }

  cariData() {
    this.isExist = false;
    this.oprecApiService.getNextStage().subscribe(result => {
        this.dataOprec = result;
        console.log(this.dataOprec);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.dataOprec.length; i++) {
          if (this.dataOprec[i].nim == this.nimInput) {
            this.codeZero = false;
            this.isExist = true;
            this.nimNotFound = false;
            if (this.dataOprec[i].kode == 1) {
              document.getElementById('pesan').innerHTML = "<h1>SELAMAT!</h1>";
              document.getElementById('nama').innerHTML = this.dataOprec[i].nama_lengkap;
              document.getElementById('nim').innerHTML = "<h4> 000000" + this.dataOprec[i].nim + "</h4>";
              document.getElementById('divisi').innerHTML = "<h3>Divisi " + this.dataOprec[i].divisi + "</h3>";
              document.getElementById('ruangan').innerHTML = "<h2>" + this.dataOprec[i].ruangan + "</h2>";
              document.getElementById('daful-msg').innerHTML = "<h3> SEGERA LAKUKAN DAFTAR ULANG </h3><h6>klik tautan dibawah</h6>";
              document.getElementById('daful-link').innerHTML = '<h4><a href="https://s.id/mxm-daful" target=_blank>s.id/mxm-daful</a></h4>';
            } else if (this.dataOprec[i].kode == 0) {
              document.getElementById('pesan').innerHTML = "";
              document.getElementById('nama').innerHTML = "";
              document.getElementById('nim').innerHTML = "";
              document.getElementById('divisi').innerHTML = "";
              document.getElementById('tanggal').innerHTML = '';
              document.getElementById('ruangan').innerHTML = "";
              document.getElementById('daful-msg').innerHTML = "";
              document.getElementById('daful-link').innerHTML = '';
              this.codeZero = true;
            }
          }
        }
        if (this.isExist === false) {
          this.nimNotFound = true;
          document.getElementById('pesan').innerHTML = "";
          document.getElementById('nama').innerHTML = "";
          document.getElementById('nim').innerHTML = "";
          document.getElementById('divisi').innerHTML = "";
          document.getElementById('tanggal').innerHTML = '';
          document.getElementById('ruangan').innerHTML = "";
          document.getElementById('daful-msg').innerHTML = "";
          document.getElementById('daful-link').innerHTML = '';
        }
      }
    );
  }
}

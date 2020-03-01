import {Component, OnInit} from '@angular/core';
import {OprecApiService} from "../../_shared/services/oprec-api.service";
import {NextStage} from "../../_shared/models/oprec/next_stage";

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {
  public dataOprec: NextStage[];
  nimInput: number;
  isExist = false;
  nimNotFound = false;
  codeZero = false;

  constructor(private oprecApiService: OprecApiService) {
  }

  ngOnInit() {
    document.getElementById('loadingSign').style.display = 'none';
  }

  loadingSign() {
    document.getElementById('loadingSign').style.display = 'none';
  }

  cariData() {
    document.getElementById('loadingSign').style.display = 'inline';
    setTimeout(this.loadingSign, 1000);
    setTimeout(() => {
      this.isExist = false;
      this.oprecApiService.getNextStage().subscribe(result => {
          this.dataOprec = result;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.dataOprec.length; i++) {
            if (this.dataOprec[i].nim == this.nimInput) {
              this.codeZero = false;
              this.isExist = true;
              this.nimNotFound = false;
              if (this.dataOprec[i].kode == 1) {
                document.getElementById('pesan').innerHTML = "<h1>SELAMAT!</h1>";
                document.getElementById('pesan2').innerHTML = "<h4>Kamu terpilih untuk menjalani petualangan bersama kami!</h4>"
                document.getElementById('nama').innerHTML = this.dataOprec[i].nama_lengkap;
                document.getElementById('nim').innerHTML = "<h4> 000000" + this.dataOprec[i].nim + "</h4>";
                document.getElementById('divisi').innerHTML = "<h3>Divisi " + this.dataOprec[i].divisi + "</h3>";
                document.getElementById('email').innerHTML = "<h5>Segera cek email studentmu untuk informasi lebih lanjut</h5>"
              } else if (this.dataOprec[i].kode == 0) {
                document.getElementById('pesan').innerHTML = "";
                document.getElementById('pesan2').innerText = "";
                document.getElementById('nama').innerHTML = "";
                document.getElementById('nim').innerHTML = "";
                document.getElementById('divisi').innerHTML = "";
                document.getElementById('email').innerHTML = "";
                this.codeZero = true;
              }
            }
          }
          if (this.isExist === false) {
            this.nimNotFound = true;
            this.codeZero = false;
            document.getElementById('pesan').innerHTML = "";
            document.getElementById('pesan2').innerText = "";
            document.getElementById('nama').innerHTML = "";
            document.getElementById('nim').innerHTML = "";
            document.getElementById('divisi').innerHTML = "";
            document.getElementById('email').innerHTML = "";
          }
        }
      );
    }, 1000);
  }
}

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

  constructor(private oprecApiService: OprecApiService) {
  }

  ngOnInit() {

  }

  cariData() {
    this.isExist = false;
    this.oprecApiService.getNextStage().subscribe(result => {
        this.dataOprec = result;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.dataOprec.length; i++) {
          if (this.dataOprec[i].nim == this.nimInput) {
            this.isExist = true;
            document.getElementById('pesan').innerHTML = "Pesan: " + this.dataOprec[i].pesan;
            document.getElementById('nim').innerHTML = "NIM: " + this.dataOprec[i].nim;
            document.getElementById('nama').innerHTML = "Nama: " + this.dataOprec[i].nama_lengkap;
            document.getElementById('prodi').innerHTML = "Prodi: " + this.dataOprec[i].prodi;
            document.getElementById('divisi').innerHTML = "Divisi: " + this.dataOprec[i].divisi;
            document.getElementById('ruangan').innerHTML = "Ruangan: " + this.dataOprec[i].ruangan;
          }
        }
        if (this.isExist === false) {
          document.getElementById('pesan').innerHTML = "Maaf, NIM tidak ditemukan!";
          document.getElementById('nim').innerHTML = "";
          document.getElementById('nama').innerHTML = "";
          document.getElementById('prodi').innerHTML = "";
          document.getElementById('divisi').innerHTML = "";
          document.getElementById('ruangan').innerHTML = "";
        }
      }
    );
  }
}

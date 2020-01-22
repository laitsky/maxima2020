import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-oprec',
  templateUrl: './form-oprec.component.html',
  styleUrls: ['./form-oprec.component.css']
})
export class FormOprecComponent implements OnInit {
  oprecForm: FormGroup;
  isSubmitted = false;

  Prodi: Array<string> = [
    'Informatika',
    'Teknik Komputer',
    'Teknik Elektro',
    'Teknik Fisika',
    'Sistem Informasi',
    'Manajemen',
    'Akuntansi',
    'Komunikasi Strategis',
    'Jurnalistik',
    'Desain Komunikasi Visual',
    'Arsitektur',
    'Film',
    'Perhotelan'
  ];
  Angkatan: Array<string> = ['2017', '2018', '2019'];
  Divisi: Array<string> = [
    'Acara',
    'Bazaar',
    'Dekorasi',
    'Dokumentasi',
    'Fresh Money',
    'Merchandise',
    'Media Relations',
    'Security & Accomodation',
    'Perlengkapan',
    'Public Relations - Publikasi',
    'Public Relations - Visual',
    'Public Relations - Web'
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.oprecForm = this.formBuilder.group({
      nama_lengkap: ['', Validators.required],
      tempat_lahir: ['', Validators.required],
      tanggal_lahir: ['', Validators.required],
      alamat: ['', Validators.required],
      nim: ['', Validators.required],
      prodi: ['', Validators.required],
      angkatan: ['', Validators.required],
      divisi: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nomorHP: ['', Validators.required],
      nomorWA: ['', Validators.required],
      uLine: ['', Validators.required],
      uInstagram: ['', Validators.required]
    });
  }

  /* menyimpan hasil submission form ke sessionStorage */
  oprecFormSave() {
    this.isSubmitted = true;
    if (!this.oprecForm.valid) {
      window.alert('Lengkapi data kamu!');
    } else {
      sessionStorage.setItem('nama_lengkap', this.fd.nama_lengkap.value);
      sessionStorage.setItem('tempat_lahir', this.fd.tempat_lahir.value);
      sessionStorage.setItem('tanggal_lahir', this.fd.tanggal_lahir.value);
      sessionStorage.setItem('alamat', this.fd.alamat.value);
      sessionStorage.setItem('nim', this.fd.nim.value);
      sessionStorage.setItem('prodi', this.fd.prodi.value);
      sessionStorage.setItem('angkatan', this.fd.angkatan.value);
      sessionStorage.setItem('divisi', this.fd.divisi.value);
      sessionStorage.setItem('email', this.fd.email.value);
      sessionStorage.setItem('nomorHP', this.fd.nomorHP.value);
      sessionStorage.setItem('nomorWA', this.fd.nomorWA.value);
      sessionStorage.setItem('uLine', this.fd.uLine.value);
      sessionStorage.setItem('uInstagram', this.fd.uInstagram.value);
      this.router.navigate(['/oprec/esai-singkat']);
    }
  }

  /* fungsi getter */
  get fd() {
    return this.oprecForm.controls;
  }

  get prodi() {
    return this.oprecForm.get('prodi');
  }

  get angkatan() {
    return this.oprecForm.get('angkatan');
  }

  get divisi() {
    return this.oprecForm.get('divisi');
  }

  /* fungsi ganti opsi di  selected */
  gantiProdi(e) {
    this.prodi.setValue(e.target.value, {
      onlySelf: true
    });
  }

  gantiAngkatan(e) {
    this.angkatan.setValue(e.target.value, {
      onlySelf: true
    });
  }

  gantiDivisi(e) {
    this.divisi.setValue(e.target.value, {
      onlySelf: true
    });
  }

  keepSelected() { // mempertahankan nilai default selected ketika form reset (angular form reset menghapus semua isi form)
    this.oprecForm = this.formBuilder.group({
      prodi: ['', Validators.required],
      angkatan: ['', Validators.required],
      divisi: ['', Validators.required]
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-esai-singkat',
  templateUrl: './esai-singkat.component.html',
  styleUrls: ['./esai-singkat.component.css']
})
export class EsaiSingkatComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(sessionStorage.getItem('divisi'));
  }

}

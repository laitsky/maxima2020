import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { format } from 'url';

@Component({
  selector: 'app-finalisasi-data',
  templateUrl: './finalisasi-data.component.html',
  styleUrls: ['./finalisasi-data.component.css']
})

export class FinalisasiDataComponent implements OnInit {
  oprecForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.hitungtoken();

    this.oprecForm = this.formBuilder.group({
      nama_lengkap: [{value: sessionStorage.getItem('nama_lengkap'), disabled: true}, Validators.required],
      tempat_lahir: [{value: sessionStorage.getItem('tempat_lahir'), disabled: true}, Validators.required],
      tanggal_lahir: [{value: sessionStorage.getItem('tanggal_lahir'), disabled: true}, Validators.required],
      alamat: [{value: sessionStorage.getItem('alamat'), disabled: true}, Validators.required],
      nim: [{value: sessionStorage.getItem('nim'), disabled: true}, Validators.required],
      prodi: [{value: sessionStorage.getItem('prodi'), disabled: true}, Validators.required],
      angkatan: [{value: sessionStorage.getItem('angkatan'), disabled: true}, Validators.required],
      ips_terakhir: [{value: sessionStorage.getItem('ips_terakhir'), disabled: true}, Validators.required],
      divisi: [{value: sessionStorage.getItem('divisi'), disabled: true}, Validators.required],
      email: [{value: sessionStorage.getItem('email'), disabled: true}, Validators.required],
      nomorHP: [{value: sessionStorage.getItem('nomorHP'), disabled: true}, Validators.required],
      nomorWA: [{value: sessionStorage.getItem('nomorWA'), disabled: true}, Validators.required],
      uLine: [{value: sessionStorage.getItem('uLine'), disabled: true}, Validators.required],
      uInstagram: [{value: sessionStorage.getItem('uInstagram'), disabled: true}, Validators.required],

      eScore: [{value: sessionStorage.getItem('eScore'), disabled: true}, Validators.required],
      aScore: [{value: sessionStorage.getItem('aScore'), disabled: true}, Validators.required],
      nScore: [{value: sessionStorage.getItem('nScore'), disabled: true}, Validators.required],
      cScore: [{value: sessionStorage.getItem('cScore'), disabled: true}, Validators.required],
      oScore: [{value: sessionStorage.getItem('oScore'), disabled: true}, Validators.required],

      odyssey: [{value: sessionStorage.getItem('odyssey'), disabled: true}, Validators.required],
      improvement_mxm: [{value: sessionStorage.getItem('improvement_mxm'), disabled: true}, Validators.required],
      pertanyaan_divisi: [{value: sessionStorage.getItem('pertanyaan_divisi'), disabled: true}, Validators.required],

      token_regis: [{value: sessionStorage.getItem('token'), disabled: true}, Validators.required]
    });

  }

  hitungtoken(): void {
    var today = new Date();

    let str_final = '';
    //nama
    let str_1 = sessionStorage.getItem('nama_lengkap');
    str_final = str_final.concat(str_1.slice(0,2));
    //nama divisi
    let str_2 = sessionStorage.getItem('divisi');
    str_final = str_final.concat(str_2.slice(-2));
    //angka random
    let angka_random = Math.floor(Math.random() * 10);
    str_final = str_final.concat(angka_random.toString());
    //menit
    let str_3 = today.getMinutes();
    let angka_menit = '';
    if (str_3 < 10)
    {
      angka_menit = "0" + str_3.toString();
    }
    else
    {
      angka_menit = str_3.toString();
    }
    str_final = str_final.concat(angka_menit);
    sessionStorage.setItem('token', str_final);
  }

  

  prosedurMaju() {
    this.router.navigate(['oprec/oprec-token']);
  }

}

/* jquery buat masukin forms */
(function finalization() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === 'honeypot') {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = <any> {};
    fields.forEach(function(name) {
      var element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || 'responses'; // default sheet name
    formData.formGoogleSend
      = form.dataset.email || ''; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        var formElements = form.querySelector('.form-elements');
        if (formElements) {
          formElements.style.display = 'none'; // hide form
        }
        var thankYouMessage = form.querySelector('.thankyou_message');
        if (thankYouMessage) {
          thankYouMessage.style.display = 'block';
        }
      }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }

  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll('form.gform');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', handleFormSubmit, false);
    }
  };
  document.addEventListener('DOMContentLoaded', loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
/* end of additional jquery */

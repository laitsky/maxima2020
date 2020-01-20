import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OprecApiService {

  constructor(
    private http: HttpClient
  ) { }

  getQuestion(){
    return this.http.get("http://laitsky.tech/api/list_pertanyaan.json");
  }
}

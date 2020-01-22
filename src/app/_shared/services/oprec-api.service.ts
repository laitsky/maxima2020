import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BigFiveQuestions } from '../models/oprec/big_five_q';

@Injectable({
  providedIn: "root"
})
export class OprecApiService {
  private API_URL: string = "http://laitsky.tech";
  constructor(private http: HttpClient) {}

  getBigFiveQ(): Observable<BigFiveQuestions> {
    return this.http.get<BigFiveQuestions>(`${this.API_URL}/api/list_pertanyaan.json`);
  }
}

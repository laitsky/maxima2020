import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BigFiveQuestions} from '../models/oprec/big_five_q';
import {PertanyaanDivisi} from '../models/oprec/pertanyaan_divisi';

@Injectable({
  providedIn: 'root'
})
export class OprecApiService {
  private API_URL = 'http://laitsky.tech';

  constructor(private http: HttpClient) {
  }

  /* fungsi GET request */
  getBigFiveQ(): Observable<BigFiveQuestions> { // mendapatkan pertanyaan untuk PenilaianKepribadianComponent
    return this.http.get<BigFiveQuestions>(`${this.API_URL}/api/list_pertanyaan.json`);
  }

  getDivQueList(): Observable<PertanyaanDivisi[]> { // mendapatkan pertanyaan untuk EsaiSingkatComponent
    return this.http.get<PertanyaanDivisi[]>(`${this.API_URL}/api/pertanyaan_divisi.json`);
  }
}

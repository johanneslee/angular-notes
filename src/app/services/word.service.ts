import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../Word';
import { API_CONFIG } from '../config';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private http: HttpClient) { }

  getWords(): Observable<Word[]> {
    const url = API_CONFIG.domain + `/words`;
    return this.http.get<Word[]>(url);
  }

  getWord(seq: number): Observable<Word> {
    const url = API_CONFIG.domain + `/words/${seq}`;
    return this.http.get<Word>(url);
  }

  postWord(word: Word): Observable<Word> {
    const url = API_CONFIG.domain + `/words`;
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(word);
    return this.http.post<Word>(url, body, { 'headers': headers });
  }
}

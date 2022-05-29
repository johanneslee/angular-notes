import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Word } from '../Word';
import { API_CONFIG } from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.post<Word>(url, word);
  }
}

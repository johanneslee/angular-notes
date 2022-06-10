import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  postKorean(korean: string): Observable<any> {
    const url = API_CONFIG.domain + `/naver/papago/${korean}`;
    return this.http.get<any>(url);
  }

  postWord(word: Word): Observable<Word> {
    const url = API_CONFIG.domain + `/words`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Word>(url, word, httpOptions);
  }
}

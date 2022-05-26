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
    const url = API_CONFIG.domain + '/words';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      })
    };
    const words = this.http.get<Word[]>(url, httpOptions);
    return words;
  }

  addWord(word: Word) {
    return null;
  }
}

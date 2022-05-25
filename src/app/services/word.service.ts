import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Word } from '../Word';
import { WORDS } from '../mock-words';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private http_host: String = 'https://jhlee-node-notes.herokuapp.com';

  constructor() { }

  getWords(): Observable<Word[]> {
    const words = of(WORDS);
    return words;
  }

  addWord(word: Word) {
    return null;
  }
}

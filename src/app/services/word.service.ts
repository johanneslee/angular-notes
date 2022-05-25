import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Word } from '../Word';
import { WORDS } from '../mock-words';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }

  getWords(): Observable<Word[]> {
    const words = of(WORDS);
    return words;
  }
}

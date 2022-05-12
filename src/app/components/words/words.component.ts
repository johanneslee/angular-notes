import { Component, OnInit } from '@angular/core';
import { Word } from '../../Word';
import { WORDS } from '../../mock-words';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.sass']
})
export class WordsComponent implements OnInit {
  words: Word[] = WORDS;
  toggleBox: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(toggleBox: boolean) {
    this.toggleBox = toggleBox;
  }

  addWord(word: Word) {
    this.words.push(word);
  }
}

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

  constructor() { }

  ngOnInit(): void {
  }

}
